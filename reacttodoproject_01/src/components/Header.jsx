// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold tracking-wide text-purple-400">
        To-Do List App 
      </h1>
      <p className="text-sm text-gray-400 mt-2">
        Organize your tasks in style.
      </p>
    </div>
  );
};

export default Header;