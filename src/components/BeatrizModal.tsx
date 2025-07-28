import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

interface BeatrizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BeatrizModal: React.FC<BeatrizModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#111835] to-[#0248c1] rounded-2xl p-8 max-w-lg w-full relative border-2 border-[#f8d613] shadow-2xl shadow-[#f8d613]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#f8d613] hover:text-[#fbfcfc] transition-colors duration-300"
            >
              <X size={24} />
            </button>
            
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#f8d613] to-[#0248c1] rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-10 h-10 text-[#fbfcfc]" fill="currentColor" />
                </div>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-3xl font-bold text-[#f8d613] mb-4"
              >
                ✦ Beatriz ✦
              </motion.h3>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-[#fbfcfc] leading-relaxed space-y-4"
              >
                <p className="text-lg">
                  Você é o centro da nossa constelação, Miguel! 🌟
                </p>
                
                <p className="text-base">
                  Cada estrela ao seu redor representa um amigo especial que faz parte da sua jornada. 
                  Hoje celebramos não apenas seus 18 anos, mas também todas as conexões incríveis 
                  que você criou ao longo do caminho.
                </p>
                
                <p className="text-base text-[#f8d613]">
                  Que este novo ciclo seja repleto de aventuras, conquistas e momentos inesquecíveis! 
                  Feliz aniversário! 🎉
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex justify-center space-x-2 pt-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="w-3 h-3 bg-[#f8d613] rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};