import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  let navbarText = ''
  const location = useLocation();
  switch (location.pathname) {
    case '/main/tasks':
       navbarText = "Earned Points : 1300000 points";
       break;
    case '/main/leaderboard':
       navbarText = "Earned Points : 1300000 points";
       break;
    case '/main/convert':
       navbarText = "Phantom";
       break;
    case '/main/friends':
       navbarText = "Earned Points : 1300000 points";
       break;
    default:
       'Welcome';
       break;
  }
  return (
    <div className="bg-white fixed top-0 left-0 w-full text-black  z-10 p-4 flex items-center">
      {/* <div className="bg-gray-600 w-8 h-8 mr-4"></div> */}
      <div>
        <div className="text-lg">Hi, User!</div>
        <div className="text-green-600">{navbarText}</div>
       
      </div>
      
    </div>
  );
};

export default Navbar;
