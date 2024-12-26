// import axios from "axios";
// import { useState } from "react";

const SearchLocation = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = async () => {
  //   if (!searchQuery.trim()) {
  //     toast.error('Please enter a location!');
  //     return;
  //   }
  //   try {
  //     const { data } = await axios.get(
  //       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
  //         searchQuery,
  //       )}`,
  //     );
  //     if (data.length > 0) {
  //       const { lat, lon, display_name } = data[0];
  //       map.setView([lat, lon], 12);
  //       const marker = L.marker([lat, lon]).addTo(map);
  //       marker.bindPopup(display_name).openPopup();
  //     } else {
  //       toast.error('Location not found. Please try again!');
  //     }
  //   } catch (error) {
  //     toast.error('Something went wrong. Please try again later.');
  //     console.error('Error fetching location:', error);
  //   }
  // };
  return (
    <div>
      {/* <div className='mb-4 flex'>
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
      </div> */}
    </div>
  );
};

export default SearchLocation;
