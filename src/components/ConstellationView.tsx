@@ .. @@
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarField } from './StarField';
import { StarModal } from './StarModal';
import { BeatrizModal } from './BeatrizModal';
import { Friend } from '../types';

+// Componente para criar uma estrela SVG
+const StarShape: React.FC<{ size: number; className?: string }> = ({ size, className }) => {
+  const points = [];
+  const outerRadius = size / 2;
+  const innerRadius = outerRadius * 0.4;
+  
+  for (let i = 0; i < 10; i++) {
+    const angle = (i * Math.PI) / 5;
+    const radius = i % 2 === 0 ? outerRadius : innerRadius;
+    const x = Math.cos(angle - Math.PI / 2) * radius + size / 2;
+    const y = Math.sin(angle - Math.PI / 2) * radius + size / 2;
+    points.push(`${x},${y}`);
+  }
+  
+  return (
+    <svg width={size} height={size} className={className}>
+      <polygon
+        points={points.join(' ')}
+        fill="currentColor"
+        stroke="currentColor"
+        strokeWidth="1"
+      />
+    </svg>
+  );
+};

 export const ConstellationView: React.FC = () => {
@@ .. @@
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
-            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300" />
+            <div className="relative">
+              <StarShape 
+                size={20} 
+                className="text-[#f8d613] drop-shadow-lg group-hover:drop-shadow-[0_0_10px_rgba(248,214,19,0.5)] transition-all duration-300" 
+              />
+              <div className="absolute inset-0">
+                <StarShape 
+                  size={20} 
+                  className="text-[#f8d613] opacity-30 animate-pulse" 
+                />
+              </div>
+            </div>
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
-            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full shadow-2xl shadow-yellow-400/50 animate-pulse" />
-            <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-ping" />
+            <StarShape 
+              size={32} 
+              className="text-[#f8d613] drop-shadow-2xl drop-shadow-[0_0_20px_rgba(248,214,19,0.5)]" 
+            />
+            <div className="absolute inset-0">
+              <StarShape 
+                size={32} 
+                className="text-[#0248c1] opacity-50 animate-pulse" 
+              />
+            </div>
+            <div className="absolute inset-0">
+              <StarShape 
+                size={40} 
+                className="text-[#f8d613] opacity-20 animate-ping" 
+              />
+            </div>
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
-          <h1 className="text-4xl font-bold text-yellow-400 mb-2">
+          <h1 className="text-4xl font-bold text-[#f8d613] mb-2">
             Constelação do Miguel
           </h1>
-          <p className="text-yellow-400/70 text-lg">
+          <p className="text-[#f8d613]/70 text-lg">
             Clique nas estrelas para ver as mensagens dos seus amigos
           </p>
         </motion.div>
       </div>
@@ .. @@