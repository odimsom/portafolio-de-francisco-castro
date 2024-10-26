import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Francisco Castro - Full-Stack Developer',
    description: 'Portfolio of Francisco Castro, a Full-Stack Developer specializing in React and Node.js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}