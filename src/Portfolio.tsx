import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import WorkExperience from './components/Experience'
import Articles from './components/Articles'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-900">
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <WorkExperience />
            <Articles />
            <Footer />
        </main>
    )
}