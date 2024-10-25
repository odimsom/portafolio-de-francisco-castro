import React from 'react';

const ProjectShowcase: React.FC = () => {
    const projects = [
        {
            name: 'Gozar',
            description: 'A sleek music streaming application with a dark-themed UI.',
            images: [
                'https://source.unsplash.com/random/800x600?music-1',
                'https://source.unsplash.com/random/800x600?music-2',
                'https://source.unsplash.com/random/800x600?music-3',
                'https://source.unsplash.com/random/800x600?music-4',
            ],
        },
        {
            name: 'Kana Spotter',
            description: 'An intuitive app for learning Japanese characters.',
            images: [
                'https://source.unsplash.com/random/800x600?japan-1',
                'https://source.unsplash.com/random/800x600?japan-2',
                'https://source.unsplash.com/random/800x600?japan-3',
                'https://source.unsplash.com/random/800x600?japan-4',
            ],
        },
        {
            name: 'Anime Spotty',
            description: 'A vibrant anime discovery and tracking application.',
            images: [
                'https://source.unsplash.com/random/800x600?anime-1',
                'https://source.unsplash.com/random/800x600?anime-2',
                'https://source.unsplash.com/random/800x600?anime-3',
                'https://source.unsplash.com/random/800x600?anime-4',
            ],
        },
    ];

    return (
        <section id="project-showcase" className="py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">... /Projects ...</h2>
            {projects.map((project, index) => (
                <div key={project.name} className="mb-10 md:mb-20">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">{project.name}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.images.map((image, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={image}
                                alt={`${project.name} screenshot ${imgIndex + 1}`}
                                className="rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                    {index < projects.length - 1 && (
                        <div className="flex justify-center my-10">
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default ProjectShowcase;