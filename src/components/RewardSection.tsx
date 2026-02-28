import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import rewardBg from "@/assets/reward-bg.png";

const RewardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <img
        src={rewardBg}
        alt="Community sharing food on Eid"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />

      <div className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-primary-foreground mb-3 sm:mb-4">
            The Reward
          </h2>
          <div className="w-16 sm:w-20 h-1 rounded-full mx-auto my-4 sm:my-6 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 max-w-4xl mx-auto mt-6 sm:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-5 sm:p-8 border border-primary-foreground/20"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-foreground mb-3 sm:mb-4">
              It Purifies Your Fast
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/85 leading-relaxed">
              The fasting of Ramadan is held between heaven and earth and is not raised to Allah without
              the Zakat al-Fitr being paid. Your fast is completed and elevated through this act of giving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-5 sm:p-8 border border-primary-foreground/20"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-foreground mb-3 sm:mb-4">
              It Brings Joy to the Poor
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/85 leading-relaxed">
              The Prophet ﷺ said: <em>"Spare them from going around begging on this day."</em> Your Zakat
              al-Fitr ensures that every Muslim can celebrate Eid with dignity and sustenance.
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/60 mt-3">— Al-Daraqutni</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RewardSection;
