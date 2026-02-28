import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { countries } from "@/data/countries";

const SourcesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-primary text-primary-foreground" ref={ref}>
      <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Video Section — Embedded */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 sm:mb-3">Still Have Doubts?</h2>
            <p className="text-primary-foreground/60 mb-5 sm:mb-6 text-xs sm:text-sm">Watch this detailed explanation of Zakat al-Fitr</p>
            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-primary-foreground/10 shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Sg2-ojraA40"
                  title="Zakat al-Fitr Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Country Rates — Mobile: Cards, Desktop: Table */}
          <div className="mb-10 sm:mb-14">
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-5 sm:mb-6 text-center">
              Country-wise Zakat al-Fitr Rates (Per Person)
            </h3>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto rounded-xl border border-primary-foreground/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-foreground/5 border-b border-primary-foreground/10">
                    <th className="text-left px-4 py-3 font-semibold text-primary-foreground/80">Country</th>
                    <th className="text-left px-4 py-3 font-semibold text-primary-foreground/80">Staple Food</th>
                    <th className="text-right px-4 py-3 font-semibold text-primary-foreground/80">Amount</th>
                    <th className="text-left px-4 py-3 font-semibold text-primary-foreground/80">Authority</th>
                    <th className="text-center px-4 py-3 font-semibold text-primary-foreground/80">Proof</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((c) => (
                    <tr key={c.name} className="border-b border-primary-foreground/5 hover:bg-primary-foreground/5 transition-colors">
                      <td className="px-4 py-3 text-primary-foreground/90 whitespace-nowrap">
                        <span className="mr-2">{c.flag}</span>{c.name}
                      </td>
                      <td className="px-4 py-3 text-primary-foreground/60">{c.stapleFood}</td>
                      <td className="px-4 py-3 text-right text-primary-foreground font-semibold whitespace-nowrap">
                        {c.currencySymbol}{c.amount} {c.currency}
                      </td>
                      <td className="px-4 py-3 text-primary-foreground/60 text-xs">{c.authority}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => openLink(c.proofLink)}
                          className="inline-flex items-center gap-1 text-accent hover:text-gold-light text-xs transition-colors cursor-pointer"
                        >
                          Verify <ExternalLink className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-3">
              {countries.map((c) => (
                <div
                  key={c.name}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{c.flag}</span>
                      <span className="font-semibold text-primary-foreground text-sm">{c.name}</span>
                    </div>
                    <span className="font-bold text-primary-foreground text-base">
                      {c.currencySymbol}{c.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-primary-foreground/50">
                    <span>{c.stapleFood} · {c.currency}</span>
                    <button
                      onClick={() => openLink(c.proofLink)}
                      className="inline-flex items-center gap-1 text-accent active:opacity-70 font-medium cursor-pointer"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-xs text-primary-foreground/40 mt-1.5">{c.authority}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-primary-foreground/40 mt-3 text-center">
              Amounts are updated annually by official fatwa bodies. Always verify with your local mosque or Islamic authority.
            </p>
          </div>

          {/* Sources */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-base sm:text-lg font-serif font-bold mb-2">Sources & References</h3>
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              Hadith sources: Sahih Bukhari, Sahih Muslim, Abu Dawud, Ibn Majah, Al-Daraqutni
            </p>
          </div>

          <div className="border-t border-primary-foreground/10 pt-5 sm:pt-6 text-center text-xs text-primary-foreground/40">
            <p>© {new Date().getFullYear()} shaikluqmansajid. All rights reserved.</p>
            <p className="mt-1">May Allah accept your worship and charity. Ameen.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default SourcesSection;
