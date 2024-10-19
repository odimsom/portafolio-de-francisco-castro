import React from 'react'

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Read more</button>
    </div>
  </div>
)

export default ProjectCard