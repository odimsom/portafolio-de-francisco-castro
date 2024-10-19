import React from 'react'
import { ArrowRight, Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react'

const Header: React.FC = () => (
    <header className="flex justify-between items-center py-6">
        <nav>
            <ul className="flex space-x-6">
                <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="#works" className="text-white hover:text-gray-300">Works</a></li>
                <li><a href="#articles" className="text-white hover:text-gray-300">Articles</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
        <div className="flex space-x-2">
            <button className="text-white font-bold">En</button>
            <button className="text-white">Es</button>
        </div>
    </header>
)

const Hero: React.FC = () => (
    <section className="py-20">
        <h1 className="text-6xl font-bold mb-6">
            Full-stack<br />Developer
        </h1>
        <p className="text-xl text-gray-400 mb-8">
            My goal is to write maintainable, clean<br />
            and understandable code to ensure the<br />
            development process is enjoyable.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full flex items-center">
            Projects
            <ArrowRight className="ml-2" />
        </button>
    </section>
)

const SocialLinks: React.FC = () => (
    <section className="flex space-x-6 mb-20">
        <a href="#" className="text-white hover:text-gray-300 flex items-center"><Github className="mr-2" /> GitHub</a>
        <a href="#" className="text-white hover:text-gray-300 flex items-center"><Linkedin className="mr-2" /> LinkedIn</a>
        <a href="#" className="text-white hover:text-gray-300 flex items-center"><Send className="mr-2" /> Telegram</a>
        <a href="#" className="text-white hover:text-gray-300 flex items-center"><Facebook className="mr-2" /> Facebook</a>
        <a href="#" className="text-white hover:text-gray-300 flex items-center"><Instagram className="mr-2" /> Instagram</a>
    </section>
)

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <button className="bg-white text-black px-4 py-2 rounded-full">Read more</button>
        </div>
    </div>
)

const Projects: React.FC = () => (
    <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                title="The Joke Tax Chronicles"
                description="Once upon a time, in a far-off land, there was a very lazy king who..."
                imageUrl="https://via.placeholder.com/400"
            />
            <ProjectCard
                title="The Whisper of the Willow"
                description="In a world where trees could talk, a young girl discovers a hidden message..."
                imageUrl="https://via.placeholder.com/400"
            />
            <ProjectCard
                title="The Quantum Lightbulb"
                description="Dr. Schrödinger's latest invention promises to revolutionize the way we think about light..."
                imageUrl="https://via.placeholder.com/400"
            />
        </div>
    </section>
)

const Skills: React.FC = () => (
    <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-4">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Docker', 'AWS'].map((skill) => (
                <li key={skill} className="bg-gray-800 px-4 py-2 rounded-full">{skill}</li>
            ))}
        </ul>
    </section>
)

const WorkExperience: React.FC = () => (
    <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold">Full-stack Developer</h3>
                    <p className="text-gray-400">XYZ Company</p>
                </div>
                <span className="text-gray-400">2021 - Present</span>
            </div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold">Frontend Developer</h3>
                    <p className="text-gray-400">ABC Inc.</p>
                </div>
                <span className="text-gray-400">2019 - 2021</span>
            </div>
        </div>
    </section>
)

export default function Portfolio() {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto px-4">
                <Header />
                <main>
                    <Hero />
                    <SocialLinks />
                    <Projects />
                    <Skills />
                    <WorkExperience />
                </main>
            </div>
        </div>
    )
}