import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface TaskItemProps {
  enabled: boolean;
  title: string;
  description: string;
}


const TaskItem: React.FC<TaskItemProps> = ({ enabled, title, description }) => {
    return (
      <div className="flex items-center p-4 border-b border-gray-200 bg-white shadow-sm rounded-md mb-4 w-full">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${enabled ? 'bg-black' : 'bg-gray-400'}`}>
           <FaCheck className="text-white" />
        </div>
        <div className="ml-4 text-left">
          <p className="font-semibold text-xl text-gray-800">{title}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default TaskItem;