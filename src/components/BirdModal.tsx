import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Bird } from '../types/birds';

interface BirdModalProps {
  bird: Bird;
  onClose: () => void;
}

export function BirdModal({ bird, onClose }: BirdModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={bird.images.full}
            alt={bird.name.english}
            className="w-full h-auto rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {bird.name.spanish}
              </h2>
              <p className="text-xl text-gray-600">{bird.name.english}</p>
              <p className="text-lg text-gray-500 italic">{bird.name.latin}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}