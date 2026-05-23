import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Layers, Cuboid as Cube, Award, Globe, Video, ArrowRight } from "lucide-react";

export default function Services() {
  // Map icons dynamically to services
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "s1":
        return <Layers className="w-6 h-6 text-amber-400" />;
      case "s2":
        return <Cube className="w-6 h-6 text-orange-500" />;
      case "s3":
        return <Award className="w-6 h-6 text-amber-500" />;
      case "s4":
        return <Globe className="w-6 h-6 text-teal-400" />;
      case "s5":
        return <Video className="w-6 h-6 text-orange-600" />;
      default:
        return <Layers className="w-6 h-6 text-white" />;
    }
  };

  const colors = [
    "group-hover:border-amber-400/30 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]",
    "group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.08)]",
    "group-hover:border-yellow-600/30 group-hover:shadow-[0_0_30px_rgba(202,138,4,0.08)]",
    "group-hover:border-teal-400/30 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.08)]",
    "group-hover:border-red-500/30 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.08)]"
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0c] relative overflow-hidden">
      {/* Decorative background grid mesh (Apple tech vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-bold uppercase block mb-3">
            STUDIO CAPABILITIES // SERVICES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans">
            Comprehensive Design Ecosystem
          </h2>
          <p className="mt-6 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
            We provide specialized design, digital development, and physical-to-virtual visual pipelines tailored exclusively for luxury footwear houses and performance brands.
          </p>
        </div>

        {/* Services Bento/Vertical Stack Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className={`group bg-neutral-900/40 backdrop-blur-md hover:bg-neutral-900/75 border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[420px] transition-all duration-500 ${colors[idx % colors.length]}`}
            >
              {/* Card Header Info */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-neutral-950 border border-white/10 rounded-2xl group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-amber-500/80 transition-colors">
                    [ SERVICE 0{idx + 1} ]
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Sub-deliverables and bottom metrics */}
              <div>
                <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-500/60" />
                      <span className="truncate">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technical Standards line */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">
                      DELIVERABLES METRIC
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300">
                      {service.specs[0]}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="p-2 ml-4 rounded-full bg-neutral-950 border border-white/5 text-neutral-400 group-hover:bg-amber-500 group-hover:text-black group-hover:border-transparent transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}

          {/* Quick Consultation Promo Box to fill slot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-amber-500/10 via-orange-600/5 to-transparent border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between h-[420px] shadow-xl"
          >
            <div>
              <span className="font-mono text-xs text-amber-500 tracking-widest font-bold uppercase mb-4 block">
                SPECIAL ENGAGEMENTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Have A Unique Footwear Vision?
              </h3>
              <p className="mt-4 text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                We handle non-adjacent bespoke briefs under strict NDA guidelines. Experience physical carbon-carvings, advanced stitch-woven textiles, and direct CGI cinematic film production.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 text-amber-400 font-mono text-xs font-semibold mb-6">
                <span>// CUSTOM CODES ENABLED</span>
                <span>// MILAN OFFICE</span>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 text-center bg-white hover:bg-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] text-black font-semibold rounded-2xl text-xs font-mono tracking-wider transition-all cursor-pointer"
              >
                REQUEST DESIGN PACK
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
