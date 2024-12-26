import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider.jsx';
import './index.css';
import router from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position='top-right' reverseOrder={false} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
);
