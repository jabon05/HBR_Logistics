import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar'; 
import Footer from '../Components/footer'; 

export const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        <Outlet />
      </main>
      
      {/* 2. Usamos el componente con Mayúscula */}
      <Footer /> 
    </div>
  );
};
