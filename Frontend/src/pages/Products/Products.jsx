import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Rocket, ArrowUpRight, Play, Activity, Users, 
  Database, Globe, Building2, Cpu, Cloud, Lock, Plane, ShoppingCart, Home, 
  Factory, GraduationCap, Wallet, HeartPulse, Truck
} from 'lucide-react';
import SEO from '../../components/ui/SEO';

const ease = [0.16, 1, 0.3, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

const Counter = ({ end }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(end.replace(/\D/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');
  const prefix = end.startsWith('+') ? '+' : '';
  const [val, setVal] = useState(0);
  
  useEffect(() => {
    if (!inView || num === 0) {
      if (inView && num === 0) setVal(end); // for non-numeric like "AI Powered"
      return;
    }
    let f = 0;
    const id = setInterval(() => { f++; setVal(Math.round((f / 45) * num)); if (f >= 45) clearInterval(id); }, 25);
    return () => clearInterval(id);
  }, [inView, num, end]);

  if (num === 0) return <span ref={ref}>{end}</span>;
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
};

const ScrollReveal = ({ children, className = "", variants = stagger }) => (
  <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className={className}>
    {children}
  </motion.div>
);

const Products = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);

  // Spotlight effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // 1. HERO DATA
  const HERO_STATS = [
    { val: '8+', label: 'Products' },
    { val: '50+', label: 'Projects Delivered' },
    { val: '99%', label: 'Client Satisfaction' },
    { val: '24/7', label: 'Support' }
  ];

  // 2. WHY OUR PRODUCTS
  const WHY_PRODUCTS = [
    { title: 'Enterprise Ready', icon: Building2, desc: 'Built for millions of users with high availability.' },
    { title: 'AI Powered', icon: Cpu, desc: 'Intelligent automation embedded in the core.' },
    { title: 'Cloud Native', icon: Cloud, desc: 'Seamlessly auto-scaling infrastructure.' },
    { title: 'Highly Secure', icon: Lock, desc: 'Bank-grade encryption and access controls.' }
  ];

  // 3 & 4. SAAS PRODUCTS
  const SAAS_PRODUCTS = [
    {
      title: 'HRMS',
      desc: 'A comprehensive Human Resource Management System built to handle enterprise-scale employee data, payroll processing, and performance tracking seamlessly.',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Automated Payroll Processing', 'Employee Self-Service Portal', 'Leave & Attendance Tracking', 'Performance Appraisals']
    },
    {
      title: 'Billing System',
      desc: 'An intelligent invoicing and billing dashboard designed for rapid transaction processing, recurring subscriptions, and detailed financial analytics.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      stack: ['React', 'Python', 'PostgreSQL', 'AWS'],
      features: ['Automated Invoicing', 'Multi-currency Support', 'Real-time Tax Calculation', 'Detailed Financial Reports']
    },
    {
      title: 'Raktdaan',
      desc: 'A critical hospital management and blood donation platform ensuring real-time inventory tracking and rapid emergency response coordination.',
      img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80',
      stack: ['React Native', 'Node.js', 'Firebase', 'Google Maps'],
      features: ['Real-time Blood Inventory', 'Donor Matching Algorithm', 'Hospital Network Sync', 'Emergency SOS Alerts']
    }
  ];

  // 5. CUSTOM CLIENT SOLUTIONS
  const CLIENT_SOLUTIONS = [
    { name: 'Photo Event', category: 'Media & Entertainment', stack: ['React', 'Node.js', 'AWS S3'], img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80', features: ['Real-time photo sync', 'AI face tagging', 'High-res gallery'] },
    { name: 'Bus Ticket Booking System', category: 'Travel & Logistics', stack: ['Angular', 'Spring Boot', 'PostgreSQL'], img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80', features: ['Live seat mapping', 'Dynamic pricing', 'Payment gateway'] },
    { name: 'Electronic Seva (E-Seva)', category: 'Government Infrastructure', stack: ['Vue.js', 'Python', 'MongoDB'], img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80', features: ['Secure citizen portal', 'Automated workflows', 'Document verification'] },
    { name: 'Future AI Products', category: 'AI Research', stack: ['React', 'TensorFlow', 'Docker'], img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80', features: ['Predictive analytics', 'NLP integration', 'Machine learning APIs'] }
  ];

  // 6. NEW - INDUSTRIES WE SERVE
  const INDUSTRIES = {
    healthcare: { title: 'Healthcare', icon: HeartPulse, desc: 'Medical software, telemedicine, hospital management & AI diagnostics.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80', tags: ['AI', 'Cloud', 'Analytics', 'Mobile'] },
    finance: { title: 'Finance', icon: Wallet, desc: 'FinTech, banking, payments & fraud detection.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', tags: ['Security', 'Cloud', 'Analytics'] },
    education: { title: 'Education', icon: GraduationCap, desc: 'LMS, online learning, student portal & virtual classroom.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80', tags: ['Cloud', 'Mobile', 'Video'] },
    manufacturing: { title: 'Manufacturing', icon: Factory, desc: 'ERP, IoT, factory automation & inventory.', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80', tags: ['IoT', 'Automation', 'Cloud'] },
    retail: { title: 'Retail & E-Commerce', icon: ShoppingCart, desc: 'Online store, CRM, POS & inventory.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80', tags: ['E-Commerce', 'Mobile', 'CRM'] },
    real_estate: { title: 'Real Estate', icon: Home, desc: 'Property management, booking, CRM & analytics.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', tags: ['Analytics', 'Cloud', 'CRM'] },
    travel: { title: 'Travel', icon: Plane, desc: 'Booking platform, fleet management & hotel management.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80', tags: ['Mobile', 'Cloud', 'API'] },
    logistics: { title: 'Logistics', icon: Truck, desc: 'Warehouse automation, fleet tracking & route optimization.', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80', tags: ['IoT', 'AI', 'Analytics', 'Automation', 'Cloud'] },
  };

  const STATS_BAR = [
    { val: '50+', label: 'Projects Delivered' },
    { val: '100%', label: 'Client Satisfaction' },
    { val: '8+', label: 'Industries Served' },
    { val: 'AI Powered', label: 'Enterprise Solutions' }
  ];

  return (
    <div 
      className="bg-white min-h-screen overflow-x-hidden font-sans text-slate-900 selection:bg-blue-600/30 selection:text-blue-900 relative"
      onMouseMove={handleMouseMove}
    >
      <SEO 
        title="Products & Solutions | Quantromind Technologies" 
        description="Software that moves business forward. Explore our enterprise-grade SaaS products including HRMS, Billing Systems, Raktdaan, and custom client solutions."
        keywords="Quantromind Products, HRMS, Billing System, SaaS, Enterprise Software, Custom Solutions, Industries"
        url="/products"
      />

      {/* GLOBAL BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
        <motion.div 
          className="absolute w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] -translate-x-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-100 rounded-full blur-[120px] translate-x-1/3"
        />
      </div>

      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">
          <motion.div style={{ y: heroY }} className="lg:w-1/2 relative z-10 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
                <Rocket size={14} className="animate-bounce" />
                Products & Solutions
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-[80px] font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Software that <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Moves Business <br className="hidden md:block"/>Forward.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12">
                From AI-powered platforms to enterprise-grade management systems, we create scalable digital products designed for modern businesses.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-16">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                  <span className="relative z-10 flex items-center gap-2">Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                </button>
                <button className="group px-8 py-4 bg-white/50 backdrop-blur-md text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:border-blue-300 hover:shadow-xl transition-all flex items-center gap-2">
                  Schedule Demo <Play size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-sm hover:-translate-y-1 transition-all">
                    <div className="text-2xl font-black text-slate-900"><Counter end={stat.val} /></div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="lg:w-1/2 relative hidden md:block perspective-1000">
            <motion.div 
              animate={{ y: [-15, 15, -15], rotateX: [2, -2, 2], rotateY: [-2, 2, -2] }} 
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(37,99,235,0.15)] border border-slate-100 preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-400/10 z-10 mix-blend-overlay pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="SaaS Dashboard" className="w-full h-auto object-cover opacity-95" />
              
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-10 -left-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-4 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Activity size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Revenue Growth</p>
                  <p className="text-lg font-black text-slate-900">+42.8%</p>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }} className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-4 z-20">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center"><Users size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Active Users</p>
                  <p className="text-lg font-black text-slate-900">12,450</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY OUR PRODUCTS */}
      <section className="py-24 relative z-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_PRODUCTS.map((feature, i) => (
              <div key={i} className="group relative p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-500 overflow-hidden hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-light">{feature.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 3 & 4. SAAS & SERVICE PRODUCTS */}
      <section className="py-32 relative z-10 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="flex flex-col md:flex-row items-end justify-between mb-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Rocket size={14} /> Service-Based Products
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                SaaS & Service <br/> Products
              </h2>
            </div>
            <div className="max-w-md mt-6 md:mt-0">
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                Ready-to-use platforms and enterprise software built to scale your business operations seamlessly.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {SAAS_PRODUCTS.map((product, i) => (
              <ScrollReveal key={i} className={`flex flex-col gap-12 lg:gap-20 items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="w-full lg:w-1/2">
                  <div className="group relative rounded-[36px] overflow-hidden bg-white border border-blue-600/20 shadow-[0_20px_40px_rgba(37,99,235,0.05)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.15)] transition-all duration-700 hover:-translate-y-2 aspect-[4/3]">
                    <div className="absolute top-0 left-0 w-[200%] h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shine_3s_linear_infinite]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-max border border-blue-100">
                    <Database size={14} /> Platform
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">{product.title}</h3>
                  <p className="text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-xl">{product.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {product.stack.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase hover:-translate-y-1 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default flex items-center gap-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-12">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <CheckCircle2 size={20} className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] flex items-center gap-3 hover:-translate-y-1">
                      <span className="relative z-10 flex items-center gap-2">Request Demo <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOM CLIENT SOLUTIONS */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Globe size={14} /> Client Implementations
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              Custom Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Solutions</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
              Real-world applications built for performance, security, and massive scale.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {CLIENT_SOLUTIONS.map((project, i) => (
              <ScrollReveal key={i} className="group bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.1)] transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-800 shadow-sm border border-white flex items-center gap-2">
                    <Database size={12} className="text-blue-600" /> {project.category}
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] uppercase tracking-widest font-bold rounded-md border border-slate-100">{tech}</span>
                    ))}
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-600 font-medium">
                        <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                    <button className="flex-1 bg-blue-50 text-blue-700 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 group/btn">
                      View Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEW - INDUSTRIES WE SERVE */}
      <section className="py-32 relative z-10 bg-slate-50/50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              🌍 GLOBAL IMPACT
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              Industries <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">We Serve.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              From startups to enterprise organizations, we develop scalable software solutions tailored for industry-specific workflows and digital transformation.
            </p>
          </ScrollReveal>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[250px]">
            
            {/* ROW 1: Left Large (Healthcare) | Right 4 Small (Finance, Ed, Mfg, Retail) */}
            
            {/* Left Large Card (spans 2 rows) */}
            <ScrollReveal variants={fadeUp} className="group relative bg-white rounded-[30px] border border-slate-200 overflow-hidden shadow-[0_25px_60px_rgba(37,99,235,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-1 hover:rotate-[0.5deg] lg:row-span-2 flex flex-col">
              <div className="absolute top-0 left-0 w-[200%] h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shine_3s_linear_infinite] z-20"></div>
              
              <div className="h-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                <img src={INDUSTRIES.healthcare.img} alt={INDUSTRIES.healthcare.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white z-20 border border-white/30">
                  <INDUSTRIES.healthcare.icon size={28} />
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-grow bg-white z-20 relative">
                <h3 className="text-3xl font-black text-slate-900 mb-3">{INDUSTRIES.healthcare.title}</h3>
                <p className="text-slate-500 font-light mb-6 flex-grow">{INDUSTRIES.healthcare.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.healthcare.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-[10px] uppercase tracking-widest font-bold rounded-lg">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right 4 Smaller Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:row-span-2">
              {[INDUSTRIES.finance, INDUSTRIES.education, INDUSTRIES.manufacturing, INDUSTRIES.retail].map((ind, i) => (
                <ScrollReveal key={i} variants={fadeUp} className="group relative bg-white rounded-[30px] border border-slate-200 overflow-hidden shadow-[0_25px_60px_rgba(37,99,235,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-1 hover:rotate-[1deg] flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                  <div className="p-6 flex flex-col h-full relative z-20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <ind.icon size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{ind.title}</h3>
                    <p className="text-sm text-slate-500 font-light line-clamp-2 mb-4 flex-grow">{ind.desc}</p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {ind.tags.slice(0,2).map((tag, j) => (
                        <span key={j} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] uppercase tracking-wider font-bold rounded-md border border-slate-100">{tag}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* ROW 2: 2 Medium Cards (Real Estate & Travel) */}
            {[INDUSTRIES.real_estate, INDUSTRIES.travel].map((ind, i) => (
              <ScrollReveal key={i} variants={fadeUp} className="group relative bg-white rounded-[30px] border border-slate-200 overflow-hidden shadow-[0_25px_60px_rgba(37,99,235,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row">
                <div className="w-full sm:w-2/5 relative overflow-hidden h-48 sm:h-full">
                  <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center sm:w-3/5 bg-white relative z-20">
                  <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ind.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-sm text-slate-500 font-light mb-4">{ind.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.tags.slice(0,3).map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[10px] uppercase tracking-wider font-bold rounded-lg border border-slate-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* ROW 3: Wide Horizontal Card (Logistics) */}
            <ScrollReveal variants={fadeUp} className="group relative bg-white rounded-[30px] border border-slate-200 overflow-hidden shadow-[0_25px_60px_rgba(37,99,235,0.04)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-1 lg:col-span-2 flex flex-col md:flex-row min-h-[250px]">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20 bg-white">
                <div className="absolute top-0 left-0 w-[200%] h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shine_3s_linear_infinite]"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <INDUSTRIES.logistics.icon size={28} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900">{INDUSTRIES.logistics.title}</h3>
                </div>
                <p className="text-lg text-slate-500 font-light mb-6">{INDUSTRIES.logistics.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.logistics.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[10px] uppercase tracking-widest font-bold rounded-lg border border-slate-100">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10 hidden md:block"></div>
                <img src={INDUSTRIES.logistics.img} alt={INDUSTRIES.logistics.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </ScrollReveal>

          </div>

          {/* Stats Bar */}
          <ScrollReveal className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS_BAR.map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-[30px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 mb-2">
                  <Counter end={stat.val} />
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </ScrollReveal>

        </div>
      </section>

      {/* 7. PREMIUM CTA SECTION */}
      <section className="py-32 md:py-40 relative z-10 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/30 blur-[150px] rounded-full" />
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/20 blur-[150px] rounded-full" />

        {/* Floating blue particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/50 blur-[1px]"
              animate={{ y: [Math.random() * 500, -100], opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-12 md:p-24 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                Have a Product <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Idea in Mind?</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <button className="group relative px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-2">
                  Discuss Your Idea <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 rounded-full font-bold text-xl text-white border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </div>

              {/* Floating badges */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {['Production Ready Code', '99.9% Uptime', 'Source Code Ownership', 'Post Launch Support'].map((pill, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 text-blue-200 border border-white/10 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-400" /> {pill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default Products;
