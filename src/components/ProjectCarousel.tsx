import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'

const ProjectCarousel: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const projects = [
    { title: "The simplest example is Kafka + golang", description: "This article presents a straightforward implementation of Apache Kafka using Golang, covering setup, usage, and best practices.", imageUrl: "https://via.placeholder.com/400" },
    { title: "Project 2", description: "Description for Project 2", imageUrl: "https://via.placeholder.com/400" },
    { title: "Project 3", description: "Description for Project 3", imageUrl: "https://via.placeholder.com/400" },
  ]

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)} className="text-white">
          <ChevronLeft size={24} />
        </button>
        <ProjectCard {...projects[currentProject]} />
        <button onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)} className="text-white">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-2 h-2 rounded-full ${index === currentProject ? 'bg-white' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCarousel