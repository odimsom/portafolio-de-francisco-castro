'use client'

import { useEffect, useRef } from 'react'
import AnimatedBackground from './AnimateBackground'

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = 300
        canvas.height = 300

        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const radius = 100

        const icons = [
            { emoji: '🎨', angle: 0 },
            { emoji: '⚛️', angle: Math.PI / 4 },
            { emoji: '☕', angle: Math.PI / 2 },
            { emoji: '🌐', angle: (3 * Math.PI) / 4 },
            { emoji: '📱', angle: Math.PI },
            { emoji: '💻', angle: (5 * Math.PI) / 4 },
            { emoji: '🔧', angle: (3 * Math.PI) / 2 },
            { emoji: '🚀', angle: (7 * Math.PI) / 4 },
        ]

        function drawIcons() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw center circle
            ctx.beginPath()
            ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI)
            ctx.fillStyle = '#1f2937'
            ctx.fill()

            // Draw developer emoji
            ctx.font = '30px Arial'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('👨‍💻', centerX, centerY)

            icons.forEach((icon) => {
                const x = centerX + radius * Math.cos(icon.angle)
                const y = centerY + radius * Math.sin(icon.angle)

                ctx.beginPath()
                ctx.arc(x, y, 20, 0, 2 * Math.PI)
                ctx.fillStyle = '#374151'
                ctx.fill()

                ctx.font = '20px Arial'
                ctx.fillStyle = 'white'
                ctx.fillText(icon.emoji, x, y)
            })
        }

        function animate() {
            icons.forEach((icon) => {
                icon.angle += 0.01
                if (icon.angle > 2 * Math.PI) {
                    icon.angle -= 2 * Math.PI
                }
            })

            drawIcons()
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <section className="relative bg-gray-950 text-white py-20 overflow-hidden border-t border-b border-gray-800">
            <AnimatedBackground height={600} />
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                            FULL-STACK<br />DEVELOPER
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8">
                            My goal is to write maintainable, clean<br className="hidden md:inline" />
                            and understandable code to ensure<br className="hidden md:inline" />
                            development is enjoyable and efficient.
                        </p>
                        <div className="flex items-center mb-6">
                            <a href="#projects" className="bg-white text-gray-950 px-6 py-3 rounded-full text-lg font-medium mr-4 hover:bg-gray-200 transition-colors">
                                View Projects
                            </a>
                            <a href="#contact" className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        <canvas ref={canvasRef} width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}