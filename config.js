// ===== Edit this file to change prices, routes and contact details =====
window.TDS_CONFIG = {
  // WhatsApp number in international format, digits only (no +, no leading 0)
  whatsapp: "66984504690",
  // LINE Official Account ID, e.g. "@thaidriverservice" — leave "" to hide LINE links
  lineId: "",

  // SAMPLE PRICES in Thai baht, per car — replace with your real rates
  routes: [
    { id: "bkk-pty",  from: "Suvarnabhumi Airport (BKK)", to: "Pattaya",      time: "1 h 45 min", price: { sedan: 1500, suv: 1900, van: 2200 } },
    { id: "dmk-pty",  from: "Don Mueang Airport (DMK)",   to: "Pattaya",      time: "2 h 15 min", price: { sedan: 1800, suv: 2200, van: 2500 } },
    { id: "bkk-city", from: "Suvarnabhumi Airport (BKK)", to: "Bangkok city", time: "45 min",     price: { sedan: 900,  suv: 1200, van: 1500 } },
    { id: "utp-pty",  from: "U-Tapao Airport (UTP)",      to: "Pattaya",      time: "45 min",     price: { sedan: 900,  suv: 1200, van: 1500 } },
    { id: "pty-bkk",  from: "Pattaya",                    to: "Bangkok city", time: "2 h",        price: { sedan: 1600, suv: 2000, van: 2300 } },
    { id: "pty-hh",   from: "Pattaya",                    to: "Hua Hin",      time: "4 h",        price: { sedan: 3500, suv: 4200, van: 4800 } },
    { id: "hkt-pat",  from: "Phuket Airport (HKT)",       to: "Patong Beach", time: "50 min",     price: { sedan: 900,  suv: 1200, van: 1500 } },
    { id: "cnx-old",  from: "Chiang Mai Airport (CNX)",   to: "Old City",     time: "15 min",     price: { sedan: 400,  suv: 600,  van: 900 } }
  ],
  hourly: { sedan: 500, suv: 650, van: 800 },   // per hour
  minHours: 4,
  maxHours: 12,
  returnDiscount: 0.05,                          // 5% off return trips

  vehicles: [
    { id: "sedan", name: "Sedan", model: "Toyota Camry or similar",    cap: "3 pax · 2 bags", capLong: "Up to 3 passengers, 2 large suitcases" },
    { id: "suv",   name: "SUV",   model: "Toyota Fortuner or similar", cap: "4 pax · 4 bags", capLong: "Up to 4 passengers, 4 large suitcases" },
    { id: "van",   name: "Van",   model: "Toyota Commuter or similar", cap: "9 pax · 9 bags", capLong: "Up to 9 passengers, 9 large suitcases — groups and golf bags" }
  ]
};
