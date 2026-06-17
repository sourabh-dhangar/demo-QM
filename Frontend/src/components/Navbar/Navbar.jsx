import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { 
  MdSmartphone, MdBarChart, MdPeople, MdWeb, 
  MdCode, MdSettings, MdCloud, MdSecurity,
  MdStorage, MdDataUsage, MdAutorenew
} from 'react-icons/md';
import QuoteModal from '../QuoteModal/QuoteModal';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'AI Agents', href: '/ai-agents' },
  { name: 'Services', href: '#', hasDropdown: true },
  { name: 'Technology Focus', href: '#', hasDropdown: true },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const servicesDropdown = [
  { name: 'Web App Development', icon: MdWeb, desc: 'Dynamic web experiences' },
  { name: 'Mobile App Development', icon: MdSmartphone, desc: 'Next-gen iOS & Android apps' },
  { name: 'AI & Machine Learning', icon: MdAutorenew, desc: 'Smart automation solutions' },
  { name: 'Data Engineering', icon: MdDataUsage, desc: 'Transforming data into insights' },
  { name: 'Cloud Services', icon: MdCloud, desc: 'Scalable cloud infrastructure' },
  { name: 'DevOps', icon: MdSettings, desc: 'Streamlined deployments' },
];

const technologyDropdown = [
  { 
    name: 'Frontend', 
    items: [
      { name: 'React JS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Fast & native performance' },
      { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', desc: 'Smooth interactive SPAs' },
      { name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', desc: 'Approachable & versatile' },
    ] 
  },
  { 
    name: 'Backend', 
    items: [
      { name: 'Node JS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Scalable server-side apps' },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Versatile web applications' },
      { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'Smarter, faster, scalable' },
    ] 
  },
  { 
    name: 'Database', 
    items: [
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', desc: 'Robust relational data' },
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'Flexible NoSQL data' },
      { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', desc: 'In-memory performance' },
    ] 
  },
  { 
    name: 'Infrastructure', 
    items: [
      { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', desc: 'Comprehensive cloud' },
      { name: 'Azure', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', desc: 'Enterprise cloud solutions' },
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', desc: 'Containerized deployment' },
    ] 
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  
  const location = useLocation();
  const activeItem = navLinks.find(link => link.href === location.pathname)?.name || 'Home';
  const transparentPages = ['/', '/about'];
  const isTransparentPage = transparentPages.includes(location.pathname);
  const isTransparent = isTransparentPage && !scrolled;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -150 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/90 border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl' : 'bg-transparent border-transparent shadow-none backdrop-blur-none'
        }`}
      >
        <div 
          className="relative flex h-[80px] w-full max-w-[1400px] mx-auto items-center justify-between px-6 md:px-8 transition-all duration-300"
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo */}
          <Link 
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex shrink-0 items-center cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
          >
            <img 
              src="/quantromind.png" 
              alt="Quantromind Logo" 
              className="h-9 md:h-10 w-auto mr-2.5 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(79,107,255,0.4)]" 
            />
            <div className="flex flex-col">
              <span className={`text-base md:text-lg font-bold tracking-tight leading-none ${isTransparent ? 'text-white' : 'text-gray-900'}`}>
                QUANTROMIND
              </span>
              <span className={`text-[9px] md:text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${isTransparent ? 'text-white/80' : 'text-[#4F6BFF]'}`}>
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.name) : setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`group flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-[500] transition-colors duration-200 ${
                    activeItem === link.name || activeDropdown === link.name
                      ? (isTransparent ? 'text-white' : 'text-[#4F6BFF]')
                      : (isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50')
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <FiChevronDown 
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.name 
                          ? (isTransparent ? 'rotate-180 text-white' : 'rotate-180 text-[#4F6BFF]') 
                          : (isTransparent ? 'text-white/60 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-600')
                      }`} 
                    />
                  )}
                  
                  {/* Active Indicator Underline */}
                  {activeItem === link.name && (
                    <motion.div
                      layoutId="activeUnderline"
                      className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full ${isTransparent ? 'bg-white' : 'bg-[#4F6BFF]'}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex shrink-0 items-center">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-full bg-[#4F6BFF] px-7 py-3 text-[15px] font-[600] text-white shadow-[0_4px_14px_rgba(79,107,255,0.39)] transition-all duration-300 hover:bg-[#3d54cc] hover:shadow-[0_6px_20px_rgba(79,107,255,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">Get a Quote</span>
              <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                isTransparent 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              DESKTOP DROPDOWN MENUS
          ───────────────────────────────────────────────────────────── */}
          <AnimatePresence>
            {activeDropdown === 'Services' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 top-[85px] w-[800px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-white/95 p-6 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                onMouseEnter={() => handleMouseEnter('Services')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Core Services</h3>
                  <a href="#" className="text-sm font-medium text-[#4F6BFF] hover:underline flex items-center gap-1">
                    View all services <FiArrowRight size={14} />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {servicesDropdown.map((service) => (
                    <div 
                      key={service.name} 
                      className="group flex cursor-pointer items-start gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-blue-50/50"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#4F6BFF] transition-colors duration-200 group-hover:bg-[#4F6BFF] group-hover:text-white shadow-sm">
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-[#4F6BFF]">{service.name}</h4>
                        <p className="mt-1 text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeDropdown === 'Technology Focus' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 top-[85px] w-[900px] -translate-x-1/2 overflow-hidden rounded-[24px] bg-white/95 p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
                onMouseEnter={() => handleMouseEnter('Technology Focus')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-4 gap-6">
                  {technologyDropdown.map((col) => (
                    <div key={col.name}>
                      <h3 className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase border-b border-gray-100 pb-2">{col.name}</h3>
                      <ul className="space-y-1">
                        {col.items.map((item) => (
                          <li key={item.name}>
                            <a href="#" className="group flex items-center gap-3 rounded-xl p-2 transition-all duration-300 hover:bg-blue-50/50">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50/50 transition-all duration-300 group-hover:bg-white group-hover:shadow-sm">
                                <img 
                                  src={item.iconUrl} 
                                  alt={item.name} 
                                  className="h-6 w-6 object-contain grayscale-[40%] transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0" 
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-[13px] font-bold text-gray-800 transition-colors group-hover:text-[#4F6BFF] truncate">{item.name}</h4>
                                <p className="text-[10px] text-gray-500 leading-tight mt-0.5 line-clamp-1">{item.desc}</p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border border-blue-100/50 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Need a custom stack?</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Our architects can help you design the perfect infrastructure.</p>
                  </div>
                  <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#4F6BFF] shadow-sm hover:shadow-md transition-all">
                    Talk to an Expert
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MOBILE MENU
        ───────────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-4 overflow-hidden rounded-3xl bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden border border-gray-100"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-blue-50 hover:text-[#4F6BFF]"
                    >
                      {link.name}
                      {link.hasDropdown && <FiChevronDown />}
                    </Link>
                  </div>
                ))}
                <div className="pt-4 pb-2 px-2">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#4F6BFF] py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#3d54cc]"
                  >
                    Get a Quote <FiArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Global Style for the Button Shine Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
      `}} />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
