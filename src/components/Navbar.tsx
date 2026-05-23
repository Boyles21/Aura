import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Work", "Services", "About", "Contact"];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="navbar-main"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "glass-navbar py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Studio Home"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-orange-600 to-amber-300 flex items-center justify-center overflow-hidden border border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-4.5 h-4.5 text-black fill-current group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-mono text-xs tracking-widest text-amber-500 font-bold uppercase">
                R O V I L L
              </span>
              <span className="text-[10px] tracking-widest font-mono text-gray-500">
                M O T I O N
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-300 relative py-1 group cursor-pointer focus:outline-none"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-wider text-black bg-white hover:bg-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[64px] z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8"
          >
            <div className="flex flex-col gap-6 pt-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-2xl font-light tracking-wide text-gray-300 hover:text-white py-2 focus:outline-none"
                >
                  <span className="text-amber-500 font-mono text-sm mr-4">
                    0{index + 1}.
                  </span>
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="border-t border-white/10 pt-8"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-center py-4 bg-amber-500 hover:bg-orange-600 text-black font-semibold rounded-full tracking-wider text-xs font-mono transition-colors"
              >
                BOOK CONSULTATION
              </button>
              <p className="text-center font-mono text-[10px] text-gray-500 mt-4 uppercase">
                Rovill Motion Studio // Nuremberg • Milan
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
