import { Project, Service } from "./types";

import cyberImg from "./assets/images/shoe_concept_cyber_1779497591598.png";
import runnerImg from "./assets/images/shoe_concept_runner_1779497610237.png";
import luxuryImg from "./assets/images/shoe_concept_luxury_1779497625419.png";

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Project VENTURE-X",
    category: "FUTURISTIC CONCEPT",
    codename: "Aether-01",
    image: cyberImg,
    accentColor: "from-amber-500/20 to-orange-600/35",
    description: "A luxury high-top sneaker merging cybernetic geometry with organic structural support. Designed for extreme visual presence and ultra-ergonomic foot clamping.",
    specs: {
      upper: "Kevlar-Reinforced Monofilament Weave",
      midsole: "3D-Printed Responsive Lattice Matrix",
      traction: "Electro-Grip Multidirectional Tread",
      weight: "298g"
    },
    highlights: ["Interactive Adaptive Fastening", "Luminescent Fiber Optics", "Glow-under reflective surfaces"]
  },
  {
    id: "02",
    title: "Project AERORUN",
    category: "HIGH-PERFORMANCE",
    codename: "Aero-02",
    image: runnerImg,
    accentColor: "from-sky-500/20 to-indigo-600/35",
    description: "An ultra-lightweight running silhouette focusing on pure aerodynamic efficiency, minimal panels, and high kinetic energy return.",
    specs: {
      upper: "Ultralight Engineered Knit Dust-Shield",
      midsole: "Carbon Fiber Kinetic Propulsion Plate",
      traction: "Vibram Hyper-Contact Zero-Slip Sole",
      weight: "185g"
    },
    highlights: ["Sub-200g Weight Profile", "Explosive Energy Spring Rate", "Seamless Zero-Rub Interior Liner"]
  },
  {
    id: "03",
    title: "Project SYNAPSE LUX",
    category: "LIFESTYLE / COUTURE",
    codename: "Synapse-03",
    image: luxuryImg,
    accentColor: "from-yellow-600/25 to-amber-700/35",
    description: "Luxury avant-garde lifestyle sneaker featuring matte-glazed charcoal premium leathers, carbon fiber heel counter, and custom metallic gold hardware.",
    specs: {
      upper: "Artisanal Full-Grain Italian Calfskin",
      midsole: "Anatomically Modeled Cork-Gel Inlay",
      traction: "Glazed Vulcanized Performance Rubber",
      weight: "340g"
    },
    highlights: ["Brushed 24k Gold Eyelet Hooks", "Full Carbon-Fiber Outer Cage", "Supple Micro-Suede Inner Sleeving"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Footwear Design & Prototyping",
    description: "From napkin sketches to complex functional footwear architecture. We define silhouettes, outsoles, paneling systems, and hardware components.",
    bullets: [
      "Ergonomic fitment engineering",
      "Drafting patterns & stitch mapping",
      "Functional wear-zone analysis",
      "Material exploration & curation"
    ],
    specs: ["CAD blueprints", "Stitch line mapping", "Tolerances: 0.1mm"]
  },
  {
    id: "s2",
    title: "3D Visualizations & CGI",
    description: "Photorealistic digital twins of footwear products. High-fidelity rendering with professional studio lighting, materials, and physics-based fabric simulation.",
    bullets: [
      "Sub-pixel fabric & knit detailing",
      "Dynamic light and shade simulations",
      "High-stress seam flex animations",
      "Multi-angle studio product renders"
    ],
    specs: ["8K cinematic output", "PBR material setups", "USDz & glTF exports"]
  },
  {
    id: "s3",
    title: "Brand Identity Creation",
    description: "Positioning footwear releases for strategic cultural relevance. We design luxury logo marks, performance badges, naming conventions, and custom product storytelling.",
    bullets: [
      "Custom typographic system",
      "Sneaker tongue & heel logo branding",
      "Unboxing and packaging concepts",
      "Release visual positioning strategy"
    ],
    specs: ["C-Suite strategy deck", "Scalable vector marks", "Global color hierarchy"]
  },
  {
    id: "s4",
    title: "Digital Web Showcases",
    description: "Interactive WebGL, immersive 3D, and high-performance product experiences designed to make every shoe release a digital event.",
    bullets: [
      "Custom cinematic parallax scrolling",
      "Product customizers & color swatches",
      "Optimized 3D viewer integration",
      "Responsive fluid web animations"
    ],
    specs: ["React / Framer Motion", "Tailwind responsive performance", "Vite compilation"]
  },
  {
    id: "s5",
    title: "Product Kinetic Animation",
    description: "CGI sneaker explosion views, component breakdown videos, and dramatic reveals that highlight internal tech specs.",
    bullets: [
      "Exploded technical wireframe view",
      "Midsole compression stress tests",
      "Unboxing loop reels for marketing",
      "Sound design sync orchestration"
    ],
    specs: ["Prores 4444 video files", "Unreal Engine 5.4 simulation", "60 FPS output"]
  }
];
