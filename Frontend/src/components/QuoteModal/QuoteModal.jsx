import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiTool, FiUsers, FiGlobe, 
  FiArrowRight, FiCheckCircle, FiMail, FiPhone
} from 'react-icons/fi';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Spotlight effect
  const modalRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!modalRef.current) return;
    const rect = modalRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2500);
    }, 1500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormState({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      projectType: '',
      description: ''
    });
    onClose();
  };

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Variants
  const overlayVariants = {
    hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
    visible: { 
      opacity: 1, 
      backdropFilter: 'blur(16px)',
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      backdropFilter: 'blur(0px)',
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: 'spring', 
        damping: 25, 
        stiffness: 250, 
        duration: 0.4 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      transition: { duration: 0.25 }
    }
  };

  const formStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };

  const formItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, opacity: 1, 
      transition: { type: 'spring', stiffness: 300, damping: 24 } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Dark Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            onMouseMove={handleMouseMove}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex flex-col w-full max-w-[760px] max-h-[620px] sm:max-h-[90vh] bg-white rounded-[28px] shadow-[0_30px_60px_rgba(37,99,235,0.15)] border border-[#E5E7EB] overflow-hidden"
          >
            {/* Spotlight Background */}
            <div 
              className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37,99,235,0.06), transparent 40%)`
              }}
            />
            
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply" 
                 style={{ 
                   backgroundImage: `radial-gradient(at 100% 0%, hsla(217,100%,70%,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(188,100%,50%,0.1) 0px, transparent 50%)`
                 }} 
            />
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                 style={{
                   backgroundSize: '30px 30px',
                   backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)'
                 }}
            />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30"
                   animate={{
                     opacity: [0.1, 0.4, 0.1]
                   }}
                   transition={{
                     duration: 8 + i,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: i * 1.5
                   }}
                   style={{
                     top: `${20 + i * 15}%`,
                     left: `${10 + i * 15}%`
                   }}
                 />
               ))}
            </div>

            {/* Header Area */}
            <div className="relative z-10 shrink-0 px-8 pt-8 pb-4 bg-white/80 backdrop-blur-sm border-b border-slate-100/50">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                
                {/* Logo Section */}
                <div className="flex flex-col relative">
                  {/* Floating blue glow behind logo */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-blue-400 blur-xl rounded-full opacity-30 -z-10"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <img src="/quantromind.png" alt="Quantromind Logo" className="h-7 w-auto object-contain drop-shadow-sm" />
                      <span className="font-bold text-[19px] tracking-tight text-slate-900 leading-none mt-0.5">
                        QUANTROMIND
                      </span>
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.15em] text-[#2563EB] uppercase mt-1.5 ml-[38px]">
                      Private Limited
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-8 right-8 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-500 transition-all duration-300 hover:bg-white hover:text-blue-600 hover:rotate-90 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] border border-transparent hover:border-blue-200 group"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="mt-6">
                <div className="relative inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[11px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full overflow-hidden">
                  <span className="relative z-10 flex items-center gap-1.5"><span>🚀</span> CUSTOM SOFTWARE DEVELOPMENT</span>
                  {/* Shimmer effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 w-1/2 skew-x-12"
                  />
                </div>
                
                <h2 className="text-[26px] font-bold text-slate-900 mb-2 leading-tight">
                  Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Custom Software</span>
                </h2>
                <p className="text-[13px] text-slate-500">Tell us about your project and our engineers will get back to you within 24 hours.</p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar px-8 pb-6 bg-white/50 backdrop-blur-md">
              
              {/* Floating Quick Stats */}
              <div className="grid grid-cols-3 gap-4 my-6">
                {[
                  { icon: FiTool, title: "Custom Builds", subtitle: "Tailored Solutions", delay: 0 },
                  { icon: FiUsers, title: "75+", subtitle: "Expert Engineers", delay: 0.5 },
                  { icon: FiGlobe, title: "Global", subtitle: "Delivery Reach", delay: 1 }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ 
                      y: -6, 
                      rotate: i % 2 === 0 ? 1 : -1,
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(37,99,235,0.15)",
                      borderColor: "rgba(37,99,235,0.4)"
                    }}
                    className="flex flex-col items-center justify-center p-3 rounded-[20px] bg-white/80 backdrop-blur-xl border border-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.06)] transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={14} />
                    </div>
                    <h4 className="font-bold text-[13px] text-slate-800 leading-tight text-center">{stat.title}</h4>
                    <span className="text-[10px] font-medium text-slate-500 text-center mt-0.5">{stat.subtitle}</span>
                  </motion.div>
                ))}
              </div>

              {/* Form with Stagger */}
              <motion.form 
                id="premium-quote-form" 
                onSubmit={handleSubmit} 
                className="space-y-4"
                variants={formStagger}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div variants={formItem} className="relative group">
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formState.fullName} 
                      onChange={handleInputChange} 
                      className="peer w-full bg-white border border-slate-200 rounded-[16px] px-4 pt-6 pb-2 text-[13px] text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:shadow-[0_0_15px_rgba(37,99,235,0.1)] placeholder-transparent" 
                      placeholder="Full Name" 
                    />
                    <label className="absolute left-4 top-4 text-[11px] font-semibold text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-2.5 peer-focus:text-[10px] peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500">
                      Full Name
                    </label>
                  </motion.div>
                  
                  <motion.div variants={formItem} className="relative group">
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formState.email} 
                      onChange={handleInputChange} 
                      className="peer w-full bg-white border border-slate-200 rounded-[16px] px-4 pt-6 pb-2 text-[13px] text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:shadow-[0_0_15px_rgba(37,99,235,0.1)] placeholder-transparent" 
                      placeholder="Email Address" 
                    />
                    <label className="absolute left-4 top-4 text-[11px] font-semibold text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-2.5 peer-focus:text-[10px] peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500">
                      Email Address
                    </label>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div variants={formItem} className="relative group">
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formState.phone} 
                      onChange={handleInputChange} 
                      className="peer w-full bg-white border border-slate-200 rounded-[16px] px-4 pt-6 pb-2 text-[13px] text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:shadow-[0_0_15px_rgba(37,99,235,0.1)] placeholder-transparent" 
                      placeholder="Phone Number" 
                    />
                    <label className="absolute left-4 top-4 text-[11px] font-semibold text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-2.5 peer-focus:text-[10px] peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500">
                      Phone Number
                    </label>
                  </motion.div>

                  <motion.div variants={formItem} className="relative group">
                    <input 
                      type="text" 
                      name="companyName" 
                      value={formState.companyName} 
                      onChange={handleInputChange} 
                      className="peer w-full bg-white border border-slate-200 rounded-[16px] px-4 pt-6 pb-2 text-[13px] text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:shadow-[0_0_15px_rgba(37,99,235,0.1)] placeholder-transparent" 
                      placeholder="Company Name" 
                    />
                    <label className="absolute left-4 top-4 text-[11px] font-semibold text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-2.5 peer-focus:text-[10px] peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500">
                      Company Name
                    </label>
                  </motion.div>
                </div>

                <motion.div variants={formItem} className="relative group">
                  <div className="relative">
                    <select 
                      name="projectType" 
                      required 
                      value={formState.projectType} 
                      onChange={handleInputChange} 
                      className="peer w-full bg-white border border-slate-200 rounded-[16px] px-4 pt-6 pb-2 text-[13px] text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:shadow-[0_0_15px_rgba(37,99,235,0.1)] appearance-none cursor-pointer"
                    >
                      <option value="" disabled hidden></option>
                      <option value="Web App">Web App</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="AI Agent">AI Agent</option>
                      <option value="SaaS">SaaS</option>
                      <option value="ERP">ERP</option>
                      <option value="CRM">CRM</option>
                      <option value="Automation">Automation</option>
                      <option value="Custom Software">Custom Software</option>
                    </select>
                    <label className={`absolute left-4 top-4 text-[11px] font-semibold transition-all duration-300 pointer-events-none 
                      ${formState.projectType ? '-translate-y-2.5 text-[10px] text-slate-500' : 'text-slate-400 peer-focus:-translate-y-2.5 peer-focus:text-[10px] peer-focus:text-blue-600'}
                    `}>
                      Project Type
                    </label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 transition-transform duration-300 peer-focus:rotate-180 peer-focus:text-blue-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={formItem} className="relative group">
                  <textarea 
                    name="description" 
                    required 
                    value={formState.description} 
                    onChange={handleInputChange} 
                    rows={3}
                    className="peer w-full bg-white border border-slate-200 rounded-[16px] px-4 pt-7 pb-3 text-[13px] text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 focus:shadow-[0_0_15px_rgba(37,99,235,0.1)] resize-none placeholder-transparent" 
                    placeholder="Describe your project, business goals, required features, timeline, and expected outcome..."
                  />
                  <label className="absolute left-4 top-4 text-[11px] font-semibold text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-translate-y-1.5 peer-focus:text-[10px] peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-slate-500">
                    Project Requirement
                  </label>
                  {/* Fake placeholder that shows only when empty and focused */}
                  <span className="absolute left-4 top-8 text-[12px] text-slate-300 pointer-events-none opacity-0 transition-opacity duration-300 peer-focus:opacity-100 peer-[:not(:placeholder-shown)]:hidden max-w-[90%] truncate">
                    Describe your project, business goals, required features...
                  </span>
                </motion.div>
              </motion.form>
            </div>

            {/* Premium Footer Area */}
            <div className="relative z-10 shrink-0 px-8 py-5 bg-slate-50/80 backdrop-blur-md border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col text-[12px] font-medium text-slate-500">
                <a href="mailto:quantromind@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors py-0.5">
                  <FiMail size={14} className="text-blue-500" /> quantromind@gmail.com
                </a>
                <a href="tel:+917020243759" className="flex items-center gap-2 hover:text-blue-600 transition-colors py-0.5">
                  <FiPhone size={14} className="text-blue-500" /> +91 7020243759
                </a>
              </div>

              <motion.button 
                type="submit" 
                form="premium-quote-form"
                disabled={isSubmitting || isSuccess}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: ["0 10px 20px rgba(37,99,235,0.2)", "0 10px 30px rgba(37,99,235,0.4)", "0 10px 20px rgba(37,99,235,0.2)"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-[14px] px-8 py-3.5 text-[14px] font-bold text-white transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {/* Continuous animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-[#06B6D4] to-blue-600 bg-[length:200%_100%] animate-[gradientMove_4s_linear_infinite]" />
                
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div key="loading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2 relative z-10">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 relative z-10">
                      <FiCheckCircle size={18} />
                      <span>Received</span>
                    </motion.div>
                  ) : (
                    <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative z-10">
                      <span>Send Requirement</span>
                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Ripple overlay on hover */}
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-active:opacity-20" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94A3B8;
        }
        @keyframes gradientMove {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </AnimatePresence>
  );
};

export default QuoteModal;
