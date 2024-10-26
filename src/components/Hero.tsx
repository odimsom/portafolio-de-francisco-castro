'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)
    const [rotation, setRotation] = useState(0)

    const icons = [
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
        { img: "https://i.ibb.co/n65WNhc/download.png", alt: 'React Icon' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 0.5) % 360)
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="flex flex-col md:flex-row items-start justify-between mt-10 md:mt-20 p-4 md:p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg">
            <div className="md:w-1/2 pt-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
                    FULL-STACK<br />DEVELOPER
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8">
                    My goal is to write maintainable, clean<br className="hidden md:inline" />
                    and understandable code to ensure<br className="hidden md:inline" />
                    development is enjoyable and efficient.
                </p>
                <div className="flex items-center mb-6">
                    <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium mr-4 hover:bg-gray-200 transition-colors">
                        View Projects
                    </a>
                    <a href="#contact" className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start items-center mt-8 md:mt-0">
                <div className="relative w-[440px] h-[440px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center">
                            <Image
                                src="/path-to-your-photo.png"
                                alt="Your Photo"
                                width={180}
                                height={180}
                                className="rounded-full transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </div>
                    {icons.map((icon, index) => {
                        const angle = (index / icons.length) * 2 * Math.PI + (rotation * Math.PI) / 180
                        const radius = 180
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius
                        return (
                            <div
                                key={index}
                                className="absolute w-[60px] h-[60px] transition-all duration-300 ease-in-out"
                                style={{
                                    transform: `translate(${x + 220}px, ${y + 220}px)`,
                                }}
                            >
                                <Image
                                    src={icon.img}
                                    alt={icon.alt}
                                    width={60}
                                    height={60}
                                    className={`rounded-full transition-opacity duration-300 ${
                                        hoveredIcon !== null && hoveredIcon !== index ? 'opacity-50' : ''
                                    }`}
                                    onMouseEnter={() => setHoveredIcon(index)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}