'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LogoTransition = ({ onComplete }: { onComplete: () => void }) => {
  const [showLogo, setShowLogo] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsLaptop(width >= 1024 && width <= 1568);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      onComplete(); // Notify parent when done
    }, 1950);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Define position & scale values based on screen type
  const motionProps = isMobile
    ? { scale: 0.6, x: '-25vw', y: '-45vh' }
    : isLaptop
    ? { scale: 0.5, x: '-42vw', y: '-46vh' }
    : { scale: 0.4, x: '-30vw', y: '-47vh' };

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[color:var(--bgcolour)] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 1.2 }}
        >
          <motion.div
            initial={{ scale: 1.5, x: 0, y: 0 }}
            animate={motionProps}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="text-xl md:text-6xl font-bold font-raleway"
          >
            <span className="text-[color:var(--textblue)]">Anjali </span>
            <span className="text-[color:var(--textorange)]">Elastomer</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoTransition;
