import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatIsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="what-is" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">What is Zakat al-Fitr?</h2>
        <div className="gold-divider" />

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          <p>
            Zakat al-Fitr — also known as <strong>Fitrana</strong> or <strong>Sadaqat al-Fitr</strong> — is a
            mandatory charity that every Muslim must pay at the end of Ramadan. The word itself means
            "charity of breaking the fast," and it was ordained in the 2nd year of Hijrah, the very same year
            that fasting was made obligatory.
          </p>

          <p>
            Unlike Zakat al-Maal (wealth-based Zakat), Zakat al-Fitr is imposed on <em>people</em>, not on
            wealth. Every Muslim — regardless of age, gender, or income — must pay it or have it paid on their
            behalf. The amount is <strong>one Sa'</strong> (approximately 2.5–3 kg) of staple food such as
            wheat, barley, rice, dates, or raisins, or its cash equivalent.
          </p>

          <p>
            Its purpose is twofold: to purify the one who fasted from any indecent act or speech committed
            during Ramadan, and to provide food for the needy so that they too may celebrate the joy of
            Eid al-Fitr.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-6 sm:mt-10 space-y-4 sm:space-y-6">
          <div className="hadith-block">
            <p>
              "The Prophet ﷺ enjoined Zakat al-Fitr to shield those who fast from any indecent act or speech,
              and to provide food for the needy."
            </p>
            <p className="text-sm mt-3 not-italic text-muted-foreground/70">
              — Ibn Abbas (Abu Dawud, Ibn Majah)
            </p>
          </div>

          <div className="hadith-block">
            <p>
              "Ibn Umar reported: The Messenger of Allah ﷺ made Zakat al-Fitr obligatory — one saa' of dates
              or barley — upon every Muslim, free or slave, male or female, young or old."
            </p>
            <p className="text-sm mt-3 not-italic text-muted-foreground/70">
              — Agreed upon (Bukhari & Muslim)
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIsSection;
