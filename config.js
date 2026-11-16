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
    { id: "bkk-city", from: "Suvarnabhumi Airport (BKK)", to: "Bangkok city", time: "45 min",     price: { eco: 720,  sedan: 960,  suv: 1200, van: 1320, alph: 2760, eclass: 2760, sclass: 3840,  mini: null, coach: null } },
    { id: "dmk-city", from: "Don Mueang Airport (DMK)",   to: "Bangkok city", time: "40 min",     price: { eco: 720,  sedan: 960,  suv: 1200, van: 1320, alph: 2760, eclass: 2760, sclass: 3840,  mini: null, coach: null } },
    { id: "bkk-pty",  from: "Suvarnabhumi Airport (BKK)", to: "Pattaya",      time: "1 h 45 min", price: { eco: 1200, sedan: 1560, suv: 1800, van: 2040, alph: 4560, eclass: 4560, sclass: 6600,  mini: null, coach: null } },
    { id: "dmk-pty",  from: "Don Mueang Airport (DMK)",   to: "Pattaya",      time: "2 h 15 min", price: { eco: 1560, sedan: 1800, suv: 2040, van: 2400, alph: 5040, eclass: 5040, sclass: 7200,  mini: null, coach: null } },
    { id: "utp-pty",  from: "U-Tapao Airport (UTP)",      to: "Pattaya",      time: "45 min",     price: { eco: 960,  sedan: 1080,  suv: 1200, van: 1440, alph: 3000, eclass: 3000, sclass: 4200,  mini: null, coach: null } },
    { id: "pty-bkk",  from: "Pattaya",                    to: "Bangkok city", time: "2 h",        price: { eco: 1440, sedan: 1680, suv: 1920, van: 2280, alph: 4800, eclass: 4800, sclass: 6960,  mini: null, coach: null } },
    { id: "bkk-hh",   from: "Suvarnabhumi Airport (BKK)", to: "Hua Hin",      time: "3 h",        price: { eco: 2760, sedan: 3120, suv: 3480, van: 3960, alph: 7200, eclass: 7200, sclass: 10200,  mini: null, coach: null } },
    { id: "pty-hh",   from: "Pattaya",                    to: "Hua Hin",      time: "4 h",        price: { eco: 3600, sedan: 4080, suv: 4560, van: 5160, alph: 9000, eclass: 9000, sclass: 12600, mini: null, coach: null } },
    { id: "hkt-pat",  from: "Phuket Airport (HKT)",       to: "Patong Beach", time: "50 min",     price: { eco: 840,  sedan: 960,  suv: 1080,  van: 1200, alph: 2640, eclass: 2640, sclass: 3840,  mini: null, coach: null } },
    { id: "kbv-aon",  from: "Krabi Airport (KBV)",        to: "Ao Nang",      time: "40 min",     price: { eco: 720,  sedan: 840,  suv: 1020,  van: 1200, alph: 2400, eclass: 2400, sclass: 3600,  mini: null, coach: null } },
    { id: "cnx-old",  from: "Chiang Mai Airport (CNX)",   to: "Old City",     time: "15 min",     price: { eco: 300,  sedan: 420,  suv: 540,  van: 720,  alph: 1800, eclass: 1800, sclass: 3000,  mini: null, coach: null } }
  ],

  // Per hour, minimum 4 hours
  hourly: { eco: 360, sedan: 400, suv: 460, van: 480, alph: 1080, eclass: 1080, sclass: 1560, mini: null, coach: null },
  minHours: 4,
  maxHours: 12,
  returnDiscount: 0.05   // 5% off return trips
};
