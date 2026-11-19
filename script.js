/* ==========================================================================
   Sameer Trading Company — Smooth Interactions & WhatsApp List
   ========================================================================== */

// UPDATE: Replace the final '0' with the exact last digit
const WHATSAPP_NUMBER = "919898864651";

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* 1. Automatic Warm Image Fallback */
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    const swap = () => {
      const box = document.createElement("div");
      box.className = "fallback-box";
      box.textContent = img.dataset.fallback;
      img.replaceWith(box);
    };
    img.addEventListener("error", swap);
    if (img.complete && img.naturalWidth === 0) swap();
  });

  /* 2. Gentle Scroll Reveals */
  document.documentElement.classList.add("js");
  const els = document.querySelectorAll(".fade-up");

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    setTimeout(() => els.forEach((el) => el.classList.add("in")), 900);
  } else {
    els.forEach((el) => el.classList.add("in"));
  }

  /* 3. Mobile Menu */
  const menuBtn = document.getElementById("menuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  const closeMenu = () => {
    menuBtn?.classList.remove("is-open");
    mobileDrawer?.classList.remove("is-open");
    menuBtn?.setAttribute("aria-expanded", "false");
    mobileDrawer?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  menuBtn?.addEventListener("click", () => {
    const open = menuBtn.classList.toggle("is-open");
    mobileDrawer.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileDrawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  mobileDrawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* 4. Category Filter Tabs */
  const tabs = document.querySelectorAll(".tab");
  const cards = document.querySelectorAll(".card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.dataset.filter;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });
      cards.forEach((c) => {
        const show = cat === "all" || c.dataset.cat === cat;
        c.classList.toggle("is-hidden", !show);
        if (show) c.classList.add("in");
      });
    });
  });

  /* 5. Inquiry List Drawer + WhatsApp */
  const list = new Map();
  const bagCount = document.getElementById("bagCount");
  const bagBody = document.getElementById("bagBody");
  const bagDrawer = document.getElementById("bagDrawer");
  const bagBackdrop = document.getElementById("bagBackdrop");

  const toast = (msg) => {
    const t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-shown");
    clearTimeout(toast._id);
    toast._id = setTimeout(() => t.classList.remove("is-shown"), 2200);
  };

  const openWA = (msg) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  function renderBag() {
    let total = 0;
    list.forEach((item) => (total += item.qty));
    if (bagCount) bagCount.textContent = total;

    document.querySelectorAll(".pill-add").forEach((btn) => {
      const id = btn.dataset.id;
      const added = list.has(id);
      btn.classList.toggle("is-added", added);
      btn.textContent = added ? `Added (${list.get(id).qty})` : "+ Add to List";
    });

    if (!bagBody) return;
    if (list.size === 0) {
      bagBody.innerHTML = `<p class="bag-empty">Your list is empty.<br/>Tap “+ Add to List” on any ingredient.</p>`;
      return;
    }

    bagBody.innerHTML = "";
    list.forEach((item, id) => {
      const row = document.createElement("div");
      row.className = "bag-row";
      row.innerHTML = `
        <span class="bag-row__name">${item.name}</span>
        <div class="qty">
          <button type="button" data-act="dec" data-id="${id}">&minus;</button>
          <span>${item.qty}</span>
          <button type="button" data-act="inc" data-id="${id}">+</button>
        </div>
      `;
      bagBody.appendChild(row);
    });
  }

  document.querySelectorAll(".pill-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { id, name } = btn.dataset;
      if (list.has(id)) list.get(id).qty += 1;
      else list.set(id, { name, qty: 1 });
      renderBag();
      toast("Added to your list");
    });
  });

  bagBody?.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const { act, id } = b.dataset;
    if (!list.has(id)) return;
    if (act === "inc") list.get(id).qty += 1;
    else {
      list.get(id).qty -= 1;
      if (list.get(id).qty <= 0) list.delete(id);
    }
    renderBag();
  });

  const toggleBag = (open) => {
    bagDrawer?.classList.toggle("is-open", open);
    bagBackdrop?.classList.toggle("is-open", open);
    bagDrawer?.setAttribute("aria-hidden", String(!open));
    bagBackdrop?.setAttribute("aria-hidden", String(!open));
  };

  document.getElementById("openBagBtn")?.addEventListener("click", () => toggleBag(true));
  document.getElementById("closeBagBtn")?.addEventListener("click", () => toggleBag(false));
  bagBackdrop?.addEventListener("click", () => toggleBag(false));
  document.getElementById("clearBagBtn")?.addEventListener("click", () => {
    list.clear();
    renderBag();
  });

  document.getElementById("sendBagBtn")?.addEventListener("click", () => {
    if (list.size === 0) return toast("Add at least one item first");
    const lines = [];
    list.forEach((item) => lines.push(`• ${item.name} (Qty: ${item.qty})`));
    openWA(`Hello Sameer Trading Company,\n\nPlease share your best rates for:\n${lines.join("\n")}`);
  });

  renderBag();

  /* 6. Direct WhatsApp & Inquiry Form */
  document.querySelectorAll("[data-wa]").forEach((btn) => {
    btn.addEventListener("click", () => openWA(btn.dataset.wa));
  });

  document.getElementById("inquiryForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("uName").value.trim();
    const shop = document.getElementById("uShop").value.trim();
    const phone = document.getElementById("uPhone").value.trim();
    const items = document.getElementById("uItems").value.trim();
    if (!name || !shop || !phone || !items) return toast("Please fill in all fields");

    openWA(`Hello Sameer Trading Company,\n\nName: ${name}\nBakery: ${shop}\nPhone: ${phone}\nItems Needed:\n${items}`);
    e.target.reset();
  });

  /* 7. Interactive Footer Glow, Kinetic Wordmark, Copy & Back to Top */
  const footer = document.getElementById("footer");
  const glow = document.getElementById("footerGlow");
  footer?.addEventListener("mousemove", (e) => {
    const r = footer.getBoundingClientRect();
    glow?.style.setProperty("--gx", `${e.clientX - r.left}px`);
    glow?.style.setProperty("--gy", `${e.clientY - r.top}px`);
  });

  const wm = document.getElementById("footerWordmark");
  if (wm) {
    const text = wm.textContent.trim();
    wm.textContent = "";
    [...text].forEach((ch) => {
      const span = document.createElement("span");
      if (ch === " ") span.className = "fw-space";
      else {
        span.className = "fw-char";
        span.textContent = ch;
      }
      wm.appendChild(span);
    });
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        toast("Email copied");
      } catch {
        toast("Copy unavailable");
      }
    });
  });


  /* 8. Magnetic Hover on @zyrac__ Bakery Seal */
  const zyracSeal = document.getElementById("zyracSeal");
  if (zyracSeal && window.matchMedia("(pointer: fine)").matches) {
    zyracSeal.addEventListener("mousemove", (e) => {
      const r = zyracSeal.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.16;
      const y = (e.clientY - r.top - r.height / 2) * 0.22;
      zyracSeal.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    zyracSeal.addEventListener("mouseleave", () => {
      zyracSeal.style.transform = "translate3d(0, 0, 0)";
    });
  }
  
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});