import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarField } from './StarField';
import { StarModal } from './StarModal';
import { BeatrizModal } from './BeatrizModal';
import { Friend } from '../types';

export const ConstellationView: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [showBeatrizModal, setShowBeatrizModal] = useState(false);

  const friends: Friend[] = [
    { id: 'murasaio', name: 'Murasaio', position: { x: 20, y: 30 } },
    { id: 'luna', name: 'Luna', position: { x: 35, y: 20 } },
    { id: 'baldin', name: 'Baldin', position: { x: 65, y: 25 } },
    { id: 'prisma', name: 'Prisma', position: { x: 80, y: 35 } },
    { id: 'gester', name: 'Gester', position: { x: 75, y: 60 } },
    { id: 'leo', name: 'Leo', position: { x: 60, y: 75 } },
    { id: 'shuri', name: 'Shuri', position: { x: 40, y: 80 } },
    { id: 'mayron', name: 'Mayron', position: { x: 25, y: 70 } },
    { id: 'angelo', name: 'Angelo', position: { x: 15, y: 55 } },
    { id: 'guitca', name: 'Guitca', position: { x: 30, y: 45 } },
  ];

  const beatriz = { id: 'beatriz', name: 'Beatriz', position: { x: 50, y: 50 } };

  const connections = [
    // Connect friends to Beatriz (center)
    ...friends.map(friend => ({ from: friend.position, to: beatriz.position })),
    // Some connections between friends
    { from: friends[0].position, to: friends[1].position },
    { from: friends[1].position, to: friends[2].position },
    { from: friends[2].position, to: friends[3].position },
    { from: friends[4].position, to: friends[5].position },
    { from: friends[5].position, to: friends[6].position },
    { from: friends[6].position, to: friends[7].position },
    { from: friends[7].position, to: friends[8].position },
    { from: friends[8].position, to: friends[9].position },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full">
          {/* Constellation lines */}
          {connections.map((connection, index) => (
            <motion.line
              key={index}
              x1={`${connection.from.x}%`}
              y1={`${connection.from.y}%`}
              x2={`${connection.to.x}%`}
              y2={`${connection.to.y}%`}
              stroke="rgba(255, 215, 0, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            />
          ))}
        </svg>

        {/* Friend stars */}
        {friends.map((friend, index) => (
          <motion.div
            key={friend.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${friend.position.x}%`, top: `${friend.position.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
            whileHover={{ scale: 1.3 }}
            onClick={() => setSelectedFriend(friend)}
          >
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300" />
            <motion.div
              className="absolute top-6 left-1/2 transform -translate-x-1/2 text-yellow-400 text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {friend.name}
            </motion.div>
          </motion.div>
        ))}

        {/* Beatriz central star */}
        <motion.div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: `${beatriz.position.x}%`, top: `${beatriz.position.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.4 }}
          onClick={() => setShowBeatrizModal(true)}
        >
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full shadow-2xl shadow-yellow-400/50 animate-pulse" />
            <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-ping" />
          </div>
          <motion.div
            className="absolute top-10 left-1/2 transform -translate-x-1/2 text-yellow-400 text-lg font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            Beatriz
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">
            Constelação do Miguel
          </h1>
          <p className="text-yellow-400/70 text-lg">
            Clique nas estrelas para ver as mensagens dos seus amigos
          </p>
        </motion.div>
      </div>

      <StarModal
        isOpen={selectedFriend !== null}
        onClose={() => setSelectedFriend(null)}
        friendName={selectedFriend?.name || ''}
        message={selectedFriend?.message}
      />

      <BeatrizModal
        isOpen={showBeatrizModal}
        onClose={() => setShowBeatrizModal(false)}
      />
    </div>
  );
};