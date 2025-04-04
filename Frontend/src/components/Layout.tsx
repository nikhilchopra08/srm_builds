import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './new/RightSidebar';

const Layout: React.FC = () => {

  const token = localStorage.getItem("token");
  return (
    <div className="flex flex-col min-h-screen">
      {token && <Header/>}
      
      <main className="flex-grow">
        <Outlet />
      </main>
      <Sidebar/>
      <Footer />
    </div>
  );
};

export default Layout;