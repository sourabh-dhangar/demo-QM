import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiCheck, FiChevronDown } from 'react-icons/fi';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

// CountUp Component
const CountUp = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Expertise Category Accordion Component
const ExpertiseCategory = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 lg:border-none pb-4 lg:pb-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between lg:block text-left group"
      >
        <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-0 lg:mb-3">{title}</p>
        <div className="lg:hidden text-[#64748B] group-hover:text-[#2563EB] transition-colors">
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <FiChevronDown />
          </motion.div>
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:!h-auto lg:!opacity-100 overflow-hidden"
      >
        <ul className="space-y-2.5 mt-3 lg:mt-0">
          {items.map(item => (
            <li key={item}>
              <a href="#" className="text-[#64748B] hover:text-[#2563EB] text-sm font-medium transition-colors block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const trustMetrics = [
  { value: 50, suffix: "+", label: "Projects Delivered", isNumber: true },
  { value: 100, suffix: "%", label: "Client Satisfaction", isNumber: true },
  { value: null, label: "Global Clients", textValue: "Global Clients", isNumber: false },
  { value: null, label: "AI Powered Solutions", textValue: "AI Powered Solutions", isNumber: false }
];

const technologies = [
  "React", "Angular", "Node.js", "Python", "AWS", "Flutter", 
  "Salesforce", "AI/ML", "MongoDB", "PostgreSQL", "Docker", "TypeScript"
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative bg-white pt-24 pb-8 overflow-hidden font-sans border-t border-slate-100"
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.05) 1px, transparent 0)',
             backgroundSize: '40px 40px'
           }}
      />
      <motion.div 
        animate={{ 
          x: [0, 30, -30, 0],
          y: [0, 20, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 40, 0],
          y: [0, -30, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6">
        
        {/* 1. TRUST METRICS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {trustMetrics.map((metric, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur-xl border border-blue-50 hover:border-blue-200 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              {metric.isNumber ? (
                <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2 font-mono tracking-tight group-hover:scale-105 transition-transform">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
              ) : (
                <div className="text-xl md:text-2xl font-bold text-[#2563EB] mb-2 leading-tight group-hover:scale-105 transition-transform h-12 flex items-center justify-center">
                  {metric.textValue}
                </div>
              )}
              {metric.isNumber && <div className="text-[#64748B] font-medium text-sm md:text-base">{metric.label}</div>}
            </motion.div>
          ))}
        </motion.div>

        {/* 2. MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* COLUMN 1: Company (lg:col-span-4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#00C6FF] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-2xl">Q</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] leading-tight tracking-tight">QUANTROMIND</h3>
                <p className="text-[#64748B] text-[10px] font-bold tracking-widest uppercase">Private Limited</p>
              </div>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed mb-8">
              AI-powered full-stack mobile & web app innovation. We transform ideas into digital reality with cutting-edge technology and enterprise-grade architecture.
            </p>
            <div className="flex flex-col gap-3">
              {['ISO Certified', 'Top Rated Agency', 'Innovation First'].map((badge, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-[#0F172A] w-fit">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <FiCheck className="text-[#2563EB] text-xs" />
                  </div>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Contact (lg:col-span-3) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-lg font-bold text-[#0F172A] mb-6 tracking-tight">Contact Us</h4>
            <div className="space-y-4 mb-6">
              <a href="tel:+917020243759" className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 shadow-sm transition-colors group">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#2563EB]"><FiPhone /></div>
                  <div>
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-1">Call Us Directly</p>
                    <p className="text-[#0F172A] font-semibold">+91 7020243759</p>
                  </div>
                </div>
              </a>
              <a href="mailto:quantromind@gmail.com" className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 shadow-sm transition-colors group">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#2563EB]"><FiMail /></div>
                  <div>
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-1">Send an Email</p>
                    <p className="text-[#0F172A] font-semibold truncate">quantromind@gmail.com</p>
                  </div>
                </div>
              </a>
              <div className="block p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-[#2563EB]"><FiMapPin /></div>
                  <div>
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-[#0F172A] font-semibold text-sm leading-snug">Wakad, Pimpri-Chinchwad,<br />MH 411057</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#00C6FF] text-white font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              Quick Contact Form
            </button>
          </motion.div>

          {/* COLUMN 3: Expertise (lg:col-span-2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-[#0F172A] mb-6 tracking-tight hidden lg:block">Expertise</h4>
            <div className="space-y-1 lg:space-y-6">
              <ExpertiseCategory 
                title="Development" 
                items={['Web App Development', 'Mobile Apps', 'Enterprise Software']} 
              />
              <ExpertiseCategory 
                title="Design" 
                items={['UI/UX Design', 'Prototyping']} 
              />
              <ExpertiseCategory 
                title="AI & Data" 
                items={['AI & Machine Learning', 'Data Engineering']} 
              />
              <ExpertiseCategory 
                title="Company" 
                items={['About Us', 'Careers', 'Products', 'Write For Us']} 
              />
            </div>
          </motion.div>

          {/* COLUMN 4: Technologies + Socials (lg:col-span-3) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="text-lg font-bold text-[#0F172A] mb-6 tracking-tight">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {technologies.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-md border border-slate-200 text-sm font-semibold text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] hover:shadow-[0_4px_15px_rgba(37,99,235,0.15)] transition-all cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            <h4 className="text-lg font-bold text-[#0F172A] mb-6 tracking-tight">Connect With Us</h4>
            <div className="flex items-center gap-4">
              {[FaLinkedinIn, FaInstagram, FaFacebookF].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-10 blur-md transition-opacity"></div>
                  <Icon className="text-xl relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#64748B] text-sm font-semibold">
            © 2026 Quantromind PVT LTD. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#64748B]">
            <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Sitemap</a>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
