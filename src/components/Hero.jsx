import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-6 flex items-center">
        <div className="text-white max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[0.95]">
            Cyberpunk, animated portfolio with 3D interactions
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            I craft immersive web experiences using React, Three.js, and motion design. Scroll to explore.
          </p>
          <div className="mt-8 pointer-events-auto flex items-center gap-3">
            <a href="#work" className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/90 transition">View work</a>
            <a href="#contact" className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
