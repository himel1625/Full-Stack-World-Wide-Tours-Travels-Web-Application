import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layouts from '../Layouts/Layouts';
import Location from '../Pages/Location/Location';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/location',
        element: <Location />,
      },
    ],
  },
]);
export default router;
