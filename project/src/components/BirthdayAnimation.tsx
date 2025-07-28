import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface BirthdayAnimationProps {
  onComplete: () => void;
}

export const BirthdayAnimation: React.FC<BirthdayAnimationProps> = ({ onComplete }) => {
  const [showAge, setShowAge] = useState(false);
  const [currentAge, setCurrentAge] = useState(17);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowAge(true), 1500);
    const timer2 = setTimeout(() => setCurrentAge(18), 3000);
    const timer3 = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ffed4e', '#fbbf24', '#f59e0b']
      });
    }, 3500);
    const timer4 = setTimeout(onComplete, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffd700%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center space-y-8 z-10"
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-7xl font-bold text-yellow-400 mb-8"
        >
          Feliz Aniversário
        </motion.h1>
        
        {showAge && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.span
              key={currentAge}
              initial={currentAge === 18 ? { scale: 0, rotate: -180 } : {}}
              animate={currentAge === 18 ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-9xl font-bold text-yellow-400 inline-block"
            >
              {currentAge}
            </motion.span>
            
            {currentAge === 18 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 text-9xl font-bold text-yellow-400 animate-pulse"
              >
                18
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};