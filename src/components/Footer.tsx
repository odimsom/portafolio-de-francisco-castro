'use client'

import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'
import AnimatedBackground from './AnimateBackground'

const socialIcons = [
    { Icon: Github, name: 'GitHub' },
    { Icon: Linkedin, name: 'LinkedIn' },
    { Icon: Twitter, name: 'Twitter' },
    { Icon: Instagram, name: 'Instagram' },
    { Icon: Facebook, name: 'Facebook' },
    { Icon: Youtube, name: 'YouTube' },
]

export default function Footer() {
    return (
        <footer className="relative bg-gray-950 text-white py-10 overflow-hidden">
            <AnimatedBackground height={400} />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="mb-2">francisco@example.com</p>
                        <p>San Francisco, CA</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-gray-300">About</a></li>
                            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
                            <li><a href="#articles" className="hover:text-gray-300">Articles</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            {socialIcons.map(({ Icon, name }) => (
                                <a key={name} href="#" className="text-white hover:text-gray-300" aria-label={name}>
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; 2024 Francisco Castro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}