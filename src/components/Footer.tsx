
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; 2024 Francisco Castro. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}