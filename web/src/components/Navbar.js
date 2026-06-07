import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around p-4 shadow-lg border-t border-gray-700">
      <button className="flex flex-col items-center hover:text-blue-400">
        <span className="text-xl">🏠</span>
        <span className="text-xs">Bosh sahifa</span>
      </button>
      <button className="flex flex-col items-center hover:text-blue-400">
        <span className="text-xl">🖥️</span>
        <span className="text-xs">Serverlar</span>
      </button>
      <button className="flex flex-col items-center hover:text-blue-400">
        <span className="text-xl">⚙️</span>
        <span className="text-xs">Sozlamalar</span>
      </button>
    </nav>
  );
};

export default Navbar;
