(function () {
  const C = window.TDS_CONFIG;
  const L = window.TDS_I18N;
  const LANGS = Object.keys(L);
  const $ = (id) => document.getElementById(id);
  const state = { mode: "oneway", routeId: C.routes[0].id, vehicle: "sedan", hours: 6, lang: pickLang() };

  // ---------- language ----------
  function pickLang() {
    try { const saved = localStorage.getItem("tds-lang"); if (saved && L[saved]) return saved; } catch (e) {}
    const nav = (navigator.languages || [navigator.language || "en"]).map((l) => l.toLowerCase());
    for (const l of nav) {
      const base = l.slice(0, 2) === "nb" || l.slice(0, 2) === "nn" ? "no" : l.slice(0, 2);
      if (L[base]) return base;
    }
    return "en";
  }
  function t(key, vars) {
    let s = (L[state.lang] && L[state.lang][key]) || L.en[key] || key;
    if (vars) for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  }
  function applyStatic() {
    document.documentElement.lang = state.lang;
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $("lang").value = state.lang;
  }

  // ---------- prices ----------
  const fmtBaht = (n) => "฿" + Math.round(n).toLocaleString("en-US");
  const fmt = (n) => (n == null ? t("d.quote") : fmtBaht(n));
  const route = () => C.routes.find((r) => r.id === state.routeId);
  const priceFor = (v) => {
    if (state.mode === "hourly") return C.hourly[v] == null ? null : C.hourly[v] * state.hours;
    const one = route().price[v];
    if (one == null) return null;
    return state.mode === "return" ? one * 2 * (1 - C.returnDiscount) : one;
  };
  const vName = (v) => t("v." + v.id);
  const vCap = (v) => (v.kind === "grp" ? t("d.capGroup", { p: v.pax }) : t("d.cap", { p: v.pax, b: v.bags }));
  const vCapLong = (v) => v.kind === "grp" ? t("d.capGrp", { p: v.pax }) : v.kind === "lux" ? t("d.capLux", { p: v.pax }) : t("d.capLong", { p: v.pax, b: v.bags });

  // ---------- render ----------
  function renderLists() {
    $("route").innerHTML = C.routes.map((r) => `<option value="${r.id}">${r.from} → ${r.to}</option>`).join("");
    $("routeCards").innerHTML = C.routes.map((r) => `
      <button type="button" class="route-card" data-route="${r.id}">
        <span class="muted small">${r.from}</span>
        <span class="route-to">→ ${r.to}</span>
        <span class="muted small">${t("d.about", { t: r.time })}</span>
        <span class="route-price">${t("d.fromPrice", { x: fmt(r.price.eco) })}</span>
      </button>`).join("");
    $("fleetCards").innerHTML = C.vehicles.map((v) => `
      <div class="fleet-card">
        <div class="photo">[${t("d.photo")}: ${v.model}]</div>
        <div class="fleet-body"><h3>${vName(v)}${v.kind === "lux" ? ` <span class="tag">${t("d.chauffeur")}</span>` : ""}</h3>
        <p class="muted small">${v.model}</p><p>${vCapLong(v)}</p></div>
      </div>`).join("");
  }

  function render() {
    document.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.mode === state.mode)));
    const hourly = state.mode === "hourly";
    document.querySelectorAll(".hourly-only").forEach((el) => (el.hidden = !hourly));
    document.querySelectorAll(".transfer-only").forEach((el) => (el.hidden = hourly));
    $("route").value = state.routeId;
    $("routeTime").textContent = t("d.about", { t: route().time }) + " · " + t("d.door");
    $("hours").textContent = t("d.hoursLabel", { n: state.hours });
    $("vehicles").innerHTML = C.vehicles.map((v) => `
      <button type="button" class="vehicle" data-vehicle="${v.id}" aria-pressed="${state.vehicle === v.id}">
        <strong>${vName(v)}</strong><span>${vCap(v)}</span><b>${fmt(priceFor(v.id))}</b>
      </button>`).join("");
    const total = priceFor(state.vehicle);
    $("total").textContent = total == null ? t("d.getQuote") : fmtBaht(total);
    $("totalCaption").textContent = hourly ? t("d.totalFor", { n: state.hours })
      : state.mode === "return" ? t("d.return", { p: C.returnDiscount * 100 }) : t("d.oneway");
  }

  function setLang(l) {
    state.lang = L[l] ? l : "en";
    try { localStorage.setItem("tds-lang", state.lang); } catch (e) {}
    applyStatic(); renderLists(); render();
  }

  // ---------- events ----------
  document.addEventListener("click", (e) => {
    const m = e.target.closest("[data-mode]"); if (m) { state.mode = m.dataset.mode; render(); }
    const v = e.target.closest("[data-vehicle]"); if (v) { state.vehicle = v.dataset.vehicle; render(); }
    const r = e.target.closest("[data-route]");
    if (r) { state.routeId = r.dataset.route; if (state.mode === "hourly") state.mode = "oneway"; render(); $("book").scrollIntoView({ behavior: "smooth" }); }
  });
  $("lang").addEventListener("change", (e) => setLang(e.target.value));
  $("route").addEventListener("change", (e) => { state.routeId = e.target.value; render(); });
  $("lessHours").addEventListener("click", () => { state.hours = Math.max(C.minHours, state.hours - 1); render(); });
  $("moreHours").addEventListener("click", () => { state.hours = Math.min(C.maxHours, state.hours + 1); render(); });
  $("goHourly").addEventListener("click", () => { state.mode = "hourly"; render(); });

  // Booking message is always in English so the operator can read it; the customer's language is noted.
  function message() {
    const v = C.vehicles.find((x) => x.id === state.vehicle);
    const trip = state.mode === "hourly"
      ? `Hourly hire in ${$("city").value}, ${state.hours} hours`
      : `${route().from} → ${route().to} (${state.mode === "return" ? "return" : "one way"})`;
    const p = priceFor(state.vehicle);
    return [
      "New booking request — ThaiDriverService.com",
      "Trip: " + trip,
      "Vehicle: " + L.en["v." + v.id] + " (" + v.model + ")",
      "Date: " + ($("date").value || "?") + "  Time: " + ($("time").value || "?"),
      "Pickup / flight: " + ($("pickup").value || "-"),
      "Drop-off: " + ($("dropoff").value || "-"),
      "Passengers: " + $("pax").value,
      "Name: " + ($("name").value || "-"),
      "Customer language: " + state.lang.toUpperCase(),
      "Quoted price: " + (p == null ? "please quote" : fmtBaht(p))
    ].join("\n");
  }

  $("booking").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!$("date").value || !$("time").value || !$("name").value) { alert(t("d.missing")); return; }
    window.open("https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(message()), "_blank", "noopener");
  });

  // LINE: personal IDs open his profile (chat) — booking text is copied so the customer can paste it.
  // An Official Account ID (starts with "@") gets the message pre-filled instead.
  const isOA = C.lineId && C.lineId.charAt(0) === "@";
  const lineProfile = C.lineId ? (isOA ? "https://line.me/R/ti/p/" + encodeURIComponent(C.lineId) : "https://line.me/ti/p/~" + encodeURIComponent(C.lineId)) : "";
  $("lineLink").addEventListener("click", async (e) => {
    e.preventDefault();
    if (!C.lineId) return;
    if (isOA) { window.open("https://line.me/R/oaMessage/" + encodeURIComponent(C.lineId) + "/?" + encodeURIComponent(message()), "_blank", "noopener"); return; }
    try { await navigator.clipboard.writeText(message()); $("lineNote").textContent = t("d.lineCopied"); $("lineNote").hidden = false; } catch (err) {}
    window.open(lineProfile, "_blank", "noopener");
  });
  if (!C.lineId) { $("lineLink").parentElement.hidden = true; $("lineFooter").hidden = true; }
  else $("lineFooter").href = lineProfile;
  $("waFooter").href = "https://wa.me/" + C.whatsapp;
  // Email: to the partner, BCC Jordan
  const mailto = (subject, body) => "mailto:" + C.email + "?bcc=" + encodeURIComponent(C.emailBcc) +
    "&subject=" + encodeURIComponent(subject) + (body ? "&body=" + encodeURIComponent(body) : "");
  $("mailFooter").href = mailto("Booking enquiry — ThaiDriverService.com");
  $("emailLink").addEventListener("click", (e) => {
    e.preventDefault();
    if (!$("date").value || !$("time").value || !$("name").value) { alert(t("d.missing")); return; }
    window.location.href = mailto("Booking request — ThaiDriverService.com", message());
  });
  // Floating contact bar — all go to the booking partner
  $("fabWa").href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent("Hello ThaiDriverService, I would like to book a driver.");
  if (C.lineId) $("fabLine").href = lineProfile;
  else $("fabLine").hidden = true;

  $("date").min = new Date().toISOString().slice(0, 10);
  setLang(state.lang);
})();
