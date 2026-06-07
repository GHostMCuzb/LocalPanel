import React from 'react';
import ServerCard from '../components/ServerCard';

const Dashboard = () => {
  const servers = [
    { id: 1, name: 'Survival Server', status: 'online', cpu: 15, ram: '2GB' },
    { id: 2, name: 'SkyBlock', status: 'offline', cpu: 0, ram: '4GB' }
  ];

  return (
    <div className="p-2 pb-20">
      <h1 className="text-white text-xl font-bold p-2">Serverlarim</h1>
      {servers.map(server => (
        <ServerCard key={server.id} {...server} />
      ))}
    </div>
  );
};

export default Dashboard;
