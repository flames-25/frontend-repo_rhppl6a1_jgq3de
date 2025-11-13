import { useRef, useEffect } from 'react'

function useParallax(strength = 20) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / innerWidth
      const y = (e.clientY - innerHeight / 2) / innerHeight
      el.style.setProperty('--rx', `${-y * strength}deg`)
      el.style.setProperty('--ry', `${x * strength}deg`)
    }
    window.addEventListener('pointermove', handle)
    return () => window.removeEventListener('pointermove', handle)
  }, [strength])
  return ref
}

export default function ParallaxShowcase() {
  const ref = useParallax(10)
  return (
    <section id="work" className="relative bg-gradient-to-b from-black to-[#0a0012] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">Selected Work</h2>
          <p className="text-white/60 max-w-md">Hover around to see the subtle parallax tilt. Projects highlight animation, WebGL, and micro-interactions.</p>
        </div>

        <div ref={ref} className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [transform:perspective(1000px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))] transition-transform duration-200">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="aspect-[16/10] bg-gradient-to-br from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40" />
              <div className="p-5">
                <h3 className="text-white font-medium">Neon Interface #{i}</h3>
                <p className="text-white/60 text-sm mt-1">3D motion, shaders, and delightful transitions.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/70">
                  <span className="rounded-full bg-white/10 px-2 py-1">Three.js</span>
                  <span className="rounded-full bg-white/10 px-2 py-1">Framer Motion</span>
                  <span className="rounded-full bg-white/10 px-2 py-1">WebGL</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
