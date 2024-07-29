import React from 'react';
import TaskItem from '../components/tasks/TaskItem';

const Tasks: React.FC = () => {

  const tasks = [
    { enabled: true, title: 'Join Ling App', description: 'Join this app from an affiliation link' },
    { enabled: true, title: `Check account's age`, description: 'Telegram age checker' },
    { enabled: true, title: 'Check Telegram account status', description: 'Premium users will have more points' },
    { enabled: true, title: 'Connet a Phantom wallet', description: 'To receive more rewards and future challenge' },
    { enabled: false, title: `Refer friends`, description: 'Generate a referal link to earn more points' },
    { enabled: false, title: 'Doublle your points', description: 'Send 1 SOL and double your points and convert at 1:1 rate' },
  ];

  return (
  
     <div className="flex flex-col  min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-md flex-grow overflow-y-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-6">Tasks</h1>
        {tasks.map((task, index) => (
          <TaskItem key={index} enabled={task.enabled} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
