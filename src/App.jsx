import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxShowcase from './components/ParallaxShowcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ParallaxShowcase />
        <About />
        <Contact />
        <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-white/60">
          © {new Date().getFullYear()} Flames Blue — Crafted with React, Tailwind, and 3D
        </footer>
      </main>
    </div>
  )
}

export default App
