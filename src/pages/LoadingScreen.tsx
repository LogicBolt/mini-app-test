import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/main');
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 mt-8 bg-black rounded-lg shadow-lg flex flex-col items-center">
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold text-white">Elite Member!</h1>
          <div className="text-white text-1xl font-bold mt-2">
            You've joined Telegram
          </div>
        </div>
        <div className="relative mt-8 flex-grow flex items-center justify-center">
          <img src="/ton.PNG" alt="Diamond" className="w-480 h-480 mx-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-black text-9xl font-bold">4</div>
            <div className="text-black text-5xl">years ago</div>
          </div>
        </div>



        <div className="w-full px-3 fixed bottom-4" >
          <div className="mb-4 text-center text-white text-lg">
            <div className="text-white text-1xl font-bold">Your account number is #1324437093</div>
            <div className="text-white text-1xl ">You are in the Op 20% Telegram users</div>
          </div>
          <button
            onClick={handleContinue}
            className="w-full  bg-white text-black rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            Continue
          </button>
        </div>

      </div>
    </div>

  );
};

export default LoadingScreen;
