'use client'

import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string
    intro: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, intro }) => {
    const [showIntro, setShowIntro] = useState(false)

    return (
        <div className="bg-[#1a1f2e] rounded-lg overflow-hidden flex flex-col h-full">
            <div className="w-full h-40 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{description}</p>
                </div>
                <div>
                    <button
                        onClick={() => setShowIntro(!showIntro)}
                        className="text-white hover:text-gray-300 inline-flex items-center text-sm focus:outline-none"
                    >
                        {showIntro ? 'Hide' : 'Read more'}
                        <ArrowRight className={`ml-1 w-3 h-3 transition-transform ${showIntro ? 'rotate-90' : ''}`} />
                    </button>
                    {showIntro && (
                        <p className="text-gray-400 text-sm mt-2">{intro}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "Brief description of project 1.",
            imageUrl: "/placeholder.svg?height=160&width=240",
            intro: "This project focuses on developing an innovative web application using React and Node.js."
        },
        {
            title: "Project 2",
            description: "Brief description of project 2.",
            imageUrl: "/placeholder.svg?height=160&width=240",
            intro: "An e-commerce platform built with Next.js and a custom RESTful API."
        },
        {
            title: "Project 3",
            description: "Brief description of project 3.",
            imageUrl: "/placeholder.svg?height=160&width=240",
            intro: "Development of a cross-platform mobile application using React Native and Firebase."
        },
        {
            title: "Project 4",
            description: "Brief description of project 4.",
            imageUrl: "/placeholder.svg?height=160&width=240",
            intro: "A real-time data analysis dashboard with D3.js and WebSocket."
        },
        {
            title: "Project 5",
            description: "Brief description of project 5.",
            imageUrl: "/placeholder.svg?height=160&width=240",
            intro: "Implementation of a secure authentication system using JWT and OAuth 2.0."
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= projects.length ? 0 : prevIndex + 3
        )
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? Math.max(projects.length - 3, 0) : prevIndex - 3
        )
    }

    return (
        <section id="projects" className="py-20 bg-[#0f1219] text-white mt-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10">Projects</h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="w-1/3 flex-shrink-0 px-2">
                                    <ProjectCard {...project} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={prevProject}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#0f1219] p-2 rounded-full"
                        aria-label="Previous project"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#0f1219] p-2 rounded-full"
                        aria-label="Next project"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}