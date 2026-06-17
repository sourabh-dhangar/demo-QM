import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden selection:bg-blue-400/20">

      {/* ═══════════════════════════════════════════════════════════════
          FULLSCREEN BACKGROUND VIDEO
      ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <video
          src="/robot.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Lighter overlay — video clearly visible, text still readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b18]/80 via-[#070b18]/50 to-[#070b18]/20" />
        {/* Bottom gradient fade to white (next section) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f6f9ff] to-transparent" />
      </div>

      {/* Subtle animated gradient orbs for extra depth */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#2563EB]/8 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#06B6D4]/6 rounded-full blur-[100px]"
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT — OVERLAY ON VIDEO
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-24 w-full">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* Left Content — Text */}
          <div className="w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 backdrop-blur-md text-[#60A5FA] text-[11px] font-semibold tracking-wide uppercase mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
              </span>
              Next-Gen AI Software Company
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[76px] leading-[1.06] font-extrabold tracking-tight text-white mb-5 sm:mb-6"
            >
              Build Your <br className="hidden sm:block" />
              Business with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#06B6D4]">
                Quantromind.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal"
            >
              We deliver premium digital solutions that help your business scale smarter. Transform your ideas into{' '}
              <strong className="text-white font-semibold">world-class software</strong> powered by advanced AI technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold transition-all shadow-[0_8px_30px_-6px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_40px_-6px_rgba(37,99,235,0.6)] w-full sm:w-auto"
              >
                Discuss Requirement
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold transition-all backdrop-blur-md w-full sm:w-auto"
              >
                Our Services
              </motion.button>
            </motion.div>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-2 justify-center lg:justify-start"
            >
              {[
                'Custom Software',
                'AI Powered',
                'Cloud Native',
                'Enterprise Grade',
              ].map((label, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-[#3B82F6] text-sm">✦</span>}
                  <span className="text-sm sm:text-[15px] font-medium text-[#94A3B8] hover:text-white transition-colors cursor-default">{label}</span>
                </React.Fragment>
              ))}
            </motion.div>

          </div>



        </div>

      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#64748B] text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;