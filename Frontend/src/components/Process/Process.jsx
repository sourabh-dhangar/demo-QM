import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCompass, FiLayers, FiCode, FiSend, FiArrowRight } from 'react-icons/fi';

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business ecosystem, conducting thorough research to understand your unique challenges and long-term goals.',
    icon: FiCompass,
    color: '#2563EB', // Blue
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    num: '02',
    title: 'Architecture & Design',
    description: 'Our engineers architect a scalable solution, ensuring your software is not just functional but also highly maintainable.',
    icon: FiLayers,
    color: '#06B6D4', // Cyan
    gradient: 'from-cyan-500 to-cyan-400'
  },
  {
    num: '03',
    title: 'Development & Testing',
    description: 'We perform exhaustive testing—from unit tests to end-to-end scenarios—to ensure that every feature works flawlessly.',
    icon: FiCode,
    color: '#6366F1', // Indigo
    gradient: 'from-indigo-600 to-indigo-400'
  },
  {
    num: '04',
    title: 'Launch & Optimization',
    description: 'We handle the seamless launch and provide ongoing support and optimization strategies to help your digital product grow.',
    icon: FiSend,
    color: '#2563EB', // Blue
    gradient: 'from-blue-500 to-cyan-500'
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden font-['Inter',sans-serif] border-t border-slate-100">
      
      {/* 80x80 Engineering Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8EDF5 1px, transparent 1px),
            linear-gradient(to bottom, #E8EDF5 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              x: [null, Math.random() * 50 - 25]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Ambient Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB] rounded-full blur-[200px] opacity-[0.05] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#DCE6F5] bg-white/80 backdrop-blur-md shadow-sm mb-8"
          >
            <span className="text-xl">⚡</span>
            <span className="text-[#0f172a] text-[12px] font-bold tracking-[3px] uppercase">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-[900] leading-[1.05] tracking-tight text-[#0f172a] mb-6"
          >
            How We Turn Ideas Into<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00C6FF]">Digital Success</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[20px] font-medium text-[#64748B] max-w-[800px] leading-relaxed"
          >
            Our proven development methodology transforms concepts into scalable digital products through strategic planning, engineering excellence, and continuous innovation.
          </motion.p>
        </div>

        {/* Horizontal Process Journey */}
        <div className="relative w-full max-w-6xl mx-auto mb-20 lg:mb-32">
          
          {/* Animated Glowing Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-[2px] bg-slate-200 z-0 -translate-y-1/2">
            {/* Animated Light Beam */}
            <motion.div 
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"
              animate={{ 
                left: ['-10%', '110%'],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: '30%' }}
            />
            {/* Active Progress Line */}
            <motion.div 
              className="absolute top-0 bottom-0 left-0 bg-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-700 ease-out"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Timeline Nodes & Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative z-10">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center relative"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  
                  {/* Floating Glass Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-full max-w-[340px] h-[280px] p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-[#2563EB]/10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default flex flex-col items-center text-center
                      ${isActive 
                        ? '-translate-y-4 shadow-[0_30px_60px_rgba(37,99,235,0.12)] border-[#2563EB]/40' 
                        : 'shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)]'}
                      relative overflow-hidden group
                    `}
                  >
                    {/* Number Background Watermark */}
                    <span className="absolute -top-4 -right-2 text-[100px] font-black text-slate-50 transition-colors duration-500 group-hover:text-blue-50 z-0">
                      {step.num}
                    </span>

                    <div className="relative z-10 flex flex-col items-center h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                        ${isActive ? `bg-gradient-to-br ${step.gradient} text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] scale-110` : 'bg-slate-100 text-slate-500'}
                      `}>
                        <step.icon size={28} className={isActive ? 'animate-pulse' : ''} />
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300
                        ${isActive ? 'text-[#0f172a]' : 'text-slate-700'}
                      `}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Subtle Gradient Glow inside active card */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} transition-opacity duration-500 pointer-events-none z-0
                      ${isActive ? 'opacity-[0.03]' : 'opacity-0'}
                    `} />
                  </motion.div>

                  {/* Timeline Node (Desktop Only) */}
                  <div className="hidden lg:flex absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-full justify-center items-center pointer-events-none mt-[160px]">
                    <div className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500
                      ${isActive ? 'bg-[#2563EB] shadow-[0_0_20px_rgba(37,99,235,0.6)] scale-125' : 'bg-slate-200 border-4 border-white'}
                    `}>
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-[#2563EB] animate-ping opacity-40" />
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-center"
        >
          <p className="text-slate-600 font-bold text-lg mb-6">Need help building your next product?</p>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#00C6FF] text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 text-lg">
            <div className="relative z-10 flex items-center gap-3">
              <span>Start Your Project</span>
              <FiArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
            </div>
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
