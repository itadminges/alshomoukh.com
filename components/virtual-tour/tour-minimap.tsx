"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TOUR_NODES } from '@/lib/tour-data';
import { MapPin } from 'lucide-react';

export function TourMinimap({
  activeNodeId,
  onNodeClick
}: {
  activeNodeId: string;
  onNodeClick: (nodeId: string) => void;
}) {
  const nodes = Object.values(TOUR_NODES);

  return (
    <div className="relative w-full h-full bg-navy/80 rounded-lg overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md">
      {/* Abstract background map */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      <div className="absolute inset-0 p-4">
        {nodes.map(node => {
          const isActive = node.id === activeNodeId;
          return (
            <motion.button
              key={node.id}
              onClick={() => onNodeClick(node.id)}
              className="absolute group z-10"
              style={{
                left: `${node.mapPosition.x}%`,
                top: `${node.mapPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-colors ${isActive ? 'bg-gold' : 'bg-white/20 hover:bg-white/40'}`}>
                {isActive && (
                  <motion.div
                    layoutId="activeMapPin"
                    className="absolute inset-0 rounded-full border border-gold"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <MapPin className={`w-3 h-3 ${isActive ? 'text-navy' : 'text-white'}`} />
              </div>
              
              {/* Tooltip */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-navy text-white text-[10px] px-2 py-1 rounded whitespace-nowrap border border-white/10 pointer-events-none z-20">
                {node.name}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
