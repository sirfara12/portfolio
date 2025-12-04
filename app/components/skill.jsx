"use client";
import SkillProgress from "./SkillProgress";

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 backdrop-blur-xl bg-white/30 p-10 rounded-3xl shadow-2xl shadow-blue-500/40 border border-white/40 glow-on-hover">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">Keterampilan Saya</h2>

      <div className="grid md:grid-cols-2 gap-8 text-gray-700">

        <div className="backdrop-blur-sm bg-blue-400/20 p-6 rounded-2xl border border-blue-300/40 shadow-lg card-3d">
          <h3 className="font-bold text-2xl text-blue-700 mb-4">💼 Soft Skills</h3>
          <div className="space-y-3">
            <SkillProgress skill="Kepemimpinan" level={85} />
            <SkillProgress skill="Kerja Tim" level={90} />
            <SkillProgress skill="Pemecahan Masalah" level={88} />
            <SkillProgress skill="Komunikasi" level={85} />
            <SkillProgress skill="Public Speaking" level={80} />
            <SkillProgress skill="Adaptasi Cepat" level={92} />
          </div>
        </div>

        <div className="backdrop-blur-sm bg-purple-400/20 p-6 rounded-2xl border border-purple-300/40 shadow-lg card-3d">
          <h3 className="font-bold text-2xl text-purple-700 mb-4">💻 Hard Skills</h3>
          <div className="space-y-3">
            <SkillProgress skill="HTML/CSS/JavaScript" level={90} />
            <SkillProgress skill="React & Tailwind" level={85} />
            <SkillProgress skill="Laravel & PHP" level={80} />
            <SkillProgress skill="Flutter & Dart" level={82} />
            <SkillProgress skill="Python" level={75} />
            <SkillProgress skill="Database (MySQL)" level={85} />
            <SkillProgress skill="Networking" level={78} />
          </div>
        </div>
      </div>

      <div className="backdrop-blur-sm bg-gradient-to-r from-blue-400/20 to-purple-400/20 p-6 rounded-2xl border border-purple-300/40 shadow-lg card-3d">
        <h3 className="font-bold text-2xl text-purple-700 mb-4 text-center">🛠️ Tools & Technologies</h3>
        <ul className="list-disc ml-6">
          <li>Front-end: HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</li>
          <li>Back-end: PHP (Laravel), Python, Supabase</li>
          <li>Mobile Development: Flutter (Dart)</li>
          <li>IT & Networking: Basic Networking, Mikrotik/Cisco dasar</li>
          <li>Troubleshooting hardware/software</li>
          <li>Database: MySQL, Supabase</li>
          <li>Programming: Java, JS, Python, PHP, Dart</li>
          <li>Testing: Manual Testing, Playwright E2E, Debugging</li>
        </ul>
      </div>
    </section>
  );
}
