export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20 backdrop-blur-xl bg-white/30 p-12 rounded-3xl shadow-2xl shadow-blue-500/40 border border-white/40 glow-on-hover">
      <img
        src="/sirfara.png"
        alt="Profile"
        className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-white/50 shadow-2xl shadow-purple-500/60 hover:scale-110 transition-all duration-500 mb-8 hover:rotate-6"
      />
      
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl mb-4 animate-pulse">
        Sirfaratih
      </h1>
      
      <p className="mt-4 text-gray-700 text-xl md:text-2xl font-semibold drop-shadow-lg">
        Web Developer • Mobile Developer • IT Support
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-full text-white font-bold text-lg shadow-xl shadow-blue-500/60 hover:shadow-2xl hover:shadow-purple-500/80 transition-all duration-300 hover:scale-110 hover:-translate-y-2 glow-on-hover"
        >
          🚀 Lihat Proyek
        </a>
        <a
          href="#contact"
          className="px-10 py-4 backdrop-blur-md bg-white/40 border-2 border-blue-300/60 rounded-full text-blue-700 font-bold text-lg hover:bg-white/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
        >
          📧 Hubungi Saya
        </a>
      </div>
    </section>
  );
}
