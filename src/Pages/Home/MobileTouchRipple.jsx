import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function MobileTouchRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleTouch = (e) => {
      if (window.innerWidth > 768) return; // Only on mobile

      const touch = e.touches[0];
      const newRipple = {
        x: touch.clientX,
        y: touch.clientY,
        id: Date.now()
      };

      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    document.addEventListener('touchstart', handleTouch);
    return () => document.removeEventListener('touchstart', handleTouch);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99] md:hidden">
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute w-16 h-16 rounded-full border-2 border-sky-400/50"
          style={{
            left: ripple.x - 32,
            top: ripple.y - 32,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
