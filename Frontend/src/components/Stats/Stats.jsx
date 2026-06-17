import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const statsData = [
  { value: 50, suffix: '+', label: 'PROJECTS DELIVERED' },
  { value: 10, suffix: '+', label: 'AI AGENTS DEPLOYED' },
  { value: 99, suffix: '%', label: 'CLIENT SATISFACTION' },
  { value: 24, suffix: '/7', label: 'SUPPORT AVAILABLE' },
];

// Animated Counter Component
const Counter = ({ from, to, suffix }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="relative w-full py-20 bg-[#f6f9ff] overflow-hidden border-t border-slate-100">
      
      {/* Very soft background glow to match the image aesthetic */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-40">
        <div className="w-[800px] h-[300px] bg-blue-50 blur-[120px] rounded-[100%]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full"
        >
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}
              className="flex flex-col items-center justify-center py-12 px-8 rounded-[32px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/60 transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl lg:text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[11px] md:text-xs font-extrabold text-slate-500 uppercase tracking-[0.25em] text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
