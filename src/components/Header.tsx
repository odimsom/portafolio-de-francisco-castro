'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import AnimatedBackground from './AnimateBackground'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="relative bg-gray-950 text-white py-6 overflow-hidden">
            <AnimatedBackground height={80} />
            <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
                <div className="text-xl font-bold">FRANCISCO CASTRO</div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="hover:text-gray-300 uppercase text-sm">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-300 uppercase text-sm">Projects</a></li>
                        <li><a href="#skills" className="hover:text-gray-300 uppercase text-sm">Skills</a></li>
                        <li><a href="#experience" className="hover:text-gray-300 uppercase text-sm">Experience</a></li>
                        <li><a href="#articles" className="hover:text-gray-300 uppercase text-sm">Articles</a></li>
                    </ul>
                </nav>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-gray-950 p-4 md:hidden z-20">
                    <ul className="space-y-2">
                        <li><a href="#about" className="block hover:text-gray-300 uppercase text-sm">About</a></li>
                        <li><a href="#projects" className="block hover:text-gray-300 uppercase text-sm">Projects</a></li>
                        <li><a href="#skills" className="block hover:text-gray-300 uppercase text-sm">Skills</a></li>
                        <li><a href="#experience" className="block hover:text-gray-300 uppercase text-sm">Experience</a></li>
                        <li><a href="#articles" className="block hover:text-gray-300 uppercase text-sm">Articles</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}