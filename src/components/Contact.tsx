import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Clock, CheckCircle2, ShieldAlert } from "lucide-react";
import { ContactFormInput } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    company: "",
    interest: "3D Product Visualization",
    timeline: "3-6 Months",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedBudget, setSelectedBudget] = useState<string>("$25K - $50K");

  const interests = [
    "Footwear Design & Prototyping",
    "3D Product Visualization",
    "Brand Identity & Story",
    "Digital Web Showcases",
    "Bespoke Collaboration"
  ];

  const budgets = [
    "<$25K",
    "$25K - $50K",
    "$50K - $100K",
    "$100K+"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
      return;
    }

    setFormState("submitting");

    // Luxury transmission timing simulation
    setTimeout(() => {
      setFormState("success");
    }, 2200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0c] relative overflow-hidden">
      {/* Dynamic background lights (low key) */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 item-start">
          
          {/* Left Panel: Studio Contact Info (Col: 5) */}
          <div className="lg:col-span-5 flex flex flex-col justify-between h-auto lg:h-[600px]">
            <div>
              <span className="font-mono text-xs text-amber-500 tracking-widest font-bold uppercase block mb-3">
                SECURE ENGAGEMENT HUB
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none mb-6">
                Let’s Forge The Future.
              </h2>
              <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mb-8">
                Due to the customized nature of ours materials supply lines and strict CGI rendering pipelines, we accept a selective cohort of active projects per academic quarter. Initiate contact below to schedule a presentation or request our material Swatch Box.
              </p>
            </div>

            {/* Studio Headquarters coordinates */}
            <div className="space-y-6 border-t border-white/5 pt-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                    MILAN SHOWROOM [HQ]
                  </span>
                  <p className="text-sm font-light text-neutral-300">
                    Via Montenapoleone 18, 20121 Milano MI, Italy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                    SECURE INTAKE EMAIL
                  </span>
                  <a
                    href="mailto:design@aurafootwear.com"
                    className="text-sm font-light text-amber-400 hover:underline"
                  >
                    design@aurafootwear.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                    STUDIO OPERATING REEL
                  </span>
                  <p className="text-sm font-light text-neutral-300">
                    Mon - Fri: 09:00 - 18:00 CET // UTC +1
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Luxury Consultation Request Form (Col: 7) */}
          <div className="lg:col-span-7 bg-[#121214]/60 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-2xl">
            
            {/* Ambient status indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-[#8e8e93] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>MILAN OVERLINK: UP</span>
            </div>

            <AnimatePresence mode="wait">
              {formState === "idle" || formState === "error" ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Validation feedback line */}
                  {formState === "error" && (
                    <div className="p-4 bg-red-950/40 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2 font-mono">
                      <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                      <span>CRITICAL: Please provide your Name and Corporate Email Address before transmitting.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name input */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-neutral-700 focus:border-amber-400 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-neutral-600 font-sans"
                        placeholder="Project Principal Name *"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-orange-500 group-focus-within:w-full transition-all duration-300" />
                    </div>

                    {/* Email input */}
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-neutral-700 focus:border-amber-400 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-neutral-600 font-sans"
                        placeholder="Corporate Email Address *"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-orange-500 group-focus-within:w-full transition-all duration-300" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Company */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-neutral-700 focus:border-amber-400 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-neutral-600 font-sans"
                        placeholder="Brand or Organization Name"
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-orange-500 group-focus-within:w-full transition-all duration-300" />
                    </div>

                    {/* Primary Interest Dropdown */}
                    <div className="relative">
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-neutral-700 focus:border-amber-400 py-3 text-neutral-300 text-sm outline-none cursor-pointer transition-colors"
                      >
                        {interests.map((item) => (
                          <option key={item} value={item} className="bg-[#121214] text-white">
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tesla-Style Minimal Budget Toggle Selector */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                      Target Project Allocation Range
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((val) => {
                        const isSel = selectedBudget === val;
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setSelectedBudget(val)}
                            className={`py-3 px-1 rounded-xl text-xs font-mono border tracking-widest text-center transition-all cursor-pointer ${
                              isSel
                                ? "bg-white text-black border-white font-semibold"
                                : "bg-neutral-900/40 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-neutral-700 focus:border-amber-400 py-3 text-white text-sm outline-none resize-none transition-colors duration-300 placeholder-neutral-600 font-sans"
                      placeholder="Describe your design parameters or release timeline..."
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-orange-500 group-focus-within:w-full transition-all duration-300" />
                  </div>

                  {/* Submission Trigger */}
                  <button
                    type="submit"
                    className="w-full py-4 text-center rounded-full bg-white hover:bg-amber-400 text-black font-semibold text-xs font-mono tracking-wider transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>TRANSMIT SPECIFICATIONS</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              ) : formState === "submitting" ? (
                /* Cinematic Transmitter Loader Overlay */
                <motion.div
                  key="submitting-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[450px] flex flex-col justify-center items-center text-center p-6"
                >
                  <div className="relative h-16 w-16 mb-6">
                    <span className="absolute inset-0 rounded-full border-2 border-amber-500/10" />
                    <span className="absolute inset-0 rounded-full border-t-2 border-amber-500 animate-spin" />
                  </div>
                  <span className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-1.5">
                    INITIATING TELEMETRY SYNC
                  </span>
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono text-neutral-500 animate-pulse">
                      Establishing handshake with Milan node...
                    </p>
                    <p className="text-[11px] font-mono text-neutral-600 uppercase">
                      SYS CODE: 0x7E3AABFD // SECURE VPN OK
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* Beautiful Form Transmit Confirmed */
                <motion.div
                  key="success-overlay"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[450px] flex flex-col justify-center items-center text-center p-6"
                >
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Transmission Authenticated
                  </h4>
                  <p className="text-neutral-400 font-light text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
                    We have successfully registered your design intent. One of our lead footwear architects will review the budget parameters and reach out within 24 standard business hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-white/5 font-mono text-xs text-neutral-300 hover:text-white hover:border-white/20 transition-all uppercase cursor-pointer"
                  >
                    RESET TRANSMITTER
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
