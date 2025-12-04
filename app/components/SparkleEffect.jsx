"use client";

import { useEffect } from 'react';

export default function SparkleEffect() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Buat sparkle secara random (1 dari 10 gerakan mouse)
      if (Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        sparkle.style.background = `radial-gradient(circle, ${
          ['#667eea', '#764ba2', '#f5f7fa'][Math.floor(Math.random() * 3)]
        }, transparent)`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
          sparkle.remove();
        }, 600);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}
