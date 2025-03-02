import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Header2 from './Header2';

const Layout: React.FC = () => {

  const token = localStorage.getItem("token");
  return (
    <div className="flex flex-col min-h-screen">
      {token ? <Header /> : <Header2/>}
      
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;