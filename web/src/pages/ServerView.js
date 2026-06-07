import React from 'react';
import Console from '../components/Console';

const ServerView = () => {
  const logs = ["Loading world...", "Starting server on port 25565", "Done!"];

  return (
    <div className="p-2">
      <h2 className="text-white font-bold p-2">Survival Server</h2>
      <Console logs={logs} />
      <div className="flex gap-2 p-2">
        <button className="bg-green-600 text-white w-full py-2 rounded">Restart</button>
        <button className="bg-red-600 text-white w-full py-2 rounded">Kill</button>
      </div>
    </div>
  );
};

export default ServerView;
