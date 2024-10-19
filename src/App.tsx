import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectCarousel from './components/ProjectCarousel'
import About from './components/About'
import Skills from './components/Skills'
import ProfilePicture from './components/ProfilePicture'

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <Header />
        <main>
          <Hero />
          <ProjectCarousel />
          <About />
          <Skills />
          <ProfilePicture />
        </main>
      </div>
    </div>
  )
}

export default App