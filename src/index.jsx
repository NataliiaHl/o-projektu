import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import AboutProject from './pages/AboutProject'
import AboutTeam from './pages/AboutTeam'

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about_project',
        element: <AboutProject />,
      },
      {
        path: '/about_team',
        element: <AboutTeam />,
      },
    ]
  },
  
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
