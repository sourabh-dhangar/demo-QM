import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp URL
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=917020243759&text=Hi+Quantromind%21+I%27m+interested+in+your+services.&type=phone_number&app_absent=0";

  useEffect(() => {
    if (hasClicked) {
      setBubbleVisible(false);
      return;
    }

    // 1. Show after 5 seconds
    const initialShow = setTimeout(() => {
      if (!hasClicked) setBubbleVisible(true);
    }, 5000);

    // 2. Hide after 8 seconds of being visible (at 13s)
    const initialHide = setTimeout(() => {
      if (!hasClicked) setBubbleVisible(false);
    }, 13000);

    // 3. Reappear loop: Every 38 seconds after initial hide (30s hidden + 8s visible)
    let loopInterval;
    const startLoop = setTimeout(() => {
      loopInterval = setInterval(() => {
        if (!hasClicked) {
          setBubbleVisible(true);
          setTimeout(() => {
            if (!hasClicked) setBubbleVisible(false);
          }, 8000);
        }
      }, 38000); // 30s wait + 8s visible
    }, 13000);

    return () => {
      clearTimeout(initialShow);
      clearTimeout(initialHide);
      clearTimeout(startLoop);
      clearInterval(loopInterval);
    };
  }, [hasClicked]);

  const handleClick = () => {
    setHasClicked(true);
    setBubbleVisible(false);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      
      {/* Premium Message Bubble */}
      <AnimatePresence>
        {bubbleVisible && !hasClicked && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="mb-4 pointer-events-auto"
          >
            <div className="relative bg-white/90 backdrop-blur-xl p-4 rounded-[18px] shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[240px]">
              <div className="flex flex-col gap-2">
                <p className="text-[13px] font-medium text-slate-700 leading-tight">
                  👋 Hi! Need help with your project?
                </p>
                <button 
                  onClick={handleClick}
                  className="bg-[#25D366] text-white text-[12px] font-bold py-1.5 px-3 rounded-full self-start hover:bg-[#128C7E] transition-colors shadow-sm"
                >
                  Chat Now
                </button>
              </div>
              {/* Tail pointing down-right */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/90 backdrop-blur-xl border-b border-r border-slate-100 transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative pointer-events-auto">
        
        {/* Tooltip (Desktop Only) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 hidden md:block whitespace-nowrap"
            >
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-slate-100">
                <span className="text-[13px] font-medium text-slate-700">Need a software solution? Let's talk.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect (Behind Button) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <motion.div
            animate={{
              scale: [1, 1.8],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2, // Every 4 seconds total
              ease: "easeOut"
            }}
            className="w-full h-full bg-[#25D366] rounded-full"
          />
        </div>

        {/* Main WhatsApp Button */}
        <motion.button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.8 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-[#25D366] rounded-full border-4 border-white shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] group z-10 transition-shadow duration-300"
        >
          {/* Stable Professional Icon Wrapper */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Glass Reflection Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
            
            {/* WhatsApp Icon */}
            <FaWhatsapp className="text-white w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-6 drop-shadow-sm" />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 flex items-center justify-center bg-[#EF4444] text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm z-20">
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Online
            </motion.span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
