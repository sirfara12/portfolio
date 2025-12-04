export default function Contact() {
  return (
    <section id="contact" className="space-y-8 backdrop-blur-xl bg-white/30 p-10 rounded-3xl shadow-2xl shadow-purple-500/40 border border-white/40 mb-20 glow-on-hover">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center">💬 Hubungi Saya</h2>

      <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
        <p className="backdrop-blur-sm bg-blue-400/30 p-4 rounded-xl border border-blue-300/40 shadow-lg card-3d stagger-item hover:scale-105 transition-transform">📧 Email: <a href="mailto:asrifatihrp@gmail.com" className="text-blue-700 hover:text-blue-900 font-semibold transition">aratihsirf@gmail.com</a></p>
        <p className="backdrop-blur-sm bg-purple-400/30 p-4 rounded-xl border border-purple-300/40 shadow-lg card-3d stagger-item hover:scale-105 transition-transform">📱 WhatsApp: <a href="https://wa.me/6283847500941" className="text-purple-700 hover:text-purple-900 font-semibold transition">083841750041</a></p>
        <p className="backdrop-blur-sm bg-blue-400/30 p-4 rounded-xl border border-blue-300/40 shadow-lg card-3d stagger-item hover:scale-105 transition-transform">💻 GitHub: <a href="https://github.com/sirfara12" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-semibold transition">github.com/sirfara12</a></p>
        <p className="backdrop-blur-sm bg-purple-400/30 p-4 rounded-xl border border-purple-300/40 shadow-lg card-3d stagger-item hover:scale-105 transition-transform">🔗 LinkedIn: <a href="https://www.linkedin.com/in/sirfaratih" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 font-semibold transition">linkedin.com/in/sirfaratih</a></p>
      </div>
    </section>
  );
}
