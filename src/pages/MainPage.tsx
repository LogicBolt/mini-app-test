import React from 'react';
import {  Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import BottomBar from './BottomBar';
const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-16 mb-16 overflow-y-auto p-4">
        <Outlet />
      </div>
      <BottomBar />
    </div>
  );
};

export default MainPage;
