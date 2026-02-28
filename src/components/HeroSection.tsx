import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Mosque silhouette at dusk with crescent moon"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto py-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-serif text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4"
        >
          بسم الله الرحمن الرحيم
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-primary-foreground mb-4 sm:mb-6 leading-tight"
        >
          Zakat al-Fitr
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-light mb-3 sm:mb-4"
        >
          Purify Your Fast, Feed a Soul
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-primary-foreground/70 mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          Learn what it is, who must pay, when to give — then calculate in seconds.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToCalculator}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg shadow-lg transition-colors active:scale-95"
        >
          Calculate Now ↓
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
