import React from 'react';

const Console = ({ logs }) => {
  return (
    <div className="bg-black p-3 m-2 rounded-lg border border-gray-600 h-64 overflow-y-auto font-mono text-xs text-green-500 shadow-inner">
      <div className="mb-2 text-gray-400 border-b border-gray-800 pb-1">
        Server Console
      </div>
      <div className="flex flex-col gap-1">
        {logs.map((log, index) => (
          <span key={index}>{`> ${log}`}</span>
        ))}
      </div>
    </div>
  );
};

export default Console;
