import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto md:mx-auto scroll-smooth  min-h-[calc(100vh-232px)]   '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
