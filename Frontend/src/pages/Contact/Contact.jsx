import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, 
  ChevronDown, Send, Globe, Zap, Shield, Heart, Plus, Minus
} from 'lucide-react';
import contactHologram from '../../assets/contact_hologram.png';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- CONFETTI COMPONENT ---
const Confetti = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 - 50, // -50vw to 50vw
      y: -(Math.random() * 100 + 50), // Fly up
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
      delay: Math.random() * 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50 flex items-center justify-center">
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={{ 
            opacity: [1, 1, 0], 
            scale: [0, 1, 1], 
            x: p.x * 5, 
            y: p.y * 5, 
            rotate: p.rotation * 5 
          }}
          transition={{ duration: 2.5, ease: "easeOut", delay: p.delay }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px'
          }}
        />
      ))}
    </div>
  );
};

// --- DATA ---
const whyChooseUs = [
  { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Fast Response", desc: "Replies within 24 Hours" },
  { icon: <Globe className="w-6 h-6 text-blue-500" />, title: "Expert Team", desc: "Professional Developers" },
  { icon: <Shield className="w-6 h-6 text-green-500" />, title: "Trusted Partner", desc: "Reliable Delivery" },
  { icon: <MapPin className="w-6 h-6 text-purple-500" />, title: "AI First", desc: "Modern Technologies" },
  { icon: <Globe className="w-6 h-6 text-cyan-500" />, title: "Remote Friendly", desc: "Global Collaboration" },
  { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Long-Term Support", desc: "Dedicated Maintenance" }
];

const faqs = [
  { q: "How quickly will you respond?", a: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call our direct lines." },
  { q: "Do you work internationally?", a: "Yes, we work with clients globally. Our remote-friendly processes ensure seamless collaboration across different time zones." },
  { q: "Can I schedule an online meeting?", a: "Absolutely! You can use the 'Schedule a Meeting' button to book a slot directly on our calendar." },
  { q: "What technologies do you specialize in?", a: "We specialize in modern web technologies including React, Next.js, Node.js, Python, Django, and various AI/ML integrations." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer dedicated maintenance and long-term support plans to ensure your software remains secure and up-to-date." }
];

// --- MAIN COMPONENT ---
export default function Contact() {
  const [formState, setFormState] = useState({
    name: '', phone: '', email: '', company: '', type: '', budget: '', timeline: '', message: '', agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formState.agreed) return alert("Please agree to the Privacy Policy.");
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: '', phone: '', email: '', company: '', type: '', budget: '', timeline: '', message: '', agreed: false });
      }, 5000);
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("quantromind@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="w-full bg-[#FFFFFF] font-['Inter'] text-[#0F172A] overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#EFF6FF]">
        {/* Background Gradients & Animated Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] animate-pulse"></div>
          <div className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[150px] opacity-40"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-100 blur-[150px] opacity-40"></div>
          
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-[30%] right-[30%] w-3 h-3 rounded-full bg-blue-400 blur-[1px]" />
          <motion.div animate={{ y: [0, 40, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-[20%] left-[20%] w-2 h-2 rounded-full bg-cyan-400 blur-[1px]" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start">
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-100/50 text-blue-600 font-medium text-sm mb-8 shadow-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Pune, Maharashtra • Private Limited
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-[#0F172A] mb-6 font-['Space_Grotesk']">
              Get In Touch <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">Contact Us.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[18px] text-[#64748B] leading-relaxed max-w-lg mb-10">
              We'd love to discuss your project. Whether you're building a startup, scaling your business, or exploring AI solutions, our team is ready to help.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#2563EB] text-white rounded-[18px] font-semibold text-[18px] shadow-xl shadow-blue-600/30 hover:bg-[#1D4ED8] hover:-translate-y-1 transition-all duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-md border border-[#E2E8F0] text-[#0F172A] rounded-[18px] font-semibold text-[18px] shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center">
                Schedule a Meeting
                <ArrowRight className="ml-2 w-5 h-5 text-blue-600" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Hologram Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-[500px] lg:h-[600px] flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[550px] h-full z-10 relative mix-blend-multiply"
              style={{ 
                backgroundImage: `url(${contactHologram})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.15))'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: QUICK CONTACT INFO */}
      <section className="py-12 px-6 lg:px-16 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <motion.a href="tel:+917020243759" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="group bg-white/80 backdrop-blur-xl border border-[#E2E8F0] rounded-[24px] p-8 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
              <Phone className="w-8 h-8 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#0F172A]">Phone Numbers</h3>
            <p className="text-[#64748B] mb-1">+91 7020243759</p>
            <p className="text-[#64748B]">+91 6263863343</p>
            <span className="mt-4 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Click to Call</span>
          </motion.a>

          {/* Email */}
          <motion.div onClick={handleCopyEmail} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="group cursor-pointer bg-white/80 backdrop-blur-xl border border-[#E2E8F0] rounded-[24px] p-8 shadow-sm hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-600 transition-all duration-300">
              <Mail className="w-8 h-8 text-cyan-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#0F172A]">Email</h3>
            <p className="text-[#64748B]">quantromind@gmail.com</p>
            <span className="mt-4 text-cyan-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Click to Copy</span>
          </motion.div>

          {/* Address */}
          <motion.a href="#location" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="group bg-white/80 backdrop-blur-xl border border-[#E2E8F0] rounded-[24px] p-8 shadow-sm hover:shadow-2xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-300">
              <MapPin className="w-8 h-8 text-purple-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#0F172A]">Office Address</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Floor No. 201, Arnav Heights, College Road, Wakad, Pune, MH 411057</p>
            <span className="mt-4 text-purple-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View on Map</span>
          </motion.a>

          {/* Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="group bg-white/80 backdrop-blur-xl border border-[#E2E8F0] rounded-[24px] p-8 shadow-sm hover:shadow-2xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
              <Clock className="w-8 h-8 text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#0F172A]">Working Hours</h3>
            <p className="text-[#64748B] font-medium">Monday – Saturday</p>
            <p className="text-[#64748B]">09:00 AM – 06:00 PM</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 & 4: CONTACT FORM & WHY CHOOSE US */}
      <section className="py-24 px-6 lg:px-16 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Left Form */}
          <div className="lg:col-span-3">
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] font-['Space_Grotesk'] mb-4">Let's Build Something Amazing</h2>
              <p className="text-[#64748B] text-lg">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <div className="relative bg-[#F8FAFC] rounded-[32px] p-8 lg:p-12 border border-[#E2E8F0] shadow-sm">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 rounded-[32px] flex flex-col items-center justify-center text-center p-8"
                  >
                    <Confetti />
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                      <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-[#0F172A] mb-2 font-['Space_Grotesk']">Thank You!</h3>
                    <p className="text-[#64748B] text-lg">Your message has been received. Our team will contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Full Name *</label>
                    <input required type="text" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Mobile Number *</label>
                    <input required type="tel" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email Address *</label>
                    <input required type="email" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input type="text" className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formState.company} onChange={e => setFormState({...formState, company: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Project Type</label>
                  <select className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-[#64748B]" value={formState.type} onChange={e => setFormState({...formState, type: e.target.value})}>
                    <option value="">Select a service...</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Message</label>
                  <textarea required rows="4" placeholder="Describe your requirement in detail..." className="w-full bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-[#E2E8F0] text-blue-600 focus:ring-blue-500 cursor-pointer" checked={formState.agreed} onChange={e => setFormState({...formState, agreed: e.target.checked})} />
                  <label htmlFor="privacy" className="text-sm text-[#64748B] cursor-pointer">I agree to the Privacy Policy.</label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Why Choose Us */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0F172A] font-['Space_Grotesk'] mb-8">Why Choose Quantromind</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {whyChooseUs.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-[#E2E8F0] rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{item.title}</h4>
                    <p className="text-sm text-[#64748B]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: OUR PROCESS TIMELINE */}
      <section className="py-24 px-6 lg:px-16 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk'] mb-4">Our Process</h2>
          <p className="text-[#64748B] text-lg">How we turn your ideas into powerful digital realities.</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 -translate-y-1/2 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {['Share Your Idea', 'Discovery Call', 'Proposal & Estimate', 'Development', 'Launch & Support'].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center font-bold text-xl text-[#0F172A] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 mb-6 relative z-10">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-[#0F172A] text-lg mb-2">{step}</h4>
                {/* Mobile indicator */}
                {idx < 4 && <div className="md:hidden h-8 w-px bg-blue-200 my-2"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LOCATION MAP */}
      <section id="location" className="py-24 px-6 lg:px-16 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk'] mb-4">Visit Our Office</h2>
            <p className="text-[#64748B] text-lg">We are located in the heart of Pune's IT hub.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#F8FAFC] rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm relative h-[400px] lg:h-[500px] group">
              {/* Overlay for hover interaction instructions if needed, or just map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4550186717523!2d73.76678221538334!3d18.598583487363415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b900407a505b%3A0x6b45a90d9f0f9b6c!2sCollege%20Rd%2C%20Wakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
              ></iframe>
            </div>

            <div className="bg-white rounded-[32px] p-10 border border-[#E2E8F0] shadow-xl flex flex-col justify-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Quantromind Technologies</h3>
              <p className="text-[#64748B] text-lg leading-relaxed mb-10">
                Floor No. 201<br/>
                Arnav Heights<br/>
                College Road, Wakad<br/>
                Pimpri-Chinchwad<br/>
                Maharashtra 411057
              </p>
              <div className="flex flex-col gap-4">
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="w-full py-4 bg-[#0F172A] text-white rounded-xl font-bold text-center hover:bg-black hover:shadow-lg transition-all">
                  Get Directions
                </a>
                <button className="w-full py-4 bg-white text-[#0F172A] border border-[#E2E8F0] rounded-xl font-bold text-center hover:bg-gray-50 transition-all">
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-24 px-6 lg:px-16 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk'] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between font-bold text-[#0F172A] text-left hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  {openFaq === idx ? <Minus className="text-blue-600" /> : <Plus className="text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-[#64748B]"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-32 px-6 lg:px-16 bg-white relative overflow-hidden">
        {/* Floating circles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-blue-600 to-cyan-500 blur-[120px] opacity-20 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 bg-[rgba(255,255,255,0.8)] backdrop-blur-3xl border border-white p-12 lg:p-20 rounded-[40px] shadow-2xl shadow-blue-900/10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] font-['Space_Grotesk'] tracking-tight mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-[#64748B] mb-10 max-w-2xl mx-auto">
            Let's transform your ideas into powerful digital products. Our team of experts is ready to accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white rounded-[18px] font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-black hover:-translate-y-1 transition-all duration-300">
              Start Your Project
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#2563EB] border border-blue-200 rounded-[18px] font-semibold text-lg shadow-sm hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
