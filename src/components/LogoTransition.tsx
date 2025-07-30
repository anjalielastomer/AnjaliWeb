'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LogoTransition = ({ onComplete }: { onComplete: () => void }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      onComplete(); // Notify parent when done
    }, 1950); // You can fine-tune this
    return () => clearTimeout(timer);
  }, [onComplete]);

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
            animate={{ scale: 0.4, x: '-40vw', y: '-45vh' }} // Higher on exit
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="text-4xl md:text-6xl font-bold font-raleway"
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
