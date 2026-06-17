import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ChevronDown, MapPin, Briefcase, Clock,
  Rocket, BookOpen, Heart, Users, Target, Globe,
  Lightbulb, ShieldCheck, Zap, Code, Coffee, Award, CheckCircle2
} from 'lucide-react';
import robotCareers from '../../assets/robot_careers.png';

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
const whyReasons = [
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Startup Culture",
    description: "Work at the cutting edge with a small, agile team where your contributions truly matter."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Learn & Grow",
    description: "Work on diverse projects across multiple tech stacks — from MERN to AI/ML and beyond."
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and a supportive environment that values your well-being."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Collaborative Team",
    description: "A tight-knit team of builders who support each other and grow together."
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    title: "Real Impact",
    description: "Your code goes live. Build products used by real businesses and real people."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Remote Friendly",
    description: "Work from our Pune office or remotely — we value output over presence."
  }
];

const lifeTimeline = [
  { icon: <Lightbulb />, title: "Innovation", desc: "Pushing boundaries with bleeding-edge technology." },
  { icon: <ShieldCheck />, title: "Ownership", desc: "Take charge of your projects from day one." },
  { icon: <Zap />, title: "Continuous Learning", desc: "Weekly knowledge sharing and learning budgets." },
  { icon: <Users />, title: "Mentorship", desc: "Learn directly from experienced founders and leads." },
  { icon: <Code />, title: "AI First Culture", desc: "We use AI to build AI, accelerating development." },
  { icon: <Coffee />, title: "Fun Fridays", desc: "Games, pizza, and team bonding sessions." },
  { icon: <Award />, title: "Hackathons", desc: "Monthly internal hackathons to explore wild ideas." },
  { icon: <Users />, title: "Coffee & Collaboration", desc: "Open discussions and brainstorming over coffee." },
];

const jobs = [
  {
    id: 1,
    department: "Engineering",
    title: "Full Stack Developer",
    location: "Pune, Maharashtra (Hybrid)",
    type: "Full Time",
    description: "Join our core engineering team to build custom web applications and SaaS products for clients across industries."
  },
  {
    id: 2,
    department: "Design",
    title: "UI/UX Design Intern",
    location: "Remote",
    type: "Internship",
    description: "Help design beautiful and functional interfaces for our client projects and internal products."
  }
];

const hiringProcess = [
  { step: 1, title: "Apply Online", icon: <CheckCircle2 className="w-6 h-6" /> },
  { step: 2, title: "Resume Review", icon: <CheckCircle2 className="w-6 h-6" /> },
  { step: 3, title: "Technical Interview", icon: <CheckCircle2 className="w-6 h-6" /> },
  { step: 4, title: "Culture Fit", icon: <CheckCircle2 className="w-6 h-6" /> },
  { step: 5, title: "Welcome to Quantromind 🎉", icon: <CheckCircle2 className="w-6 h-6" /> }
];

const faqs = [
  { question: "Do you offer internships?", answer: "Yes! We regularly offer internships for students and recent graduates looking to gain hands-on experience in a fast-paced startup environment." },
  { question: "Can I work remotely?", answer: "Absolutely. While we have an office in Pune, many of our roles are remote-friendly. We care about what you build, not where you sit." },
  { question: "What technologies do you use?", answer: "Our stack typically includes React, Node.js, Express, MongoDB, PostgreSQL, and various AI/ML tools depending on the project." },
  { question: "How long is the hiring process?", answer: "We move fast. Usually, the entire process takes about 1-2 weeks from the initial application to the final offer." }
];

// --- COMPONENTS ---

// Animated Counter
const Counter = ({ end, suffix = "", title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#E2E8F0] shadow-sm">
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-5xl font-bold text-[#0F172A] mb-2 font-['Space_Grotesk']"
      >
        {count}{suffix}
      </motion.span>
      <span className="text-[#64748B] font-medium">{title}</span>
    </div>
  );
};

export default function Careers() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full bg-[#FFFFFF] font-['Inter'] text-[#0F172A] overflow-hidden selection:bg-blue-200 selection:text-blue-900">

      {/* SECTION 1 - HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-20 px-6 lg:px-16 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px] opacity-70"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[150px] opacity-80"></div>

          {/* Floating Particles */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-blue-400 blur-[2px]"
          />
          <motion.div
            animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-blue-300 blur-[2px]"
          />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-8 shadow-sm">
              🚀 Careers at Quantromind
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-[56px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-[#0F172A] mb-6 font-['Space_Grotesk']">
              Join Our Journey <br />
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">Future.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-[18px] text-[#64748B] leading-relaxed max-w-lg mb-10">
              We're a young startup based in Pune, looking for passionate builders who love writing clean code and solving real problems.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[18px] font-semibold text-[18px] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center group">
                Explore Open Roles
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[18px] font-semibold text-[18px] hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                Meet Our Team
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image/Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full flex justify-center lg:justify-end perspective-1000"
          >
            <motion.img
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={robotCareers}
              alt="Premium AI Robot"
              className="w-full max-w-[500px] object-contain drop-shadow-2xl z-10"
              style={{ filter: 'drop-shadow(0 0 30px rgba(37,99,235,0.2))' }}
            />
            {/* Glowing orb behind robot */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B82F6] rounded-full blur-[100px] -z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - WHY QUANTROMIND */}
      <section className="py-24 px-6 lg:px-16 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-['Space_Grotesk'] tracking-tight"
            >
              Why You'll Love Working Here
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-[#64748B] text-lg max-w-2xl mx-auto"
            >
              Everything you need to grow your career while building amazing products.
            </motion.p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-8 rounded-3xl bg-[rgba(255,255,255,0.75)] backdrop-blur-md border border-[#E2E8F0] hover:border-[#3B82F6] shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle glass glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 relative z-10">{reason.title}</h3>
                <p className="text-[#64748B] leading-relaxed relative z-10">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - LIFE AT QUANTROMIND */}
      <section className="py-24 px-6 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 font-['Space_Grotesk'] tracking-tight">Life at Quantromind</h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">A glimpse into our culture and how we work.</p>
          </div>

          {/* Simple Animated Grid/Timeline style layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifeTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] flex flex-col items-center text-center group hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2">{item.title}</h4>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - COMPANY STATS */}
      <section className="py-20 px-6 lg:px-16 bg-[#F8FAFC] relative">
        <div className="absolute inset-0 bg-blue-50/50 -skew-y-2 origin-top-left -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter end={5} suffix="+" title="Team Members" />
          <Counter end={20} suffix="+" title="Projects Delivered" />
          <Counter end={10} suffix="+" title="Technologies" />
          <Counter end={100} suffix="%" title="Passion" />
        </div>
      </section>

      {/* SECTION 5 - OPEN POSITIONS */}
      <section className="py-24 px-6 lg:px-16 bg-white" id="open-roles">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">We're Hiring</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight">Open Positions</h2>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-[24px] bg-[rgba(255,255,255,0.75)] backdrop-blur-md border border-[#E2E8F0] hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4">
                    {job.department}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-[#64748B] text-sm mb-4">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                    <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.type}</span>
                  </div>
                  <p className="text-[#64748B] max-w-2xl">{job.description}</p>
                </div>

                <button className="px-6 py-3 bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] rounded-[14px] font-semibold hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors duration-300 flex items-center whitespace-nowrap">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - HIRING PROCESS */}
      <section className="py-24 px-6 lg:px-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight">Our Hiring Process</h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 z-0"></div>

            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center max-w-[180px]"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[#F8FAFC] shadow-lg flex items-center justify-center text-blue-600 mb-6">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-1">Step {step.step}</div>
                <h4 className="font-bold text-[#0F172A]">{step.title}</h4>
                {/* Down arrow for mobile */}
                {index < hiringProcess.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#CBD5E1] mt-6 md:hidden rotate-90" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - CTA */}
      <section className="py-32 px-6 lg:px-16 bg-white relative overflow-hidden flex justify-center">
        {/* Background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-[120px] opacity-20 -z-10"></div>

        <div className="max-w-4xl w-full bg-[rgba(255,255,255,0.6)] backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-300 rounded-full blur-[50px] opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-300 rounded-full blur-[50px] opacity-50"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight mb-6 relative z-10">
            Interested in Joining?
          </h2>
          <p className="text-xl text-[#64748B] mb-10 max-w-2xl mx-auto relative z-10">
            We're always looking for talented developers, designers, and problem-solvers. Don't see a role that fits? Send us your resume anyway.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white rounded-[18px] font-semibold text-lg shadow-xl shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300">
              Send Your Resume
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F172A] border border-[#E2E8F0] rounded-[18px] font-semibold text-lg shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[#64748B] relative z-10 border-t border-[#E2E8F0] pt-8">
            <span className="flex items-center"><Globe className="w-5 h-5 mr-2 text-blue-500" /> careers@quantromind.com</span>
            <span className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500" /> Pimpri Chinchwad, Hinjewadi, Pune</span>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FAQ */}
      <section className="py-24 px-6 lg:px-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-semibold text-[#0F172A] text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-[#64748B] leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
