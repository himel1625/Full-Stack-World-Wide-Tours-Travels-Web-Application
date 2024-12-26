import SearchLocation from '../../Components/SearchLocation/SearchLocation';
import Map from '../Map/Map';

const Location = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
      {/* SearchLocation: 4 Columns */}
      <div className='col-span-12 md:col-span-2'>
        <SearchLocation />
      </div>
      {/* Map: 8 Columns */}
      <div className='col-span-12 md:col-span-10'>
        <Map />
      </div>
    </div>
  );
};

export default Location;
