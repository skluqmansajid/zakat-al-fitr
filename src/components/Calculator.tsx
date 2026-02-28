import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { countries, type CountryData } from "@/data/countries";
import { Search, Minus, Plus, Check } from "lucide-react";

const Calculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [household, setHousehold] = useState({ self: 1, spouse: 0, children: 0, dependents: 0 });

  const filteredCountries = useMemo(
    () => countries.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const totalPeople = household.self + household.spouse + household.children + household.dependents;
  const totalAmount = selectedCountry ? totalPeople * selectedCountry.amount : 0;
  const totalUSD = selectedCountry ? totalPeople * selectedCountry.usdEquivalent : 0;

  const updateHousehold = (key: keyof typeof household, delta: number) => {
    setHousehold((prev) => ({
      ...prev,
      [key]: Math.max(key === "self" ? 1 : 0, prev[key] + delta),
    }));
  };

  const steps = [
    { num: 1, label: "Country" },
    { num: 2, label: "Household" },
    { num: 3, label: "Result" },
  ];

  return (
    <section id="calculator" className="bg-secondary/50 py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Calculate Your Zakat al-Fitr</h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="max-w-2xl mx-auto mt-8 sm:mt-12">
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 sm:mb-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    step >= s.num
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s.num ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s.num}
                </div>
                <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-muted-foreground">{s.label}</span>
                {i < steps.length - 1 && <div className="w-6 sm:w-12 md:w-20 h-0.5 bg-border mx-1.5 sm:mx-2" />}
              </div>
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-border"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Select Your Country</h3>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search country..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 sm:py-3 rounded-lg border border-input bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="max-h-72 overflow-y-auto space-y-1 -mx-1 px-1">
                  {filteredCountries.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => {
                        setSelectedCountry(country);
                        setStep(2);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-3.5 sm:py-3 rounded-lg flex items-center gap-2.5 sm:gap-3 transition-colors active:bg-secondary hover:bg-secondary ${
                        selectedCountry?.name === country.name ? "bg-primary/10 border border-primary/30" : ""
                      }`}
                    >
                      <span className="text-xl sm:text-2xl">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-foreground text-sm sm:text-base">{country.name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground ml-1.5 sm:ml-2">
                          {country.currencySymbol}{country.amount}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground hidden sm:inline">{country.stapleFood}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && selectedCountry && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-border"
              >
                {/* Country summary */}
                <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-5 sm:mb-6 flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">{selectedCountry.flag}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{selectedCountry.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {selectedCountry.currencySymbol}{selectedCountry.amount} {selectedCountry.currency} per person
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{selectedCountry.authority}</p>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Household Members</h3>

                {(["self", "spouse", "children", "dependents"] as const).map((key) => (
                  <div key={key} className="flex items-center justify-between py-3 sm:py-3 border-b border-border last:border-0">
                    <span className="text-sm sm:text-base text-foreground font-medium">
                      {key === "self" ? "Yourself" : key === "dependents" ? "Other Dependents" : key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => updateHousehold(key, -1)}
                        className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center active:bg-muted hover:bg-muted transition-colors"
                        disabled={key === "self" && household[key] <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-lg font-semibold text-foreground">{household[key]}</span>
                      <button
                        onClick={() => updateHousehold(key, 1)}
                        className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center active:bg-muted hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 mt-6 sm:mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 sm:px-6 py-3 rounded-lg border border-border text-foreground active:bg-secondary hover:bg-secondary transition-colors text-sm sm:text-base"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 px-4 sm:px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold active:bg-primary/80 hover:bg-primary/90 transition-colors text-sm sm:text-base"
                  >
                    Calculate ({totalPeople} people)
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && selectedCountry && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-xl p-5 sm:p-6 md:p-8 shadow-sm border border-border text-center"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">Your Zakat al-Fitr</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  For {totalPeople} {totalPeople === 1 ? "person" : "people"} in {selectedCountry.name}
                </p>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6"
                >
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-serif">
                    {selectedCountry.currencySymbol}{totalAmount.toLocaleString()}
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mt-2">{selectedCountry.currency}</p>
                  {selectedCountry.currency !== "USD" && (
                    <p className="text-sm text-muted-foreground mt-1">≈ ${totalUSD.toFixed(2)} USD</p>
                  )}
                </motion.div>

                <div className="bg-primary/5 rounded-lg p-4 mb-6 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">🕌 Spiritual Reminder</p>
                  <p>Pay before the Eid prayer for it to be accepted as Zakat.</p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedCountry(null);
                      setHousehold({ self: 1, spouse: 0, children: 0, dependents: 0 });
                    }}
                    className="text-sm text-primary hover:underline active:opacity-70"
                  >
                    Start Over
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mt-6 sm:mt-8">
                  Amounts are updated annually by official fatwa bodies. Always verify with your local mosque or Islamic authority.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
