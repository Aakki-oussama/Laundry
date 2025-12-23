import { motion } from 'framer-motion';

const Loader = () => {
  const text = "EcoLaundry";
  const letters = text.split("");

  // Bubble configuration
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 5, // 5px to 20px
    x: Math.random() * 100, // 0-100% width
    duration: Math.random() * 3 + 2, // 2s to 5s
    delay: Math.random() * 2,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark overflow-hidden"
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* --- Ambient Background --- */}
      
      {/* Deep Underwater Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-[#12355b] to-brand-dark opacity-80" />
      
      {/* Caustic Light Effects (Sunlight through water) */}
      <motion.div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-brand-main/10 to-transparent rotate-45"
        animate={{ 
          x: ['-20%', '20%', '-20%'],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-brand-main/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- Bubbles Layer --- */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="absolute bottom-0 rounded-full bg-brand-main/40 backdrop-blur-sm border border-brand-cream/10 shadow-[0_0_10px_rgba(40,167,218,0.3)]"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.x}%`,
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: -1200,
              opacity: [0, b.opacity, 0],
              x: Math.sin(b.id) * 50, // Wobbly ascent
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* --- Typography Animation --- */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Floating Letters */}
        <div className="flex items-baseline space-x-[1px] overflow-visible p-4">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-main/50 drop-shadow-lg"
              initial={{ y: 0, scaleY: 1 }}
              animate={{
                y: [0, -15, 0], // Float up and down
                rotate: [0, index % 2 === 0 ? 2 : -2, 0], // Subtle tilt
                scaleY: [1, 1.05, 0.95, 1], // Liquid distortion
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15, // Wave effect across the word
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle with ripple effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative mt-2"
        >
            <span className="text-brand-main font-sans text-sm tracking-[0.5em] uppercase font-medium opacity-80">
                Meknès
            </span>
            {/* Subtle line ripple below text */}
            <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-brand-main/50"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            />
        </motion.div>

        {/* Loading Indicator */}
        <div className="mt-12 flex items-center gap-2">
            <motion.div 
                className="h-1.5 rounded-full bg-brand-main shadow-[0_0_15px_rgba(40,167,218,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            {/* Leading Bubble on the bar */}
            <motion.div 
                className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            />
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;