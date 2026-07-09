/* ============ FreshBite Data (frontend-only, no database) ============ */

const RESTAURANTS = [
  { id: "spice-symphony", name: "Spice Symphony", cuisine: "North Indian", rating: 4.6, priceLevel: 2, deliveryTime: "30–40 min", emoji: "🍛", tagline: "Rich curries & tandoori classics", offer: "20% OFF" },
  { id: "wok-this-way",   name: "Wok This Way",   cuisine: "Chinese",      rating: 4.3, priceLevel: 2, deliveryTime: "25–35 min", emoji: "🥡", tagline: "Sizzling woks, bold flavours", offer: "" },
  { id: "napoli-nights",  name: "Napoli Nights",  cuisine: "Italian",      rating: 4.8, priceLevel: 3, deliveryTime: "35–45 min", emoji: "🍕", tagline: "Wood-fired pizza & fresh pasta", offer: "Free Garlic Bread" },
  { id: "burger-barn",    name: "Burger Barn",    cuisine: "Fast Food",    rating: 4.2, priceLevel: 1, deliveryTime: "20–30 min", emoji: "🍔", tagline: "Stacked burgers, crispy fries", offer: "" },
  { id: "green-bowl",     name: "Green Bowl",     cuisine: "Healthy",      rating: 4.7, priceLevel: 2, deliveryTime: "20–30 min", emoji: "🥗", tagline: "Fresh salads & power bowls", offer: "15% OFF" },
  { id: "sweet-tooth",    name: "Sweet Tooth",    cuisine: "Desserts",     rating: 4.5, priceLevel: 1, deliveryTime: "15–25 min", emoji: "🍰", tagline: "Cakes, brownies & shakes", offer: "" },
  { id: "sushi-zen",      name: "Sushi Zen",      cuisine: "Japanese",     rating: 4.9, priceLevel: 3, deliveryTime: "40–50 min", emoji: "🍣", tagline: "Hand-rolled sushi, zen vibes", offer: "" },
  { id: "taco-loco",      name: "Taco Loco",      cuisine: "Mexican",      rating: 4.4, priceLevel: 2, deliveryTime: "25–35 min", emoji: "🌮", tagline: "Street-style tacos & burritos", offer: "Buy 2 Get 1" }
];

/* diet: "veg" | "nonveg"; gf: gluten-free */
const MENU = [
  // Spice Symphony
  { id: "butter-chicken", rid: "spice-symphony", name: "Butter Chicken", emoji: "🍗", price: 329, category: "Mains", diet: "nonveg", gf: true, popular: true,
    desc: "Tender chicken simmered in a silky tomato-butter gravy with a hint of kasuri methi.",
    ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Garam masala", "Kasuri methi"],
    nutrition: { cal: 540, protein: 32, carbs: 14, fat: 38 } },
  { id: "paneer-tikka", rid: "spice-symphony", name: "Paneer Tikka", emoji: "🧀", price: 269, category: "Starters", diet: "veg", gf: true, popular: true,
    desc: "Char-grilled cottage cheese cubes marinated in spiced yogurt, served with mint chutney.",
    ingredients: ["Paneer", "Yogurt", "Bell pepper", "Onion", "Tandoori spices"],
    nutrition: { cal: 380, protein: 22, carbs: 12, fat: 26 } },
  { id: "dal-makhani", rid: "spice-symphony", name: "Dal Makhani", emoji: "🥘", price: 229, category: "Mains", diet: "veg", gf: true, popular: false,
    desc: "Black lentils slow-cooked overnight with butter and cream — comfort in a bowl.",
    ingredients: ["Black lentils", "Kidney beans", "Butter", "Cream", "Tomato"],
    nutrition: { cal: 420, protein: 18, carbs: 44, fat: 20 } },
  { id: "garlic-naan", rid: "spice-symphony", name: "Garlic Naan (2 pc)", emoji: "🫓", price: 89, category: "Breads", diet: "veg", gf: false, popular: false,
    desc: "Soft tandoor-baked naan brushed with garlic butter and fresh coriander.",
    ingredients: ["Refined flour", "Garlic", "Butter", "Yogurt", "Coriander"],
    nutrition: { cal: 320, protein: 8, carbs: 52, fat: 9 } },

  // Wok This Way
  { id: "hakka-noodles", rid: "wok-this-way", name: "Veg Hakka Noodles", emoji: "🍜", price: 199, category: "Mains", diet: "veg", gf: false, popular: true,
    desc: "Wok-tossed noodles with crunchy vegetables and a smoky soy glaze.",
    ingredients: ["Noodles", "Cabbage", "Carrot", "Spring onion", "Soy sauce"],
    nutrition: { cal: 430, protein: 11, carbs: 68, fat: 12 } },
  { id: "chilli-chicken", rid: "wok-this-way", name: "Chilli Chicken", emoji: "🌶️", price: 289, category: "Starters", diet: "nonveg", gf: false, popular: true,
    desc: "Crispy chicken tossed with peppers, onion and a fiery Indo-Chinese sauce.",
    ingredients: ["Chicken", "Capsicum", "Onion", "Red chilli", "Soy sauce"],
    nutrition: { cal: 470, protein: 28, carbs: 30, fat: 24 } },
  { id: "veg-fried-rice", rid: "wok-this-way", name: "Veg Fried Rice", emoji: "🍚", price: 189, category: "Mains", diet: "veg", gf: true, popular: false,
    desc: "Fragrant jasmine rice stir-fried on high flame with garden vegetables.",
    ingredients: ["Rice", "Beans", "Carrot", "Corn", "Sesame oil"],
    nutrition: { cal: 390, protein: 9, carbs: 70, fat: 8 } },
  { id: "spring-rolls", rid: "wok-this-way", name: "Crispy Spring Rolls", emoji: "🥟", price: 159, category: "Starters", diet: "veg", gf: false, popular: false,
    desc: "Golden rolls stuffed with glass noodles and veggies, served with sweet chilli dip.",
    ingredients: ["Cabbage", "Carrot", "Glass noodles", "Pastry sheet"],
    nutrition: { cal: 310, protein: 6, carbs: 42, fat: 13 } },

  // Napoli Nights
  { id: "margherita", rid: "napoli-nights", name: "Margherita Pizza", emoji: "🍕", price: 349, category: "Pizza", diet: "veg", gf: false, popular: true,
    desc: "San Marzano tomato, fior di latte mozzarella and basil on a wood-fired crust.",
    ingredients: ["Pizza dough", "Tomato", "Mozzarella", "Basil", "Olive oil"],
    nutrition: { cal: 620, protein: 24, carbs: 78, fat: 24 } },
  { id: "pepperoni", rid: "napoli-nights", name: "Pepperoni Pizza", emoji: "🍕", price: 449, category: "Pizza", diet: "nonveg", gf: false, popular: true,
    desc: "Loaded with spicy pepperoni, mozzarella and oregano — the crowd favourite.",
    ingredients: ["Pizza dough", "Pepperoni", "Mozzarella", "Tomato", "Oregano"],
    nutrition: { cal: 740, protein: 30, carbs: 76, fat: 36 } },
  { id: "alfredo-pasta", rid: "napoli-nights", name: "Fettuccine Alfredo", emoji: "🍝", price: 329, category: "Pasta", diet: "veg", gf: false, popular: false,
    desc: "Ribbons of fettuccine folded into a rich parmesan cream sauce.",
    ingredients: ["Fettuccine", "Cream", "Parmesan", "Butter", "Black pepper"],
    nutrition: { cal: 680, protein: 18, carbs: 66, fat: 38 } },
  { id: "tiramisu", rid: "napoli-nights", name: "Classic Tiramisu", emoji: "🍮", price: 249, category: "Desserts", diet: "veg", gf: false, popular: false,
    desc: "Espresso-soaked ladyfingers layered with mascarpone and cocoa.",
    ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa", "Eggs"],
    nutrition: { cal: 450, protein: 8, carbs: 46, fat: 26 } },

  // Burger Barn
  { id: "classic-cheeseburger", rid: "burger-barn", name: "Classic Cheeseburger", emoji: "🍔", price: 219, category: "Burgers", diet: "nonveg", gf: false, popular: true,
    desc: "Juicy grilled patty, melted cheddar, lettuce, tomato and house sauce.",
    ingredients: ["Chicken patty", "Cheddar", "Lettuce", "Tomato", "Brioche bun"],
    nutrition: { cal: 560, protein: 26, carbs: 44, fat: 30 } },
  { id: "veggie-burger", rid: "burger-barn", name: "Crunchy Veggie Burger", emoji: "🍔", price: 179, category: "Burgers", diet: "veg", gf: false, popular: false,
    desc: "Crispy veg patty with slaw, pickles and smoky mayo in a toasted bun.",
    ingredients: ["Veg patty", "Slaw", "Pickles", "Mayo", "Sesame bun"],
    nutrition: { cal: 480, protein: 13, carbs: 56, fat: 22 } },
  { id: "loaded-fries", rid: "burger-barn", name: "Loaded Cheese Fries", emoji: "🍟", price: 149, category: "Sides", diet: "veg", gf: true, popular: true,
    desc: "Crispy fries smothered in cheese sauce, jalapeños and spring onion.",
    ingredients: ["Potato", "Cheese sauce", "Jalapeño", "Spring onion"],
    nutrition: { cal: 520, protein: 10, carbs: 58, fat: 28 } },
  { id: "choco-shake", rid: "burger-barn", name: "Chocolate Thickshake", emoji: "🥤", price: 169, category: "Beverages", diet: "veg", gf: true, popular: false,
    desc: "Double chocolate shake topped with whipped cream and brownie bits.",
    ingredients: ["Milk", "Chocolate", "Ice cream", "Brownie", "Whipped cream"],
    nutrition: { cal: 610, protein: 12, carbs: 82, fat: 26 } },

  // Green Bowl
  { id: "buddha-bowl", rid: "green-bowl", name: "Rainbow Buddha Bowl", emoji: "🥗", price: 289, category: "Bowls", diet: "veg", gf: true, popular: true,
    desc: "Quinoa, roasted chickpeas, avocado and seasonal veggies with tahini drizzle.",
    ingredients: ["Quinoa", "Chickpeas", "Avocado", "Beetroot", "Tahini"],
    nutrition: { cal: 480, protein: 16, carbs: 52, fat: 22 } },
  { id: "grilled-chicken-salad", rid: "green-bowl", name: "Grilled Chicken Salad", emoji: "🥙", price: 319, category: "Salads", diet: "nonveg", gf: true, popular: true,
    desc: "Herb-grilled chicken over greens, cherry tomatoes and lemon vinaigrette.",
    ingredients: ["Chicken breast", "Mixed greens", "Cherry tomato", "Cucumber", "Vinaigrette"],
    nutrition: { cal: 380, protein: 34, carbs: 14, fat: 20 } },
  { id: "acai-smoothie-bowl", rid: "green-bowl", name: "Berry Smoothie Bowl", emoji: "🫐", price: 259, category: "Bowls", diet: "veg", gf: true, popular: false,
    desc: "Thick berry smoothie topped with granola, banana coins and chia seeds.",
    ingredients: ["Mixed berries", "Banana", "Granola", "Chia seeds", "Honey"],
    nutrition: { cal: 340, protein: 9, carbs: 62, fat: 8 } },
  { id: "avocado-toast", rid: "green-bowl", name: "Avocado Sourdough Toast", emoji: "🥑", price: 229, category: "Snacks", diet: "veg", gf: false, popular: false,
    desc: "Smashed avocado on toasted sourdough with chilli flakes and microgreens.",
    ingredients: ["Sourdough", "Avocado", "Lemon", "Chilli flakes", "Microgreens"],
    nutrition: { cal: 320, protein: 8, carbs: 34, fat: 18 } },

  // Sweet Tooth
  { id: "choco-lava", rid: "sweet-tooth", name: "Molten Choco Lava Cake", emoji: "🍫", price: 149, category: "Desserts", diet: "veg", gf: false, popular: true,
    desc: "Warm chocolate cake with a gooey molten centre — best with ice cream.",
    ingredients: ["Dark chocolate", "Butter", "Flour", "Eggs", "Sugar"],
    nutrition: { cal: 430, protein: 6, carbs: 48, fat: 24 } },
  { id: "red-velvet", rid: "sweet-tooth", name: "Red Velvet Pastry", emoji: "🍰", price: 129, category: "Desserts", diet: "veg", gf: false, popular: false,
    desc: "Velvety cocoa sponge layered with classic cream-cheese frosting.",
    ingredients: ["Cocoa", "Cream cheese", "Flour", "Butter", "Beetroot extract"],
    nutrition: { cal: 390, protein: 5, carbs: 46, fat: 21 } },
  { id: "gf-brownie", rid: "sweet-tooth", name: "Gluten-Free Almond Brownie", emoji: "🧁", price: 159, category: "Desserts", diet: "veg", gf: true, popular: false,
    desc: "Fudgy almond-flour brownie — all the indulgence, none of the gluten.",
    ingredients: ["Almond flour", "Dark chocolate", "Butter", "Eggs"],
    nutrition: { cal: 360, protein: 7, carbs: 32, fat: 24 } },
  { id: "mango-lassi", rid: "sweet-tooth", name: "Mango Lassi", emoji: "🥭", price: 99, category: "Beverages", diet: "veg", gf: true, popular: true,
    desc: "Thick Alphonso mango yogurt smoothie with a pinch of cardamom.",
    ingredients: ["Mango", "Yogurt", "Cardamom", "Honey"],
    nutrition: { cal: 240, protein: 6, carbs: 44, fat: 5 } },

  // Sushi Zen
  { id: "california-roll", rid: "sushi-zen", name: "California Roll (8 pc)", emoji: "🍣", price: 399, category: "Sushi", diet: "nonveg", gf: true, popular: true,
    desc: "Crab stick, avocado and cucumber rolled in sushi rice and tobiko.",
    ingredients: ["Sushi rice", "Crab stick", "Avocado", "Cucumber", "Nori", "Tobiko"],
    nutrition: { cal: 350, protein: 12, carbs: 54, fat: 9 } },
  { id: "veg-tempura-roll", rid: "sushi-zen", name: "Veg Tempura Roll (8 pc)", emoji: "🍥", price: 349, category: "Sushi", diet: "veg", gf: false, popular: false,
    desc: "Crunchy tempura vegetables rolled with sushi rice and spicy mayo.",
    ingredients: ["Sushi rice", "Asparagus", "Carrot", "Tempura batter", "Nori"],
    nutrition: { cal: 380, protein: 8, carbs: 60, fat: 12 } },
  { id: "salmon-nigiri", rid: "sushi-zen", name: "Salmon Nigiri (4 pc)", emoji: "🐟", price: 459, category: "Sushi", diet: "nonveg", gf: true, popular: true,
    desc: "Fresh Norwegian salmon draped over hand-pressed sushi rice.",
    ingredients: ["Salmon", "Sushi rice", "Wasabi", "Soy sauce"],
    nutrition: { cal: 280, protein: 18, carbs: 36, fat: 7 } },
  { id: "miso-soup", rid: "sushi-zen", name: "Miso Soup", emoji: "🍵", price: 149, category: "Soups", diet: "veg", gf: true, popular: false,
    desc: "Comforting miso broth with silken tofu, wakame and spring onion.",
    ingredients: ["Miso paste", "Tofu", "Wakame", "Spring onion"],
    nutrition: { cal: 90, protein: 6, carbs: 8, fat: 3 } },

  // Taco Loco
  { id: "chicken-tacos", rid: "taco-loco", name: "Chicken Tinga Tacos (3 pc)", emoji: "🌮", price: 279, category: "Tacos", diet: "nonveg", gf: true, popular: true,
    desc: "Smoky shredded chicken on corn tortillas with pico de gallo and lime crema.",
    ingredients: ["Corn tortilla", "Chicken", "Chipotle", "Pico de gallo", "Lime crema"],
    nutrition: { cal: 460, protein: 26, carbs: 42, fat: 20 } },
  { id: "paneer-burrito", rid: "taco-loco", name: "Paneer Burrito", emoji: "🌯", price: 249, category: "Burritos", diet: "veg", gf: false, popular: false,
    desc: "Grilled paneer, cilantro rice, black beans and salsa wrapped in a soft tortilla.",
    ingredients: ["Tortilla", "Paneer", "Rice", "Black beans", "Salsa", "Cheese"],
    nutrition: { cal: 580, protein: 22, carbs: 68, fat: 24 } },
  { id: "nachos-grande", rid: "taco-loco", name: "Nachos Grande", emoji: "🧀", price: 219, category: "Sides", diet: "veg", gf: true, popular: true,
    desc: "Corn tortilla chips loaded with cheese sauce, beans, jalapeños and guac.",
    ingredients: ["Corn chips", "Cheese", "Black beans", "Jalapeño", "Guacamole"],
    nutrition: { cal: 540, protein: 14, carbs: 56, fat: 28 } },
  { id: "churros", rid: "taco-loco", name: "Cinnamon Churros", emoji: "🥨", price: 159, category: "Desserts", diet: "veg", gf: false, popular: false,
    desc: "Golden fried churros dusted with cinnamon sugar, served with chocolate dip.",
    ingredients: ["Flour", "Cinnamon", "Sugar", "Chocolate dip"],
    nutrition: { cal: 410, protein: 5, carbs: 58, fat: 18 } }
];

const COUPONS = {
  FRESH10:  { type: "percent", value: 10, min: 0,   label: "10% off your order" },
  SAVE50:   { type: "flat",    value: 50, min: 299, label: "₹50 off orders above ₹299" },
  FREESHIP: { type: "freeship", value: 0, min: 199, label: "Free delivery above ₹199" }
};

const CATEGORIES = [
  { name: "Pizza",    emoji: "🍕", cuisine: "Italian" },
  { name: "Burgers",  emoji: "🍔", cuisine: "Fast Food" },
  { name: "Indian",   emoji: "🍛", cuisine: "North Indian" },
  { name: "Chinese",  emoji: "🥡", cuisine: "Chinese" },
  { name: "Healthy",  emoji: "🥗", cuisine: "Healthy" },
  { name: "Sushi",    emoji: "🍣", cuisine: "Japanese" },
  { name: "Mexican",  emoji: "🌮", cuisine: "Mexican" },
  { name: "Desserts", emoji: "🍰", cuisine: "Desserts" }
];

const REVIEWS = [
  { name: "Aarav M.", stars: 5, text: "Ordered the butter chicken and it arrived hot in 30 minutes. Tastes like a proper dhaba!" },
  { name: "Priya S.", stars: 5, text: "The Buddha bowl is my weekday lunch now. Fresh, filling and the tahini drizzle is addictive." },
  { name: "Rohan K.", stars: 4, text: "Great pizzas and the tracking feature is neat. Would love more dessert options!" },
  { name: "Sneha T.", stars: 5, text: "Coupons actually work, delivery is quick, and the app is super easy to use. 10/10." }
];
