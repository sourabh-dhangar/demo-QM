import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FiCompass, FiPenTool, FiCode, FiShield, FiSend, FiMessageSquare,
  FiCheckCircle, FiUsers, FiClock, FiCpu
} from 'react-icons/fi';

const workflowSteps = [
  {
    title: 'Plan',
    subtitle: 'Strategy & Scope',
    desc: 'Research and define the roadmap.',
    icon: FiCompass,
    angle: 0, // Top
  },
  {
    title: 'Design',
    subtitle: 'UI/UX & Architecture',
    desc: 'Craft intuitive interfaces & systems.',
    icon: FiPenTool,
    angle: 60, // Top Right
  },
  {
    title: 'Develop',
    subtitle: 'Coding & Implementation',
    desc: 'Build scalable and secure code.',
    icon: FiCode,
    angle: 120, // Bottom Right
  },
  {
    title: 'Test',
    subtitle: 'QA & Validation',
    desc: 'Exhaustive testing & security checks.',
    icon: FiShield,
    angle: 180, // Bottom
  },
  {
    title: 'Release',
    subtitle: 'Deploy & Launch',
    desc: 'Seamless deployment to production.',
    icon: FiSend,
    angle: 240, // Bottom Left
  },
  {
    title: 'Feedback',
    subtitle: 'Review & Improve',
    desc: 'Gather data and iterate rapidly.',
    icon: FiMessageSquare,
    angle: 300, // Top Left
  }
];

const statsData = [
  { value: '50+', label: 'Projects Delivered', icon: FiCheckCircle },
  { value: '100%', label: 'Client Satisfaction', icon: FiUsers },
  { value: '24/7', label: 'Dedicated Support', icon: FiClock },
  { value: 'AI', label: 'Powered Development', icon: FiCpu }
];

const Workflow = () => {
  const containerRef = useRef(null);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-[#ffffff] overflow-hidden font-['Inter',sans-serif] border-t border-slate-100"
    >
      {/* 80x80 Engineering Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Particles & Energy Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#2563EB] opacity-30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
            }}
            animate={{ 
              y: [null, Math.random() * -150 - 50],
              x: [null, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Ambient Radial Glows with Parallax */}
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[180px] opacity-[0.05] pointer-events-none z-0" 
      />
      <motion.div 
        style={{ x: useTransform(springX, v => -v), y: useTransform(springY, v => -v) }}
        className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#00C6FF] rounded-full blur-[180px] opacity-[0.06] pointer-events-none z-0" 
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#DCE6F5] bg-white/80 backdrop-blur-md shadow-sm mb-8"
          >
            <span className="text-xl">⚡</span>
            <span className="text-[#0f172a] text-[12px] font-bold tracking-[3px] uppercase">
              DEVELOPMENT WORKFLOW
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-[900] leading-[1.05] tracking-tight text-[#0f172a] mb-6"
          >
            From Idea to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00C6FF]">Digital Excellence</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[20px] font-medium text-[#64748B] max-w-[800px] leading-relaxed"
          >
            Our proven six-step process ensures every project is delivered with precision, quality, and measurable business impact.
          </motion.p>
        </div>

        {/* Circular Digital Command Center (Desktop) */}
        <div className="hidden lg:flex relative w-full h-[1000px] items-center justify-center mb-24">
          
          {/* Animated SVG Connection Ring */}
          <svg className="absolute w-[800px] h-[800px] pointer-events-none z-0" style={{ transform: "rotate(-90deg)" }}>
            {/* Background Ring */}
            <circle cx="400" cy="400" r="380" fill="none" stroke="rgba(37,99,235,0.05)" strokeWidth="3" />
            
            {/* Animated Beam */}
            <motion.circle 
              cx="400" 
              cy="400" 
              r="380" 
              fill="none" 
              stroke="url(#gradientStroke)" 
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="400 2000"
              animate={{ strokeDashoffset: [2400, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#00C6FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central AI Core */}
          <div className="relative z-20 w-[280px] h-[280px] rounded-full bg-white/40 backdrop-blur-[30px] border border-white/60 shadow-[0_30px_100px_rgba(37,99,235,0.15)] flex flex-col items-center justify-center p-8 group overflow-hidden">
            
            {/* Central Glow */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#00C6FF]/20"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Rotating Rings */}
            <motion.div 
              className="absolute inset-2 rounded-full border-2 border-dashed border-[#2563EB]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-6 rounded-full border border-[#00C6FF]/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex flex-col items-center text-center group-hover:scale-105 transition-transform duration-700">
              <FiCpu className="w-12 h-12 text-[#2563EB] mb-4 animate-pulse" />
              <h3 className="text-xl font-black text-[#0f172a] leading-tight">Quantromind<br/>Workflow<br/>Engine</h3>
            </div>
          </div>

          {/* Orbiting Nodes */}
          {workflowSteps.map((step, idx) => {
            const radius = 380;
            const angleRad = (step.angle - 90) * (Math.PI / 180);
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 100 }}
                className="absolute z-30 group cursor-default"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-[220px] h-[220px] bg-white/80 backdrop-blur-[20px] border border-[#2563EB]/10 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/40 relative overflow-hidden">
                  
                  {/* Hover Background Wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#00C6FF] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center text-[#2563EB] border border-[#2563EB]/10 mb-4 group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#00C6FF] group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] group-hover:rotate-[15deg]">
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-xl font-black text-[#0f172a] mb-1 group-hover:text-[#2563EB] transition-colors">{step.title}</h4>
                  <p className="text-[10px] font-bold tracking-widest text-[#00C6FF] uppercase mb-2">{step.subtitle}</p>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Grid Layout (Hidden on Desktop) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20 relative">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full bg-white/80 backdrop-blur-[20px] border border-[#2563EB]/10 rounded-[32px] shadow-sm flex flex-col items-center text-center p-8 group hover:border-[#2563EB]/40 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center text-[#2563EB] border border-[#2563EB]/10 mb-4 group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#00C6FF] group-hover:text-white transition-all">
                <step.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-[#0f172a] mb-1">{step.title}</h4>
              <p className="text-[10px] font-bold tracking-widest text-[#00C6FF] uppercase mb-2">{step.subtitle}</p>
              <p className="text-xs font-medium text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Premium Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto z-20 relative">
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col items-center justify-center p-10 bg-white/70 backdrop-blur-xl border border-slate-100 rounded-[24px] transition-all duration-500 hover:border-[#2563EB]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-2 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors duration-500">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#00C6FF] transition-all duration-500">
                {stat.value}
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] text-center group-hover:text-[#2563EB] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;
