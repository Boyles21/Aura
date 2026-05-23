import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Cpu, Wind, Info, Zap, X } from "lucide-react";

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper to map specification icons
  const getIcon = (key: string) => {
    switch (key) {
      case "upper":
        return <Wind className="w-4 h-4 text-amber-400" />;
      case "midsole":
        return <Cpu className="w-4 h-4 text-orange-400" />;
      case "traction":
        return <Zap className="w-4 h-4 text-amber-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background radial glowing gradients (Apple atmosphere) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 md:gap-0">
          <div>
            <span className="font-mono text-xs text-amber-500 tracking-widest font-bold uppercase block mb-3">
              SELECTED PROJECTS [2026]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans max-w-xl">
              Cinematic Footwear Portfolios.
            </h2>
          </div>
          <p className="text-neutral-400 font-light max-w-md text-sm md:text-base leading-relaxed">
            Examine our high-fidelity, state-of-the-art footwear prototypes. Each silhouette represents a painstaking pursuit of performance engineering and luxury craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden flex flex-col justify-between h-[520px] shadow-2xl"
              >
                {/* Background Accent Mesh and spotlight gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />
                
                {/* Dynamic Lens Flare / glow effect */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                {/* Top content: Category & Code */}
                <div className="p-8 relative z-10 flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-widest text-amber-500 font-bold uppercase">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    CODE: {project.codename}
                  </span>
                </div>

                {/* Middle: Shoe Image with high performance Hover Lift */}
                <div className="relative flex-1 flex items-center justify-center p-6 select-none overflow-hidden h-[260px]">
                  {/* Outer circle layout to frame product */}
                  <div className="absolute w-48 h-48 rounded-full border border-white/5 bg-white/[0.01] group-hover:scale-125 group-hover:border-white/10 transition-transform duration-700" />
                  
                  {/* High Quality Footwear asset */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="max-h-56 object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-4 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Bottom Card Plate: Title and Trigger */}
                <div className="p-8 relative z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pt-12">
                  <span className="text-xs font-mono text-neutral-400 block mb-1">
                    PROJECT {project.id}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black font-mono text-xs font-semibold tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer"
                    >
                      INSPECT DESIGN
                    </button>
                    <span className="text-[11px] font-mono text-neutral-500">
                      WEIGHT: {project.specs.weight}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Inspect Technical Drawer Modal (Tesla Spec-Viewer Style) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-[#121214] border border-white/10 rounded-3xl w-full max-w-5xl overflow-hidden relative z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-amber-400 transition-all z-20 cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-8 md:p-12 flex-1 scrollbar-thin">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Highlight Rendering (Col: 2) */}
                  <div className="lg:col-span-2 flex flex-col items-center justify-center relative p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-2xl border border-white/5 overflow-hidden">
                    {/* Glowing Accent Backboard */}
                    <div className="absolute inset-x-0 top-1/4 h-1/2 bg-amber-500/10 rounded-full blur-3xl" />
                    <span className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-[#8e8e93] uppercase">
                      STUDIO LABS INTERNAL // CAD DESIGN
                    </span>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="max-h-64 object-contain relative z-10 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] scale-105 my-8 transform rotate-3"
                    />
                    <div className="flex gap-2 relative z-10 w-full justify-between items-center text-xs font-mono text-[#8e8e93] border-t border-white/5 pt-4">
                      <span>PROJECT CLASSIFIED</span>
                      <span className="text-amber-500 font-bold">{selectedProject.codename}</span>
                    </div>
                  </div>

                  {/* Right Material Specifications Panel (Col: 3) */}
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1 mb-4">
                        {selectedProject.title}
                      </h3>
                      <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-8">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Specs Sheet Grid */}
                    <div className="space-y-4 mb-8">
                      <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block">
                        ENGINEERING & MATERIALS
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                          {getIcon("upper")}
                          <div>
                            <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                              Upper Construction
                            </span>
                            <span className="text-xs text-white font-medium">
                              {selectedProject.specs.upper}
                            </span>
                          </div>
                        </div>

                        <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                          {getIcon("midsole")}
                          <div>
                            <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                              Midsole Technology
                            </span>
                            <span className="text-xs text-white font-medium">
                              {selectedProject.specs.midsole}
                            </span>
                          </div>
                        </div>

                        <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                          {getIcon("traction")}
                          <div>
                            <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                              Traction System
                            </span>
                            <span className="text-xs text-white font-medium">
                              {selectedProject.specs.traction}
                            </span>
                          </div>
                        </div>

                        <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                          <Cpu className="w-4 h-4 text-orange-500" />
                          <div>
                            <span className="text-[10px] font-mono text-neutral-500 block uppercase">
                              Footwear Weight
                            </span>
                            <span className="text-xs text-white font-semibold">
                              {selectedProject.specs.weight} (Ultra-featherweight)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Bulletin */}
                    <div>
                      <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider block mb-3">
                        DESIGN INNOVATIONS
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                        {selectedProject.highlights.map((hlt, hidx) => (
                          <li key={hidx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Form Action */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-neutral-500 font-mono">
                        Interested in licensing or prototyping this architecture?
                      </p>
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-500 hover:bg-orange-600 text-black font-semibold text-xs font-mono tracking-wider transition-colors inline-block text-center cursor-pointer"
                      >
                        RESERVE CONFIGURATION
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
