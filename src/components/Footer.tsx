import { ArrowUp, Instagram, Twitter, Linkedin, Shield } from "lucide-react";

export default function Footer() {
  const socialIcons = [
    { icon: <Instagram className="w-4 h-4" />, href: "#", name: "Instagram" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/5">
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-orange-600 to-amber-300 flex items-center justify-center border border-white/10 shadow-lg" />
              <span className="font-mono text-sm tracking-[0.25em] text-amber-500 font-bold uppercase">
                AURA STUDIO
              </span>
            </div>
            <p className="text-neutral-400 font-light text-xs sm:text-sm max-w-sm leading-relaxed">
              We shape the aesthetic trajectory of global footwear release cultures. Built on structural performance parameters and high fashion principles.
            </p>
            {/* Socials array */}
            <div className="flex gap-3">
              {socialIcons.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  className="p-2.5 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label={`Visit our ${soc.name}`}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase block">
              PORTFOLIOS & LAB
            </span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Project VENTURE-X
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Project AERORUN
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Project SYNAPSE LUX
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Anatomy Diagnostics
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase block">
              ORGANIZATION
            </span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Method
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Careers (1)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Press Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Action */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 rounded-xl bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex items-center gap-2 font-mono text-[10px] uppercase cursor-pointer"
              aria-label="Back to landing crest"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Aura Footwear Design Studio Inc. All rights protected.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-neutral-300 cursor-pointer">
              <Shield className="w-3.5 h-3.5" />
              <span>NDA Vault</span>
            </span>
            <span className="hover:text-neutral-300 cursor-pointer">Privacy Guidelines</span>
            <span className="hover:text-neutral-300 cursor-pointer">Service Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
