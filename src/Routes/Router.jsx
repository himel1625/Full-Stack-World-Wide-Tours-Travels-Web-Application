import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layouts from '../Layouts/Layouts';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
export default router;
