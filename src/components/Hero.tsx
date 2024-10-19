import React from 'react'

const Hero: React.FC = () => (
  <section className="py-20 flex justify-between items-center">
    <div>
      <h1 className="text-6xl font-bold mb-4">
        Full-stack<br />Developer
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        My goal is to write maintainable, clean and understandable code to process development was enjoyable.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-gray-300">GitHub</a>
        <a href="#" className="text-white hover:text-gray-300">LinkedIn</a>
        <a href="#" className="text-white hover:text-gray-300">Telegram</a>
        <a href="#" className="text-white hover:text-gray-300">Facebook</a>
        <a href="#" className="text-white hover:text-gray-300">Instagram</a>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-white">Projects</span>
      <div className="w-12 h-6 bg-gray-700 rounded-full p-1">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  </section>
)

export default Hero