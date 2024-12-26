import { Outlet } from 'react-router-dom';

const Layouts = () => {
  return (
    <div>
      <div className='container mx-auto md:mx-auto scroll-smooth  min-h-[calc(100vh-232px)]   '>
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
