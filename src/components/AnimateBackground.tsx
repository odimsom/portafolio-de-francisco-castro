import { useEffect, useRef } from 'react'

interface AnimatedBackgroundProps {
    height: number
}

export default function AnimatedBackground({ height }: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = height
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const circles: { x: number; y: number; radius: number; opacity: number }[] = []
        for (let i = 0; i < 20; i++) {
            circles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 50 + 10,
                opacity: Math.random() * 0.1 + 0.05,
            })
        }

        function animate() {
            if (!ctx) return
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            circles.forEach((circle) => {
                ctx.beginPath()
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
                ctx.strokeStyle = `rgba(255, 255, 255, ${circle.opacity})`
                ctx.lineWidth = 1
                ctx.stroke()

                circle.opacity += Math.random() * 0.005 - 0.0025
                if (circle.opacity < 0.05) circle.opacity = 0.05
                if (circle.opacity > 0.15) circle.opacity = 0.15
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [height])

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
            style={{ mixBlendMode: 'soft-light' }}
        />
    )
}