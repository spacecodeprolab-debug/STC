/* ==========================================================================
   Sameer Trading Company — Editable 40-Product Catalog & 2026 Motion Engine
   ========================================================================== */

// 1. UPDATE WHATSAPP NUMBER (Replace the last '0' with the final digit)
const WHATSAPP_NUMBER = "919898251112";

// 2. SHARED CATEGORY IMAGES (Replace any item's image with your own URL anytime)
const IMG = {
  premix: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=700",
  cream: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=700",
  glaze: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=700",
  crush: "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=700",
  essence: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=700",
  color: "https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&w=700",
  choco: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=700",
  box: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=700",
};

/* ==========================================================================
   3. EDITABLE PRODUCT LIST (40 PRODUCTS)
   category must be: "bases" | "flavors" | "decor"
   ========================================================================== */
const PRODUCTS = [
  // ======================== BASES & CREAMS (14) ========================
  { id: "p01", category: "bases", tag: "Bases & Creams · 1kg / 5kg / 25kg", name: "Eggless Vanilla Cake Premix", desc: "Soft, airy sponge with consistent rise and clean vanilla aroma for commercial bakeries.", image: IMG.premix },
  { id: "p02", category: "bases", tag: "Bases & Creams · 1kg / 5kg / 25kg", name: "Rich Chocolate Cake Premix", desc: "Deep cocoa-rich eggless premix ideal for Dutch truffle, black forest, and fudge cakes.", image: IMG.choco },
  { id: "p03", category: "bases", tag: "Bases & Creams · 1kg / 5kg", name: "Red Velvet Cake Premix", desc: "Vibrant crimson crumb with balanced cocoa and buttermilk notes for smooth layering.", image: IMG.premix },
  { id: "p04", category: "bases", tag: "Bases & Creams · 1kg / 5kg", name: "Classic Sponge Cake Premix", desc: "Light, high-volume sponge blend that absorbs fruit syrups and cream evenly.", image: IMG.premix },
  { id: "p05", category: "bases", tag: "Bases & Creams · 1kg / 5kg", name: "Fudge Brownie Premix", desc: "Gooey, crackle-top commercial brownie mix with intense dark chocolate flavor.", image: IMG.choco },
  { id: "p06", category: "bases", tag: "Bases & Creams · 1kg / 5kg", name: "Muffin & Cupcake Premix", desc: "Moist, domed muffins and cupcakes in vanilla and double chocolate bases.", image: IMG.premix },
  { id: "p07", category: "bases", tag: "Bases & Creams · 1kg / 5kg", name: "Belgian Waffle & Pancake Premix", desc: "Crisp-outside, fluffy-inside batter mix tailored for cafes and dessert bars.", image: IMG.premix },
  { id: "p08", category: "bases", tag: "Bases & Creams · 1L Carton / Case", name: "Non-Dairy Whipping Cream", desc: "High-yield whipping cream engineered for sharp piping and Ahmedabad summer stability.", image: IMG.cream },
  { id: "p09", category: "bases", tag: "Bases & Creams · 1L Carton", name: "Cooking & Truffle Cream", desc: "Smooth, heat-stable cream for glossy chocolate ganaches, mousses, and dessert jars.", image: IMG.cream },
  { id: "p10", category: "bases", tag: "Bases & Creams · 1kg / 5kg", name: "Bavarian & Custard Filling", desc: "Ready-to-pipe vanilla custard filling for doughnuts, éclairs, tarts, and pastries.", image: IMG.cream },
  { id: "p11", category: "bases", tag: "Bases & Creams · 1kg / 3kg", name: "Hazelnut Choco Spread", desc: "Roasted hazelnut and cocoa filling for Ferrero-style cakes, waffles, and crepes.", image: IMG.choco },
  { id: "p12", category: "bases", tag: "Bases & Creams · 1kg Pack", name: "Bake-Stable Cream Cheese", desc: "Rich, creamy base for baked cheesecakes, tiramisu, and red velvet frostings.", image: IMG.cream },
  { id: "p13", category: "bases", tag: "Bases & Creams · 500g / 1kg / 5kg", name: "Bakery Margarine & Puff Fat", desc: "High-plasticity bakery fat for flaky puffs, croissants, cookies, and buttercream.", image: IMG.cream },
  { id: "p14", category: "bases", tag: "Bases & Creams · 400g / 1kg Tin", name: "Sweetened Condensed Milk", desc: "Thick, creamy condensed milk for tres leches, eggless cakes, and fusion desserts.", image: IMG.cream },

  // ======================== FLAVORS & GLAZES (14) ========================
  { id: "p15", category: "flavors", tag: "Flavors & Glazes · 1kg / 2.5kg / 5kg", name: "Neutral Cold Mirror Glaze", desc: "Crystal-clear cold glaze that tints effortlessly with any gel color for glass shine.", image: IMG.glaze },
  { id: "p16", category: "flavors", tag: "Flavors & Glazes · 1kg / 5kg", name: "Dark Chocolate Mirror Glaze", desc: "Ready-to-pour glossy chocolate glaze that sets smoothly and never cracks when sliced.", image: IMG.glaze },
  { id: "p17", category: "flavors", tag: "Flavors & Glazes · 1kg / 2.5kg", name: "Caramel & Butterscotch Glaze", desc: "Golden amber caramel glaze with rich toasted sugar flavor for drips and pastry tops.", image: IMG.glaze },
  { id: "p18", category: "flavors", tag: "Flavors & Glazes · 1kg / 2.5kg", name: "Strawberry Cold Glaze", desc: "Bright ruby-red strawberry glaze for glossy fruit cakes and cheesecake toppings.", image: IMG.glaze },
  { id: "p19", category: "flavors", tag: "Flavors & Glazes · 750ml / 1L", name: "Strawberry Fruit Crush", desc: "Real strawberry pulp crush for cake fillings, milkshakes, and layered dessert jars.", image: IMG.crush },
  { id: "p20", category: "flavors", tag: "Flavors & Glazes · 750ml / 1L", name: "Alphonso Mango Fruit Crush", desc: "Thick, aromatic Alphonso mango crush for seasonal cakes, mousses, and ice creams.", image: IMG.crush },
  { id: "p21", category: "flavors", tag: "Flavors & Glazes · 750ml / 1L", name: "Blueberry Fruit Crush", desc: "Rich, tangy blueberry crush ideal for cheesecakes, sponges, and fruit pastries.", image: IMG.crush },
  { id: "p22", category: "flavors", tag: "Flavors & Glazes · 750ml / 1L", name: "Pineapple Fruit Crush", desc: "Classic sweet-tangy pineapple crush for bakery-style pineapple cream cakes.", image: IMG.crush },
  { id: "p23", category: "flavors", tag: "Flavors & Glazes · 750ml / 1L", name: "Kiwi & Mixed Fruit Crush", desc: "Refreshing kiwi and tropical mixed fruit crushes for vibrant cake fillings.", image: IMG.crush },
  { id: "p24", category: "flavors", tag: "Flavors & Glazes · 1kg / 5kg", name: "Bake-Stable Mixed Fruit Jam", desc: "Thick bakery-grade fruit jam that holds its texture inside swiss rolls and tarts.", image: IMG.crush },
  { id: "p25", category: "flavors", tag: "Flavors & Glazes · 100ml / 500ml / 1L", name: "Bakery Vanilla Essence", desc: "Concentrated, heat-stable vanilla essence that retains full aroma after baking.", image: IMG.essence },
  { id: "p26", category: "flavors", tag: "Flavors & Glazes · 100ml / 500ml", name: "Butterscotch & Pineapple Essence", desc: "Strong bakery-grade liquid essences for sponges, creams, and cookies.", image: IMG.essence },
  { id: "p27", category: "flavors", tag: "Flavors & Glazes · 100ml / 500ml", name: "Rasmalai & Rose Emulsions", desc: "Concentrated flavor-plus-color emulsions for trending Indian fusion cakes.", image: IMG.essence },
  { id: "p28", category: "flavors", tag: "Flavors & Glazes · 100ml / 500ml", name: "Chocolate & Coffee Emulsions", desc: "Deep mocha and roasted chocolate emulsions for rich ganache and tiramisu.", image: IMG.essence },

  // ======================== COLORS & DECOR (12) ========================
  { id: "p29", category: "decor", tag: "Colors & Decor · 15g / 30g / 100g", name: "Concentrated Gel Food Colors", desc: "Vibrant, non-bitter gel colors for whipping cream, fondant, and macarons.", image: IMG.color },
  { id: "p30", category: "decor", tag: "Colors & Decor · 20ml / 100ml / 500ml", name: "Liquid Food Colors", desc: "Economical, easy-blend liquid food shades for batters, glazes, and sugar syrups.", image: IMG.color },
  { id: "p31", category: "decor", tag: "Colors & Decor · 20ml / 100ml", name: "Oil-Based Candy Colors", desc: "Specially formulated oil colors that tint white chocolate without seizing.", image: IMG.color },
  { id: "p32", category: "decor", tag: "Colors & Decor · 5g / 10g Jars", name: "Edible Metallic Lustre Dust", desc: "Fine Gold, Silver, Rose Gold, and Copper shimmer dust for luxury cake accents.", image: IMG.color },
  { id: "p33", category: "decor", tag: "Colors & Decor · 400g / 500g / 2kg", name: "Dark Chocolate Compound", desc: "Smooth-melting dark compound slabs for truffle ganache, dipping, and garnishes.", image: IMG.choco },
  { id: "p34", category: "decor", tag: "Colors & Decor · 400g / 500g / 2kg", name: "Milk Chocolate Compound", desc: "Creamy milk chocolate compound for mousse cakes, bars, and chocolate curls.", image: IMG.choco },
  { id: "p35", category: "decor", tag: "Colors & Decor · 400g / 500g / 2kg", name: "White Chocolate Compound", desc: "Silky ivory compound ideal for mirror drips, shards, and white truffle.", image: IMG.choco },
  { id: "p36", category: "decor", tag: "Colors & Decor · 500g / 1kg / 5kg", name: "Bake-Stable Choco Chips", desc: "Dark and white chocolate chips that hold their shape inside muffins and cookies.", image: IMG.choco },
  { id: "p37", category: "decor", tag: "Colors & Decor · 500g / 1kg", name: "Sugar Paste & Roll Fondant", desc: "Smooth, pliable, non-cracking fondant for sculpted theme and wedding cakes.", image: IMG.color },
  { id: "p38", category: "decor", tag: "Colors & Decor · 100g / 500g / 1kg", name: "Sprinkles, Pearls & Vermicelli", desc: "Edible golden pearls, rainbow sprinkles, and chocolate vermicelli in bulk packs.", image: IMG.color },
  { id: "p39", category: "decor", tag: "Colors & Decor · Half kg / 1kg / Tall", name: "Window Cake & Cupcake Boxes", desc: "Sturdy, food-grade white and kraft cake boxes with clear display windows.", image: IMG.box },
  { id: "p40", category: "decor", tag: "Colors & Decor · All Sizes & Packs", name: "Cake Boards, Drums & Piping Bags", desc: "Grease-resistant gold/silver cake bases, thick drums, nozzles, and piping bags.", image: IMG.box },
];

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* 1. Top Scroll Progress Hairline */
  const progressEl = document.getElementById("scrollProgress");
  window.addEventListener(
    "scroll",
    () => {
      if (!progressEl) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progressEl.style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
    },
    { passive: true }
  );

/* Interactive 3D Tilt & Metallic Glare on Hero Visiting Card */
  const foilCard = document.getElementById("foilCard");
  if (foilCard && window.matchMedia("(pointer: fine)").matches) {
    foilCard.addEventListener("mousemove", (e) => {
      const r = foilCard.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -10;
      const ry = ((x / r.width) - 0.5) * 10;

      foilCard.style.setProperty("--px", `${x}px`);
      foilCard.style.setProperty("--py", `${y}px`);
      foilCard.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    });

    foilCard.addEventListener("mouseleave", () => {
      foilCard.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  }

  /* 3. Safe Scroll Reveals */
  document.documentElement.classList.add("js");
  const reveals = document.querySelectorAll(".reveal");
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
      { threshold: 0.06 }
    );
    reveals.forEach((el) => io.observe(el));
    setTimeout(() => reveals.forEach((el) => el.classList.add("in")), 850);
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* 4. Mobile / Tablet Drawer */
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

  /* 5. 40-Product Renderer, Live Search & Category Filter */
  const grid = document.getElementById("bentoGrid");
  const tabs = document.querySelectorAll(".tab");
  const searchInput = document.getElementById("productSearch");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");

  const list = new Map();
  let activeCat = "all";

  const toast = (msg) => {
    const t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-shown");
    clearTimeout(toast._id);
    toast._id = setTimeout(() => t.classList.remove("is-shown"), 2100);
  };

  const openWA = (msg) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  function renderProducts() {
    if (!grid) return;
    const q = (searchInput?.value || "").trim().toLowerCase();

    const filtered = PRODUCTS.filter((p) => {
      const catMatch = activeCat === "all" || p.category === activeCat;
      const textMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q);
      return catMatch && textMatch;
    });

    if (resultCount) {
      resultCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? "item" : "items"}`;
    }
    if (emptyState) emptyState.hidden = filtered.length > 0;

    grid.innerHTML = "";

    filtered.forEach((p) => {
      const inList = list.has(p.id);
      const qty = inList ? list.get(p.id).qty : 0;

      const card = document.createElement("article");
      card.className = "bento-card";
      card.innerHTML = `
        <div class="bento-card__media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="bento-card__body">
          <span class="bento-card__tag">${p.tag}</span>
          <h3 class="bento-card__title">${p.name}</h3>
          <p class="bento-card__desc">${p.desc}</p>
          <div class="bento-card__foot">
            <button type="button" class="pill-add ${inList ? "is-added" : ""}" data-add-id="${p.id}">
              ${inList ? `Added (${qty})` : "+ Add to List"}
            </button>
            <button type="button" class="link-wa" data-item-wa="${p.name}">WhatsApp &rarr;</button>
          </div>
        </div>
      `;

      const img = card.querySelector("img");
      img.addEventListener("error", () => {
        const fb = document.createElement("div");
        fb.className = "fallback-box";
        fb.textContent = p.name;
        img.replaceWith(fb);
      });

      grid.appendChild(card);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeCat = tab.dataset.filter || "all";
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });
      renderProducts();
    });
  });

  searchInput?.addEventListener("input", renderProducts);

  document.getElementById("resetFilterBtn")?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    activeCat = "all";
    tabs.forEach((t) => {
      const active = t.dataset.filter === "all";
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    renderProducts();
  });

  /* 6. Inquiry List Drawer + Floating Mobile Dock */
  const bagCount = document.getElementById("bagCount");
  const dockCount = document.getElementById("dockCount");
  const floatingDock = document.getElementById("floatingDock");
  const bagBody = document.getElementById("bagBody");
  const bagDrawer = document.getElementById("bagDrawer");
  const bagBackdrop = document.getElementById("bagBackdrop");

  function renderBag() {
    let total = 0;
    list.forEach((item) => (total += item.qty));
    if (bagCount) bagCount.textContent = total;
    if (dockCount) dockCount.textContent = total;
    floatingDock?.classList.toggle("is-visible", total > 0);

    document.querySelectorAll("[data-add-id]").forEach((btn) => {
      const id = btn.dataset.addId;
      const inList = list.has(id);
      btn.classList.toggle("is-added", inList);
      btn.textContent = inList ? `Added (${list.get(id).qty})` : "+ Add to List";
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

  grid?.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add-id]");
    if (addBtn) {
      const id = addBtn.dataset.addId;
      const prod = PRODUCTS.find((p) => p.id === id);
      if (!prod) return;
      if (list.has(id)) list.get(id).qty += 1;
      else list.set(id, { name: prod.name, qty: 1 });
      renderBag();
      toast(`Added ${prod.name}`);
      return;
    }

    const waBtn = e.target.closest("[data-item-wa]");
    if (waBtn) {
      openWA(`Hello Sameer Trading Company, please share wholesale rates for ${waBtn.dataset.itemWa}.`);
    }
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
  document.getElementById("dockOpenBtn")?.addEventListener("click", () => toggleBag(true));
  document.getElementById("closeBagBtn")?.addEventListener("click", () => toggleBag(false));
  bagBackdrop?.addEventListener("click", () => toggleBag(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleBag(false);
  });

  document.getElementById("clearBagBtn")?.addEventListener("click", () => {
    list.clear();
    renderBag();
  });

  document.getElementById("sendBagBtn")?.addEventListener("click", () => {
    if (list.size === 0) return toast("Add at least one item first");
    const lines = [];
    list.forEach((item) => lines.push(`• ${item.name} (Qty: ${item.qty})`));
    openWA(`Hello Sameer Trading Company,\n\nPlease share your best wholesale rates for:\n${lines.join("\n")}`);
  });

  renderProducts();
  renderBag();

  /* 7. Direct WhatsApp & Inquiry Form */
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

  /* 8. Interactive Footer Glow, Kinetic Wordmark, Copy, Back to Top & Magnetic Hover */
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

  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".magnetic, #zyracSeal").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.14;
        const y = (e.clientY - r.top - r.height / 2) * 0.18;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate3d(0, 0, 0)";
      });
    });
  }
});