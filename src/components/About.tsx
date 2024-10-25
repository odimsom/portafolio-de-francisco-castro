import React from 'react';

const About: React.FC = () => (
    <section id="about" className="py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 md:mb-6">About me</h2>
            <p className="text-lg md:text-xl text-gray-400">
                Hello! I'm Nikita, I'm a full-stack developer.<br />
                More than 5 years experience.
            </p>
        </div>
        <div className="md:w-1/2">
            <img src="https://source.unsplash.com/random/800x600?developer" alt="Nikita" className="rounded-lg w-full max-w-md mx-auto" />
        </div>
    </section>
);

export default About;