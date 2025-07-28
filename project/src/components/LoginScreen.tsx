import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarField } from './StarField';

interface LoginScreenProps {
  onPasswordCorrect: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [shake, setShake] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'miguel18') { // You can change this password
      onPasswordCorrect();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword('');
    }
  };

  const minigameLinks = [
    'https://residentcacapalavras.netlify.app/',
    'https://fodasecccypher.netlify.app/',
    '#' // Third link not ready yet
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold text-yellow-400 mb-8 tracking-wide">
            ✦ ✧ ✦
          </h1>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <motion.input
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 placeholder-yellow-400/50 px-6 py-3 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
              placeholder="∗ ∗ ∗ ∗ ∗ ∗"
            />
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {minigameLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 ${
                index === 2 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={index === 2 ? (e) => e.preventDefault() : undefined}
            >
              <span className="text-2xl font-bold">{index + 1}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};