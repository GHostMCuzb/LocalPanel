import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Dashboard />
      <Navbar />
    </div>
  );
}

export default App;
