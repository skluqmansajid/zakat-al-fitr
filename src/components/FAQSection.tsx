import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I pay Zakat al-Fitr in cash?",
    a: "Yes — the Hanafi madhab and many contemporary fatwa councils permit paying in cash, especially when it is more beneficial to the recipients. Most countries now set an official cash amount equivalent to one Sa' of staple food.",
  },
  {
    q: "Can I pay early in Ramadan?",
    a: "This depends on the madhab you follow. The Shafi'i school permits payment from the beginning of Ramadan. The Hanbali school allows it 1–2 days before Eid. Generally, paying during the last 10 days of Ramadan is widely accepted.",
  },
  {
    q: "What if I miss the deadline?",
    a: "You should still pay it, but it becomes Sadaqah (voluntary charity) rather than accepted Zakat al-Fitr. The obligation remains on your conscience — seek forgiveness from Allah and resolve to pay on time in future years.",
  },
  {
    q: "Do I pay for a baby?",
    a: "Yes — the guardian pays Zakat al-Fitr on behalf of every dependent, including newborns. If a child is born before the Eid prayer, Zakat al-Fitr should be paid for them.",
  },
  {
    q: "What food is used?",
    a: "The traditional measurement is based on staple foods: wheat, barley, rice, dates, or raisins — whichever is the staple of your region. Most scholars today accept the cash equivalent based on the local price of these foods.",
  },
  {
    q: "How much in weight?",
    a: "One Sa' is approximately 2.5–3 kg per person. The exact weight varies slightly depending on the type of food, as different grains have different densities.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
        <div className="gold-divider" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto mt-6 sm:mt-10"
      >
        <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-4 sm:px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg hover:no-underline py-4 sm:py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
