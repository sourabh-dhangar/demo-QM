import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, BookOpen, Clock, Calendar, Search, Share2, 
  ChevronRight, Code, Terminal, Zap, Shield, Database, Cloud, 
  Send, Users
} from 'lucide-react';
import hologramDoc from '../../assets/hologram_doc.png';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- DATA ---
const featuredArticle = {
  category: "Live Project Case Study",
  date: "Jan 15, 2024",
  readTime: "8 min read",
  title: "Scaling the E-Seva Portal: A Government Service Transformation",
  description: "Built a portal for managing government-related document services. Implemented role-based login (admin/user), authentication, and an admin dashboard to handle requests, update status, and verify documents. Used SQL for structured storage and Django admin for back-office operations.",
  author: {
    initial: "A",
    name: "Aadarsh",
    role: "Django Developer"
  }
};

const recentArticles = [
  {
    id: 1,
    title: "WorknAI: Building a Scalable MERN Infrastructure for AI",
    category: "Case Study",
    tag: "SaaS Platform",
    date: "Feb 02, 2024",
    readTime: "5 min read",
    description: "A comprehensive backend infrastructure for an AI-driven workforce management platform, focusing on scalability and robust data handling.",
    author: { name: "Sourabh Kumar", role: "MERN Stack Developer", initial: "S" }
  },
  {
    id: 2,
    title: "Real-time API Integration: The GoAirClass Booking Engine",
    category: "Engineering",
    tag: "Travel Tech",
    date: "Feb 10, 2024",
    readTime: "6 min read",
    description: "Worked on a production/live project that consumed third-party live APIs to deliver real-time responses and dynamic content. Implemented frontend integrations where users can book bus tickets and track live activity.",
    author: { name: "Sourabh Kumar", role: "Full Stack Engineer", initial: "S" }
  },
  {
    id: 3,
    title: "Flow CRM: Data-Driven Business Intelligence Dashboard",
    category: "Engineering",
    tag: "Business Intelligence",
    date: "Dec 20, 2023",
    readTime: "4 min read",
    description: "Custom CRM solution with real-time analytics, lead tracking, and automated marketing integrations for a leading logistics firm.",
    author: { name: "Divyansh", role: "Node.js Developer", initial: "D" }
  },
  {
    id: 4,
    title: "The Role of Clean Code in Long-Term Project Maintenance",
    category: "Engineering",
    tag: "Quality",
    date: "Nov 05, 2023",
    readTime: "7 min read",
    description: "Why we prioritize maintainability over quick-fixes, saving our clients thousands in technical debt and ensuring software longevity.",
    author: { name: "Aadarsh", role: "Senior Engineer", initial: "A" }
  },
  {
    id: 5,
    title: "Cyber Security in Custom Builds: A Non-Negotiable Requirement",
    category: "Security",
    tag: "Security",
    date: "Oct 28, 2023",
    readTime: "10 min read",
    description: "How we implement end-to-end encryption and role-based access control as a baseline for all our bespoke software builds.",
    author: { name: "Sourabh Kumar", role: "Full Stack Lead", initial: "S" }
  }
];

const technologies = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", 
  "PostgreSQL", "Django", "Python", "Docker", "AWS", 
  "Redis", "Tailwind CSS", "Framer Motion", "AI/ML"
];

const tabs = ["All", "Case Study", "Engineering", "Security"];

// --- COMPONENTS ---
const TechChip = ({ label, delay }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.1, rotate: [-2, 2, 0], boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
    className="px-6 py-3 bg-white/80 backdrop-blur-md border border-[#E2E8F0] rounded-full text-[#0F172A] font-semibold shadow-sm cursor-default transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6]"
  >
    {label}
  </motion.div>
);

export default function Blog() {
  const [activeTab, setActiveTab] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = activeTab === "All" 
    ? recentArticles 
    : recentArticles.filter(a => a.category === activeTab);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] font-['Inter'] text-[#0F172A] overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* SECTION 1 - HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF]">
        {/* Background Gradients & Animated Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] animate-pulse"></div>
          <div className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[150px] opacity-40 mix-blend-multiply"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-100 blur-[150px] opacity-40 mix-blend-multiply"></div>
          
          {/* Light particles */}
          <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[20%] right-[40%] w-2 h-2 rounded-full bg-blue-400 blur-[1px]" />
          <motion.div animate={{ y: [0, 40, 0], x: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-[30%] left-[15%] w-3 h-3 rounded-full bg-cyan-400 blur-[1px]" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start">
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-100/50 text-blue-600 font-medium text-sm mb-8 shadow-sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Quantromind Journal
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-[#0F172A] mb-6 font-['Space_Grotesk']">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">Insights.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[18px] text-[#64748B] leading-relaxed max-w-lg mb-10">
              Deep dives into how we build, scale, and secure modern digital infrastructure. Explore our live project case studies below.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#0F172A] text-white rounded-[18px] font-semibold text-[18px] shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 transition-all duration-300 flex items-center group">
                Explore Articles
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-md border border-[#E2E8F0] text-[#0F172A] rounded-[18px] font-semibold text-[18px] hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center">
                <Send className="w-5 h-5 mr-2 text-blue-500" />
                Subscribe
              </button>
            </motion.div>
          </motion.div>

          {/* Right Hologram Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[500px] lg:h-[600px] flex justify-center items-center perspective-1000"
          >
            {/* The generated AI image */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[550px] h-full z-10 relative mix-blend-multiply"
              style={{ 
                backgroundImage: `url(${hologramDoc})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.15))'
              }}
            />
            
            {/* Floating Tech Cards (Glass) */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-[10%] left-[-5%] p-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl z-20 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">⚛️</div>
              <span className="font-semibold text-sm">React</span>
            </motion.div>
            
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} className="absolute bottom-[20%] right-[-10%] p-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl z-20 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">Py</div>
              <span className="font-semibold text-sm">Django</span>
            </motion.div>

            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} className="absolute top-[30%] right-[5%] p-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl z-20 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-sm">AWS</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - FEATURED ARTICLE */}
      <section className="py-24 px-6 lg:px-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="group relative bg-[#F8FAFC] rounded-[40px] border border-[#E2E8F0] overflow-hidden hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700">{featuredArticle.category}</span>
                  <span className="flex items-center text-[#64748B]"><Calendar className="w-4 h-4 mr-2" /> {featuredArticle.date}</span>
                  <span className="flex items-center text-[#64748B]"><Clock className="w-4 h-4 mr-2" /> {featuredArticle.readTime}</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-['Space_Grotesk'] leading-[1.1] mb-6 group-hover:text-blue-600 transition-colors">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-lg text-[#64748B] leading-relaxed mb-10">
                  {featuredArticle.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {featuredArticle.author.initial}
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A]">{featuredArticle.author.name}</div>
                      <div className="text-sm text-[#64748B]">{featuredArticle.author.role}</div>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Right Side Illustration */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 flex items-center justify-center relative overflow-hidden border-l border-[#E2E8F0]/50">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                <div className="relative w-full max-w-md h-[400px] bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl flex flex-col p-6 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Abstract Dashboard UI */}
                  <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">E-Seva Portal</div>
                  </div>
                  
                  <div className="flex-1 flex gap-4">
                    <div className="w-1/3 flex flex-col gap-3">
                      <div className="h-20 bg-blue-100/50 rounded-2xl border border-blue-200/50 flex items-center justify-center">
                        <Users className="text-blue-400" />
                      </div>
                      <div className="flex-1 bg-indigo-100/50 rounded-2xl border border-indigo-200/50 flex flex-col p-3 gap-2">
                         <div className="h-2 w-full bg-indigo-200 rounded-full"></div>
                         <div className="h-2 w-3/4 bg-indigo-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-3">
                      <div className="h-32 bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden p-4">
                         <div className="text-xs font-semibold text-gray-500 mb-2">Data Flow</div>
                         {/* Animated flow line */}
                         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100">
                           <motion.div 
                             animate={{ x: [-100, 300] }} 
                             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                             className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                           />
                         </div>
                         <Database className="absolute right-4 bottom-4 text-gray-300 w-8 h-8" />
                      </div>
                      <div className="flex-1 flex gap-3">
                         <div className="flex-1 bg-cyan-50/80 rounded-2xl border border-cyan-100"></div>
                         <div className="flex-1 bg-purple-50/80 rounded-2xl border border-purple-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - RECENT PUBLICATIONS */}
      <section className="py-24 px-6 lg:px-16 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight mb-4">
                Recent Publications
              </h2>
              <p className="text-[#64748B] text-lg max-w-xl">
                Explore our latest thoughts on architecture, coding standards, and industry trends.
              </p>
            </div>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-1 bg-white rounded-full border border-[#E2E8F0] shadow-sm">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#0F172A] text-white shadow-md' 
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid Simulation */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col bg-[rgba(255,255,255,0.75)] backdrop-blur-md rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
                  
                  <div className="flex items-center gap-3 text-xs font-bold text-[#64748B] mb-6">
                    <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[#0F172A] shadow-sm">
                      {article.tag}
                    </span>
                    <span>{article.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A] leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#64748B] leading-relaxed mb-8 flex-1">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200">
                        {article.author.initial}
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-sm">{article.author.name}</div>
                        <div className="text-xs text-[#64748B]">{article.author.role}</div>
                      </div>
                    </div>
                    <button className="text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors">
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - TECHNOLOGIES */}
      <section className="py-24 px-6 lg:px-16 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-blue-50 to-cyan-50 blur-[80px] -z-10 rounded-full"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] font-['Space_Grotesk'] mb-12">Powered by Modern Tech Stacks</h2>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <TechChip key={tech} label={tech} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - NEWSLETTER */}
      <section className="py-24 px-6 lg:px-16 bg-white relative">
        <div className="max-w-5xl mx-auto relative">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#06B6D4] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-[50px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-['Space_Grotesk'] tracking-tight mb-6">
                Join 500+ Engineering Leaders
              </h2>
              <p className="text-blue-100 text-lg mb-10">
                Get a monthly digest of our technical findings, architecture diagrams, and the latest news from the Pune IT hub.
              </p>

              <form onSubmit={handleSubscribe} className="relative w-full max-w-lg mx-auto mb-6 group">
                {/* Animated glowing border effect wrapper */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                
                <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full focus-within:bg-white/20 transition-colors">
                  <div className="pl-4 text-blue-200">
                    <Send className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="Your professional email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-blue-200 px-4 py-3"
                  />
                  <button 
                    type="submit" 
                    disabled={subscribed}
                    className="px-8 py-3 bg-white text-[#2563EB] rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg disabled:opacity-80"
                  >
                    {subscribed ? 'Subscribed! 🎉' : 'Subscribe'}
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-blue-200/80 text-sm font-medium">
                <span className="flex items-center"><Shield className="w-4 h-4 mr-1" /> No spam.</span>
                <span className="flex items-center"><Terminal className="w-4 h-4 mr-1" /> High-signal content.</span>
                <span className="flex items-center"><Zap className="w-4 h-4 mr-1" /> Unsubscribe anytime.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - CTA */}
      <section className="py-32 px-6 lg:px-16 bg-[#F8FAFC] relative overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
           <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
           <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 bg-[rgba(255,255,255,0.6)] backdrop-blur-2xl border border-white p-12 lg:p-20 rounded-[40px] shadow-2xl shadow-blue-900/5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-[#64748B] mb-10 max-w-2xl mx-auto">
            Let's discuss your next software product, AI platform, or enterprise solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] text-white rounded-[18px] font-semibold text-lg shadow-xl shadow-blue-600/30 hover:bg-[#1D4ED8] hover:-translate-y-1 transition-all duration-300">
              Start Your Project
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F172A] border border-[#E2E8F0] rounded-[18px] font-semibold text-lg shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
}
