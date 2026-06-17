import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiArrowUpRight, FiCheckCircle, FiUsers, FiCalendar, FiStar } from 'react-icons/fi';

const STATS = [
  { value: '500+', label: 'PROJECTS DELIVERED', icon: FiCheckCircle },
  { value: '100+', label: 'ENTERPRISE CLIENTS', icon: FiUsers },
  { value: '15+', label: 'YEARS EXPERIENCE', icon: FiCalendar },
  { value: '98%', label: 'CLIENT SATISFACTION', icon: FiStar },
];

const LEFT_STEPS = [
  { title: 'Plan', href: '#plan', subtitle: 'Strategy & Scope' },
  { title: 'Design', href: '#design', subtitle: 'UI/UX & Architecture' },
  { title: 'Develop', href: '#develop', subtitle: 'Coding & Implementation' },
];

const RIGHT_STEPS = [
  { title: 'Release', href: '#release', subtitle: 'Deploy & Launch' },
  { title: 'Feedback', href: '#feedback', subtitle: 'Review & Improve' },
  { title: 'Test', href: '#test', subtitle: 'QA & Validation' },
];

// Simple Reveal Wrapper to replace the missing one
const Reveal = ({ children, delay = 0, width = "auto" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

const StepLink = ({ title, href, subtitle, side, index }) => {
  return (
    <a 
      href={href}
      className={`relative block group z-10 ${side === 'left' ? 'mr-4' : 'ml-4'}`}
    >
      {/* Premium Glass Card (replaces SpotlightCard) */}
      <div className="relative p-8 rounded-[32px] bg-white/80 backdrop-blur-[20px] border border-[#2563EB]/10 shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(37,99,235,0.15)] overflow-hidden">
        
        {/* Dynamic Gradient Wash on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#00C6FF] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

        {/* Decorative colored bar */}
        <div className={`absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full transition-all duration-500 
          ${side === 'left' 
            ? 'bg-[#2563EB] group-hover:w-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]' 
            : 'bg-[#00C6FF] group-hover:w-2 shadow-[0_0_15px_rgba(0,198,255,0.5)]'}`}
        />

        {/* Connection Line to Center (Desktop) */}
        <div className={`hidden lg:block absolute top-1/2 h-[2px] w-16 bg-slate-200 transition-all duration-500 
          ${side === 'left' ? 'group-hover:bg-[#2563EB]' : 'group-hover:bg-[#00C6FF]'}
          ${side === 'left' ? '-right-16 origin-left scale-x-100' : '-left-16 origin-right scale-x-100'}
        `}>
          {/* Dot at the end of connector (Glass Node) */}
          <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-slate-200 shadow-sm transition-all duration-500 group-hover:scale-150 
              ${side === 'left' 
                ? 'group-hover:border-[#2563EB] group-hover:bg-blue-50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] -right-2' 
                : 'group-hover:border-[#00C6FF] group-hover:bg-cyan-50 group-hover:shadow-[0_0_20px_rgba(0,198,255,0.6)] -left-2'}
          `}>
            {/* Inner pulse */}
            <div className={`absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-40 
              ${side === 'left' ? 'bg-[#2563EB]' : 'bg-[#00C6FF]'}`} 
            />
          </div>
        </div>

        <div className="pl-6 flex justify-between items-center relative z-10">
          <div>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block transition-colors duration-500
              ${side === 'left' ? 'text-slate-400 group-hover:text-[#2563EB]' : 'text-slate-400 group-hover:text-[#00C6FF]'}
            `}>
              {subtitle}
            </span>
            <h3 className={`text-2xl font-black text-[#0f172a] transition-colors duration-500 flex items-center gap-2
              ${side === 'left' ? 'group-hover:text-[#2563EB]' : 'group-hover:text-[#00C6FF]'}
            `}>
              {title}
            </h3>
          </div>
          
          {/* Icon Container */}
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12
            ${side === 'left' 
              ? 'bg-blue-50 text-[#2563EB] border border-blue-100 group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
              : 'bg-cyan-50 text-[#00C6FF] border border-cyan-100 group-hover:bg-gradient-to-br group-hover:from-[#00C6FF] group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,198,255,0.4)]'}
          `}>
            <FiArrowUpRight size={22} className="transition-transform group-hover:scale-110" />
          </div>
        </div>
      </div>
    </a>
  );
};

const AgileProcess = () => {
  return (
    <section id="agile-process" className="py-32 bg-white overflow-hidden relative border-t border-slate-100 font-['Inter',sans-serif]">
      
      {/* 80x80 Engineering Grid Pattern */}
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

      {/* Floating Blur Circles & Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#00C6FF]/5 rounded-full blur-[150px]" />
        
        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              x: [null, Math.random() * 50 - 25]
            }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="lg:flex lg:items-center lg:gap-20">
          
          {/* Left Side: Text */}
          <div className="lg:w-1/2 mb-20 lg:mb-0">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#2563EB]/20 shadow-sm mb-6">
                <span className="text-xl">⚡</span>
                <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.3em] uppercase">
                  Development Process
                </span>
              </div>
              
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-[900] text-[#0f172a] mb-6 leading-[1.05] tracking-tight">
                How We Build<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00C6FF]">Digital Excellence</span>
              </h2>
              
              <p className="text-[#64748B] text-lg lg:text-[20px] font-medium leading-relaxed mb-16 max-w-xl">
                At <strong className="text-[#0f172a]">Quantromind</strong>, we don't just write code; we engineer success. Our agile methodology ensures rapid delivery, flexibility, and a product that perfectly aligns with your evolving business needs.
              </p>
            </Reveal>

            {/* Premium Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-6 max-w-xl">
              {STATS.map((stat, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="group cursor-default p-8 rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
                    
                    {/* Hover Wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6 group-hover:scale-110 transition-transform origin-left duration-500">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100 group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#00C6FF] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-500">
                          <stat.icon className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <div className="text-[32px] sm:text-4xl font-black text-slate-800 mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#00C6FF] transition-all duration-500">
                        {stat.value}
                      </div>
                      
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] group-hover:text-blue-600 transition-colors duration-500">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Flow (Zigzag) */}
          <div className="lg:w-1/2 relative perspective-1000">
             
             {/* Central Timeline Axis (Desktop) */}
             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 rounded-full overflow-hidden z-0">
                {/* Continuous Light Beam */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-[#2563EB] to-transparent shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                  animate={{ top: ['-30%', '130%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
             </div>
             
             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-10 z-10">
                
                {/* Left Branch */}
                <div className="space-y-10 lg:mt-0">
                   {LEFT_STEPS.map((step, idx) => (
                     <Reveal key={step.title} width="100%" delay={idx * 0.15}>
                       <StepLink {...step} side="left" index={idx} />
                     </Reveal>
                   ))}
                </div>

                {/* Right Branch - Offset vertically */}
                <div className="space-y-10 lg:mt-32">
                   {RIGHT_STEPS.map((step, idx) => (
                     <Reveal key={step.title} width="100%" delay={(idx + 3) * 0.15}>
                       <StepLink {...step} side="right" index={idx} />
                     </Reveal>
                   ))}
                </div>
                
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgileProcess;
