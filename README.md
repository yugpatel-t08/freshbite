# 🍽️ FreshBite — Online Food Ordering Website

FreshBite is a fully functional **frontend-only** food ordering platform where users can browse restaurants, explore menus, add items to a cart, and place (simulated) orders for delivery. Built as part of my **Web Development Internship** project.

> **Task Link:** [ADD YOUR TASK LINK HERE]

**Live Demo:** [ADD YOUR LIVE URL HERE — GitHub Pages / Netlify / Vercel]

---

## 🚀 Tech Stack

- **HTML5** — structure and content
- **CSS3** — custom design system, responsive layout (no framework)
- **Vanilla JavaScript** — all interactivity; data stored in JS arrays/objects + `localStorage` (no database, per the task requirements)

## 📄 Pages (10)

| Page | File | Highlights |
|---|---|---|
| Home | `index.html` | Hero banner, restaurant categories, featured dishes, special offers, reviews |
| Restaurant Listing | `restaurants.html` | Grid with cuisine / rating / price filters |
| Menu | `menu.html` | Search, category tabs, dietary tags (Veg / Non-Veg / Gluten-Free) |
| Product Detail | `product.html` | Description, ingredients, nutritional info, quantity + add to cart |
| Shopping Cart | `cart.html` | Quantity adjustment, coupon codes, live total calculation |
| Checkout | `checkout.html` | Address form with validation, payment method, delivery time selection |
| User Account | `account.html` | Profile, order history with live tracking, saved addresses, wishlist |
| Login / Register | `login.html` | Simulated authentication (stored in browser) |
| About Us | `about.html` | Story, team, awards |
| Contact Us | `contact.html` | Location map, hours, phone, validated contact form |

## ✨ Features

**Core:** restaurant categories · food menu display · add to cart · quantity adjustment · price calculation (subtotal + discount + 5% tax + delivery fee, free over ₹499) · order summary · checkout process · simulated login/register

**Bonus:** dietary filters (Veg / Non-Veg / Gluten-Free) · delivery time selection · simulated order tracking (Placed → Preparing → Out for Delivery → Delivered) · customer reviews & ratings · special offers & working coupons (`FRESH10`, `SAVE50`, `FREESHIP`) · wishlist · payment gateway simulation (COD / UPI / Card)

## 🎨 Design

- Colors: warm orange `#FF6B35`, cream `#FFF8F0`, dark brown `#2D1B12`
- Fonts: Fredoka (headings) + Nunito (body) — playful, warm, appetizing
- Fully responsive — works on mobile, tablet and desktop (hamburger nav on small screens)

## 🛠️ Setup & Run

No build step and no dependencies.

**Option 1 — just open it:**
1. Download / clone this repository
2. Open `index.html` in any modern browser

**Option 2 — local server (recommended):**
```bash
git clone <this-repo-url>
cd freshbite
python3 -m http.server 8000
# open http://localhost:8000
```

## 📁 Project Structure

```
freshbite/
├── index.html          # Home
├── restaurants.html    # Restaurant listing + filters
├── menu.html           # Menu + search + dietary filters
├── product.html        # Product detail
├── cart.html           # Shopping cart
├── checkout.html       # Checkout
├── login.html          # Login / Register
├── account.html        # Profile, orders, addresses, wishlist
├── about.html          # About us
├── contact.html        # Contact + map
├── css/
│   └── style.css       # Design system + all page styles
└── js/
    ├── data.js         # Restaurants, menu items, coupons, reviews
    └── app.js          # Cart, auth, wishlist, orders, shared header/footer
```

## 📝 Notes

- This is a demo project: no real payments are processed and accounts/orders live only in your browser's `localStorage`.
- Try coupon **FRESH10** in the cart, and place an order to watch the simulated tracking advance in **My Account → Order History**.
