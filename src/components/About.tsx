import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Ruler, Milestone, RefreshCw } from "lucide-react";
import runnerImg from "../assets/images/shoe_concept_runner_1779497610237.png";

interface AnatomyMark {
  id: string;
  name: string;
  desc: string;
  top: string;
  left: string;
}

export default function About() {
  const [activeMark, setActiveMark] = useState<string>("m1");

  const anatomyMarks: AnatomyMark[] = [
    {
      id: "m1",
      name: "Monofilament Knit Layer",
      desc: "An ultra-thin, highly breathable, high-tensile mesh made from recycled sea ocean plastics and engineered Kevlar micro-threads which resists stretching while giving custom snugness.",
      top: "22%",
      left: "40%"
    },
    {
      id: "m2",
      name: "Dynamic Speed-Lacing Harness",
      desc: "Internally integrated nylon cords pull directly from the shoe base platform to lock down the midfoot securely during rapid multi-directional pivoting.",
      top: "35%",
      left: "58%"
    },
    {
      id: "m3",
      name: "Carbon-Fiber Kinetic Core",
      desc: "A curved rigid carbon composite plate running the full length of the foot. It compresses under impact and expands actively to maximize spring-back speed.",
      top: "55%",
      left: "45%"
    },
    {
      id: "m4",
      name: "3D-Printed Lattice Matrix",
      desc: "Variable-density elastomeric polymer lattice, simulated using finite-element analysis to deliver precise impact damping exactly where the body exerts peak pressure.",
      top: "68%",
      left: "30%"
    },
    {
      id: "m5",
      name: "Zero-Slip Traction Mold",
      desc: "Deep multidirectional grooves composed of high-friction vulcanized rubber compound, optimizing kinetic bite angles on dry, wet, or polished court floors.",
      top: "80%",
      left: "22%"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Storytelling Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-amber-500 tracking-widest font-bold uppercase block mb-3">
              OUR DNA // CORE PHILOSOPHY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
              Engineering <br />
              Sculpted <br />
              Kinetic Art.
            </h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-xl sm:text-2xl font-light text-neutral-300 leading-relaxed mb-6 font-sans">
              “Footwear design is the ultimate intersection of industrial engineering, anatomy, chemistry, and high couture. A shoe must support human acceleration while telling a visual story in milliseconds.”
            </p>
            <div className="border-l-2 border-amber-500/50 pl-6 my-4">
              <span className="font-mono text-xs text-amber-400 block uppercase font-bold">
                Rovill Motion Studio Inc.
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">
                MILAN // TOKYO // LOS ANGELES
              </span>
            </div>
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mt-4">
              Founded by former automobile and material science engineers, Rovill Motion takes an uncompromised, zero-compromise approach to product design. We don’t just sketch sneakers — we stress-test lattice structures, simulate aerodynamics, and invent custom woven uppers that push footwear architecture forward.
            </p>
          </div>
        </div>

        {/* Studio Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 border-y border-white/5 py-12 bg-neutral-900/10">
          {[
            { metric: "140+", label: "Concepts Prototyped" },
            { metric: "24", label: "Industry Design Awards" },
            { metric: "3.2M", label: "Pairs Sold Worldwide" },
            { metric: "100%", label: "Strict Confidentiality" }
          ].map((stat, sidx) => (
            <div key={sidx} className="text-center md:text-left">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-1">
                {stat.metric}
              </span>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* High-End Design Laboratory Segment: "Interactive Shoe Anatomy" */}
        <div className="bg-neutral-900/30 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-[10px] text-amber-500 font-bold tracking-widest uppercase block mb-1">
                ROVILL MOTION RESEARCH LAB
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                Interactive Anatomy Breakdown
              </h3>
            </div>
            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
              Hover over the highlighted nodes on our high-performance <span className="font-mono text-xs text-white">Project AERORUN</span> prototype to examine internal materials and components under stress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Interactive Shoe Wireframe Container (Col: 7) */}
            <div className="lg:col-span-7 flex justify-center items-center relative min-h-[380px] bg-black/40 rounded-2xl border border-white/5 p-6 overflow-hidden">
              
              {/* Outer decorative tech radar rings */}
              <div className="absolute w-80 h-80 rounded-full border border-white/[0.03] animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-neutral-500/[0.01]" />
              
              {/* Wrapper container for perfect responsive hotspot coordinate scaling */}
              <div className="relative w-full max-w-sm aspect-[4/3] flex items-center justify-center z-10 select-none">
                {/* The Shoe Image */}
                <img
                  src={runnerImg}
                  alt="Rovill Motion Performance Runner wireframe inspect"
                  referrerPolicy="no-referrer"
                  className="max-h-64 object-contain filter brightness-95 contrast-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                />

                {/* Anatomy Hotspot Markers */}
                {anatomyMarks.map((mark) => {
                  const isActive = activeMark === mark.id;
                  return (
                    <button
                      key={mark.id}
                      onMouseEnter={() => setActiveMark(mark.id)}
                      onClick={() => setActiveMark(mark.id)}
                      style={{ top: mark.top, left: mark.left }}
                      className={`absolute z-20 group cursor-pointer focus:outline-none -translate-x-1/2 -translate-y-1/2`}
                      aria-label={`Inspect ${mark.name}`}
                    >
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? "bg-amber-400" : "bg-white/40 hover:bg-amber-400"} transition-colors`}></span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Diagnostic Readout Sheet (Col: 5) */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-950 p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-[340px]">
                
                {anatomyMarks.map((mark) => {
                  if (mark.id !== activeMark) return null;
                  return (
                    <motion.div
                      key={mark.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col h-full justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded uppercase">
                            DIAGNOSTIC {mark.id.toUpperCase()}
                          </span>
                          <span className="text-neutral-600 font-mono text-[10px]">
                            SYS: ENG_ACTIVE
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          {mark.name}
                        </h4>
                        <p className="text-neutral-400 font-light text-sm leading-relaxed">
                          {mark.desc}
                        </p>
                      </div>

                      {/* Technical specifications checklines */}
                      <div className="border-t border-white/5 pt-4">
                        <div className="grid grid-cols-2 gap-4 text-[11px] font-mono text-[#8e8e93]">
                          <div>
                            <span className="text-neutral-600 block">DURABILITY RATING</span>
                            <span className="text-white">MIL-SPEC 99.8%</span>
                          </div>
                          <div>
                            <span className="text-neutral-600 block">FLEX CYCLE RESISTANCE</span>
                            <span className="text-white">1,500,000 CYCLES</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
