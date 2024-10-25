import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <a href="#project-showcase" className="bg-white text-black px-4 py-2 rounded-full inline-flex items-center">
                Read more
                <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
    </div>
);

const Projects: React.FC = () => (
    <section id="projects" className="py-10 md:py-20">
        <h2 className="text-3xl font-bold mb-6 md:mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                title="Gozar"
                description="A sleek music streaming application with a dark-themed UI."
                imageUrl="https://source.unsplash.com/random/800x600?music"
            />
            <ProjectCard
                title="Kana Spotter"
                description="An intuitive app for learning Japanese characters."
                imageUrl="https://source.unsplash.com/random/800x600?japan"
            />
            <ProjectCard
                title="Anime Spotty"
                description="A vibrant anime discovery and tracking application."
                imageUrl="https://source.unsplash.com/random/800x600?anime"
            />
        </div>
    </section>
);

export default Projects;