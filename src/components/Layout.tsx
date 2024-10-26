import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
    children: React.ReactNode
    title?: string
}

export default function Layout({ children, title = 'Francisco Castro - Portfolio' }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Portfolio of Francisco Castro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-gray-800 text-white">
                <nav className="container mx-auto px-4 py-6">
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
                        <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-6 text-center">
                    © {new Date().getFullYear()} Francisco Castro. All rights reserved.
                </div>
            </footer>
        </div>
    )
}