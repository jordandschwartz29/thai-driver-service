(function () {
  const C = window.TDS_CONFIG;
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => (n == null ? "Quote" : "฿" + Math.round(n).toLocaleString("en-US"));
  const state = { mode: "oneway", routeId: C.routes[0].id, vehicle: "sedan", hours: 6 };

  // Route select + cards
  $("route").innerHTML = C.routes.map((r) => `<option value="${r.id}">${r.from} → ${r.to}</option>`).join("");
  $("routeCards").innerHTML = C.routes.map((r) => `
    <button type="button" class="route-card" data-route="${r.id}">
      <span class="muted small">${r.from}</span>
      <span class="route-to">→ ${r.to}</span>
      <span class="muted small">About ${r.time}</span>
      <span class="route-price">from ${fmt(r.price.eco)}</span>
    </button>`).join("");
  $("fleetCards").innerHTML = C.vehicles.map((v) => `
    <div class="fleet-card">
      <div class="photo">[Photo: ${v.model}]</div>
      <div class="fleet-body"><h3>${v.name}${v.luxury ? ' <span class="tag">Chauffeur</span>' : ""}</h3><p class="muted small">${v.model}</p><p>${v.capLong}</p></div>
    </div>`).join("");

  const route = () => C.routes.find((r) => r.id === state.routeId);
  const priceFor = (v) => {
    if (state.mode === "hourly") return C.hourly[v] == null ? null : C.hourly[v] * state.hours;
    const one = route().price[v];
    if (one == null) return null;
    return state.mode === "return" ? one * 2 * (1 - C.returnDiscount) : one;
  };

  function render() {
    document.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.mode === state.mode)));
    const hourly = state.mode === "hourly";
    document.querySelectorAll(".hourly-only").forEach((el) => (el.hidden = !hourly));
    document.querySelectorAll(".transfer-only").forEach((el) => (el.hidden = hourly));
    $("route").value = state.routeId;
    $("routeTime").textContent = "About " + route().time + " · private car, door to door";
    $("hours").textContent = state.hours + " hours";
    $("vehicles").innerHTML = C.vehicles.map((v) => `
      <button type="button" class="vehicle" data-vehicle="${v.id}" aria-pressed="${state.vehicle === v.id}">
        <strong>${v.name}</strong><span>${v.cap}</span><b>${fmt(priceFor(v.id))}</b>
      </button>`).join("");
    const t = priceFor(state.vehicle);
    $("total").textContent = t == null ? "Get a quote" : fmt(t);
    $("totalCaption").textContent = hourly ? `Total for ${state.hours} hours` : state.mode === "return" ? `Return trip (${C.returnDiscount * 100}% off)` : "One way, per car";
  }

  document.addEventListener("click", (e) => {
    const m = e.target.closest("[data-mode]"); if (m) { state.mode = m.dataset.mode; render(); }
    const v = e.target.closest("[data-vehicle]"); if (v) { state.vehicle = v.dataset.vehicle; render(); }
    const r = e.target.closest("[data-route]");
    if (r) { state.routeId = r.dataset.route; if (state.mode === "hourly") state.mode = "oneway"; render(); $("book").scrollIntoView({ behavior: "smooth" }); }
  });
  $("route").addEventListener("change", (e) => { state.routeId = e.target.value; render(); });
  $("lessHours").addEventListener("click", () => { state.hours = Math.max(C.minHours, state.hours - 1); render(); });
  $("moreHours").addEventListener("click", () => { state.hours = Math.min(C.maxHours, state.hours + 1); render(); });
  $("goHourly").addEventListener("click", () => { state.mode = "hourly"; render(); });

  function message() {
    const v = C.vehicles.find((x) => x.id === state.vehicle).name;
    const trip = state.mode === "hourly"
      ? `Hourly hire in ${$("city").value}, ${state.hours} hours`
      : `${route().from} → ${route().to} (${state.mode === "return" ? "return" : "one way"})`;
    return [
      "New booking request — ThaiDriverService.com",
      "Trip: " + trip,
      "Vehicle: " + v,
      "Date: " + ($("date").value || "?") + "  Time: " + ($("time").value || "?"),
      "Pickup / flight: " + ($("pickup").value || "-"),
      "Drop-off: " + ($("dropoff").value || "-"),
      "Passengers: " + $("pax").value,
      "Name: " + ($("name").value || "-"),
      "Quoted price: " + (priceFor(state.vehicle) == null ? "please quote" : fmt(priceFor(state.vehicle)))
    ].join("\n");
  }

  $("booking").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!$("date").value || !$("time").value || !$("name").value) {
      alert("Please add a pickup date, time and your name.");
      return;
    }
    window.open("https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(message()), "_blank", "noopener");
  });

  const lineUrl = C.lineId ? "https://line.me/R/oaMessage/" + encodeURIComponent(C.lineId) + "/?" : "";
  $("lineLink").addEventListener("click", (e) => { e.preventDefault(); if (lineUrl) window.open(lineUrl + encodeURIComponent(message()), "_blank", "noopener"); });
  if (!C.lineId) { $("lineLink").parentElement.hidden = true; $("lineFooter").hidden = true; }
  else $("lineFooter").href = "https://line.me/R/ti/p/" + encodeURIComponent(C.lineId);
  $("waFooter").href = "https://wa.me/" + C.whatsapp;

  const today = new Date().toISOString().slice(0, 10);
  $("date").min = today;
  render();
})();
