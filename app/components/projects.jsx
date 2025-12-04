import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="backdrop-blur-xl bg-white/30 p-10 rounded-3xl shadow-2xl shadow-blue-500/40 border border-white/40 glow-on-hover">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent text-center">🚀 Proyek Saya</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ProjectCard
          title="Jawara Mobile App"
          stack="Flutter, Dart, Supabase"
          image="/jawara.jpeg"
          desc="Aplikasi mobile untuk manajemen RT/RW, komunikasi warga, dan dashboard informasi."
          link="https://github.com/sirfara12/Jawara-Kelompok-5.git"
        />

        <ProjectCard
          title="SIGMAGANG – Sistem Rekomendasi Magang"
          stack="HTML, Tailwind CSS, JavaScript"
          image="/rekommagang.png"
          desc="Sistem rekomendasi magang berbasis Fuzzy untuk mendukung keputusan."
          link="https://github.com/sirfara12/SIGMAGANG.git"
          copyright={true}
          copyrightLink="/sertifikat_2025-06-19 (8).pdf"
        />

        <ProjectCard
          title="SIPRESMA – Sistem Prestasi Mahasiswa"
          stack="PHP, MySQL, Bootstrap"
          image="/prestasi.png"
          desc="Sistem manajemen prestasi mahasiswa dengan fitur CRUD dan dashboard."
          link="https://github.com/sirfara12/SIPRESMA-1.0.git"
        />

        <ProjectCard
          title="Project Mikrotik Hotspot – Jaringan WiFi"
          stack="Mikrotik RouterOS, Winbox"
          image="/mikrotik.jpeg"
          desc="Membangun jaringan WiFi/Hotspot menggunakan 2 router Mikrotik. Mengonfigurasi DHCP Server, Firewall, Hotspot Login, IP Binding, dan pembagian bandwidth untuk manajemen user."
          link="#"
        />

      </div>
    </section>
  );
}
