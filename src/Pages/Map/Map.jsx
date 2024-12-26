import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Map = () => {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  useEffect(() => {
    const initialMap = L.map('map', {
      center: [23.685, 90.3563],
      zoom: 10,
      zoomControl: false,
    });
    L.control
      .zoom({
        position: 'topright',
      })
      .addTo(initialMap);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(initialMap);
    setMap(initialMap);

    initialMap.on('click', e => {
      const { lat, lng } = e.latlng;
      console.log('Latitude:', lat, 'Longitude:', lng);
    });

    return () => {
      initialMap.remove();
    };
  }, [searchQuery]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a location!');
      return;
    }
    try {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery,
        )}`,
      );
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        map.setView([lat, lon], 12);
        const marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(display_name).openPopup();
      } else {
        toast.error('Location not found. Please try again!');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Error fetching location:', error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Map Search | Free Location Finder</title>
      </Helmet>
      <div className='flex flex-col items-center justify-center mt-6 mx-4'>
        <div className='mb-4 flex'>
          <input
            type='text'
            className='border-2 border-gray-300 rounded-lg px-4 py-2 mr-2 w-[300px]'
            placeholder='Enter a location...'
            aria-label='Search location'
            // value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div
          id='map'
          className='h-[750px] w-[120%] border-4 border-blue-400 shadow-lg rounded-lg'
        ></div>
      </div>
    </>
  );
};

export default Map;
