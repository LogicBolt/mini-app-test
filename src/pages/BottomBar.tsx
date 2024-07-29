import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 w-full bg-white text-black flex justify-around bottom-4 px-3">
      <button
        className=" flex-1 p-4 border border-black hover:bg-blue-500 focus:bg-blue-500"
        onClick={() => navigate('/main/tasks')}
      >
        Tasks
      </button>
      <button
        className=" flex-1 p-4 ml-1 border border-black hover:bg-blue-500 focus:bg-blue-500"
        onClick={() => navigate('/main/leaderboard')}
      >
        LeaderBoard
      </button>
      <button
        className=" flex-1 p-4 ml-1 border border-black hover:bg-blue-500 focus:bg-blue-500"
        onClick={() => navigate('/main/convert')}
      >
        Convert
      </button>
      <button
        className=" flex-1 p-4 ml-1 border border-black hover:bg-blue-500 focus:bg-blue-500"
        onClick={() => navigate('/main/friends')}
      >
        Friends
      </button>
    </div>
  );
};

export default BottomBar;
