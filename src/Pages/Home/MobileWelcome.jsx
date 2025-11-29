import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MobileWelcome({ isDarkMode }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showWelcome) return null;

  return (
    <motion.div
      className="md:hidden fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      style={{ opacity, scale }}
    >
      <div className="text-center px-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8
          }}
          className={`text-6xl font-bold mb-4 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent`}
        >
          Kishan
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}
        >
          Welcome to my portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <ChevronDown 
            className={`w-8 h-8 mx-auto animate-bounce ${isDarkMode ? 'text-sky-400' : 'text-blue-600'}`}
          />
        </motion.div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [null, Math.random() * window.innerHeight]
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
