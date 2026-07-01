"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Map, Info, Maximize, Minimize, Compass, RotateCw, ZoomIn, ZoomOut, Search, ChevronRight, Menu } from 'lucide-react';
import { TOUR_NODES, TOUR_START_NODE, getNodesByFloor } from '@/lib/tour-data';
import { TourViewer } from './tour-viewer';
import { TourMinimap } from './tour-minimap';

export function TourOverlay({ onClose }: { onClose: () => void }) {
  const [activeNodeId, setActiveNodeId] = useState(TOUR_START_NODE);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const viewerPluginsRef = useRef<any>(null);
  const viewerRef = useRef<any>(null);

  const activeNode = TOUR_NODES[activeNodeId];
  const floors = getNodesByFloor();

  const handleViewerReady = (viewer: any, plugins: any) => {
    viewerRef.current = viewer;
    viewerPluginsRef.current = plugins;
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (!viewerRef.current) return;
    const currentZoom = viewerRef.current.getZoomLevel();
    viewerRef.current.zoom(currentZoom + (direction === 'in' ? 10 : -10));
  };

  const toggleAutorotate = () => {
    if (!viewerPluginsRef.current?.autorotate) return;
    if (viewerPluginsRef.current.autorotate.isEnabled()) {
      viewerPluginsRef.current.autorotate.stop();
    } else {
      viewerPluginsRef.current.autorotate.start();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen to fullscreen changes outside of React state
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const totalNodes = Object.keys(TOUR_NODES).length;
  // Progress is simplified here to just be how many we've clicked
  const [visited, setVisited] = useState<Set<string>>(new Set([TOUR_START_NODE]));
  
  useEffect(() => {
    setVisited(prev => new Set(prev).add(activeNodeId));
  }, [activeNodeId]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black font-sans overflow-hidden"
    >
      {/* 3D Viewer */}
      <TourViewer 
        activeNodeId={activeNodeId} 
        onNodeChange={setActiveNodeId}
        onViewerReady={handleViewerReady}
      />

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-start pointer-events-none z-10">
        
        {/* Brand / Title */}
        <div className="pointer-events-auto flex items-center gap-4">
          <button 
            onClick={() => setShowSidebar(!showSidebar)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hidden md:block">
            <h2 className="text-white font-bold tracking-widest uppercase text-xs">Virtual Campus Tour</h2>
          </div>
        </div>

        {/* Progress & Close */}
        <div className="pointer-events-auto flex items-center gap-4">
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 hidden md:flex items-center gap-3">
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gold"
                initial={{ width: 0 }}
                animate={{ width: `${(visited.size / totalNodes) * 100}%` }}
              />
            </div>
            <span className="text-white text-[10px] font-bold tracking-wider">{visited.size} / {totalNodes} EXPLORED</span>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/80 backdrop-blur-md border border-white/20 text-white hover:bg-red-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating Info Panel (Bottom Left) */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeNodeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-sm pointer-events-auto z-10"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="inline-block px-2 py-1 bg-white/10 rounded text-[10px] text-white font-bold uppercase tracking-widest mb-3">
              {activeNode.floor}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeNode.name}</h1>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {activeNode.description}
            </p>
            {activeNode.facilities && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activeNode.facilities.map((fac, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-gold/20 text-gold text-[10px] font-bold uppercase border border-gold/30">
                    {fac}
                  </span>
                ))}
              </div>
            )}
            {(activeNode.capacity || activeNode.openingHours) && (
              <div className="flex items-center gap-4 text-white/60 text-xs border-t border-white/10 pt-4 mt-2">
                {activeNode.capacity && <span>Capacity: {activeNode.capacity}</span>}
                {activeNode.openingHours && <span>{activeNode.openingHours}</span>}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col gap-3 pointer-events-auto z-10">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full flex flex-col overflow-hidden">
          <button onClick={() => setShowMap(!showMap)} className={`p-3 text-white transition-colors border-b border-white/10 ${showMap ? 'bg-gold/40 text-gold' : 'hover:bg-white/10'}`} title="Map">
            <Map className="w-5 h-5" />
          </button>
          <button onClick={() => handleZoom('in')} className="p-3 text-white hover:bg-white/10 transition-colors border-b border-white/10" title="Zoom In">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button onClick={() => handleZoom('out')} className="p-3 text-white hover:bg-white/10 transition-colors border-b border-white/10" title="Zoom Out">
            <ZoomOut className="w-5 h-5" />
          </button>
          <button onClick={toggleAutorotate} className="p-3 text-white hover:bg-white/10 transition-colors border-b border-white/10" title="Auto Rotate">
            <RotateCw className="w-5 h-5" />
          </button>
          <button onClick={toggleFullscreen} className="p-3 text-white hover:bg-white/10 transition-colors" title="Fullscreen">
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mini Map Overlay */}
      <AnimatePresence>
        {showMap && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="absolute bottom-10 right-24 w-[300px] h-[300px] pointer-events-auto z-10 origin-bottom-right"
          >
            <TourMinimap activeNodeId={activeNodeId} onNodeClick={setActiveNodeId} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute top-0 left-0 bottom-0 w-80 bg-navy/95 backdrop-blur-xl border-r border-white/10 z-20 pointer-events-auto flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <h2 className="text-white font-bold tracking-widest uppercase">Navigation</h2>
              <button onClick={() => setShowSidebar(false)} className="text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search locations..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {Object.entries(floors).map(([floorName, floorNodes]) => {
                const filteredNodes = floorNodes.filter(n => n.name.toLowerCase().includes(searchQuery.toLowerCase()));
                if (filteredNodes.length === 0) return null;

                return (
                  <div key={floorName} className="mb-6">
                    <h3 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3 px-2">{floorName}</h3>
                    <div className="flex flex-col gap-1">
                      {filteredNodes.map(node => (
                        <button
                          key={node.id}
                          onClick={() => {
                            setActiveNodeId(node.id);
                            if (window.innerWidth < 768) setShowSidebar(false);
                          }}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${activeNodeId === node.id ? 'bg-white/10 text-white font-medium' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                        >
                          <span>{node.name}</span>
                          {activeNodeId === node.id && <ChevronRight className="w-4 h-4 text-gold" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
