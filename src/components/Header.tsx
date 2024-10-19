import React from 'react'

const Header: React.FC = () => (
  <header className="flex justify-between items-center py-6">
    <div className="text-white text-xl font-bold">Nikita Khvatov</div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
        <li><a href="#articles" className="text-white hover:text-gray-300">Articles</a></li>
        <li><a href="#contacts" className="text-white hover:text-gray-300">Contacts</a></li>
      </ul>
    </nav>
    <div className="flex space-x-2">
      <button className="text-white font-bold">En</button>
      <button className="text-white">Ge</button>
    </div>
  </header>
)

export default Header