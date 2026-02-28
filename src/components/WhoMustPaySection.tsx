import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Home, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Who is Obligated",
    description:
      "Every Muslim who has food beyond their basic needs for themselves and their family on Eid day — regardless of age or gender. Even a child must have it paid on their behalf by their guardian.",
  },
  {
    icon: Home,
    title: "Pay for Your Family First",
    description:
      "The head of household pays on behalf of themselves, their spouse, children, and all dependents. Scholars note you should prioritize your family members. One Sa' per person in your care.",
  },
  {
    icon: ShieldCheck,
    title: "Who is Exempt",
    description:
      "Someone who genuinely cannot afford food beyond their own Eid day needs is exempt. If you can afford even a basic surplus, you must pay.",
  },
];

const WhoMustPaySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-secondary/50 py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Who Must Pay?</h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card rounded-xl p-5 sm:p-8 shadow-sm border border-border"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5">
                <card.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-foreground mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoMustPaySection;
