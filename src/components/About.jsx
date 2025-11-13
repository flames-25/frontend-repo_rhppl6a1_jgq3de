export default function About() {
  return (
    <section id="about" className="relative bg-[#0a0012] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white">Design x Code</h2>
            <p className="mt-4 text-white/70">I fuse art direction, creative coding, and performance. From concept to production, I build experiences that feel alive. Strong focus on accessibility and fluid motion on all devices.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
              <li className="rounded-lg bg-white/5 border border-white/10 p-3">Three.js / WebGL</li>
              <li className="rounded-lg bg-white/5 border border-white/10 p-3">Framer Motion</li>
              <li className="rounded-lg bg-white/5 border border-white/10 p-3">Shaders</li>
              <li className="rounded-lg bg-white/5 border border-white/10 p-3">Spline</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20 blur-2xl" />
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#0c0018] to-[#120020]" />
          </div>
        </div>
      </div>
    </section>
  )
}
