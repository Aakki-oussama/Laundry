// Reusable animation variants for Framer Motion
// Centralized animation patterns to reduce code duplication
import type { Variants } from 'framer-motion';

/**
 * Fade in from bottom (most common pattern)
 * Usage: initial="hidden" whileInView="visible" viewport={{ once: true }}
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

/**
 * Fade in only (no movement)
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Slide up with scale
 */
export const slideUpScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

/**
 * Slide up from further (y: 50)
 */
export const slideUpLarge: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

/**
 * Scale only (no fade)
 */
export const scaleOnly: Variants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Fade in from bottom (smaller movement y: 10)
 */
export const fadeInUpSmall: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * 3D rotate in (for chat interface)
 */
export const rotateIn3D: Variants = {
  hidden: { opacity: 0, rotateX: 10, y: 40 },
  visible: { 
    opacity: 1, 
    rotateX: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

