import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { FaMicrosoft, FaGoogle, FaAmazon, FaFacebook, FaApple, FaStripe, FaGithub, FaSlack } from 'react-icons/fa';

const logos = [
  { name: 'Microsoft', icon: FaMicrosoft, color: '#00A4EF' },
  { name: 'Google', icon: FaGoogle, color: '#4285F4' },
  { name: 'Amazon', icon: FaAmazon, color: '#FF9900' },
  { name: 'Facebook', icon: FaFacebook, color: '#1877F2' },
  { name: 'Apple', icon: FaApple, color: '#000000' },
  { name: 'Stripe', icon: FaStripe, color: '#008CDD' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'Slack', icon: FaSlack, color: '#E01E5A' },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '100+', label: 'Enterprise Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const TrustedBy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const parallaxX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Duplicated logos for infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Letter reveal animation for heading
  const headingText = "Powering Growth for".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[900px] py-20 bg-white overflow-hidden flex flex-col items-center justify-center font-['Inter',sans-serif]"
    >
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

      {/* Radial Glows */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"
      />
      <motion.div
        style={{ x: useTransform(springX, [-0.5, 0.5], [20, -20]), y: useTransform(springY, [-0.5, 0.5], [20, -20]) }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500 opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              x: [null, Math.random() * 50 - 25]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center pt-10">

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
            Trusted by Global Businesses
          </span>
        </motion.div>

        {/* Heading */}
        <div className="text-center mb-8 max-w-[900px] px-4">
          <h2 className="text-[38px] md:text-[56px] lg:text-[72px] font-[900] leading-[1.05] tracking-tight text-[#0f172a]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="inline-block"
            >
              {headingText.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                  }}
                  className="inline-block mr-3 md:mr-4 lg:mr-5"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#6366F1]"
            >
              Forward-Thinking
            </motion.span>
            {' '}Companies
          </h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[18px] md:text-[20px] font-medium text-[#64748B] text-center max-w-[700px] px-4 mb-20 leading-relaxed"
        >
          Organizations across industries trust our solutions to accelerate innovation, improve efficiency, and drive measurable business results.
        </motion.p>

      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative z-10 w-full overflow-hidden flex flex-col items-center mb-24">

        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -260 * logos.length - 24 * logos.length] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-6 group hover:[animation-play-state:paused] w-max px-6"
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.1 }}
              whileTap={{ scale: 0.92, boxShadow: `0 0 50px ${logo.color}` }}
              className="w-[260px] h-[120px] flex-shrink-0 flex items-center justify-center bg-white border border-slate-100 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:scale-105 group/card relative overflow-hidden"
            >
              {/* Subtle dynamic background glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500 rounded-[24px]"
                style={{ backgroundColor: logo.color }}
              />

              <div className="flex items-center gap-3 relative z-10">
                <logo.icon size={40} color={logo.color} className="drop-shadow-md group-hover/card:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-black text-slate-800 tracking-tight">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Statistics */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-10 px-6 bg-white/70 backdrop-blur-xl border border-slate-100 rounded-[20px] transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] group"
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default TrustedBy;
