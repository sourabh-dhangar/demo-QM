import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  MapPin, Award, Rocket, Sparkles, Target, 
  ShieldCheck, Heart, FileCheck, ArrowRight,
  Code, Globe, Layout, Users, Cpu,
  CheckCircle2, Building2, Phone, Mail, Clock,
  Lock, Zap, RefreshCcw, Handshake, HeadphonesIcon
} from 'lucide-react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import SEO from '../../components/ui/SEO';

const ease = [0.16, 1, 0.3, 1];
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };

const Counter = ({ end }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(end.replace(/\D/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let f = 0;
    const id = setInterval(() => { f++; setVal(Math.round((f / 45) * num)); if (f >= 45) clearInterval(id); }, 25);
    return () => clearInterval(id);
  }, [inView, num]);
  return <span ref={ref}>{val}{suffix}</span>;
};

const ScrollReveal = ({ children, className = "", variants = stagger }) => (
  <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className={className}>
    {children}
  </motion.div>
);

const About = () => {
  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 300]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  // Mission Parallax
  const missionRef = useRef(null);
  const { scrollYProgress: missionProgress } = useScroll({ target: missionRef, offset: ["start end", "end start"] });
  const missionImgY = useTransform(missionProgress, [0, 1], [100, -100]);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans text-slate-900 selection:bg-blue-600/30 selection:text-blue-900">
      <SEO 
        title="About Us | Quantromind Technologies" 
        description="We engineer futures. Transforming complex business requirements into scalable digital products with AI and enterprise-grade architecture."
        keywords="About Quantromind, AI Company, Enterprise SaaS, Software Engineering"
        url="/about"
      />

      {/* Global Background Grid & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-cyan-400 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"
        />
      </div>

      {/* SECTION 1: IMMERSIVE HERO */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden z-10 pt-20 bg-slate-950">
        <motion.div className="absolute inset-0 w-full h-full origin-top" style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}>
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" alt="Modern Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"></div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500/50 blur-[2px]"
              animate={{ 
                y: [Math.random() * 1000, -100], 
                x: [Math.random() * 100, Math.random() * -100],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        {/* Floating Glass Cards */}
        <motion.div className="absolute top-1/4 left-[5%] hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[32px] shadow-2xl animate-[float_6s_ease-in-out_infinite]">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 backdrop-blur-xl">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">Pune, India</p>
            <p className="text-blue-300 text-sm font-medium">Global HQ</p>
          </div>
        </motion.div>

        <motion.div className="absolute bottom-1/4 right-[5%] hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[32px] shadow-2xl animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-cyan-400 backdrop-blur-xl">
            <Award size={24} />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight">ISO Certified</p>
            <p className="text-cyan-300 text-sm font-medium">Premium Quality</p>
          </div>
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <ScrollReveal>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-200 text-sm font-bold tracking-[0.2em] uppercase">Est. 2026 · Private Limited</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[1.05] tracking-tighter mb-8">
              We Engineer <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">Future.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Quantromind transforms complex business requirements into scalable digital products with AI, modern engineering and enterprise-grade architecture.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">Explore Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
                Our Services
              </button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2: MISSION */}
      <section ref={missionRef} className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div variants={fadeLeft} className="lg:w-1/2 relative">
              <div className="relative rounded-[32px] overflow-hidden aspect-square md:aspect-[4/5] shadow-2xl">
                <motion.img 
                  style={{ y: missionImgY }}
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80" 
                  alt="AI Brain Neural Network" 
                  className="w-full h-[130%] object-cover -mt-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent mix-blend-overlay"></div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-2xl p-6 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <Zap size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Velocity</p>
                    <p className="text-3xl font-black text-slate-900">10x Faster</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeRight} className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm uppercase tracking-widest mb-6">
                <Target size={16} /> Our Mission
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                Software Should Be <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">A Competitive Advantage.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
                We believe software should create business value, not technical complexity. At Quantromind, we architect solutions that scale effortlessly.
              </p>
              
              <div className="space-y-6">
                {[
                  'Zero-compromise engineering',
                  'Production-grade quality',
                  'Enterprise architecture',
                  'AI-powered innovation'
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <CheckCircle2 size={18} className="fill-blue-600 text-white" />
                    </div>
                    <span className="text-xl font-medium text-slate-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: OUR APPROACH */}
      <section className="py-32 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex flex-col-reverse lg:flex-row items-center gap-20">
            <motion.div variants={fadeLeft} className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 font-bold text-sm uppercase tracking-widest mb-6">
                <RefreshCcw size={16} /> Our Approach
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                Requirement First. <br/>
                <span className="text-blue-600">Always.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-12">
                Every solution begins with understanding your business goals. We design custom architecture that aligns perfectly with your specific operational needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { num: '01', title: 'Discovery & Planning' },
                  { num: '02', title: 'Custom Architecture' },
                  { num: '03', title: 'Agile Development' },
                  { num: '04', title: 'Quality Assurance' }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeUp}
                    className="group bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors mb-4">{step.num}</div>
                    <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="lg:w-1/2 relative">
              <div className="relative rounded-[32px] overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Developers working together" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -left-10 bg-white/80 backdrop-blur-2xl p-6 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Status</p>
                    <p className="text-2xl font-black text-slate-900">Active</p>
                    <p className="text-sm font-medium text-slate-500">RoC Pune</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4: OUR JOURNEY */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-5xl mx-auto px-6 relative">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">From a small freelance team to a global enterprise software company.</p>
          </ScrollReveal>

          <div className="relative">
            {/* Glowing Center Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-600 origin-top shadow-[0_0_15px_rgba(0,198,255,0.5)]"
              />
            </div>

            {[
              { year: '2024', title: 'The Spark', desc: 'Three engineers in Pune start freelancing together, building custom software for local businesses.', icon: Sparkles },
              { year: '2025', title: 'Growing Wings', desc: 'Expanded to 5+ team members. Delivered 9+ custom projects across India. Built first SaaS products.', icon: Rocket },
              { year: '2026', title: 'Official Launch', desc: 'Quantromind Private Limited incorporated. Registered at Wakad, Pune.', icon: Award },
              { year: 'Future', title: 'The Vision', desc: 'Scaling AI-driven solutions globally. Building products that reshape industries.', icon: Target },
            ].map((item, i) => (
              <ScrollReveal key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-10 mb-16 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className={`md:w-1/2 pl-[90px] md:pl-0 w-full ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-6xl font-black text-slate-50 absolute -top-2 -right-2 pointer-events-none group-hover:text-blue-50 transition-colors">{item.year}</span>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-slate-800 mb-4">{item.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white border-[3px] border-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center text-blue-600"
                  >
                    <item.icon size={20} />
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT WE BUILD */}
      <section className="py-32 relative z-10 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-6">What We Build</h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Premium enterprise solutions engineered for scale and performance.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {[
              { title: 'Software Engineering', desc: 'Bespoke full-scale applications.', icon: Code, span: 'md:col-span-2 lg:col-span-2 row-span-2' },
              { title: 'AI/ML Services', desc: 'Custom intelligence models.', icon: Cpu, span: 'md:col-span-1 lg:col-span-1 row-span-1' },
              { title: 'Web & Mobility', desc: 'High-performance platforms.', icon: Globe, span: 'md:col-span-1 lg:col-span-1 row-span-1' },
              { title: 'UI/UX Design', desc: 'User-centric prototyping.', icon: Layout, span: 'md:col-span-1 lg:col-span-1 row-span-1' },
              { title: 'Testing & QA', desc: 'Rigorous validation processes.', icon: ShieldCheck, span: 'md:col-span-1 lg:col-span-1 row-span-1' },
              { title: 'Staff Augmentation', desc: 'Expert skill-specific talent.', icon: Users, span: 'md:col-span-2 lg:col-span-1 row-span-1' }
            ].map((svc, i) => (
              <ScrollReveal key={i} className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500 ${svc.span} flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-cyan-400/30 transition-colors duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500">
                    <svc.icon size={32} />
                  </div>
                </div>
                
                <div className="relative z-10 mt-auto">
                  <h3 className={`font-bold text-white mb-2 ${i === 0 ? 'text-4xl' : 'text-2xl'}`}>{svc.title}</h3>
                  <p className="text-slate-400 text-lg font-light">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR CORE VALUES */}
      <section className="py-32 relative z-10 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">The principles that guide our engineering and partnerships.</p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-10 lg:gap-16 relative py-10">
            {/* Animated connection line behind circles */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-blue-100 -translate-y-1/2 hidden md:block z-0">
               <motion.div 
                 animate={{ x: ["0%", "100%"] }} 
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="w-1/4 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
               />
            </div>

            {[
              { name: 'Innovation', icon: Sparkles },
              { name: 'Integrity', icon: ShieldCheck },
              { name: 'Quality', icon: Award },
              { name: 'Transparency', icon: FileCheck },
              { name: 'Partnership', icon: Handshake },
              { name: 'Growth', icon: Target }
            ].map((val, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="relative z-10 group cursor-pointer"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-3 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] group-hover:border-blue-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  <val.icon size={32} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{val.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MEET THE MINDS */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Meet the Minds</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">The engineering talent behind the enterprise solutions.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: 'Sourabh', role: 'CEO & Co-Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80' },
              { name: 'Prathamesh', role: 'CTO & Co-Founder', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80' },
              { name: 'Santosh', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80' },
            ].map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative rounded-[32px] overflow-hidden aspect-[3/4] shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-slate-100">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[24px] overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-300 font-medium mb-4">{member.role}</p>
                    
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"><FiLinkedin size={18} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"><FiTwitter size={18} /></a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"><FiGithub size={18} /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR NUMBERS */}
      <section className="py-32 relative z-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { num: '50+', label: 'Projects Delivered' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '12+', label: 'Global Clients' },
              { num: '24/7', label: 'AI Powered' }
            ].map((stat, i) => (
              <ScrollReveal key={i}>
                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-cyan-400 mb-4 tracking-tighter">
                  {stat.num.includes('/') ? stat.num : <Counter end={stat.num} />}
                </div>
                <div className="text-slate-600 font-bold text-lg uppercase tracking-widest">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY CHOOSE US */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">The Quantromind Advantage</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Enterprise Engineering', icon: Code },
              { title: 'Modern Technology', icon: Zap },
              { title: 'Transparent Process', icon: FileCheck },
              { title: 'Long-term Partnership', icon: Handshake },
              { title: 'Security First', icon: Lock },
              { title: '24/7 Support', icon: HeadphonesIcon }
            ].map((feature, i) => (
              <ScrollReveal key={i} className="group relative bg-slate-50 rounded-[24px] p-8 border border-slate-100 hover:border-blue-200 transition-colors overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: OFFICE SHOWCASE */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="relative rounded-[40px] overflow-hidden shadow-2xl bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Quantromind Office" 
              className="w-full h-[600px] object-cover opacity-70"
            />
            
            <div className="absolute inset-0 flex items-center lg:items-end lg:justify-start p-8 lg:p-16">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-10 max-w-md w-full shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
                <h3 className="text-3xl font-black text-white mb-8">Global Headquarters</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 text-slate-300">
                    <MapPin className="text-cyan-400 shrink-0 mt-1" />
                    <p className="text-lg">Wakad, Pune<br/>Maharashtra, India 411057</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <Phone className="text-cyan-400 shrink-0" />
                    <p className="text-lg">+91 98765 43210</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <Mail className="text-cyan-400 shrink-0" />
                    <p className="text-lg">contact@quantromind.com</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <Clock className="text-cyan-400 shrink-0" />
                    <p className="text-lg">Mon - Fri: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-white text-slate-900 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors">
                    Visit Office
                  </button>
                  <button className="flex-1 bg-white/10 text-white border border-white/20 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
                    Maps
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-40 relative z-10 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/50 via-slate-950 to-slate-950"></div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-[120px] rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-16 md:p-24 shadow-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                Ready to Build Something <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Extraordinary?</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-light mb-12">
                Let's build enterprise-grade software together.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="group relative px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  <span className="relative z-10 flex items-center gap-2">Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link to="/contact" className="px-10 py-5 rounded-full font-bold text-xl text-white border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
                  Schedule Meeting
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
