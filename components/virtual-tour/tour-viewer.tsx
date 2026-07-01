"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
import '@photo-sphere-viewer/markers-plugin/index.css';
import '@photo-sphere-viewer/compass-plugin/index.css';

import { TOUR_NODES, TOUR_START_NODE } from '@/lib/tour-data';

export function TourViewer({ 
  onNodeChange, 
  activeNodeId,
  onViewerReady
}: { 
  onNodeChange: (nodeId: string) => void;
  activeNodeId: string;
  onViewerReady?: (viewer: Viewer, plugins: any) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let viewer: Viewer | null = null;

    // Convert our nodes to the format expected by VirtualTourPlugin
    const nodes = Object.values(TOUR_NODES).map(node => ({
      id: node.id,
      panorama: node.panorama,
      thumbnail: node.thumbnail,
      name: node.name,
      links: node.links.map(link => ({
        nodeId: link.nodeId,
        position: link.position,
        // Adding specific styles to links to match the premium requirement
        markerStyle: {
          image: "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-blue.png",
          size: { width: 32, height: 32 },
          style: {
            cursor: 'pointer',
          },
        }
      }))
    }));

    const initViewer = () => {
      if (!isMounted || !containerRef.current) return;

      viewer = new Viewer({
        container: containerRef.current,
        defaultYaw: 0,
        defaultPitch: 0,
        touchmoveTwoFingers: false,
        mousewheelCtrlKey: false,
        navbar: false, // We will build our own custom UI overlay
        plugins: [
          [MarkersPlugin, {}],
          [VirtualTourPlugin, {
            positionMode: 'manual',
            renderMode: '3d',
            nodes: nodes,
            startNodeId: TOUR_START_NODE,
            transitionOptions: {
              duration: 1500, // Cinematic duration
              zoomTo: 2 // Zoom effect when jumping
            }
          }],
          [CompassPlugin, {
            position: 'top left',
            navigation: true,
            hotspots: [] 
          }],
          [AutorotatePlugin, {
            autostartDelay: 5000,
            autostartOnIdle: true
          }],
          [GyroscopePlugin, {}]
        ]
      });

      viewerRef.current = viewer;
      const virtualTour = viewer.getPlugin(VirtualTourPlugin) as VirtualTourPlugin;

      viewer.addEventListener('ready', () => {
        if (!isMounted) return;
        setIsReady(true);
      }, { once: true });

      // Notify parent on node change
      virtualTour.addEventListener('node-changed', ({ node }) => {
        if (isMounted) onNodeChange(node.id);
      });

      if (onViewerReady) {
         onViewerReady(viewer, {
           virtualTour: viewer.getPlugin(VirtualTourPlugin),
           autorotate: viewer.getPlugin(AutorotatePlugin),
           gyroscope: viewer.getPlugin(GyroscopePlugin),
         });
      }
    };

    // Delay initialization slightly to bypass React StrictMode's instant mount/unmount cycle
    const timeoutId = setTimeout(initViewer, 100);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []); // Empty dependency array ensures initialization only happens once

  // Update viewer node if changed externally (e.g. from minimap or search)
  useEffect(() => {
    if (isReady && viewerRef.current) {
      const virtualTour = viewerRef.current.getPlugin(VirtualTourPlugin) as VirtualTourPlugin;
      const currentNode = virtualTour?.getCurrentNode();
      if (virtualTour && currentNode && currentNode.id !== activeNodeId) {
        // setCurrentNode returns a Promise, we can ignore it
        virtualTour.setCurrentNode(activeNodeId).catch(err => {
            console.warn("Tour node transition interrupted", err);
        });
      }
    }
  }, [activeNodeId, isReady]);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 z-0 bg-black" />
  );
}
