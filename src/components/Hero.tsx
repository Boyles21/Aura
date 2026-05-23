import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ChevronDown, Sparkles, ArrowDownRight } from "lucide-react";
import cyberImg from "../assets/images/shoe_concept_cyber_1779497591598.png";
import runnerImg from "../assets/images/shoe_concept_runner_1779497610237.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Scroll interactive parallax for Apple/Tesla style transitions
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: localScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(localScroll, [0, 0.8], [0, 100]);
  const contentOpacity = useTransform(localScroll, [0, 0.6], [1, 0]);
  const videoScale = useTransform(localScroll, [0, 1], [1, 1.08]);
  const videoBlur = useTransform(localScroll, [0, 0.8], ["blur(0px)", "blur(4px)"]);

  const videoUrl =
    "https://res.cloudinary.com/dzyqsyh1p/video/upload/Sneaker_reveal_Apple_style_202605230118_iu1cto.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay video deferred:", err);
      });
    }
  }, []);

  const scrollToView = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-black flex flex-col justify-between"
    >
      {/* Background Video Layer with Parallax scale */}
      <motion.div
        style={{ scale: videoScale, filter: videoBlur }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
        {/* Subtle Dark 30% Overlay for pristine typography contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />
      </motion.div>

      {/* Spacing alignment for transparent header */}
      <div className="h-24 relative z-20 pointer-events-none"></div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex-1 flex flex-col justify-center"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="inline-block text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">
              Premium Footwear Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[84px] font-bold leading-[0.9] tracking-tighter mb-8 font-sans"
          >
            Designing The <br />
            Future Of <span className="text-zinc-400">Footwear</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 max-w-xl font-light font-sans"
          >
            We create premium sneaker concepts, product visualizations, brand experiences, and digital product showcases for modern footwear brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToView("work")}
              className="px-10 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToView("contact")}
              className="px-10 py-4 bg-transparent border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer shadow-lg active:scale-95"
            >
              Book A Consultation
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Immersive Custom Interactive Panel Cockpit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-20 px-6 md:px-12 pb-12 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-end justify-between gap-8 h-auto"
      >
        {/* Left Side: Dynamic preview card of existing portfolio items */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToView("work")}
            className="group relative w-40 sm:w-48 h-28 rounded-2xl overflow-hidden border border-white/10 text-left bg-neutral-900/60 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 cursor-pointer"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-gradient-to-tr from-amber-500/80 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono flex items-center justify-between">
                Project 01 <ArrowDownRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs font-bold font-sans text-white group-hover:text-amber-400 transition-colors">
                VENTURE-X
              </span>
            </div>
            <img
              src={cyberImg}
              alt="Project preview 1"
              className="absolute right-1 bottom-1 h-20 object-contain rotate-12 filter brightness-75 group-hover:scale-110 transition-transform duration-300"
            />
          </button>

          <button
            onClick={() => scrollToView("work")}
            className="group relative w-40 sm:w-48 h-28 rounded-2xl overflow-hidden border border-white/10 text-left bg-neutral-900/60 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 cursor-pointer"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-gradient-to-tr from-orange-500/80 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono flex items-center justify-between">
                Project 02 <ArrowDownRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-xs font-bold font-sans text-white group-hover:text-amber-400 transition-colors">
                AERORUN
              </span>
            </div>
            <img
              src={runnerImg}
              alt="Project preview 2"
              className="absolute right-1 bottom-1 h-20 object-contain rotate-12 filter brightness-75 group-hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Right Side: Quick Specs / Interactive Anchor indices */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-left md:text-right font-mono self-end">
          <div className="cursor-pointer group" onClick={() => scrollToView("services")}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">CAPABILITY</p>
            <p className="text-xs font-medium text-white group-hover:text-amber-400 transition-colors">
              3D Footwear Rendering
            </p>
          </div>
          <div className="cursor-pointer group" onClick={() => scrollToView("contact")}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">INQUIRY</p>
            <p className="text-xs font-medium text-white group-hover:text-amber-400 transition-colors">
              design@rovillmotion.com
            </p>
          </div>
          <div className="cursor-pointer group" onClick={() => scrollToView("services")}>
            <p className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
              Brand Identity
            </p>
          </div>
          <div className="cursor-pointer group" onClick={() => scrollToView("services")}>
            <p className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
              Kinetic Animation
            </p>
          </div>
        </div>
      </motion.div>

      {/* Progress Indicator (Apple-style linked directly to scroll scrollYProgress) */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 origin-left"
          style={{ scaleX }}
        />
      </div>
    </section>
  );
}
