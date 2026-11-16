// ===== Edit this file to change prices, routes and contact details =====
// Prices are in Thai baht, PER VEHICLE, one way, tolls/fuel/parking included.
// Set a price to null to show "Quote" instead (used for minibus and coach).
window.TDS_CONFIG = {
  // WhatsApp number in international format, digits only (no +, no leading 0)
  whatsapp: "66984504690",
  // LINE Official Account ID, e.g. "@thaidriverservice" — leave "" to hide LINE links
  lineId: "",

  vehicles: [
    { id: "eco",    name: "Economy",       model: "Toyota Corolla Altis / Vios or similar", cap: "3 pax · 2 bags",  capLong: "Up to 3 passengers, 2 suitcases" },
    { id: "sedan",  name: "Comfort Sedan", model: "Toyota Camry or similar",                cap: "3 pax · 3 bags",  capLong: "Up to 3 passengers, 3 suitcases" },
    { id: "suv",    name: "SUV",           model: "Toyota Fortuner / Innova or similar",    cap: "4 pax · 4 bags",  capLong: "Up to 4 passengers, 4 suitcases" },
    { id: "van",    name: "VIP Van",       model: "Toyota Commuter / Majesty or similar",   cap: "9 pax · 8 bags",  capLong: "Up to 9 passengers, 8 suitcases — families, golf bags" },
    { id: "alph",   name: "Luxury MPV",    model: "Toyota Alphard or similar",              cap: "4 pax · 4 bags",  capLong: "Up to 4 passengers. Chauffeur service.", luxury: true },
    { id: "eclass", name: "Executive",     model: "Mercedes-Benz E-Class or similar",       cap: "3 pax · 2 bags",  capLong: "Up to 3 passengers. Chauffeur service.", luxury: true },
    { id: "sclass", name: "First Class",   model: "Mercedes-Benz S-Class / BMW 7 Series",   cap: "3 pax · 2 bags",  capLong: "Up to 3 passengers. Chauffeur service.", luxury: true },
    { id: "mini",   name: "Minibus",       model: "20-seat minibus",                        cap: "Up to 20 pax",    capLong: "Groups up to 20 — price on request" },
    { id: "coach",  name: "Tour Coach",    model: "40-seat VIP coach",                      cap: "Up to 40 pax",    capLong: "Groups up to 40 — price on request" }
  ],

  //               eco    sedan  suv    van    alph   eclass sclass  mini  coach
  routes: [
    { id: "bkk-city", from: "Suvarnabhumi Airport (BKK)", to: "Bangkok city", time: "45 min",     price: { eco: 600,  sedan: 800,  suv: 1000, van: 1100, alph: 2300, eclass: 2300, sclass: 3200,  mini: null, coach: null } },
    { id: "dmk-city", from: "Don Mueang Airport (DMK)",   to: "Bangkok city", time: "40 min",     price: { eco: 600,  sedan: 800,  suv: 1000, van: 1100, alph: 2300, eclass: 2300, sclass: 3200,  mini: null, coach: null } },
    { id: "bkk-pty",  from: "Suvarnabhumi Airport (BKK)", to: "Pattaya",      time: "1 h 45 min", price: { eco: 1000, sedan: 1300, suv: 1500, van: 1700, alph: 3800, eclass: 3800, sclass: 5500,  mini: null, coach: null } },
    { id: "dmk-pty",  from: "Don Mueang Airport (DMK)",   to: "Pattaya",      time: "2 h 15 min", price: { eco: 1300, sedan: 1500, suv: 1700, van: 2000, alph: 4200, eclass: 4200, sclass: 6000,  mini: null, coach: null } },
    { id: "utp-pty",  from: "U-Tapao Airport (UTP)",      to: "Pattaya",      time: "45 min",     price: { eco: 800,  sedan: 900,  suv: 1000, van: 1200, alph: 2500, eclass: 2500, sclass: 3500,  mini: null, coach: null } },
    { id: "pty-bkk",  from: "Pattaya",                    to: "Bangkok city", time: "2 h",        price: { eco: 1200, sedan: 1400, suv: 1600, van: 1900, alph: 4000, eclass: 4000, sclass: 5800,  mini: null, coach: null } },
    { id: "bkk-hh",   from: "Suvarnabhumi Airport (BKK)", to: "Hua Hin",      time: "3 h",        price: { eco: 2300, sedan: 2600, suv: 2900, van: 3300, alph: 6000, eclass: 6000, sclass: 8500,  mini: null, coach: null } },
    { id: "pty-hh",   from: "Pattaya",                    to: "Hua Hin",      time: "4 h",        price: { eco: 3000, sedan: 3400, suv: 3800, van: 4300, alph: 7500, eclass: 7500, sclass: 10500, mini: null, coach: null } },
    { id: "hkt-pat",  from: "Phuket Airport (HKT)",       to: "Patong Beach", time: "50 min",     price: { eco: 700,  sedan: 800,  suv: 900,  van: 1000, alph: 2200, eclass: 2200, sclass: 3200,  mini: null, coach: null } },
    { id: "kbv-aon",  from: "Krabi Airport (KBV)",        to: "Ao Nang",      time: "40 min",     price: { eco: 600,  sedan: 700,  suv: 850,  van: 1000, alph: 2000, eclass: 2000, sclass: 3000,  mini: null, coach: null } },
    { id: "cnx-old",  from: "Chiang Mai Airport (CNX)",   to: "Old City",     time: "15 min",     price: { eco: 250,  sedan: 350,  suv: 450,  van: 600,  alph: 1500, eclass: 1500, sclass: 2500,  mini: null, coach: null } }
  ],

  // Per hour, minimum 4 hours
  hourly: { eco: 300, sedan: 330, suv: 380, van: 400, alph: 900, eclass: 900, sclass: 1300, mini: null, coach: null },
  minHours: 4,
  maxHours: 12,
  returnDiscount: 0.05   // 5% off return trips
};
