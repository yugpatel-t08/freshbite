/* ============ FreshBite shared app logic (cart, auth, wishlist, header/footer) ============ */

const FB = {
  /* ---------- storage helpers ---------- */
  read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  write(key, val) { localStorage.setItem(key, JSON.stringify(val)); },

  money(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); },

  findItem(id) { return MENU.find(m => m.id === id); },
  findRestaurant(id) { return RESTAURANTS.find(r => r.id === id); },

  /* ---------- cart ---------- */
  getCart() { return FB.read("fb_cart", []); },        // [{id, qty}]
  saveCart(cart) { FB.write("fb_cart", cart); FB.updateCartBadge(); },

  addToCart(id, qty = 1) {
    const cart = FB.getCart();
    const line = cart.find(l => l.id === id);
    if (line) line.qty += qty; else cart.push({ id, qty });
    FB.saveCart(cart);
    FB.toast(`${FB.findItem(id).name} added to cart 🛒`);
  },

  setQty(id, qty) {
    let cart = FB.getCart();
    if (qty <= 0) cart = cart.filter(l => l.id !== id);
    else { const line = cart.find(l => l.id === id); if (line) line.qty = qty; }
    FB.saveCart(cart);
  },

  removeFromCart(id) {
    FB.saveCart(FB.getCart().filter(l => l.id !== id));
  },

  clearCart() { FB.saveCart([]); },

  cartCount() { return FB.getCart().reduce((s, l) => s + l.qty, 0); },
  cartSubtotal() {
    return FB.getCart().reduce((s, l) => s + (FB.findItem(l.id)?.price || 0) * l.qty, 0);
  },

  /* Totals with coupon + delivery + tax. Returns {subtotal, discount, delivery, tax, total, couponMsg, couponOk} */
  cartTotals(couponCode) {
    const subtotal = FB.cartSubtotal();
    let discount = 0, delivery = subtotal > 0 ? (subtotal >= 499 ? 0 : 39) : 0;
    let couponMsg = "", couponOk = false;
    const code = (couponCode || "").trim().toUpperCase();
    if (code) {
      const c = COUPONS[code];
      if (!c) couponMsg = "Invalid coupon code";
      else if (subtotal < c.min) couponMsg = `Needs a minimum order of ${FB.money(c.min)}`;
      else {
        couponOk = true;
        couponMsg = `Applied: ${c.label} 🎉`;
        if (c.type === "percent") discount = subtotal * c.value / 100;
        if (c.type === "flat") discount = c.value;
        if (c.type === "freeship") delivery = 0;
      }
    }
    const tax = (subtotal - discount) * 0.05;
    const total = Math.max(0, subtotal - discount + delivery + tax);
    return { subtotal, discount, delivery, tax, total, couponMsg, couponOk };
  },

  updateCartBadge() {
    const el = document.querySelector(".cart-badge");
    if (el) { const n = FB.cartCount(); el.textContent = n; el.style.display = n ? "flex" : "none"; }
  },

  /* ---------- auth (simulated) ---------- */
  getUsers() { return FB.read("fb_users", []); },
  getUser() { return FB.read("fb_user", null); },

  register(name, email, phone, password) {
    const users = FB.getUsers();
    if (users.some(u => u.email === email)) return { ok: false, msg: "An account with this email already exists" };
    const user = { name, email, phone, password, addresses: [] };
    users.push(user);
    FB.write("fb_users", users);
    FB.write("fb_user", user);
    return { ok: true };
  },

  login(email, password) {
    const user = FB.getUsers().find(u => u.email === email);
    if (!user || user.password !== password) return { ok: false, msg: "Invalid email or password" };
    FB.write("fb_user", user);
    return { ok: true };
  },

  logout() { localStorage.removeItem("fb_user"); location.href = "index.html"; },

  updateUser(patch) {
    const user = { ...FB.getUser(), ...patch };
    FB.write("fb_user", user);
    const users = FB.getUsers().map(u => u.email === user.email ? user : u);
    FB.write("fb_users", users);
    return user;
  },

  /* ---------- wishlist ---------- */
  getWishlist() { return FB.read("fb_wishlist", []); },
  inWishlist(id) { return FB.getWishlist().includes(id); },
  toggleWishlist(id) {
    let w = FB.getWishlist();
    if (w.includes(id)) { w = w.filter(x => x !== id); FB.toast("Removed from wishlist"); }
    else { w.push(id); FB.toast("Added to wishlist ❤️"); }
    FB.write("fb_wishlist", w);
    return w.includes(id);
  },

  /* ---------- orders ---------- */
  getOrders() { return FB.read("fb_orders", []); },
  addOrder(order) {
    const orders = FB.getOrders();
    orders.unshift(order);
    FB.write("fb_orders", orders);
  },

  /* Simulated tracking: status advances with time since the order was placed */
  orderStatus(order) {
    const mins = (Date.now() - order.placedAt) / 60000;
    if (mins < 2)  return { step: 1, label: "Order Placed",     cls: "status-placed" };
    if (mins < 6)  return { step: 2, label: "Preparing",        cls: "status-preparing" };
    if (mins < 12) return { step: 3, label: "Out for Delivery", cls: "status-out" };
    return { step: 4, label: "Delivered", cls: "status-delivered" };
  },

  /* ---------- UI helpers ---------- */
  toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(FB._toastTimer);
    FB._toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  },

  stars(n) { return "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n)); },
  priceLevel(n) { return "₹".repeat(n); },

  qs(name) { return new URLSearchParams(location.search).get(name); },

  dietBadge(item) {
    const d = item.diet === "veg"
      ? '<span class="badge badge-veg">🟢 Veg</span>'
      : '<span class="badge badge-nonveg">🔴 Non-Veg</span>';
    return d + (item.gf ? ' <span class="badge badge-gf">GF</span>' : "");
  },

  foodCardHTML(item) {
    const r = FB.findRestaurant(item.rid);
    const wished = FB.inWishlist(item.id);
    return `
    <article class="food-card">
      <button class="wish-btn" data-wish="${item.id}" aria-label="Toggle wishlist">${wished ? "❤️" : "🤍"}</button>
      <a href="product.html?id=${item.id}" class="card-img">${item.emoji}</a>
      <div class="card-body">
        <div class="card-meta">${FB.dietBadge(item)}</div>
        <h3><a href="product.html?id=${item.id}">${item.name}</a></h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-meta">🏪 ${r.name} · ⏱ ${r.deliveryTime}</div>
        <div class="card-footer">
          <span class="price">${FB.money(item.price)}</span>
          <button class="btn btn-sm" data-add="${item.id}">Add +</button>
        </div>
      </div>
    </article>`;
  },

  /* Delegated clicks for add-to-cart & wishlist buttons anywhere on the page */
  bindCardActions(root = document) {
    root.addEventListener("click", e => {
      const add = e.target.closest("[data-add]");
      if (add) { FB.addToCart(add.dataset.add); return; }
      const wish = e.target.closest("[data-wish]");
      if (wish) {
        const on = FB.toggleWishlist(wish.dataset.wish);
        wish.textContent = on ? "❤️" : "🤍";
        document.dispatchEvent(new CustomEvent("fb:wishlist-changed"));
      }
    });
  },

  /* ---------- header / footer ---------- */
  renderHeader(active) {
    const user = FB.getUser();
    const links = [
      ["index.html", "Home"], ["restaurants.html", "Restaurants"], ["menu.html", "Menu"],
      ["about.html", "About"], ["contact.html", "Contact"]
    ];
    document.getElementById("header").innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="index.html">🍽️ Fresh<span>Bite</span></a>
        <nav class="main-nav" id="mainNav">
          ${links.map(([href, label]) => `<a href="${href}" class="${active === href ? "active" : ""}">${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="cart-link" href="cart.html" aria-label="Cart">🛒<span class="cart-badge"></span></a>
          ${user
            ? `<a class="btn btn-outline btn-sm" href="account.html">👤 ${user.name.split(" ")[0]}</a>`
            : `<a class="btn btn-sm" href="login.html">Login</a>`}
          <button class="hamburger" id="hamburger" aria-label="Menu">☰</button>
        </div>
      </div>
    </header>`;
    document.getElementById("hamburger").onclick = () =>
      document.getElementById("mainNav").classList.toggle("open");
    FB.updateCartBadge();
  },

  renderFooter() {
    const el = document.getElementById("footer");
    if (!el) return;
    el.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <div class="foot-logo">🍽️ Fresh<span>Bite</span></div>
          <p>Delicious food from your favourite local restaurants, delivered fresh to your doorstep.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="index.html">Home</a><a href="restaurants.html">Restaurants</a>
          <a href="menu.html">Full Menu</a><a href="cart.html">Cart</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="about.html">About Us</a><a href="contact.html">Contact Us</a>
          <a href="account.html">My Account</a><a href="login.html">Login / Register</a>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <a href="tel:+912212345678">📞 +91 22 1234 5678</a>
          <a href="mailto:hello@freshbite.example">✉️ hello@freshbite.example</a>
          <a href="contact.html">📍 Bandra West, Mumbai</a>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} FreshBite · Built for the Web Development Internship Project · Frontend only, no real orders</div>
    </footer>`;
  },

  init(activePage) {
    FB.renderHeader(activePage);
    FB.renderFooter();
    FB.bindCardActions();
  }
};
