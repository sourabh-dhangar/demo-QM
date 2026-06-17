import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FiActivity, FiPieChart, FiShoppingCart, FiMap, 
  FiSettings, FiPlayCircle, FiTruck, FiHome, 
  FiArrowRight 
} from 'react-icons/fi';

const industriesData = [
  {
    title: 'Healthcare',
    icon: FiActivity,
    gradient: 'from-blue-400 to-cyan-300',
    description: 'Transforming patient care with secure, compliant digital health solutions.',
    tags: ['Telemedicine', 'EHR Systems', 'Patient Monitoring', 'AI Diagnostics'],
    stats: { projects: '250+', metric: '99% Reliability', support: '24/7 Support' }
  },
  {
    title: 'Finance',
    icon: FiPieChart,
    gradient: 'from-indigo-500 to-blue-400',
    description: 'Secure and scalable fintech solutions for modern banking and trading.',
    tags: ['Fintech Apps', 'Banking Systems', 'Blockchain', 'Risk Analysis'],
    stats: { projects: '180+', metric: 'Bank-Grade Sec', support: '24/7 Support' }
  },
  {
    title: 'E-Commerce',
    icon: FiShoppingCart,
    gradient: 'from-sky-400 to-purple-400',
    description: 'High-conversion retail platforms and intelligent supply chain systems.',
    tags: ['Retail Platforms', 'CRM Systems', 'Payment Gateways', 'Inventory AI'],
    stats: { projects: '300+', metric: '99.9% Uptime', support: '24/7 Support' }
  },
  {
    title: 'Travel & Hosp.',
    icon: FiMap,
    gradient: 'from-teal-400 to-cyan-400',
    description: 'Next-generation booking engines and intelligent itinerary management.',
    tags: ['Booking Engines', 'Hotel Management', 'AR Tours', 'Smart Pricing'],
    stats: { projects: '120+', metric: 'Global Scale', support: '24/7 Support' }
  },
  {
    title: 'Manufacturing',
    icon: FiSettings,
    gradient: 'from-blue-500 to-slate-400',
    description: 'Industry 4.0 automation, IoT tracking, and smart factory solutions.',
    tags: ['IoT Integration', 'ERP Systems', 'Predictive Maint.', 'CAD/CAM'],
    stats: { projects: '150+', metric: 'IoT Enabled', support: '24/7 Support' }
  },
  {
    title: 'Entertainment',
    icon: FiPlayCircle,
    gradient: 'from-purple-500 to-pink-400',
    description: 'Immersive streaming platforms and interactive social media applications.',
    tags: ['Streaming Tech', 'VR/AR Apps', 'Content Delivery', 'Social Platforms'],
    stats: { projects: '200+', metric: 'Low Latency', support: '24/7 Support' }
  },
  {
    title: 'Logistics',
    icon: FiTruck,
    gradient: 'from-blue-500 to-emerald-400',
    description: 'End-to-end fleet tracking and intelligent warehouse management.',
    tags: ['Fleet Tracking', 'WMS Software', 'Route AI', 'Supply Chain'],
    stats: { projects: '140+', metric: 'Real-time Track', support: '24/7 Support' }
  },
  {
    title: 'Real Estate',
    icon: FiHome,
    gradient: 'from-indigo-400 to-cyan-400',
    description: 'Proptech solutions for property management and virtual real estate tours.',
    tags: ['Property Mgmt', 'Virtual Tours', 'Market Analysis', 'Smart Contracts'],
    stats: { projects: '160+', metric: 'Secure Listings', support: '24/7 Support' }
  }
];

const IndustryCard = ({ data, index }) => {
  const cardRef = useRef(null);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      style={{ perspective: 1000 }}
      className="w-full h-[480px] perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative w-full h-full rounded-[32px] bg-white/70 backdrop-blur-xl border border-[#2563EB]/10 shadow-[0_10px_40px_rgba(37,99,235,0.05)] cursor-pointer transition-all duration-500 hover:shadow-[0_30px_70px_rgba(37,99,235,0.15)] hover:border-blue-400 overflow-hidden flex flex-col justify-between p-8 hover:-translate-y-4"
      >
        {/* Dynamic Hover Gradient Wash */}
        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

        {/* Top: Glowing Icon */}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-blue-200 transition-colors duration-500">
            <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full animate-pulse`} />
            <data.icon className="w-8 h-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-500 relative z-10" />
          </div>
        </div>

        {/* Center: Title & Description */}
        <div style={{ transform: "translateZ(40px)" }} className="relative z-10 mt-6 flex-1">
          <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500">
            {data.title}
          </h3>
          <p className="text-slate-600 text-sm font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
            {data.description}
          </p>
        </div>

        {/* Bottom: Default Tags -> Hidden Stats on Hover */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-32 overflow-hidden mt-4">
          
          {/* Tags Container (Slides down on hover) */}
          <div className="absolute inset-0 flex flex-wrap gap-2 content-start transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-full group-hover:opacity-0">
            {data.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500 rounded-full border border-slate-200">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats Container (Slides up on hover) */}
          <div className="absolute inset-0 flex flex-col justify-end translate-y-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <div className="bg-blue-50/80 backdrop-blur-md rounded-2xl p-4 border border-blue-100 shadow-inner flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Projects</span>
                <span className="text-sm font-black text-blue-600">{data.stats.projects}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Performance</span>
                <span className="text-sm font-black text-blue-600">{data.stats.metric}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Availability</span>
                <span className="text-sm font-black text-blue-600">{data.stats.support}</span>
              </div>
            </div>
          </div>
          
        </div>

      </motion.div>
    </motion.div>
  );
};

const Industries = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#ffffff] overflow-hidden font-['Inter',sans-serif] border-t border-slate-100">
      
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
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              x: [null, Math.random() * 50 - 25]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Background Radial Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FF] rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#DCE6F5] bg-white/80 backdrop-blur-md shadow-sm mb-8"
          >
            <span className="text-xl">🏢</span>
            <span className="text-[#0f172a] text-[12px] font-bold tracking-[3px] uppercase">
              INDUSTRY EXPERTISE
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-[900] leading-[1.05] tracking-tight text-[#0f172a] mb-6"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#00C6FF]">Transform</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[20px] font-medium text-[#64748B] max-w-[800px] leading-relaxed"
          >
            We build industry-specific digital solutions that accelerate growth, automate operations, and create competitive advantages.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industriesData.map((data, index) => (
            <IndustryCard key={index} data={data} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 flex flex-col items-center justify-center"
        >
          <p className="text-slate-600 font-bold text-lg mb-6">Need a custom industry solution?</p>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#00C6FF] text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 text-lg">
            <div className="relative z-10 flex items-center gap-3">
              <span>Discuss Your Project</span>
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

export default Industries;
