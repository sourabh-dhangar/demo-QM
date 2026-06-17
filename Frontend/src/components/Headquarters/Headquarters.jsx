import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiCheck, FiArrowRight, FiClock } from 'react-icons/fi';

const trustBadges = [
  "Verified Business",
  "Google Rated",
  "Startup Friendly",
  "Enterprise Ready"
];

const Headquarters = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      {/* Background Grids & Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.05) 1px, transparent 0)',
             backgroundSize: '32px 32px'
           }}
      />
      {/* Soft radial gradients */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none" 
      />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/5 blur-[120px] pointer-events-none" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/20 blur-[1px] pointer-events-none"
          animate={{
            y: [Math.random() * 800, Math.random() * -200],
            x: Math.random() * 200 - 100,
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}

      <div className="relative z-10 max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center bg-white/40 backdrop-blur-3xl rounded-[40px] border border-white/60 p-6 shadow-[0_8px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_50px_rgba(37,99,235,0.08)] transition-all duration-700">
          
          {/* LEFT SIDE (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col pt-8 pb-4 px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-bold tracking-widest uppercase w-fit mb-6 shadow-sm"
            >
              <FiMapPin className="text-sm" />
              Our Headquarters
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6"
            >
              Visit Our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00C6FF]">
                Headquarters
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#64748B] text-lg leading-relaxed mb-8 font-medium"
            >
              Drop by our registered office in Wakad, Pune. Speak with our software architects and discuss your enterprise or startup requirements.
            </motion.p>

            {/* LOCATION CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 backdrop-blur-md rounded-[24px] border border-slate-100 p-6 mb-8 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-100 transition-colors">
                  <FiMapPin className="text-[#2563EB] text-lg" />
                </div>
                <div>
                  <h4 className="text-[#0F172A] font-bold mb-2">Corporate Address</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed font-semibold">
                    Floor No. 201, Arnav Heights,<br />
                    College Road, Near Akshara International School,<br />
                    Wakad, Pimpri-Chinchwad,<br />
                    Maharashtra 411057
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 mb-10"
            >
              <a href="tel:+917020243759" className="flex items-center gap-3 text-[#64748B] hover:text-[#2563EB] transition-colors text-sm font-bold">
                <FiPhone className="text-lg" />
                +91 7020243759
              </a>
              <a href="mailto:quantromind@gmail.com" className="flex items-center gap-3 text-[#64748B] hover:text-[#2563EB] transition-colors text-sm font-bold">
                <FiMail className="text-lg" />
                quantromind@gmail.com
              </a>
              <a href="https://www.quantromind.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#64748B] hover:text-[#2563EB] transition-colors text-sm font-bold">
                <FiGlobe className="text-lg" />
                www.quantromind.com
              </a>
            </motion.div>

            {/* BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#00C6FF] text-white font-bold shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2"
              >
                Get Directions
                <FiArrowRight className="text-lg" />
              </motion.button>
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/80 backdrop-blur-md text-[#0F172A] font-bold border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 shadow-sm transition-all"
              >
                Schedule Meeting
              </motion.button>
            </motion.div>

            {/* TRUST BADGES */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-[#64748B] text-xs font-bold">
                  <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center">
                    <FiCheck className="text-green-500 text-[10px]" />
                  </div>
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE (60%) */}
          <div className="w-full lg:w-[60%] h-[500px] lg:h-[750px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover="hover"
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-[40px] overflow-hidden bg-white/50 backdrop-blur-sm border-2 border-white shadow-[0_20px_60px_rgba(37,99,235,0.1)] group transition-all duration-700"
            >
              {/* Outer Blue Glow */}
              <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_80px_rgba(37,99,235,0.1)] pointer-events-none z-10 transition-all duration-500 group-hover:shadow-[inset_0_0_100px_rgba(37,99,235,0.2)]" />
              
              {/* Google Maps Embed Container */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.429440622271!2d73.76569107590807!3d18.59976216674681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b900455a2ea1%3A0x6b301c29bd2eebe!2sAkshara%20International%20School%2C%20Wakad!5e0!3m2!1sen!2sin!4v1709214000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale-[0.6] contrast-[1.1] opacity-80 hue-rotate-[190deg]" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>

              {/* OVERLAY ELEMENTS */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                {/* Radar Waves / Pulse Effect */}
                <motion.div 
                  animate={{ scale: [1, 3.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute w-32 h-32 rounded-full border-2 border-[#2563EB] bg-[#2563EB]/10"
                />
                <motion.div 
                  animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                  className="absolute w-24 h-24 rounded-full border border-[#00C6FF] bg-[#00C6FF]/20"
                />

                {/* Glow Ring */}
                <div className="absolute w-40 h-40 bg-[#2563EB]/20 rounded-full blur-2xl group-hover:bg-[#2563EB]/30 transition-all duration-500" />

                {/* Custom Marker */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#00C6FF] shadow-[0_0_30px_rgba(37,99,235,0.6)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] border-2 border-white/80 backdrop-blur-md"
                >
                  <span className="text-white font-bold text-2xl">Q</span>
                  {/* Pin tail */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#00C6FF] to-[#2563EB] rotate-45 -z-10 rounded-sm"></div>
                </motion.div>
              </div>

              {/* BOTTOM STRIP */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 z-30 flex items-center justify-between group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <FiClock className="text-[#2563EB] text-lg" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-0.5">Business Hours</p>
                    <p className="text-[#0F172A] font-bold text-sm">Mon - Sat</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#2563EB] font-bold text-sm bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">09:00 AM - 07:00 PM</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Headquarters;
