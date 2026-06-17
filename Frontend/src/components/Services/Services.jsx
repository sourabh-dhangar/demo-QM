import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCpu, FiCode, FiSmartphone, FiLayout, FiUsers, 
  FiShield, FiSettings, FiCloud, FiHelpCircle, 
  FiCheckCircle, FiArrowRight, FiChevronRight,
  FiZap
} from 'react-icons/fi';

const servicesData = [
  {
    id: 'aiml',
    icon: <FiCpu />,
    title: 'AIML',
    slogan: 'Lead the AI revolution!',
    description: 'By using the latest advancements in AI & ML, our team will help your business to make data-driven decisions and implement AI in your business to stay ahead of the curve in today\'s competitive landscape.',
    features: [
      'AI Development & Consulting', 'Machine Learning Model Development',
      'AI Product Development', 'AI-powered Virtual Assistants & Chatbox',
      'Facial Recognition', 'Predictive Maintenance Solutions',
      'Natural Language Processing (NLP)', 'AI & ML Data Support and Optimization',
      'AI Security & Design', 'AIOps Solutions'
    ],
    ctaText: 'Explore more about AIML'
  },
  {
    id: 'software',
    icon: <FiCode />,
    title: 'Software Engineering',
    slogan: 'Everything Related to Software Development in One Place',
    description: 'At QuantroMind, we provide high-quality software solutions that are tailored to your specific requirements, assuring stability and security across every platform, OS, and browser.',
    features: [
      'Custom software development', 'Software consulting',
      'Full-stack Development', 'MEAN & MERN Development',
      'Software Product Development', 'Legacy software modernization',
      'Application Development & Maintenance', 'Cloud application development'
    ],
    ctaText: 'Learn More about Software services'
  },
  {
    id: 'web-mobile',
    icon: <FiSmartphone />,
    title: 'Web and Mobility',
    slogan: 'Let\'s Create Apps That People Love!',
    description: 'Whether it\'s a website, web app, or mobile app — our team of developers can craft all sorts of websites and applications that are compatible with any device. We will help you to make your dream project a reality!',
    features: [
      'Website Design & development', 'Web App Development',
      'Mobile App Development', 'IOS Development',
      'Android Development', 'Flutter Development',
      'Xamarin Development', 'React Native Development'
    ],
    ctaText: 'Explore More about Web and Mobility'
  },
  {
    id: 'uiux',
    icon: <FiLayout />,
    title: 'UI/UX design',
    slogan: 'Make Your Users Fall in Love With Your Apps',
    description: 'Our talented pool of UI/UX developers are experts at enhancing user experiences to drive engagement. With years of experience under their belt, our team crafts intuitive and visually appealing interfaces that captivate your audience.',
    features: [
      'Persona Development', 'User Interface (UI) Design',
      'User Experience (UX) Design', 'Wireframing and Prototyping',
      'Usability Testing & Validation', 'Website & App redesigning',
      'Responsive Designing'
    ],
    ctaText: 'Explore more about UI/UX design'
  },
  {
    id: 'staffing',
    icon: <FiUsers />,
    title: 'Staff Augmentation',
    slogan: 'Build Your Dream Team Faster',
    description: 'With our team augmentation service, you can hire our skilled developers for your project and complete it faster. Easy onboarding, a talented pool of diverse developers who excel in the latest tools and technologies.',
    features: [
      'Flexible Engagement Models', 'Competent Developers',
      'Quick and Easy Onboarding', 'Niche-specific Developers',
      'Scalable Team Solutions', 'Direct Communication'
    ],
    ctaText: 'Hire our developers'
  },
  {
    id: 'qa',
    icon: <FiShield />,
    title: 'Testing & QA',
    slogan: 'Quality Guaranteed, Every Step of the Way',
    description: 'We ensure your software is bug-free and performs flawlessly across all environments. Our rigorous testing processes guarantee reliability and high performance for your digital products.',
    features: [
      'Automated Testing', 'Manual QA Testing',
      'Performance Testing', 'Security Audits',
      'User Acceptance Testing', 'Regression Testing'
    ],
    ctaText: 'Explore QA Services'
  },
  {
    id: 'maintenance',
    icon: <FiSettings />,
    title: 'Maintenance and Migration',
    slogan: 'Keep Your Systems Modern and Efficient',
    description: 'Don\'t let legacy systems hold you back. Our migration and maintenance services ensure your technology stack remains up-to-date, secure, and highly performant.',
    features: [
      'Legacy System Migration', 'Cloud Migration',
      '24/7 Support & Maintenance', 'System Upgrades',
      'Performance Optimization', 'Security Patching'
    ],
    ctaText: 'Modernize Your Systems'
  },
  {
    id: 'devops',
    icon: <FiZap />,
    title: 'DevOps as a Service',
    slogan: 'Accelerate Your Delivery with DevOps',
    description: 'Streamline your development lifecycle and improve deployment frequency with our DevOps expertise. We bridge the gap between development and operations for faster time-to-market.',
    features: [
      'CI/CD Pipeline Setup', 'Infrastructure as Code',
      'Containerization (Docker/K8s)', 'Cloud Infrastructure Management',
      'Monitoring & Logging', 'Security Automation'
    ],
    ctaText: 'Scale with DevOps'
  },
  {
    id: 'support',
    icon: <FiHelpCircle />,
    title: 'IT Support and Solutions',
    slogan: 'Reliable IT Support for Your Business',
    description: 'Focus on your core business while we handle your IT infrastructure. Our comprehensive support solutions ensure minimal downtime and maximum productivity for your team.',
    features: [
      'Managed IT Services', 'Network Security',
      'Disaster Recovery', 'Help Desk Support',
      'Hardware & Software Setup', 'IT Consulting'
    ],
    ctaText: 'Get IT Support'
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-[#f6f9ff] relative overflow-hidden font-['Inter',sans-serif] border-t border-slate-100">
      
      {/* 80x80 Grid Background */}
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

      {/* Background Glows matching TrustedBy */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 transition-all duration-700 ease-in-out bg-[#2563EB]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            top: '10%',
            left: '20%',
          }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 transition-all duration-700 ease-in-out bg-[#06B6D4]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            bottom: '5%',
            right: '10%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#DCE6F5] bg-white/80 backdrop-blur-md shadow-sm mb-12"
        >
          <span className="text-blue-600 text-xs">●</span>
          <span className="text-[#0f172a] text-[12px] font-bold tracking-[3px] uppercase">
            Services We Offer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[38px] md:text-[56px] lg:text-[72px] font-[900] leading-[1.05] tracking-tight text-[#0f172a] mb-6">
            IT Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#6366F1]">We Provide</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 w-full">
          {/* Vertical Tabs Navigation */}
          <div className={`md:w-[300px] lg:w-[380px] flex flex-col gap-3 transition-all duration-300 ${
            isMobileDetailOpen ? 'hidden md:flex' : 'flex'
          }`}>
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveTab(service);
                  setIsMobileDetailOpen(true);
                }}
                className={`group relative flex items-center justify-between p-5 rounded-[20px] transition-all duration-300 text-left border ${
                  activeTab.id === service.id
                    ? 'bg-white border-[#DCE6F5] shadow-[0_15px_40px_rgba(37,99,235,0.08)]'
                    : 'bg-transparent border-transparent hover:bg-white/60 hover:border-[#E8EDF5]'
                }`}
              >
                {/* Active Indicator Line */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-full transition-all duration-300 ${
                  activeTab.id === service.id ? 'bg-[#2563EB] opacity-100' : 'bg-transparent opacity-0'
                }`} />
                
                <div className="flex items-center gap-4 ml-3">
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-300 ${
                    activeTab.id === service.id 
                    ? 'bg-blue-50 text-[#2563EB]' 
                    : 'bg-slate-100/50 text-slate-500 group-hover:bg-blue-50/50 group-hover:text-[#2563EB]'
                  }`}>
                    {React.cloneElement(service.icon, { size: 24 })}
                  </div>
                  <span className={`text-lg font-bold transition-colors ${
                    activeTab.id === service.id ? 'text-[#0f172a]' : 'text-[#64748B] group-hover:text-[#0f172a]'
                  }`}>
                    {service.title}
                  </span>
                </div>
                
                <FiChevronRight size={20} className={`transition-all duration-300 ${
                  activeTab.id === service.id ? 'text-[#2563EB] opacity-100 translate-x-0' : 'text-slate-400 opacity-0 -translate-x-2'
                }`} />
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className={`flex-1 md:pl-10 md:border-l border-slate-200 md:min-h-[500px] lg:min-h-[600px] transition-all duration-300 ${
            isMobileDetailOpen ? 'flex flex-col' : 'hidden md:flex md:flex-col'
          }`}>
            {/* Back button for mobile view */}
            <button 
              onClick={() => setIsMobileDetailOpen(false)}
              className="md:hidden mb-8 self-start flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors py-2 font-bold text-sm uppercase tracking-wider"
            >
              <FiArrowRight className="rotate-180 w-5 h-5 text-[#2563EB]" />
              <span>Back to Services</span>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full flex flex-col"
              >
                <div className="mb-10">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a] mb-6 leading-tight tracking-tight">
                    {activeTab.slogan}
                  </h3>
                  <p className="text-[#64748B] text-lg lg:text-[20px] font-medium leading-relaxed max-w-3xl">
                    {activeTab.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-16 mt-4">
                  {activeTab.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover/item:scale-110 transition-transform">
                        <FiCheckCircle size={14} strokeWidth={3} />
                      </div>
                      <span className="text-[#334155] font-bold text-[16px] hover:text-[#0f172a] transition-colors cursor-default leading-snug">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 text-lg">
                    <div className="relative z-10 flex items-center gap-3">
                      <span>{activeTab.ctaText}</span>
                      <FiArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                    {/* Button Shine Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
