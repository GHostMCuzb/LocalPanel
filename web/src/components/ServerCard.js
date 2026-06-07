import React from 'react';

const ServerCard = ({ serverName, status, cpu, ram }) => {
  return (
    <div className="bg-gray-800 p-4 m-2 rounded-lg shadow-md border border-gray-700">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-white">{serverName}</h3>
        <span className={`px-2 py-1 text-xs rounded ${status === 'online' ? 'bg-green-600' : 'bg-red-600'}`}>
          {status}
        </span>
      </div>
      
      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <span>CPU: {cpu}%</span>
        <span>RAM: {ram}</span>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 py-2 rounded text-white font-semibold hover:bg-blue-700">
          Start
        </button>
        <button className="flex-1 bg-red-600 py-2 rounded text-white font-semibold hover:bg-red-700">
          Stop
        </button>
      </div>
    </div>
  );
};

export default ServerCard;
