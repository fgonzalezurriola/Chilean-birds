import React from 'react';
import { motion } from 'framer-motion';
import type { Bird } from '../types/birds';

interface BirdCardProps {
  bird: Bird;
  onClick: () => void;
}

export function BirdCard({ bird, onClick }: BirdCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={bird.images.main}
          alt={bird.name.english}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {bird.name.spanish}
        </h3>
        <p className="text-sm text-gray-600 mb-1">{bird.name.english}</p>
        <p className="text-xs text-gray-500 italic">{bird.name.latin}</p>
      </div>
    </motion.div>
  );
}