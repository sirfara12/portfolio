export default function Education() {
  return (
    <section id="education" className="space-y-8 backdrop-blur-xl bg-white/30 p-10 rounded-3xl shadow-2xl shadow-purple-500/40 border border-white/40 glow-on-hover">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">🎓 Pendidikan</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="backdrop-blur-sm bg-gradient-to-r from-purple-400/30 to-blue-400/30 p-6 rounded-2xl border border-purple-300/40 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 shadow-lg card-3d stagger-item">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="font-bold text-2xl text-purple-700 mb-2">Politeknik Negeri Malang</h3>
          <p className="text-gray-700 text-lg font-medium">D-IV Teknik Informatika</p>
        </div>

        <div className="backdrop-blur-sm bg-gradient-to-r from-blue-400/30 to-purple-400/30 p-6 rounded-2xl border border-blue-300/40 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 shadow-lg card-3d stagger-item">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="font-bold text-2xl text-blue-700 mb-2">SMK Negeri Winongan</h3>
          <p className="text-gray-700 text-lg font-medium">Teknik Komputer dan Jaringan</p>
        </div>

      </div>
    </section>
  );
}
