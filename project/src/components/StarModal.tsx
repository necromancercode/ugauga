import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface StarModalProps {
  isOpen: boolean;
  onClose: () => void;
  friendName: string;
  message?: string;
}

export const StarModal: React.FC<StarModalProps> = ({ 
  isOpen, 
  onClose, 
  friendName, 
  message 
}) => {
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
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 max-w-md w-full relative border-2 border-yellow-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                ✦ {friendName} ✦
              </h3>
              
              <div className="text-white/90 leading-relaxed">
                {message ? (
                  <p>{message}</p>
                ) : (
                  <p className="text-yellow-400/70 italic">
                    Mensagem em breve...
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};