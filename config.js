// ===== Edit this file to change prices, routes and contact details =====
// Prices are in Thai baht, PER VEHICLE, one way, tolls/fuel/parking included.
// Set a price to null to show "Quote" instead (used for minibus and coach).
window.TDS_CONFIG = {
  // Booking partner — all Call / WhatsApp / LINE buttons go here.
  // WhatsApp number in international format, digits only (no +, no leading 0)
  whatsapp: "66849425085",
  phone: "+66849425085",          // used for the Call button
  phoneDisplay: "084 942 5085",   // shown on the page
  email: "iktech39.boonchuai@gmail.com",   // all email bookings go here
  emailBcc: "jordan.d.schwartz@gmail.com", // BCC on every email booking
  // LINE Official Account ID, e.g. "@thaidriverservice" — leave "" to hide LINE links
  lineId: "supalak0849425085",

  // kind: "std" = normal car, "lux" = chauffeur service, "grp" = group (price on request)
  vehicles: [
    { id: "eco",    model: "Toyota Corolla Altis / Vios", pax: 3,  bags: 2, kind: "std" },
    { id: "sedan",  model: "Toyota Camry",                pax: 3,  bags: 3, kind: "std" },
    { id: "suv",    model: "Toyota Fortuner / Innova",    pax: 4,  bags: 4, kind: "std" },
    { id: "van",    model: "Toyota Commuter / Majesty",   pax: 9,  bags: 8, kind: "std" },
    { id: "alph",   model: "Toyota Alphard",              pax: 4,  bags: 4, kind: "lux" },
    { id: "eclass", model: "Mercedes-Benz E-Class",       pax: 3,  bags: 2, kind: "lux" },
    { id: "sclass", model: "Mercedes-Benz S-Class / BMW 7 Series", pax: 3, bags: 2, kind: "lux" },
    { id: "mini",   model: "20-seat minibus",             pax: 20, bags: 20, kind: "grp" },
    { id: "coach",  model: "40-seat VIP coach",           pax: 40, bags: 40, kind: "grp" }
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
