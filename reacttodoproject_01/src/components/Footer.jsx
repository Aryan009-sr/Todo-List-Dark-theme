import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-4 mt-8 text-gray-500 text-sm">
      <p>&copy; {currentYear} React To-Do List App. All rights reserved.</p>
      <p>
        Project on GitHub:
        <a 
          href="https://github.com/Aryan009-sr/Todo-List-Dark-theme" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline ml-1"
        >
          Link to Repository
        </a>
      </p>
    </footer>
  );
};

export default Footer;