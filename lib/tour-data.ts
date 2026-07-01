export interface TourNode {
  id: string;
  name: string;
  panorama: string;
  description: string;
  facilities?: string[];
  capacity?: number;
  openingHours?: string;
  category: "Entrance" | "Academic" | "Facilities" | "Administration" | "Sports";
  floor: "Ground Floor" | "First Floor" | "Second Floor" | "Outdoors";
  links: TourLink[];
  mapPosition: { x: number; y: number }; // For the mini map overlay
  thumbnail?: string;
}

export interface TourLink {
  nodeId: string;
  position: { yaw: number; pitch: number };
}

// Since we only have one panorama image currently, we use it for all nodes.
// Once more images are available, simply update the 'panorama' paths.
const defaultPanorama = "/panorama.jpg";
const defaultThumb = "/panorama.jpg";

export const TOUR_NODES: Record<string, TourNode> = {
  "main-entrance": {
    id: "main-entrance",
    name: "Main Entrance",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "The grand entrance to Al Shomoukh International School, welcoming students and visitors to a world of excellence.",
    category: "Entrance",
    floor: "Ground Floor",
    links: [
      { nodeId: "reception", position: { yaw: 0, pitch: 0 } },
      { nodeId: "outdoor-playground", position: { yaw: Math.PI, pitch: 0 } }
    ],
    mapPosition: { x: 50, y: 90 }
  },
  "reception": {
    id: "reception",
    name: "Reception",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "Our main reception area where our friendly staff is ready to assist parents, students, and guests.",
    openingHours: "Mon-Fri: 7:30 AM - 4:00 PM",
    category: "Administration",
    floor: "Ground Floor",
    links: [
      { nodeId: "main-entrance", position: { yaw: Math.PI, pitch: 0 } },
      { nodeId: "lobby", position: { yaw: 0, pitch: 0 } }
    ],
    mapPosition: { x: 50, y: 75 }
  },
  "lobby": {
    id: "lobby",
    name: "Main Lobby",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "The central hub connecting the main administrative offices and the ground floor facilities.",
    category: "Entrance",
    floor: "Ground Floor",
    links: [
      { nodeId: "reception", position: { yaw: Math.PI, pitch: 0 } },
      { nodeId: "principals-office", position: { yaw: Math.PI / 2, pitch: 0 } },
      { nodeId: "auditorium", position: { yaw: -Math.PI / 2, pitch: 0 } },
      { nodeId: "library", position: { yaw: 0, pitch: 0 } }
    ],
    mapPosition: { x: 50, y: 60 }
  },
  "principals-office": {
    id: "principals-office",
    name: "Principal's Office",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "The office of the School Principal. A space for strategic planning and welcoming parents for important discussions.",
    category: "Administration",
    floor: "Ground Floor",
    links: [
      { nodeId: "lobby", position: { yaw: -Math.PI / 2, pitch: 0 } }
    ],
    mapPosition: { x: 70, y: 60 }
  },
  "auditorium": {
    id: "auditorium",
    name: "Auditorium",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A state-of-the-art auditorium for assemblies, theatrical performances, and special events.",
    capacity: 500,
    facilities: ["Stage", "AV System", "Theater Seating"],
    category: "Facilities",
    floor: "Ground Floor",
    links: [
      { nodeId: "lobby", position: { yaw: Math.PI / 2, pitch: 0 } }
    ],
    mapPosition: { x: 30, y: 60 }
  },
  "library": {
    id: "library",
    name: "Library",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A quiet and resourceful space for research, reading, and collaborative study.",
    capacity: 100,
    facilities: ["Study Pods", "Computers", "Quiet Zone", "Extensive Book Collection"],
    category: "Academic",
    floor: "First Floor",
    links: [
      { nodeId: "lobby", position: { yaw: Math.PI, pitch: -0.2 } }, // Simulating looking down stairs
      { nodeId: "computer-lab", position: { yaw: Math.PI / 2, pitch: 0 } },
      { nodeId: "classroom-a", position: { yaw: -Math.PI / 2, pitch: 0 } }
    ],
    mapPosition: { x: 50, y: 40 }
  },
  "computer-lab": {
    id: "computer-lab",
    name: "Computer Laboratory",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "Equipped with the latest technology to support our digital learning initiatives and coding classes.",
    capacity: 30,
    facilities: ["Mac/PC workstations", "Interactive Whiteboard", "3D Printers"],
    category: "Academic",
    floor: "First Floor",
    links: [
      { nodeId: "library", position: { yaw: -Math.PI / 2, pitch: 0 } },
      { nodeId: "science-lab", position: { yaw: 0, pitch: 0 } }
    ],
    mapPosition: { x: 70, y: 40 }
  },
  "science-lab": {
    id: "science-lab",
    name: "Science Laboratory",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "Modern laboratories designed for practical experiments in Physics, Chemistry, and Biology.",
    capacity: 25,
    facilities: ["Safety Showers", "Fume Hoods", "Experiment Stations"],
    category: "Academic",
    floor: "First Floor",
    links: [
      { nodeId: "computer-lab", position: { yaw: Math.PI, pitch: 0 } }
    ],
    mapPosition: { x: 70, y: 20 }
  },
  "classroom-a": {
    id: "classroom-a",
    name: "Classroom A",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A standard interactive classroom designed for collaborative and engaged learning.",
    capacity: 24,
    facilities: ["Smart Boards", "Flexible Seating"],
    category: "Academic",
    floor: "Second Floor",
    links: [
      { nodeId: "library", position: { yaw: Math.PI / 2, pitch: 0 } },
      { nodeId: "classroom-b", position: { yaw: -Math.PI / 2, pitch: 0 } }
    ],
    mapPosition: { x: 30, y: 40 }
  },
  "classroom-b": {
    id: "classroom-b",
    name: "Classroom B",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A secondary interactive classroom for primary education.",
    capacity: 24,
    facilities: ["Smart Boards", "Flexible Seating", "Reading Corner"],
    category: "Academic",
    floor: "Second Floor",
    links: [
      { nodeId: "classroom-a", position: { yaw: Math.PI / 2, pitch: 0 } }
    ],
    mapPosition: { x: 10, y: 40 }
  },
  "cafeteria": {
    id: "cafeteria",
    name: "Cafeteria",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A spacious dining area offering healthy meals and snacks for students and staff.",
    capacity: 200,
    openingHours: "Mon-Fri: 8:00 AM - 2:00 PM",
    category: "Facilities",
    floor: "Ground Floor",
    links: [
      { nodeId: "lobby", position: { yaw: Math.PI / 4, pitch: 0 } },
      { nodeId: "sports-hall", position: { yaw: -Math.PI / 4, pitch: 0 } }
    ],
    mapPosition: { x: 30, y: 80 }
  },
  "sports-hall": {
    id: "sports-hall",
    name: "Sports Hall",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A multi-purpose indoor sports facility for basketball, volleyball, and physical education.",
    capacity: 300,
    facilities: ["Basketball Court", "Locker Rooms", "Equipment Storage"],
    category: "Sports",
    floor: "Ground Floor",
    links: [
      { nodeId: "cafeteria", position: { yaw: Math.PI / 4, pitch: 0 } },
      { nodeId: "outdoor-playground", position: { yaw: Math.PI, pitch: 0 } }
    ],
    mapPosition: { x: 10, y: 80 }
  },
  "outdoor-playground": {
    id: "outdoor-playground",
    name: "Outdoor Playground",
    panorama: defaultPanorama,
    thumbnail: defaultThumb,
    description: "A safe, engaging outdoor play area with premium equipment and shaded sections.",
    category: "Sports",
    floor: "Outdoors",
    links: [
      { nodeId: "main-entrance", position: { yaw: 0, pitch: 0 } },
      { nodeId: "sports-hall", position: { yaw: -Math.PI / 2, pitch: 0 } }
    ],
    mapPosition: { x: 50, y: 110 }
  }
};

export const TOUR_START_NODE = "main-entrance";

// Helper functions for the UI
export const getNodesByFloor = () => {
  const floors: Record<string, TourNode[]> = {};
  Object.values(TOUR_NODES).forEach(node => {
    if (!floors[node.floor]) floors[node.floor] = [];
    floors[node.floor].push(node);
  });
  return floors;
};

export const getNodesByCategory = () => {
  const categories: Record<string, TourNode[]> = {};
  Object.values(TOUR_NODES).forEach(node => {
    if (!categories[node.category]) categories[node.category] = [];
    categories[node.category].push(node);
  });
  return categories;
};
