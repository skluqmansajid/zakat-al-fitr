export interface CountryData {
  name: string;
  flag: string;
  stapleFood: string;
  amount: number;
  currency: string;
  currencySymbol: string;
  authority: string;
  usdEquivalent: number;
  proofLink: string;
}

export const countries: CountryData[] = [
  { name: "United States", flag: "🇺🇸", stapleFood: "Wheat / Rice", amount: 10, currency: "USD", currencySymbol: "$", authority: "Fiqh Council of North America", usdEquivalent: 10, proofLink: "https://fiqhcouncil.org" },
  { name: "Canada", flag: "🇨🇦", stapleFood: "Rice", amount: 15, currency: "CAD", currencySymbol: "CA$", authority: "Local Islamic Councils", usdEquivalent: 11, proofLink: "https://www.isna.ca" },
  { name: "United Kingdom", flag: "🇬🇧", stapleFood: "Wheat", amount: 7, currency: "GBP", currencySymbol: "£", authority: "UK Islamic Councils", usdEquivalent: 9, proofLink: "https://www.islamic-relief.org.uk" },
  { name: "Saudi Arabia", flag: "🇸🇦", stapleFood: "Rice / Dates", amount: 30, currency: "SAR", currencySymbol: "﷼", authority: "Council of Senior Scholars", usdEquivalent: 8, proofLink: "https://www.spa.gov.sa" },
  { name: "UAE", flag: "🇦🇪", stapleFood: "Rice", amount: 25, currency: "AED", currencySymbol: "د.إ", authority: "Emirates Sharia Fatwa Council", usdEquivalent: 7, proofLink: "https://www.awqaf.gov.ae" },
  { name: "Pakistan", flag: "🇵🇰", stapleFood: "Wheat", amount: 100, currency: "PKR", currencySymbol: "₨", authority: "Markazul Ma'arif / Local Councils", usdEquivalent: 0.36, proofLink: "https://www.shauoor.com/zakat-al-fitr" },
  { name: "India", flag: "🇮🇳", stapleFood: "Wheat / Rice", amount: 140, currency: "INR", currencySymbol: "₹", authority: "Markazul Ma'arif Jogeshwari", usdEquivalent: 1.7, proofLink: "https://www.shauoor.com/zakat-al-fitr" },
  { name: "Egypt", flag: "🇪🇬", stapleFood: "Rice", amount: 35, currency: "EGP", currencySymbol: "E£", authority: "Dar al-Ifta Egypt", usdEquivalent: 0.7, proofLink: "https://www.dar-alifta.org" },
  { name: "Jordan", flag: "🇯🇴", stapleFood: "Wheat", amount: 180, currency: "Piasters", currencySymbol: "JD", authority: "Supreme Council Jordan", usdEquivalent: 2.5, proofLink: "https://www.aliftaa.jo" },
  { name: "Morocco", flag: "🇲🇦", stapleFood: "Barley", amount: 20, currency: "MAD", currencySymbol: "MAD", authority: "Supreme Council Morocco", usdEquivalent: 2, proofLink: "https://www.habous.gov.ma" },
  { name: "Algeria", flag: "🇩🇿", stapleFood: "Wheat", amount: 150, currency: "DZD", currencySymbol: "د.ج", authority: "Ministry of Religious Affairs", usdEquivalent: 1.1, proofLink: "https://www.marw.dz" },
  { name: "Oman", flag: "🇴🇲", stapleFood: "Rice", amount: 1.5, currency: "OMR", currencySymbol: "ر.ع.", authority: "Dar al-Ifta Oman", usdEquivalent: 3.9, proofLink: "https://www.awqaf.om" },
  { name: "Turkey", flag: "🇹🇷", stapleFood: "Wheat", amount: 130, currency: "TRY", currencySymbol: "₺", authority: "Presidency of Religious Affairs", usdEquivalent: 4, proofLink: "https://www.diyanet.gov.tr" },
];
