export default function ProjectCard({ title, stack, image, desc, link, copyright, copyrightLink }) {
  return (
    <div className="backdrop-blur-md bg-gradient-to-br from-blue-400/30 to-purple-400/30 p-6 rounded-2xl shadow-xl border border-white/40 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 card-3d glow-on-hover">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-xl mb-4 w-full h-48 object-cover border-2 border-white/40 shadow-lg"
        />
        {copyright && (
          <a 
            href={copyrightLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer"
            title="Klik untuk melihat sertifikat hak cipta"
          >
            <span>©</span> Hak Cipta Terdaftar
          </a>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-blue-600 text-sm mb-3 font-semibold">{stack}</p>

      <p className="text-gray-700 mb-4 leading-relaxed">{desc}</p>

      <a
        href={link}
        target="_blank"
        className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Lihat di GitHub →
      </a>
    </div>
  );
}
