import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Star, AlertTriangle } from "lucide-react";

const timelinePoints = [
  {
    icon: Clock,
    label: "Earliest",
    time: "2–3 days before Eid",
    note: "The companions did this",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Star,
    label: "Best Time",
    time: "Morning of Eid al-Fitr",
    note: "Most rewarded",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: AlertTriangle,
    label: "Deadline",
    time: "Before Eid Prayer begins",
    note: "After = just Sadaqah",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">When to Pay</h2>
        <div className="gold-divider" />
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-10 sm:mt-16 max-w-4xl mx-auto">
        {/* Desktop connector line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-border rounded-full" />

        {/* Mobile vertical connector */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        {/* Desktop: horizontal grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {timelinePoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 * i }}
              className="text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-full bg-card border-4 border-border flex items-center justify-center shadow-sm z-10">
                <point.icon className={`w-7 h-7 ${point.color}`} />
              </div>
              <h3 className="font-serif text-xl font-bold mt-4 text-foreground">{point.label}</h3>
              <p className="text-primary font-medium mt-1">{point.time}</p>
              <p className="text-muted-foreground text-sm mt-1">{point.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-6">
          {timelinePoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className="flex items-start gap-4 relative"
            >
              <div className={`shrink-0 w-12 h-12 rounded-full ${point.bgColor} border-2 border-border flex items-center justify-center z-10 bg-card`}>
                <point.icon className={`w-5 h-5 ${point.color}`} />
              </div>
              <div className="pt-1">
                <h3 className="font-serif text-lg font-bold text-foreground">{point.label}</h3>
                <p className="text-primary font-medium text-sm">{point.time}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{point.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="callout-box mt-10 sm:mt-14 max-w-3xl mx-auto"
      >
        <p className="font-serif text-base sm:text-lg italic text-foreground/90">
          "Whoever pays it before the Eid prayer — it is accepted Zakat. Whoever pays after — it is merely
          voluntary charity."
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">— Abu Dawud & Ibn Majah</p>

        <p className="text-xs sm:text-sm text-muted-foreground mt-4">
          <strong>Note:</strong> It can be paid as early as the 1st of Ramadan per the Shafi'i school, or 1–2
          days before Eid per the Hanbali school.
        </p>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
