"use client";

export default function FloatingButton() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className="fab"
      title="Hubungi Saya"
    >
      <span className="text-white text-2xl">💬</span>
    </button>
  );
}
