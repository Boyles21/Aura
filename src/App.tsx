import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Flame } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant intro timeout to align with high end sneaker loading atmosphere
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-amber-400/20 selection:text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          /* High-end minimalist intro preloader (Apple/Tesla vibe) */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Dynamic Aura Emblem ring */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-orange-600 to-amber-300 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                <Flame className="w-8 h-8 text-black fill-current animate-pulse" />
                <span className="absolute inset-x-0 -bottom-10 font-mono text-[10px] tracking-[0.3em] text-amber-500 font-bold uppercase text-center">
                  AURA
                </span>
              </div>
              <div className="mt-8 flex flex-col items-center gap-1.5 font-mono text-[9px] text-[#8e8e93] tracking-widest text-center uppercase">
                <span>ESTABLISHING MAIN OVERLINK</span>
                <span className="text-[8px] opacity-60">MILAO • TOKYO • NUREMBERG</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Actual Luxury Website Canvas */
          <motion.div
            key="app-canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Top glass floating header navigation */}
            <Navbar />

            {/* Immersive background-video Hero stage */}
            <Hero />

            {/* Portfolios spec sheet section */}
            <FeaturedWork />

            {/* Bento list of capabilities and deliverables */}
            <Services />

            {/* Hotspot wireframe diagnostic & story section */}
            <About />

            {/* Inquiries and secure console transmissions */}
            <Contact />

            {/* Branding links & copy information */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
