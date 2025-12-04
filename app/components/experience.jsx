export default function Experience() {
  const data = [
    {
      title: "Internship (Magang)",
      place: "Kantor Kecamatan Winongan",
      desc: "Administrasi perkantoran, input data, serta dukungan teknis dan perbaikan komputer ringan.",
    },
    {
      title: "Operator Produksi",
      place: "CV. Distributor Winongan Lor",
      desc: "Desain Stiker, Cutting stiker menggunakan mesin cutting plotter, Input data pekerjaan karyawan menggunakan Microsoft Excel.",
    },
    {
      title: "Organisasi FORDA",
      place: "Forum Daerah Komunikasi Mahasiswa Pasuruan Polinema",
      desc: "Mengelola koordinasi kegiatan mahasiswa dan komunikasi organisasi.",
    },
    {
      title: "OSIS SMK (2 Tahun)",
      place: "SMK Negeri Winongan",
      desc: "Bendahara 2 di periode pertama dan Bendahara Umum di periode kedua. Mengelola keuangan organisasi dan bertanggung jawab atas administrasi keuangan kegiatan OSIS.",
    },
  ];

  return (
    <section id="experience" className="space-y-8 backdrop-blur-xl bg-white/30 p-10 rounded-3xl shadow-2xl shadow-blue-500/40 border border-white/40 glow-on-hover">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center mb-8">📋 Pengalaman</h2>

      <div className="timeline">
        {data.map((exp, index) => (
          <div key={index} className="timeline-item backdrop-blur-sm bg-gradient-to-r from-blue-400/30 to-purple-400/30 p-6 rounded-2xl border border-blue-300/40 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 shadow-lg card-3d stagger-item">
            <h3 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
              <span>✨</span> {exp.title}
            </h3>
            <p className="text-purple-600 text-lg font-semibold mt-1">📍 {exp.place}</p>
            <p className="text-gray-700 mt-3 leading-relaxed font-medium">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
