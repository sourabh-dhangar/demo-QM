import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowRight, CheckCircle2, Bot, MessageSquare, Mic, 
  Workflow, FileText, LineChart, Brain, Network, Activity, 
  Database, Server, Shield, MapPin, Phone, Mail, Clock, 
  ChevronDown, ArrowUpRight, Cpu
} from 'lucide-react';
import { 
  SiReact, SiNodedotjs, SiPython, SiFastapi, SiOpenai, SiMongodb, 
  SiPostgresql, SiDocker, SiKubernetes, SiGoogle
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import SEO from '../../components/ui/SEO';

// Utility for smooth counters
const Counter = ({ end, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000; // 2s
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setVal(end);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{val}{suffix}</span>;
};

// Scroll Reveal Wrapper
const Reveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AIAgents = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Section 2 Data
  const CAPABILITIES = [
    { title: 'Customer Support', icon: MessageSquare, desc: 'Provide instant, intelligent responses to user queries 24/7.' },
    { title: 'Voice AI', icon: Mic, desc: 'Human-like voice interaction for automated calling and support.' },
    { title: 'AI Chatbots', icon: Bot, desc: 'Custom trained LLMs to guide users through complex workflows.' },
    { title: 'Workflow Automation', icon: Workflow, desc: 'Autonomous execution of multi-step business processes.' },
    { title: 'Document Processing', icon: FileText, desc: 'Extract and analyze data from thousands of PDFs instantly.' },
    { title: 'Predictive Analytics', icon: LineChart, desc: 'Forecast trends and anomalies using machine learning models.' }
  ];

  // Section 3 Data
  const ENTERPRISE_AGENTS = [
    {
      name: 'HR AI Assistant',
      desc: 'Automates employee onboarding, answers policy questions, and manages leave requests through conversational interfaces.',
      features: ['Policy Q&A', 'Automated Onboarding', 'Leave Management'],
      stack: ['GPT-4', 'LangChain', 'Node.js'],
      perf: '98% Resolution Rate',
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80'
    },
    {
      name: 'Sales AI Agent',
      desc: 'Qualifies leads, schedules meetings, and sends personalized follow-ups based on behavioral data and CRM integration.',
      features: ['Lead Qualification', 'Meeting Scheduling', 'CRM Sync'],
      stack: ['Claude 3', 'Python', 'Salesforce API'],
      perf: '3x Pipeline Growth',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
    },
    {
      name: 'Finance AI Agent',
      desc: 'Monitors transactions, flags anomalies, categorizes expenses, and generates real-time financial health reports.',
      features: ['Fraud Detection', 'Expense Sorting', 'Automated Reporting'],
      stack: ['TensorFlow', 'PostgreSQL', 'FastAPI'],
      perf: '99.9% Accuracy',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    }
  ];

  // Section 5 Data
  const INDUSTRIES = [
    { name: 'Healthcare', img: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80', span: 'col-span-2 row-span-2' },
    { name: 'Finance', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-1' },
    { name: 'Education', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-1' },
    { name: 'Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-2' },
    { name: 'Manufacturing', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-1' },
    { name: 'Logistics', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80', span: 'col-span-2 row-span-1' }
  ];

  // Section 9 Data
  const FAQS = [
    { q: 'What is an AI Agent?', a: 'An AI Agent is an autonomous system that can perceive its environment, make decisions using Large Language Models, and take actions to achieve specific business goals.' },
    { q: 'How long does implementation take?', a: 'Depending on complexity, standard agents can be deployed in 2-4 weeks, while custom enterprise workflows may take 2-3 months for full integration and fine-tuning.' },
    { q: 'Can AI integrate with existing software?', a: 'Yes! Our agents seamlessly connect to your existing CRM, ERP, and databases using secure APIs to ensure a unified workflow.' },
    { q: 'Is my company data secure?', a: 'Absolutely. We use enterprise-grade encryption, private cloud deployments, and strict role-based access control. We ensure your data is never used to train public models.' },
    { q: 'Do you build custom AI solutions?', a: 'Yes, we specialize in building bespoke AI solutions tailored to your unique operational challenges and industry requirements.' }
  ];

  return (
    <div 
      className="bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden selection:bg-purple-600/30 selection:text-purple-900"
      onMouseMove={handleMouseMove}
    >
      <SEO 
        title="Autonomous AI Agents | Quantromind Technologies" 
        description="Build intelligent AI agents that automate workflows, analyze data, and execute business operations with enterprise-grade reliability."
        keywords="AI Agents, Artificial Intelligence, LLM, OpenAI, Quantromind AI, Automation"
        url="/ai-agents"
      />

      {/* GLOBAL EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-purple-200 rounded-full blur-[150px]"
        />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-20 z-10">
        <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-purple-700 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Zap size={14} className="animate-pulse" /> Next Generation AI Automation
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[80px] font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Autonomous <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">AI Agents</span> <br/>
                for Business.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12">
                Build intelligent AI agents that automate workflows, analyze data, communicate with customers, and execute business operations with enterprise-grade reliability.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-16">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_10px_30px_rgba(124,58,237,0.3)]">
                  <span className="relative z-10 flex items-center gap-2">Build Your AI Agent <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:border-purple-300 hover:shadow-xl transition-all">
                  Book Free Consultation
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {['Production Ready', 'Secure AI', 'LLM Powered', '24/7 Automation'].map((pill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-100 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-purple-500" /> {pill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2 relative h-[500px] w-full hidden md:block perspective-1000">
            {/* Animated AI Brain/Network Graphic */}
            <motion.div 
              animate={{ rotateY: 360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center preserve-3d"
            >
              {/* Core */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-[0_0_80px_rgba(124,58,237,0.5)] flex items-center justify-center relative z-20">
                <Brain size={48} className="text-white" />
              </div>
              
              {/* Orbital Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div 
                  key={ring}
                  animate={{ rotateX: ring * 60, rotateZ: 360 }}
                  transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/20"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2" />
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-0 right-1/2 w-3 h-3 bg-blue-400 rounded-full blur-[2px] translate-x-1/2 translate-y-1/2" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. AI CAPABILITIES */}
      <section className="py-32 relative z-10 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">What Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Can Do</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={i} delay={i * 0.1} className="group relative p-8 bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(124,58,237,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -right-6 -top-6 text-[120px] font-black text-slate-50 opacity-50 group-hover:text-purple-50 transition-colors duration-500 select-none">
                  0{i+1}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <cap.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE AI AGENTS */}
      <section className="py-32 relative z-10 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Bot size={14} /> Production Ready Agents
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">Enterprise <br/><span className="text-purple-600">AI Agents</span></h2>
          </Reveal>

          <div className="space-y-32">
            {ENTERPRISE_AGENTS.map((agent, i) => (
              <Reveal key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-[36px] overflow-hidden bg-slate-100 border border-slate-200 group">
                    <img src={agent.img} alt={agent.name} className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{agent.name}</h3>
                  <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">{agent.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {agent.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                        <CheckCircle2 size={14} className="text-purple-500" /> {feature}
                      </span>
                    ))}
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Tech Stack</p>
                      <div className="flex gap-2">
                        {agent.stack.map((tech, idx) => <span key={idx} className="text-sm font-semibold text-slate-700">{tech}{idx < agent.stack.length-1 ? ', ' : ''}</span>)}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Performance</p>
                      <p className="text-lg font-black text-blue-600">{agent.perf}</p>
                    </div>
                  </div>

                  <button className="w-max group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-purple-600 transition-colors shadow-lg flex items-center gap-2">
                    Deploy Agent <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI WORKFLOW */}
      <section className="py-32 relative z-10 bg-slate-950 overflow-hidden">
        {/* Dark Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-24">
            <h2 className="text-5xl font-black text-white mb-6">How AI <span className="text-purple-400">Thinks</span></h2>
          </Reveal>

          <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            {/* Animated Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {[
              { step: '1', title: 'Collect Data', icon: Database, color: 'text-blue-400' },
              { step: '2', title: 'Analyze', icon: Activity, color: 'text-cyan-400' },
              { step: '3', title: 'Reason', icon: Brain, color: 'text-purple-400' },
              { step: '4', title: 'Take Action', icon: Zap, color: 'text-yellow-400' },
              { step: '5', title: 'Learn', icon: Network, color: 'text-green-400' }
            ].map((node, i) => (
              <Reveal key={i} delay={i * 0.2} className="relative z-10 flex flex-col items-center group mb-10 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:border-purple-500 transition-all duration-300">
                  <node.icon size={32} className={`${node.color}`} />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Step {node.step}</p>
                  <p className="text-lg font-bold text-white">{node.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES USING AI (Bento Grid) */}
      <section className="py-32 relative z-10 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900">Industries Using AI</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={i} delay={i * 0.1} className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${ind.span}`}>
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/50 transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{ind.name}</h3>
                  <div className="w-0 h-1 bg-purple-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY QUANTROMIND AI (Comparison) */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900">The AI <span className="text-blue-600">Advantage</span></h2>
          </Reveal>

          <div className="flex flex-col md:flex-row items-stretch justify-center relative bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
            {/* Left */}
            <div className="md:w-1/2 p-12 lg:p-20 relative">
              <h3 className="text-2xl font-bold text-slate-400 mb-10 text-center">Traditional Software</h3>
              <ul className="space-y-8">
                {['Static Rule Based', 'Manual Updates Required', 'Siloed Data', 'Requires Human Intervention', 'Slow Processing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500 text-lg font-medium">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0"><div className="w-2 h-2 bg-slate-400 rounded-full"></div></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Animated Center Divider */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent relative">
              <motion.div animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -left-1 w-3 h-8 bg-purple-500 rounded-full blur-[2px]" />
            </div>

            {/* Right */}
            <div className="md:w-1/2 p-12 lg:p-20 bg-gradient-to-br from-blue-50 to-purple-50 relative">
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-10 text-center">Quantromind AI</h3>
              <ul className="space-y-8">
                {['Autonomous Agents', 'Self-Learning Models', 'Unified Intelligence', 'Fully Automated Workflows', 'Instant Execution'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-900 text-lg font-bold">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 shadow-sm"><CheckCircle2 size={18} className="text-purple-600" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI TECHNOLOGY STACK */}
      <section className="py-32 relative z-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal className="mb-20">
            <h2 className="text-5xl font-black text-slate-900">AI Technology Stack</h2>
          </Reveal>
          
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Core */}
            <motion.div 
              animate={{ boxShadow: ['0 0 40px rgba(124,58,237,0.3)', '0 0 80px rgba(6,182,212,0.4)', '0 0 40px rgba(124,58,237,0.3)'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 rounded-full bg-slate-900 flex flex-col items-center justify-center text-white z-20"
            >
              <Cpu size={32} className="text-cyan-400 mb-2" />
              <span className="font-bold text-xs uppercase tracking-widest">AI Core</span>
            </motion.div>

            {/* Orbiting Tech */}
            {[
              { icon: SiOpenai, name: 'OpenAI' }, { icon: SiGoogle, name: 'Gemini' }, { icon: SiPython, name: 'Python' }, 
              { icon: SiFastapi, name: 'FastAPI' }, { icon: SiReact, name: 'React' }, { icon: SiNodedotjs, name: 'Node.js' },
              { icon: SiMongodb, name: 'MongoDB' }, { icon: SiPostgresql, name: 'Postgres' }, { icon: SiDocker, name: 'Docker' },
              { icon: FaAws, name: 'AWS' }
            ].map((tech, i, arr) => {
              const angle = (i / arr.length) * 2 * Math.PI;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x, y }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                  className="absolute z-10 w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center text-2xl text-slate-700 hover:scale-125 hover:text-blue-600 transition-all cursor-pointer hover:border-blue-300"
                  title={tech.name}
                >
                  <tech.icon />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. AI PERFORMANCE METRICS */}
      <section className="py-32 relative z-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900">Enterprise Metrics</h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '99.9', suffix: '%', label: 'Accuracy' },
              { val: '24', suffix: '/7', label: 'Availability' },
              { val: '80', suffix: '%', label: 'Automation' },
              { val: '1000', suffix: 'K+', label: 'Requests/Day' }
            ].map((metric, i) => (
              <Reveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-4 border-purple-100 flex items-center justify-center mb-4 relative">
                  <motion.svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <motion.circle cx="50" cy="50" r="46" fill="none" stroke="#7C3AED" strokeWidth="8" strokeDasharray="289" initial={{ strokeDashoffset: 289 }} whileInView={{ strokeDashoffset: 0 }} transition={{ duration: 2 }} />
                  </motion.svg>
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">
                  {metric.val === '99.9' ? '99.9' : <Counter end={parseInt(metric.val)} />}{metric.suffix}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{metric.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AI FAQ */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900">Frequent Questions</h2>
          </Reveal>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.1} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:border-blue-300 transition-colors">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`text-blue-600 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-8 pb-6 text-slate-500 font-light leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. VISIT OUR HEADQUARTERS */}
      <section className="py-32 relative z-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <Reveal className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              📍 Our Location
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-8">Visit Our Headquarters</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 text-lg">Office Address</p>
                  <p className="text-slate-500 font-light">Floor No. 201, Arnav Heights<br/>Wakad, Pune, Maharashtra 411057</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" />
                <p className="text-slate-700 font-medium">+91 7020243759</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />
                <p className="text-slate-700 font-medium">quantromind@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-blue-600" />
                <p className="text-slate-700 font-medium">Mon-Sat: 9 AM - 7 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors">
                Open Google Maps
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors">
                Book Meeting
              </button>
            </div>
          </Reveal>
          
          <Reveal className="lg:w-1/2 relative h-[500px]">
            <div className="w-full h-full rounded-[32px] overflow-hidden shadow-xl border-4 border-white relative group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map Location" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-blue-900/10"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl text-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <MapPin />
                </div>
                <h4 className="font-bold text-slate-900">Quantromind AI Lab</h4>
                <p className="text-xs text-slate-500">Pune, India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. PREMIUM CTA */}
      <section className="py-40 relative z-10 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/30 blur-[150px] rounded-full" />
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Ready to Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">Your AI Workforce?</span>
            </h2>
            <p className="text-xl text-blue-100 font-light max-w-2xl mx-auto mb-12">
              Transform your business operations with autonomous AI agents. Contact our experts to architect a custom solution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="group relative px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">Schedule AI Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              </button>
              <button className="px-10 py-5 rounded-full font-bold text-xl text-white border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
                Talk to Experts
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {['LLM Powered', 'Production Ready', 'Enterprise Secure', '24/7 Support'].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 text-purple-200 border border-white/10 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" /> {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default AIAgents;
