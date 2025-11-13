export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold text-white">Let’s build something immersive</h2>
        <p className="mt-4 text-white/70">Reach out for freelance work, collaborations, or just to say hi.</p>
        <a
          href="mailto:hello@flames.blue"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
        >
          hello@flames.blue
        </a>
      </div>
    </section>
  )
}
