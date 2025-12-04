"use client";

import { useEffect, useRef, useState } from 'react';

export default function SkillProgress({ skill, level }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-semibold">{skill}</span>
        <span className="text-blue-600 font-bold">{level}%</span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-3 backdrop-blur-sm border border-blue-200/30">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
}
