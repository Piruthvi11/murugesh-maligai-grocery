// Murugesh Maligai Product Database
// This file acts as the local fallback database.
const products = [
  // ==========================================
  // 1. VEGETABLES (காய்கறிகள் - 20 items)
  // ==========================================
  {
    id: "veg-onion",
    category: "vegetables",
    name: "Small Onion (சின்ன வெங்காயம்)",
    price: 90,
    unit: "1 kg",
    image: "images/small_onion.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-tomato",
    category: "vegetables",
    name: "Country Tomato (நாட்டு தக்காளி)",
    price: 40,
    unit: "1 kg",
    image: "images/tomato.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-potato",
    category: "vegetables",
    name: "Potato (உருளைக்கிழங்கு)",
    price: 45,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60",
    icon: "fa-carrot"
  },
  {
    id: "veg-carrot",
    category: "vegetables",
    name: "Carrot (கேரட்)",
    price: 60,
    unit: "1 kg",
    image: "images/carrot.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-beans",
    category: "vegetables",
    name: "French Beans (பீன்ஸ்)",
    price: 70,
    unit: "1 kg",
    image: "images/beans.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-ladies-finger",
    category: "vegetables",
    name: "Ladies Finger (வெண்டைக்காய்)",
    price: 40,
    unit: "1 kg",
    image: "images/ladies_finger.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-brinjal",
    category: "vegetables",
    name: "Brinjal (கத்தரிக்காய்)",
    price: 50,
    unit: "1 kg",
    image: "images/brinjal.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-chilli",
    category: "vegetables",
    name: "Green Chilli (பச்சை மிளகாய்)",
    price: 20,
    unit: "250 g",
    image: "images/green_chilli.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-beetroot",
    category: "vegetables",
    name: "Beetroot (பீட்ரூட்)",
    price: 55,
    unit: "1 kg",
    image: "images/beetroot.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-lemon",
    category: "vegetables",
    name: "Lemon (எலுமிச்சை)",
    price: 15,
    unit: "3 Units",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=60",
    icon: "fa-carrot"
  },
  {
    id: "veg-cabbage",
    category: "vegetables",
    name: "Cabbage (முட்டைக்கோஸ்)",
    price: 35,
    unit: "1 Unit",
    image: "images/cabbage.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-drumstick",
    category: "vegetables",
    name: "Drumstick (முருங்கைக்காய்)",
    price: 30,
    unit: "250 g",
    image: "images/drumstick.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-ridge-gourd",
    category: "vegetables",
    name: "Ridge Gourd (பீர்க்கங்காய்)",
    price: 45,
    unit: "1 kg",
    image: "images/ridge_gourd.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-snake-gourd",
    category: "vegetables",
    name: "Snake Gourd (புடலங்காய்)",
    price: 40,
    unit: "1 kg",
    image: "images/snake_gourd.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-radish",
    category: "vegetables",
    name: "White Radish (முள்ளங்கி)",
    price: 30,
    unit: "1 kg",
    image: "images/radish.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-ginger",
    category: "vegetables",
    name: "Ginger (இஞ்சி)",
    price: 50,
    unit: "250 g",
    image: "images/ginger.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-garlic",
    category: "vegetables",
    name: "Garlic (பூண்டு)",
    price: 60,
    unit: "250 g",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&auto=format&fit=crop&q=60",
    icon: "fa-carrot"
  },
  {
    id: "veg-coriander",
    category: "vegetables",
    name: "Coriander Leaves (கொத்தமல்லி தழை)",
    price: 15,
    unit: "1 Bunch",
    image: "images/coriander.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-mint",
    category: "vegetables",
    name: "Mint Leaves (புதினா)",
    price: 15,
    unit: "1 Bunch",
    image: "images/mint.jpg",
    icon: "fa-carrot"
  },
  {
    id: "veg-curry",
    category: "vegetables",
    name: "Curry Leaves (கறிவேப்பிலை)",
    price: 10,
    unit: "1 Bunch",
    image: "images/curry_leaves.jpg",
    icon: "fa-carrot"
  },

  // ==========================================
  // 3. DAIRY PRODUCTS (பால் பொருட்கள் - 3 items)
  // ==========================================
  {
    id: "dairy-milk-100ml",
    category: "dairy",
    name: "Packet Milk (பால் பாக்கெட் - 100ml)",
    price: 10,
    unit: "100 ml",
    image: "images/arokya_milk_10.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-milk-150ml",
    category: "dairy",
    name: "Packet Milk (பால் பாக்கெட் - 150ml)",
    price: 15,
    unit: "150 ml",
    image: "images/arokya_milk_15.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-milk-500ml",
    category: "dairy",
    name: "Packet Milk (பால் பாக்கெட் - 500ml)",
    price: 41,
    unit: "500 ml",
    image: "images/arokya_milk_41.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-curd-packet",
    category: "dairy",
    name: "Fresh Curd Packet (தயிர் பாக்கெட்)",
    price: 10,
    unit: "Packet",
    image: "images/arokya_curd_10.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-curd-500ml",
    category: "dairy",
    name: "Fresh Thick Curd (கெட்டித் தயிர் - 500ml)",
    price: 44,
    unit: "500 ml",
    image: "images/hatsun_curd_44.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-buttermilk-packet",
    category: "dairy",
    name: "Refreshing Buttermilk Packet (நீர் மோர் பாக்கெட்)",
    price: 10,
    unit: "Packet",
    image: "images/hatsun_buttermilk.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-udhayakrishna-50ml",
    category: "dairy",
    name: "Udhayakrishna Ghee (உதயகிருஷ்ணா நெய் - 50ml)",
    price: 48,
    unit: "50 ml",
    image: "images/udhayakrishna_ghee_bottle.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-udhayakrishna-100ml",
    category: "dairy",
    name: "Udhayakrishna Ghee (உதயகிருஷ்ணா நெய் - 100ml)",
    price: 95,
    unit: "100 ml",
    image: "images/udhayakrishna_ghee_bottle.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-udhayakrishna-250ml",
    category: "dairy",
    name: "Udhayakrishna Ghee (உதயகிருஷ்ணா நெய் - 250ml)",
    price: 235,
    unit: "250 ml",
    image: "images/udhayakrishna_ghee_jar.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-udhayakrishna-500ml",
    category: "dairy",
    name: "Udhayakrishna Ghee (உதயகிருஷ்ணா நெய் - 500ml)",
    price: 460,
    unit: "500 ml",
    image: "images/udhayakrishna_ghee_jar.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-ayyappa-50ml",
    category: "dairy",
    name: "Ayyappa Ghee (அய்யப்பா நெய் - 50ml)",
    price: 45,
    unit: "50 ml",
    image: "images/ayyappa_ghee_50ml.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-ayyappa-100ml",
    category: "dairy",
    name: "Ayyappa Ghee (அய்யப்பா நெய் - 100ml)",
    price: 90,
    unit: "100 ml",
    image: "images/ayyappa_ghee_100ml.jpg",
    icon: "fa-cow"
  },
  {
    id: "dairy-ghee-ayyappa-200ml",
    category: "dairy",
    name: "Ayyappa Ghee (அய்யப்பா நெய் - 200ml)",
    price: 175,
    unit: "200 ml",
    image: "images/ayyappa_ghee_200ml.jpg",
    icon: "fa-cow"
  },

  // ==========================================
  // 4. RICE & GRAINS (அரிசி & தானியங்கள்)
  // ==========================================
  {
    id: "rice-annakili-5kg",
    category: "rice-grains",
    name: "ANNAKILI Ponni Rice (5 kg Bag)",
    price: 290,
    unit: "5 kg (Bag)",
    image: "SHOP3.jpeg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-annakili-10kg",
    category: "rice-grains",
    name: "ANNAKILI Ponni Rice (10 kg Bag)",
    price: 580,
    unit: "10 kg (Bag)",
    image: "SHOP3.jpeg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-annakili-26kg",
    category: "rice-grains",
    name: "ANNAKILI Ponni Rice (26 kg Bag)",
    price: 1550,
    unit: "26 kg (Bag)",
    image: "SHOP3.jpeg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-annakili-75kg",
    category: "rice-grains",
    name: "ANNAKILI Ponni Rice (75 kg Bag)",
    price: 4150,
    unit: "75 kg (Bag)",
    image: "SHOP3.jpeg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-idli-5kg",
    category: "rice-grains",
    name: "Idli Rice (இட்லி அரிசி - 5kg)",
    price: 180,
    unit: "5 kg (Bag)",
    image: "images/idli_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-idli-10kg",
    category: "rice-grains",
    name: "Idli Rice (இட்லி அரிசி - 10kg)",
    price: 350,
    unit: "10 kg (Bag)",
    image: "images/idli_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-idli-26kg",
    category: "rice-grains",
    name: "Idli Rice (இட்லி அரிசி - 26kg)",
    price: 880,
    unit: "26 kg (Bag)",
    image: "images/idli_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-seeraga-samba",
    category: "rice-grains",
    name: "Premium Seeraga Samba Rice (சீரக சம்பா அரிசி)",
    price: 140,
    unit: "1 kg",
    image: "images/seeraga_samba.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-raw",
    category: "rice-grains",
    name: "Raw Rice / Pacha Arisi (பச்சரிசி)",
    price: 55,
    unit: "1 kg",
    image: "images/raw_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-kuranai",
    category: "rice-grains",
    name: "Kuranai / Broken Rice (குருணை அரிசி - Loose)",
    price: 40,
    unit: "1 kg",
    image: "images/broken_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-kuranai-5kg",
    category: "rice-grains",
    name: "Kuranai / Broken Rice (குருணை அரிசி - 5kg)",
    price: 190,
    unit: "5 kg (Bag)",
    image: "images/broken_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-kuranai-10kg",
    category: "rice-grains",
    name: "Kuranai / Broken Rice (குருணை அரிசி - 10kg)",
    price: 370,
    unit: "10 kg (Bag)",
    image: "images/broken_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-kuranai-26kg",
    category: "rice-grains",
    name: "Kuranai / Broken Rice (குருணை அரிசி - 26kg)",
    price: 950,
    unit: "26 kg (Bag)",
    image: "images/broken_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-rns-5kg",
    category: "rice-grains",
    name: "RNS Brand Ponni Rice (5 kg Bag)",
    price: 290,
    unit: "5 kg (Bag)",
    image: "images/rns_rice_bags.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-rns-10kg",
    category: "rice-grains",
    name: "RNS Brand Ponni Rice (10 kg Bag)",
    price: 570,
    unit: "10 kg (Bag)",
    image: "images/rns_rice_bags.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-rns-26kg",
    category: "rice-grains",
    name: "RNS Brand Ponni Rice (26 kg Bag)",
    price: 1400,
    unit: "26 kg (Bag)",
    image: "images/rns_rice_bags.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-rns-75kg",
    category: "rice-grains",
    name: "RNS Brand Ponni Rice (75 kg Bag)",
    price: 4050,
    unit: "75 kg (Bag)",
    image: "images/rns_rice_75kg.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-mahanadhi-26kg",
    category: "rice-grains",
    name: "Mahanadhi Ponni Rice (26 kg Bag)",
    price: 1420,
    unit: "26 kg (Bag)",
    image: "images/mahanadhi_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-mahanadhi-loose",
    category: "rice-grains",
    name: "Mahanadhi Ponni Rice (Loose)",
    price: 58,
    unit: "1 kg",
    image: "images/mahanadhi_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-thinai-500g",
    category: "rice-grains",
    name: "Thinai / Foxtail Millet (தினை - 500g)",
    price: 40,
    unit: "500 g",
    image: "images/thinai_millet.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-varagu-500g",
    category: "rice-grains",
    name: "Varagu / Kodo Millet (வரகு - 500g)",
    price: 45,
    unit: "500 g",
    image: "images/varagu_millet.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-saamai-500g",
    category: "rice-grains",
    name: "Saamai / Little Millet (சாமை - 500g)",
    price: 45,
    unit: "500 g",
    image: "images/samai_millet.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-basmati",
    category: "rice-grains",
    name: "Premium Basmati Rice (பாசுமதி அரிசி)",
    price: 120,
    unit: "1 kg",
    image: "images/basmati_rice.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-ragi",
    category: "rice-grains",
    name: "Ragi Grains (கேழ்வரகு)",
    price: 50,
    unit: "1 kg",
    image: "images/ragi_grains.jpg",
    icon: "fa-wheat-awn"
  },
  {
    id: "rice-kambu",
    category: "rice-grains",
    name: "Kambu / Pearl Millet (கம்பு)",
    price: 55,
    unit: "1 kg",
    image: "images/kambu.jpg",
    icon: "fa-wheat-awn"
  },

  // ==========================================
  // 5. OILS & FATS (எண்ணெய் வகைகள்)
  // ==========================================
  {
    id: "oil-anandhan-coconut-250ml",
    category: "oils-fats",
    name: "Anandhan Coconut Oil Chekku (மரச்செக்கு தேங்காய் எண்ணெய் - 250ml)",
    price: 85,
    unit: "250 ml",
    image: "images/anandhan_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-coconut-500ml",
    category: "oils-fats",
    name: "Anandhan Coconut Oil Chekku (மரச்செக்கு தேங்காய் எண்ணெய் - 500ml)",
    price: 170,
    unit: "500 ml",
    image: "images/anandhan_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-coconut-1l",
    category: "oils-fats",
    name: "Anandhan Coconut Oil Chekku (மரச்செக்கு தேங்காய் எண்ணெய் - 1L)",
    price: 335,
    unit: "1 Litre",
    image: "images/anandhan_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-groundnut-500ml",
    category: "oils-fats",
    name: "Anandhan Groundnut Oil Chekku (மரச்செக்கு கடலை எண்ணெய் - 500ml)",
    price: 115,
    unit: "500 ml",
    image: "images/groundnut_oil_bottles.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-groundnut-1l",
    category: "oils-fats",
    name: "Anandhan Groundnut Oil Chekku (மரச்செக்கு கடலை எண்ணெய் - 1L)",
    price: 230,
    unit: "1 Litre",
    image: "images/groundnut_oil_bottles.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-groundnut-5l",
    category: "oils-fats",
    name: "Anandhan Groundnut Oil Chekku (மரச்செக்கு கடலை எண்ணெய் - 5L)",
    price: 1070,
    unit: "5 Litre (Can)",
    image: "images/groundnut_oil_bottles.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-gingelly-250ml",
    category: "oils-fats",
    name: "Anandhan Gingelly Oil Chekku (மரச்செக்கு நல்லெண்ணெய் - 250ml)",
    price: 80,
    unit: "250 ml",
    image: "images/oil_gingelly.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-gingelly-500ml",
    category: "oils-fats",
    name: "Anandhan Gingelly Oil Chekku (மரச்செக்கு நல்லெண்ணெய் - 500ml)",
    price: 160,
    unit: "500 ml",
    image: "images/oil_gingelly.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-bakthi-gingelly-200ml",
    category: "oils-fats",
    name: "Bakthi Gingelly Oil (பக்தி நல்லெண்ணெய் - 200ml)",
    price: 42,
    unit: "200 ml",
    image: "images/bhakthi_gingelly_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-bakthi-gingelly-500ml",
    category: "oils-fats",
    name: "Bakthi Gingelly Oil (பக்தி நல்லெண்ணெய் - 500ml)",
    price: 80,
    unit: "500 ml",
    image: "images/bhakthi_gingelly_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-bakthi-gingelly-1l",
    category: "oils-fats",
    name: "Bakthi Gingelly Oil (பக்தி நல்லெண்ணெய் - 1L)",
    price: 160,
    unit: "1 Litre",
    image: "images/bhakthi_gingelly_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-idhayam-gingelly-100ml",
    category: "oils-fats",
    name: "Idhayam Gingelly Oil (இதயம் நல்லெண்ணெய் - 100ml Bottle)",
    price: 48,
    unit: "100 ml",
    image: "images/idhayam_gingelly_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-idhayam-gingelly-200ml",
    category: "oils-fats",
    name: "Idhayam Gingelly Oil (இதயம் நல்லெண்ணெய் - 200ml Bottle)",
    price: 96,
    unit: "200 ml",
    image: "images/idhayam_gingelly_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-gingelly-100ml",
    category: "oils-fats",
    name: "Kalaimahal Gingelly Oil (கலைமகள் நல்லெண்ணெய் - 100ml)",
    price: 18,
    unit: "100 ml",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-gingelly-200ml",
    category: "oils-fats",
    name: "Kalaimahal Gingelly Oil (கலைமகள் நல்லெண்ணெய் - 200ml)",
    price: 35,
    unit: "200 ml",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-gingelly-500ml",
    category: "oils-fats",
    name: "Kalaimahal Gingelly Oil (கலைமகள் நல்லெண்ணெய் - 500ml)",
    price: 78,
    unit: "500 ml",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-gingelly-1l",
    category: "oils-fats",
    name: "Kalaimahal Gingelly Oil (கலைமகள் நல்லெண்ணெய் - 1L)",
    price: 153,
    unit: "1 Litre",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-gingelly-5l",
    category: "oils-fats",
    name: "Kalaimahal Gingelly Oil (கலைமகள் நல்லெண்ணெய் - 5L)",
    price: 1010,
    unit: "5 Litre",
    image: "images/kalaimahal_oil_5l.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-anandhan-castor-250ml",
    category: "oils-fats",
    name: "Anandhan Castor Oil (ஆனந்தன் விளக்கெண்ணெய் - 250ml)",
    price: 75,
    unit: "250 ml",
    image: "images/oil_castor.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-tvs-castor-100ml",
    category: "oils-fats",
    name: "TVS Castor Oil Packet (TVS விளக்கெண்ணெய் - 100ml)",
    price: 20,
    unit: "100 ml",
    image: "images/tvs_castor_oil.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-tvs-castor-200ml",
    category: "oils-fats",
    name: "TVS Castor Oil Packet (TVS விளக்கெண்ணெய் - 200ml)",
    price: 38,
    unit: "200 ml",
    image: "images/tvs_castor_oil.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-tvs-castor-500ml",
    category: "oils-fats",
    name: "TVS Castor Oil Packet (TVS விளக்கெண்ணெய் - 500ml)",
    price: 95,
    unit: "500 ml",
    image: "images/tvs_castor_oil.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-mustard-250ml",
    category: "oils-fats",
    name: "Pure Mustard Oil (கடுகு எண்ணெய் - 250ml)",
    price: 50,
    unit: "250 ml",
    image: "images/mustard_oil_bottle.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-mustard-500ml",
    category: "oils-fats",
    name: "Pure Mustard Oil (கடுகு எண்ணெய் - 500ml)",
    price: 100,
    unit: "500 ml",
    image: "images/mustard_oil_bottle.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-mustard-1l",
    category: "oils-fats",
    name: "Pure Mustard Oil (கடுகு எண்ணெய் - 1L)",
    price: 195,
    unit: "1 Litre",
    image: "images/mustard_oil_bottle.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-vvd-coconut-100ml",
    category: "oils-fats",
    name: "VVD Coconut Oil (VVD தேங்காய் எண்ணெய் - 100ml Bottle)",
    price: 40,
    unit: "100 ml",
    image: "images/vvd_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-parachute-coconut-50ml",
    category: "oils-fats",
    name: "Parachute Coconut Oil (பாரசூட் தேங்காய் எண்ணெய் - 50ml)",
    price: 10,
    unit: "50 ml",
    image: "images/parachute_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-parachute-coconut-100ml",
    category: "oils-fats",
    name: "Parachute Coconut Oil (பாரசூட் தேங்காய் எண்ணெய் - 100ml)",
    price: 20,
    unit: "100 ml",
    image: "images/parachute_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-parachute-coconut-200ml",
    category: "oils-fats",
    name: "Parachute Coconut Oil (பாரசூட் தேங்காய் எண்ணெய் - 200ml)",
    price: 40,
    unit: "200 ml",
    image: "images/parachute_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-jasmine-coconut",
    category: "oils-fats",
    name: "Jasmine Coconut Oil (ஜாஸ்மின் தேங்காய் எண்ணெய் - Bottle)",
    price: 20,
    unit: "1 Bottle",
    image: "images/oil_coconut.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-nsn-coconut-50ml",
    category: "oils-fats",
    name: "NSN Coconut Oil Packet (NSN தேங்காய் எண்ணெய் - 50ml)",
    price: 18,
    unit: "50 ml",
    image: "images/nsn_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-nsn-coconut-100ml",
    category: "oils-fats",
    name: "NSN Coconut Oil Packet (NSN தேங்காய் எண்ணெய் - 100ml)",
    price: 36,
    unit: "100 ml",
    image: "images/nsn_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-nsn-coconut-200ml",
    category: "oils-fats",
    name: "NSN Coconut Oil Packet (NSN தேங்காய் எண்ணெய் - 200ml)",
    price: 72,
    unit: "200 ml",
    image: "images/nsn_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-nsn-coconut-500ml",
    category: "oils-fats",
    name: "NSN Coconut Oil Packet (NSN தேங்காய் எண்ணெய் - 500ml)",
    price: 140,
    unit: "500 ml",
    image: "images/nsn_coconut_oil.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-groundnut-200ml",
    category: "oils-fats",
    name: "Kalaimahal Groundnut Oil (கலைமகள் கடலை எண்ணெய் - 200ml)",
    price: 35,
    unit: "200 ml",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-groundnut-500ml",
    category: "oils-fats",
    name: "Kalaimahal Groundnut Oil (கலைமகள் கடலை எண்ணெய் - 500ml)",
    price: 78,
    unit: "500 ml",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-groundnut-1l",
    category: "oils-fats",
    name: "Kalaimahal Groundnut Oil (கலைமகள் கடலை எண்ணெய் - 1L)",
    price: 153,
    unit: "1 Litre",
    image: "images/kalaimahal_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-kalaimahal-groundnut-5l",
    category: "oils-fats",
    name: "Kalaimahal Groundnut Oil (கலைமகள் கடலை எண்ணெய் - 5L)",
    price: 860,
    unit: "5 Litre",
    image: "images/kalaimahal_oil_5l.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-goldwinner-100ml",
    category: "oils-fats",
    name: "Gold Winner Sunflower Oil (கோல்ட் வின்னர் - 100ml)",
    price: 23,
    unit: "100 ml",
    image: "images/goldwinner_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-goldwinner-200ml",
    category: "oils-fats",
    name: "Gold Winner Sunflower Oil (கோல்ட் வின்னர் - 200ml)",
    price: 45,
    unit: "200 ml",
    image: "images/goldwinner_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-goldwinner-500ml",
    category: "oils-fats",
    name: "Gold Winner Sunflower Oil (கோல்ட் வின்னர் - 500ml)",
    price: 95,
    unit: "500 ml",
    image: "images/goldwinner_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-goldwinner-1l",
    category: "oils-fats",
    name: "Gold Winner Sunflower Oil (கோல்ட் வின்னர் - 1L)",
    price: 183,
    unit: "1 Litre",
    image: "images/goldwinner_oil_pouch.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-goldwinner-5l",
    category: "oils-fats",
    name: "Gold Winner Sunflower Oil (கோல்ட் வின்னர் - 5L)",
    price: 900,
    unit: "5 Litre (Can)",
    image: "images/goldwinner_oil_5l.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-mrgold-groundnut-1l",
    category: "oils-fats",
    name: "Mr Gold Groundnut Oil (மிஸ்டர் கோல்ட் கடலை எண்ணெய் - 1L)",
    price: 240,
    unit: "1 Litre",
    image: "images/groundnut_oil_bottles.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-mrgold-sunflower-1l",
    category: "oils-fats",
    name: "Mr Gold Refined Oil (மிஸ்டர் கோல்ட் எண்ணெய் - 1L)",
    price: 196,
    unit: "1 Litre",
    image: "images/oil_sunflower.jpg",
    icon: "fa-bottle-droplet"
  },
  {
    id: "oil-ruchi-palmolein-1l",
    category: "oils-fats",
    name: "Ruchi Palmolein Oil (ருசி பாமாயில் - 1L)",
    price: 151,
    unit: "1 Litre",
    image: "images/ruchi_palmolein.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "fat-supreme-vanaspati-50g",
    category: "oils-fats",
    name: "Supreme Vanaspati (சுப்ரீம் வனஸ்பதி - 50g)",
    price: 10,
    unit: "50 g",
    image: "images/supreme_vanaspati.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "fat-supreme-vanaspati-100g",
    category: "oils-fats",
    name: "Supreme Vanaspati (சுப்ரீம் வனஸ்பதி - 100g)",
    price: 19,
    unit: "100 g",
    image: "images/supreme_vanaspati.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "fat-supreme-vanaspati-200g",
    category: "oils-fats",
    name: "Supreme Vanaspati (சுப்ரீம் வனஸ்பதி - 200g)",
    price: 38,
    unit: "200 g",
    image: "images/supreme_vanaspati.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "fat-supreme-vanaspati-500g",
    category: "oils-fats",
    name: "Supreme Vanaspati (சுப்ரீம் வனஸ்பதி - 500g)",
    price: 75,
    unit: "500 g",
    image: "images/supreme_vanaspati.png",
    icon: "fa-bottle-droplet"
  },

  // ==========================================
  // 6. FLOURS & FLOUR PRODUCTS (மாவு வகைகள்)
  // ==========================================
  // SMB Brand
  {
    id: "flour-smb-maida-10kg",
    category: "flours",
    name: "SMB Maida (SMB மைதா மாவு - 10kg Bag)",
    price: 490,
    unit: "10 kg (Bag)",
    image: "images/smb_maida_10kg.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-smb-maida-1kg",
    category: "flours",
    name: "SMB Maida (SMB மைதா மாவு - 1kg)",
    price: 50,
    unit: "1 kg",
    image: "images/maida_flour.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-smb-maida-loose",
    category: "flours",
    name: "SMB Maida Loose (SMB மைதா மாவு - உதிரி / Loose)",
    price: 50,
    unit: "1 kg (Loose)",
    image: "images/maida_flour.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-smb-atta-1kg",
    category: "flours",
    name: "SMB Atta (SMB கோதுமை மாவு - 1kg)",
    price: 40,
    unit: "1 kg",
    image: "images/wheat_atta.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-smb-atta-5kg",
    category: "flours",
    name: "SMB Atta (SMB கோதுமை மாவு - 5kg Bag)",
    price: 200,
    unit: "5 kg (Bag)",
    image: "images/wheat_atta.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-smb-atta-10kg",
    category: "flours",
    name: "SMB Atta (SMB கோதுமை மாவு - 10kg Bag)",
    price: 390,
    unit: "10 kg (Bag)",
    image: "images/smb_atta_10kg.png",
    icon: "fa-mortar-pestle"
  },
  // Kalaimark Brand
  {
    id: "flour-kalaimark-gram-10kg",
    category: "flours",
    name: "Kalaimark Gram Flour / Besan (கலைமார்க் கடலை மாவு - 10kg Bag)",
    price: 550,
    unit: "10 kg (Bag)",
    image: "images/kalaimark_gram_flour_10kg.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-kalaimark-bonda-bajji-250g",
    category: "flours",
    name: "Kalaimark Bonda / Bajji Mix (கலைமார்க் போண்டா / பஜ்ஜி மாவு - 250g)",
    price: 35,
    unit: "250 g",
    image: "images/kalaimark_bonda_mix.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "flour-kalaimark-bonda-bajji-500g",
    category: "flours",
    name: "Kalaimark Bonda / Bajji Mix (கலைமார்க் போண்டா / பஜ்ஜி மாவு - 500g)",
    price: 70,
    unit: "500 g",
    image: "images/kalaimark_bonda_mix.png",
    icon: "fa-bowl-rice"
  },
  // Sakthi Brand
  {
    id: "flour-sakthi-bonda-bajji-250g",
    category: "flours",
    name: "Sakthi Bonda / Bajji Mix (சக்தி போண்டா / பஜ்ஜி மாவு - 250g)",
    price: 35,
    unit: "250 g",
    image: "images/sakthi_bonda_mix.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "flour-sakthi-bonda-bajji-500g",
    category: "flours",
    name: "Sakthi Bonda / Bajji Mix (சக்தி போண்டா / பஜ்ஜி மாவு - 500g)",
    price: 70,
    unit: "500 g",
    image: "images/sakthi_bonda_mix.png",
    icon: "fa-bowl-rice"
  },
  // Mayil Brand
  {
    id: "flour-mayil-samba-rava-250g",
    category: "flours",
    name: "Mayil Samba Rava (மயில் சம்பா ரவை - 250g)",
    price: 32,
    unit: "250 g",
    image: "images/mayil_samba_rava.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-mayil-samba-rava-500g",
    category: "flours",
    name: "Mayil Samba Rava (மயில் சம்பா ரவை - 500g)",
    price: 63,
    unit: "500 g",
    image: "images/mayil_samba_rava.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-mayil-gram-250g",
    category: "flours",
    name: "Mayil Gram Flour / Besan (மயில் கடலை மாவு - 250g)",
    price: 30,
    unit: "250 g",
    image: "images/mayil_gram_flour.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-mayil-gram-500g",
    category: "flours",
    name: "Mayil Gram Flour / Besan (மயில் கடலை மாவு - 500g)",
    price: 58,
    unit: "500 g",
    image: "images/mayil_gram_flour.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-mayil-atta-500g",
    category: "flours",
    name: "Mayil Mark Atta (மயில் கோதுமை மாவு - 500g)",
    price: 30,
    unit: "500 g",
    image: "images/mayil_atta.png",
    icon: "fa-mortar-pestle"
  },
  // Dhanush Brand
  {
    id: "flour-dhanush-white-rava-250g",
    category: "flours",
    name: "Dhanush White Rava / Sooji (தனுஷ் வெள்ளை ரவை - 250g)",
    price: 15,
    unit: "250 g",
    image: "images/dhanush_white_rava.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-dhanush-white-rava-500g",
    category: "flours",
    name: "Dhanush White Rava / Sooji (தனுஷ் வெள்ளை ரவை - 500g)",
    price: 30,
    unit: "500 g",
    image: "images/dhanush_white_rava.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-dhanush-ragi-500g",
    category: "flours",
    name: "Dhanush Ragi Flour (தனுஷ் கேழ்வரகு மாவு - 500g)",
    price: 33,
    unit: "500 g",
    image: "images/dhanush_ragi_flour.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-dhanush-rice-500g",
    category: "flours",
    name: "Dhanush Rice Flour (தனுஷ் அரிசி மாவு - 500g)",
    price: 33,
    unit: "500 g",
    image: "images/dhanush_rice_flour.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-dhanush-atta-500g",
    category: "flours",
    name: "Dhanush Mark Atta (தனுஷ் கோதுமை மாவு - 500g)",
    price: 30,
    unit: "500 g",
    image: "images/dhanush_atta.png",
    icon: "fa-mortar-pestle"
  },
  // National Brands (Aashirvaad & Fortune)
  {
    id: "flour-aashirvaad-atta-500g",
    category: "flours",
    name: "Aashirvaad Shudh Chakki Atta (ஆசிர்வாத் கோதுமை மாவு - 500g)",
    price: 35,
    unit: "500 g",
    image: "images/aashirvaad_atta_500g.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-aashirvaad-atta-1kg",
    category: "flours",
    name: "Aashirvaad Shudh Chakki Atta (ஆசிர்வாத் கோதுமை மாவு - 1kg)",
    price: 70,
    unit: "1 kg",
    image: "images/aashirvaad_atta_1kg.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-aashirvaad-atta-2kg",
    category: "flours",
    name: "Aashirvaad Shudh Chakki Atta (ஆசிர்வாத் கோதுமை மாவு - 2kg)",
    price: 114,
    unit: "2 kg",
    image: "images/aashirvaad_atta_2kg.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "flour-fortune-atta-1kg",
    category: "flours",
    name: "Fortune Chakki Fresh Atta (பார்ச்சூன் கோதுமை மாவு - 1kg)",
    price: 100,
    unit: "1 kg",
    image: "images/fortune_atta.png",
    icon: "fa-mortar-pestle"
  },

  // ==========================================
  // 7. SWEETENERS & BASICS (இனிப்புகள் & அடிப்படைகள்)
  // ==========================================
  // Bhagavathi Amman Country Sugar
  {
    id: "sweet-bhagavathi-country-sugar-250g",
    category: "sweeteners",
    name: "Bhagavathi Amman Country Sugar (பகவதி அம்மன் நாட்டுச் சர்க்கரை - 250g)",
    price: 22,
    unit: "250 g",
    image: "images/country_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bhagavathi-country-sugar-500g",
    category: "sweeteners",
    name: "Bhagavathi Amman Country Sugar (பகவதி அம்மன் நாட்டுச் சர்க்கரை - 500g)",
    price: 44,
    unit: "500 g",
    image: "images/country_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bhagavathi-country-sugar-1kg",
    category: "sweeteners",
    name: "Bhagavathi Amman Country Sugar (பகவதி அம்மன் நாட்டுச் சர்க்கரை - 1kg)",
    price: 88,
    unit: "1 kg",
    image: "images/country_sugar.png",
    icon: "fa-jar"
  },
  // Bannari Amman White Sugar
  {
    id: "sweet-bannari-sugar-250g",
    category: "sweeteners",
    name: "Bannari Amman White Sugar (பண்ணாரி அம்மன் வெள்ளை சர்க்கரை - 250g)",
    price: 17,
    unit: "250 g",
    image: "images/white_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bannari-sugar-500g",
    category: "sweeteners",
    name: "Bannari Amman White Sugar (பண்ணாரி அம்மன் வெள்ளை சர்க்கரை - 500g)",
    price: 34,
    unit: "500 g",
    image: "images/white_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bannari-sugar-1kg",
    category: "sweeteners",
    name: "Bannari Amman White Sugar (பண்ணாரி அம்மன் வெள்ளை சர்க்கரை - 1kg)",
    price: 66,
    unit: "1 kg",
    image: "images/white_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bannari-sugar-2kg",
    category: "sweeteners",
    name: "Bannari Amman White Sugar (பண்ணாரி அம்மன் வெள்ளை சர்க்கரை - 2kg)",
    price: 128,
    unit: "2 kg",
    image: "images/white_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bannari-sugar-5kg",
    category: "sweeteners",
    name: "Bannari Amman White Sugar (பண்ணாரி அம்மன் வெள்ளை சர்க்கரை - 5kg Bag)",
    price: 330,
    unit: "5 kg (Bag)",
    image: "images/white_sugar.png",
    icon: "fa-jar"
  },
  {
    id: "sweet-bannari-sugar-10kg",
    category: "sweeteners",
    name: "Bannari Amman White Sugar (பண்ணாரி அம்மன் வெள்ளை சர்க்கரை - 10kg Bag)",
    price: 650,
    unit: "10 kg (Bag)",
    image: "images/white_sugar.png",
    icon: "fa-jar"
  },
  // Mandai Vellam / Jaggery
  {
    id: "sweet-jaggery-mandai-250g",
    category: "sweeteners",
    name: "Mandai Vellam / Jaggery (மண்டை வெல்லம் - 250g)",
    price: 17,
    unit: "250 g",
    image: "images/mandai_vellam.jpg",
    icon: "fa-cubes"
  },
  {
    id: "sweet-jaggery-mandai-500g",
    category: "sweeteners",
    name: "Mandai Vellam / Jaggery (மண்டை வெல்லம் - 500g)",
    price: 33,
    unit: "500 g",
    image: "images/mandai_vellam.jpg",
    icon: "fa-cubes"
  },
  {
    id: "sweet-jaggery-mandai-1kg",
    category: "sweeteners",
    name: "Mandai Vellam / Jaggery (மண்டை வெல்லம் - 1kg)",
    price: 65,
    unit: "1 kg",
    image: "images/mandai_vellam.jpg",
    icon: "fa-cubes"
  },
  // Diamond Kalkandu
  {
    id: "sweet-diamond-kalkandu-100g",
    category: "sweeteners",
    name: "Diamond Kalkandu / Sugar Candy (டைமண்ட் கல்கண்டு - 100g)",
    price: 10,
    unit: "100 g",
    image: "images/diamond_kalkandu.png",
    icon: "fa-cubes"
  },
  {
    id: "sweet-diamond-kalkandu-200g",
    category: "sweeteners",
    name: "Diamond Kalkandu / Sugar Candy (டைமண்ட் கல்கண்டு - 200g)",
    price: 20,
    unit: "200 g",
    image: "images/diamond_kalkandu.png",
    icon: "fa-cubes"
  },
  {
    id: "sweet-diamond-kalkandu-1kg",
    category: "sweeteners",
    name: "Diamond Kalkandu / Sugar Candy (டைமண்ட் கல்கண்டு - 1kg Packet)",
    price: 110,
    unit: "1 kg (Packet)",
    image: "images/diamond_kalkandu.png",
    icon: "fa-cubes"
  },
  // Panangkarkandu
  {
    id: "sweet-panangkarkandu-100g",
    category: "sweeteners",
    name: "Palm Sugar Candy / Panangkarkandu (பனங்கற்கண்டு - 100g)",
    price: 15,
    unit: "100 g",
    image: "images/panangkarkandu.jpg",
    icon: "fa-cubes"
  },
  {
    id: "sweet-panangkarkandu-200g",
    category: "sweeteners",
    name: "Palm Sugar Candy / Panangkarkandu (பனங்கற்கண்டு - 200g)",
    price: 30,
    unit: "200 g",
    image: "images/panangkarkandu.jpg",
    icon: "fa-cubes"
  },
  {
    id: "sweet-panangkarkandu-500g",
    category: "sweeteners",
    name: "Palm Sugar Candy / Panangkarkandu (பனங்கற்கண்டு - 500g)",
    price: 70,
    unit: "500 g",
    image: "images/panangkarkandu.jpg",
    icon: "fa-cubes"
  },
  // Salts (உப்பு வகைகள்)
  {
    id: "salt-sakthi-crystal-1kg",
    category: "sweeteners",
    name: "Sakthi Crystal Salt (சக்தி கல் உப்பு - 1kg)",
    price: 8,
    unit: "1 kg",
    image: "images/sakthi_crystal_salt.jpg",
    icon: "fa-jar"
  },
  {
    id: "salt-tata-crystal-1kg",
    category: "sweeteners",
    name: "Tata Crystal Salt (டாடா கல் உப்பு - 1kg)",
    price: 20,
    unit: "1 kg",
    image: "images/tata_crystal_salt.png",
    icon: "fa-jar"
  },
  {
    id: "salt-tata-powder-500g",
    category: "sweeteners",
    name: "Tata Powder Salt (டாடா தூள் உப்பு - 500g)",
    price: 15,
    unit: "500 g",
    image: "images/tata_powder_salt.png",
    icon: "fa-jar"
  },
  {
    id: "salt-tata-powder-1kg",
    category: "sweeteners",
    name: "Tata Powder Salt (டாடா தூள் உப்பு - 1kg)",
    price: 30,
    unit: "1 kg",
    image: "images/tata_powder_salt.png",
    icon: "fa-jar"
  },
  {
    id: "salt-iodine-powder-1kg",
    category: "sweeteners",
    name: "Iodine Powder Salt (அயோடின் தூள் உப்பு - 1kg)",
    price: 10,
    unit: "1 kg",
    image: "images/iodine_powder_salt.jpg",
    icon: "fa-jar"
  },

  // ==========================================
  // 8. PULSES & DALS (பருப்பு & பயறு வகைகள் - 52 items)
  // ==========================================
  // 1. Toor Dal (துவரம் பருப்பு)
  {
    id: "dal-toor-1kg",
    category: "pulses-dals",
    name: "Toor Dal (துவரம் பருப்பு - 1kg)",
    price: 145,
    unit: "1 kg",
    image: "images/toor_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-toor-500g",
    category: "pulses-dals",
    name: "Toor Dal (துவரம் பருப்பு - 500g)",
    price: 73,
    unit: "500 g",
    image: "images/toor_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-toor-250g",
    category: "pulses-dals",
    name: "Toor Dal (துவரம் பருப்பு - 250g)",
    price: 37,
    unit: "250 g",
    image: "images/toor_dal.png",
    icon: "fa-seedling"
  },

  // 2. Urad Dal Whole / Gundu (உருட்டு உளுந்து)
  {
    id: "dal-urad-gundu-1kg",
    category: "pulses-dals",
    name: "Urad Dal Whole / Gundu (உருட்டு உளுந்து - 1kg)",
    price: 143,
    unit: "1 kg",
    image: "images/urad_dal_gundu.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-gundu-500g",
    category: "pulses-dals",
    name: "Urad Dal Whole / Gundu (உருட்டு உளுந்து - 500g)",
    price: 73,
    unit: "500 g",
    image: "images/urad_dal_gundu.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-gundu-250g",
    category: "pulses-dals",
    name: "Urad Dal Whole / Gundu (உருட்டு உளுந்து - 250g)",
    price: 37,
    unit: "250 g",
    image: "images/urad_dal_gundu.png",
    icon: "fa-seedling"
  },

  // 3. Urad Dal Split (உடைத்த உளுந்து)
  {
    id: "dal-urad-split-1kg",
    category: "pulses-dals",
    name: "Split Urad Dal (உடைத்த உளுந்து - 1kg)",
    price: 143,
    unit: "1 kg",
    image: "images/urad_dal_split.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-split-500g",
    category: "pulses-dals",
    name: "Split Urad Dal (உடைத்த உளுந்து - 500g)",
    price: 73,
    unit: "500 g",
    image: "images/urad_dal_split.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-split-250g",
    category: "pulses-dals",
    name: "Split Urad Dal (உடைத்த உளுந்து - 250g)",
    price: 37,
    unit: "250 g",
    image: "images/urad_dal_split.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-split-100g",
    category: "pulses-dals",
    name: "Split Urad Dal (உடைத்த உளுந்து - 100g)",
    price: 15,
    unit: "100 g",
    image: "images/urad_dal_split.jpg",
    icon: "fa-seedling"
  },

  // 4. Black Urad Dal (கருப்பு உளுந்து)
  {
    id: "dal-urad-black-1kg",
    category: "pulses-dals",
    name: "Black Urad Dal (கருப்பு உளுந்து - 1kg)",
    price: 130,
    unit: "1 kg",
    image: "images/urad_dal_black.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-black-500g",
    category: "pulses-dals",
    name: "Black Urad Dal (கருப்பு உளுந்து - 500g)",
    price: 65,
    unit: "500 g",
    image: "images/urad_dal_black.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-urad-black-250g",
    category: "pulses-dals",
    name: "Black Urad Dal (கருப்பு உளுந்து - 250g)",
    price: 33,
    unit: "250 g",
    image: "images/urad_dal_black.png",
    icon: "fa-seedling"
  },

  // 5. Moong Dal (பாசிப் பருப்பு)
  {
    id: "dal-moong-1kg",
    category: "pulses-dals",
    name: "Moong Dal (பாசிப் பருப்பு - 1kg)",
    price: 122,
    unit: "1 kg",
    image: "images/moong_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-moong-500g",
    category: "pulses-dals",
    name: "Moong Dal (பாசிப் பருப்பு - 500g)",
    price: 61,
    unit: "500 g",
    image: "images/moong_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-moong-250g",
    category: "pulses-dals",
    name: "Moong Dal (பாசிப் பருப்பு - 250g)",
    price: 32,
    unit: "250 g",
    image: "images/moong_dal.png",
    icon: "fa-seedling"
  },

  // 6. Chana Dal (கடலைப் பருப்பு)
  {
    id: "dal-chana-1kg",
    category: "pulses-dals",
    name: "Chana Dal (கடலைப் பருப்பு - 1kg)",
    price: 110,
    unit: "1 kg",
    image: "images/chana_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-chana-500g",
    category: "pulses-dals",
    name: "Chana Dal (கடலைப் பருப்பு - 500g)",
    price: 55,
    unit: "500 g",
    image: "images/chana_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-chana-250g",
    category: "pulses-dals",
    name: "Chana Dal (கடலைப் பருப்பு - 250g)",
    price: 28,
    unit: "250 g",
    image: "images/chana_dal.png",
    icon: "fa-seedling"
  },

  // 7. Fried Gram / Roasted Gram (பொட்டுக் கடலை)
  {
    id: "dal-fried-gram-1kg",
    category: "pulses-dals",
    name: "Fried Gram / Pottukadalai (பொட்டுக் கடலை - 1kg)",
    price: 110,
    unit: "1 kg",
    image: "images/fried_gram.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-fried-gram-500g",
    category: "pulses-dals",
    name: "Fried Gram / Pottukadalai (பொட்டுக் கடலை - 500g)",
    price: 52,
    unit: "500 g",
    image: "images/fried_gram.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-fried-gram-250g",
    category: "pulses-dals",
    name: "Fried Gram / Pottukadalai (பொட்டுக் கடலை - 250g)",
    price: 26,
    unit: "250 g",
    image: "images/fried_gram.png",
    icon: "fa-seedling"
  },

  // 8. Masoor Dal (மசூர் பருப்பு)
  {
    id: "dal-masoor-1kg",
    category: "pulses-dals",
    name: "Masoor Dal (மசூர் பருப்பு - 1kg)",
    price: 90,
    unit: "1 kg",
    image: "images/masoor_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-masoor-500g",
    category: "pulses-dals",
    name: "Masoor Dal (மசூர் பருப்பு - 500g)",
    price: 45,
    unit: "500 g",
    image: "images/masoor_dal.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-masoor-250g",
    category: "pulses-dals",
    name: "Masoor Dal (மசூர் பருப்பு - 250g)",
    price: 23,
    unit: "250 g",
    image: "images/masoor_dal.png",
    icon: "fa-seedling"
  },

  // 9. Green Gram / Whole Moong (பச்சைப் பயறு)
  {
    id: "dal-green-gram-1kg",
    category: "pulses-dals",
    name: "Whole Green Gram (பச்சைப் பயறு - 1kg)",
    price: 170,
    unit: "1 kg",
    image: "images/green_gram.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-green-gram-500g",
    category: "pulses-dals",
    name: "Whole Green Gram (பச்சைப் பயறு - 500g)",
    price: 85,
    unit: "500 g",
    image: "images/green_gram.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-green-gram-250g",
    category: "pulses-dals",
    name: "Whole Green Gram (பச்சைப் பயறு - 250g)",
    price: 44,
    unit: "250 g",
    image: "images/green_gram.jpg",
    icon: "fa-seedling"
  },

  // 10. Black Chana / Sundal (கருப்பு சுண்டல் கடலை)
  {
    id: "dal-black-chana-1kg",
    category: "pulses-dals",
    name: "Black Chana / Sundal (கருப்பு சுண்டல் கடலை - 1kg)",
    price: 110,
    unit: "1 kg",
    image: "images/black_chana.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-black-chana-500g",
    category: "pulses-dals",
    name: "Black Chana / Sundal (கருப்பு சுண்டல் கடலை - 500g)",
    price: 55,
    unit: "500 g",
    image: "images/black_chana.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-black-chana-250g",
    category: "pulses-dals",
    name: "Black Chana / Sundal (கருப்பு சுண்டல் கடலை - 250g)",
    price: 28,
    unit: "250 g",
    image: "images/black_chana.png",
    icon: "fa-seedling"
  },

  // 11. White Kabuli Chana (வெள்ளை சுண்டல் கடலை)
  {
    id: "dal-white-chana-1kg",
    category: "pulses-dals",
    name: "White Kabuli Chana (வெள்ளை சுண்டல் கடலை - 1kg)",
    price: 130,
    unit: "1 kg",
    image: "images/white_chana.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-white-chana-500g",
    category: "pulses-dals",
    name: "White Kabuli Chana (வெள்ளை சுண்டல் கடலை - 500g)",
    price: 61,
    unit: "500 g",
    image: "images/white_chana.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-white-chana-250g",
    category: "pulses-dals",
    name: "White Kabuli Chana (வெள்ளை சுண்டல் கடலை - 250g)",
    price: 32,
    unit: "250 g",
    image: "images/white_chana.png",
    icon: "fa-seedling"
  },

  // 12. Raw Peanuts / Groundnuts (வேர்க்கடலை / நிலக்கடலை)
  {
    id: "dal-peanuts-1kg",
    category: "pulses-dals",
    name: "Raw Peanuts / Groundnuts (வேர்க்கடலை - 1kg)",
    price: 180,
    unit: "1 kg",
    image: "images/peanuts.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-peanuts-500g",
    category: "pulses-dals",
    name: "Raw Peanuts / Groundnuts (வேர்க்கடலை - 500g)",
    price: 93,
    unit: "500 g",
    image: "images/peanuts.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-peanuts-250g",
    category: "pulses-dals",
    name: "Raw Peanuts / Groundnuts (வேர்க்கடலை - 250g)",
    price: 47,
    unit: "250 g",
    image: "images/peanuts.png",
    icon: "fa-seedling"
  },

  // 13. Cowpeas / Thattai Payaru (தட்டப் பயறு / காராமணி)
  {
    id: "dal-thattai-payaru-1kg",
    category: "pulses-dals",
    name: "Thattai Payaru / Karamani (தட்டப் பயறு - 1kg)",
    price: 130,
    unit: "1 kg",
    image: "images/thattai_payaru.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-thattai-payaru-500g",
    category: "pulses-dals",
    name: "Thattai Payaru / Karamani (தட்டப் பயறு - 500g)",
    price: 65,
    unit: "500 g",
    image: "images/thattai_payaru.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-thattai-payaru-250g",
    category: "pulses-dals",
    name: "Thattai Payaru / Karamani (தட்டப் பயறு - 250g)",
    price: 33,
    unit: "250 g",
    image: "images/thattai_payaru.png",
    icon: "fa-seedling"
  },

  // 14. Horse Gram / Kollu (கொள்ளு)
  {
    id: "dal-horse-gram-1kg",
    category: "pulses-dals",
    name: "Horse Gram / Kollu (கொள்ளு - 1kg)",
    price: 80,
    unit: "1 kg",
    image: "images/horse_gram.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-horse-gram-500g",
    category: "pulses-dals",
    name: "Horse Gram / Kollu (கொள்ளு - 500g)",
    price: 41,
    unit: "500 g",
    image: "images/horse_gram.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-horse-gram-250g",
    category: "pulses-dals",
    name: "Horse Gram / Kollu (கொள்ளு - 250g)",
    price: 20,
    unit: "250 g",
    image: "images/horse_gram.png",
    icon: "fa-seedling"
  },

  // 15. Dry Green Peas (பச்சை பட்டாணி)
  {
    id: "dal-green-peas-1kg",
    category: "pulses-dals",
    name: "Dry Green Peas (பச்சை பட்டாணி - 1kg)",
    price: 80,
    unit: "1 kg",
    image: "images/green_peas.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-green-peas-500g",
    category: "pulses-dals",
    name: "Dry Green Peas (பச்சை பட்டாணி - 500g)",
    price: 40,
    unit: "500 g",
    image: "images/green_peas.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-green-peas-250g",
    category: "pulses-dals",
    name: "Dry Green Peas (பச்சை பட்டாணி - 250g)",
    price: 20,
    unit: "250 g",
    image: "images/green_peas.png",
    icon: "fa-seedling"
  },

  // 16. Dry White Peas (வெள்ளை பட்டாணி)
  {
    id: "dal-white-peas-1kg",
    category: "pulses-dals",
    name: "Dry White Peas (வெள்ளை பட்டாணி - 1kg)",
    price: 100,
    unit: "1 kg",
    image: "images/white_peas.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-white-peas-500g",
    category: "pulses-dals",
    name: "Dry White Peas (வெள்ளை பட்டாணி - 500g)",
    price: 51,
    unit: "500 g",
    image: "images/white_peas.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-white-peas-250g",
    category: "pulses-dals",
    name: "Dry White Peas (வெள்ளை பட்டாணி - 250g)",
    price: 26,
    unit: "250 g",
    image: "images/white_peas.png",
    icon: "fa-seedling"
  },

  // 17. Rajma / Red Kidney Beans (ராஜ்மா)
  {
    id: "dal-rajma-1kg",
    category: "pulses-dals",
    name: "Rajma / Red Kidney Beans (ராஜ்மா - 1kg)",
    price: 125,
    unit: "1 kg",
    image: "images/rajma.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-rajma-500g",
    category: "pulses-dals",
    name: "Rajma / Red Kidney Beans (ராஜ்மா - 500g)",
    price: 65,
    unit: "500 g",
    image: "images/rajma.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-rajma-250g",
    category: "pulses-dals",
    name: "Rajma / Red Kidney Beans (ராஜ்மா - 250g)",
    price: 33,
    unit: "250 g",
    image: "images/rajma.png",
    icon: "fa-seedling"
  },

  // 18. Mochai / Field Beans (மொச்சை)
  {
    id: "dal-mochai-1kg",
    category: "pulses-dals",
    name: "Mochai / Field Beans (மொச்சை - 1kg)",
    price: 130,
    unit: "1 kg",
    image: "images/mochai.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-mochai-500g",
    category: "pulses-dals",
    name: "Mochai / Field Beans (மொச்சை - 500g)",
    price: 65,
    unit: "500 g",
    image: "images/mochai.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-mochai-250g",
    category: "pulses-dals",
    name: "Mochai / Field Beans (மொச்சை - 250g)",
    price: 33,
    unit: "250 g",
    image: "images/mochai.jpg",
    icon: "fa-seedling"
  },

  // 19. Soya Chunks - Small / Mini (மீல் மேக்கர் - சிறியது)
  {
    id: "dal-soya-chunks-small-1kg",
    category: "pulses-dals",
    name: "Soya Chunks Mini (மீல் மேக்கர் சிறியது - 1kg)",
    price: 115,
    unit: "1 kg",
    image: "images/soya_chunks_small.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-soya-chunks-small-500g",
    category: "pulses-dals",
    name: "Soya Chunks Mini (மீல் மேக்கர் சிறியது - 500g)",
    price: 58,
    unit: "500 g",
    image: "images/soya_chunks_small.jpg",
    icon: "fa-seedling"
  },
  {
    id: "dal-soya-chunks-small-250g",
    category: "pulses-dals",
    name: "Soya Chunks Mini (மீல் மேக்கர் சிறியது - 250g)",
    price: 30,
    unit: "250 g",
    image: "images/soya_chunks_small.jpg",
    icon: "fa-seedling"
  },

  // 20. Soya Chunks - Big / Regular (மீல் மேக்கர் - பெரியது)
  {
    id: "dal-soya-chunks-big-1kg",
    category: "pulses-dals",
    name: "Soya Chunks Big (மீல் மேக்கர் பெரியது - 1kg)",
    price: 115,
    unit: "1 kg",
    image: "images/soya_chunks_big.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-soya-chunks-big-500g",
    category: "pulses-dals",
    name: "Soya Chunks Big (மீல் மேக்கர் பெரியது - 500g)",
    price: 58,
    unit: "500 g",
    image: "images/soya_chunks_big.png",
    icon: "fa-seedling"
  },
  {
    id: "dal-soya-chunks-big-250g",
    category: "pulses-dals",
    name: "Soya Chunks Big (மீல் மேக்கர் பெரியது - 250g)",
    price: 30,
    unit: "250 g",
    image: "images/soya_chunks_big.png",
    icon: "fa-seedling"
  },

  // ==========================================
  // 9. SPICES & MASALAS (மசாலா பொருட்கள்)
  // ==========================================
  // 1. Mustard Seeds / Kadugu (கடுகு)
  {
    id: "spice-mustard-50g",
    category: "spices",
    name: "Mustard Seeds / Kadugu (கடுகு - 50g)",
    price: 8,
    unit: "50 g",
    image: "images/mustard_seeds.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-mustard-100g",
    category: "spices",
    name: "Mustard Seeds / Kadugu (கடுகு - 100g)",
    price: 15,
    unit: "100 g",
    image: "images/mustard_seeds.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-mustard-250g",
    category: "spices",
    name: "Mustard Seeds / Kadugu (கடுகு - 250g)",
    price: 35,
    unit: "250 g",
    image: "images/mustard_seeds.jpg",
    icon: "fa-pepper-hot"
  },

  // 2. Cumin Seeds / Jeeragam (சீரகம்)
  {
    id: "spice-cumin-50g",
    category: "spices",
    name: "Cumin Seeds / Jeeragam (சீரகம் - 50g)",
    price: 24,
    unit: "50 g",
    image: "images/cumin_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cumin-100g",
    category: "spices",
    name: "Cumin Seeds / Jeeragam (சீரகம் - 100g)",
    price: 47,
    unit: "100 g",
    image: "images/cumin_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cumin-250g",
    category: "spices",
    name: "Cumin Seeds / Jeeragam (சீரகம் - 250g)",
    price: 80,
    unit: "250 g",
    image: "images/cumin_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cumin-500g",
    category: "spices",
    name: "Cumin Seeds / Jeeragam (சீரகம் - 500g)",
    price: 160,
    unit: "500 g",
    image: "images/cumin_seeds.png",
    icon: "fa-pepper-hot"
  },

  // 3. Fennel Seeds / Sombu (சோம்பு)
  {
    id: "spice-fennel-50g",
    category: "spices",
    name: "Fennel Seeds / Sombu (சோம்பு - 50g)",
    price: 13,
    unit: "50 g",
    image: "images/fennel_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-fennel-100g",
    category: "spices",
    name: "Fennel Seeds / Sombu (சோம்பு - 100g)",
    price: 25,
    unit: "100 g",
    image: "images/fennel_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-fennel-250g",
    category: "spices",
    name: "Fennel Seeds / Sombu (சோம்பு - 250g)",
    price: 60,
    unit: "250 g",
    image: "images/fennel_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-fennel-500g",
    category: "spices",
    name: "Fennel Seeds / Sombu (சோம்பு - 500g)",
    price: 120,
    unit: "500 g",
    image: "images/fennel_seeds.png",
    icon: "fa-pepper-hot"
  },

  // 4. Black Pepper / Milagu (மிளகு)
  {
    id: "spice-pepper-25g",
    category: "spices",
    name: "Black Pepper / Milagu (மிளகு - 25g)",
    price: 23,
    unit: "25 g",
    image: "images/black_pepper.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-pepper-50g",
    category: "spices",
    name: "Black Pepper / Milagu (மிளகு - 50g)",
    price: 45,
    unit: "50 g",
    image: "images/black_pepper.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-pepper-100g",
    category: "spices",
    name: "Black Pepper / Milagu (மிளகு - 100g)",
    price: 85,
    unit: "100 g",
    image: "images/black_pepper.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-pepper-250g",
    category: "spices",
    name: "Black Pepper / Milagu (மிளகு - 250g)",
    price: 205,
    unit: "250 g",
    image: "images/black_pepper.jpg",
    icon: "fa-pepper-hot"
  },

  // 5. Fenugreek Seeds / Vendhayam (வெந்தயம்)
  {
    id: "spice-fenugreek-50g",
    category: "spices",
    name: "Fenugreek Seeds / Vendhayam (வெந்தயம் - 50g)",
    price: 8,
    unit: "50 g",
    image: "images/fenugreek_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-fenugreek-100g",
    category: "spices",
    name: "Fenugreek Seeds / Vendhayam (வெந்தயம் - 100g)",
    price: 15,
    unit: "100 g",
    image: "images/fenugreek_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-fenugreek-250g",
    category: "spices",
    name: "Fenugreek Seeds / Vendhayam (வெந்தயம் - 250g)",
    price: 27,
    unit: "250 g",
    image: "images/fenugreek_seeds.png",
    icon: "fa-pepper-hot"
  },

  // 6. Tamarind / Puli (புளி)
  {
    id: "spice-tamarind-100g",
    category: "spices",
    name: "Tamarind / Puli (புளி - 100g)",
    price: 18,
    unit: "100 g",
    image: "images/tamarind.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tamarind-250g",
    category: "spices",
    name: "Tamarind / Puli (புளி - 250g)",
    price: 42,
    unit: "250 g",
    image: "images/tamarind.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tamarind-500g",
    category: "spices",
    name: "Tamarind / Puli (புளி - 500g)",
    price: 81,
    unit: "500 g",
    image: "images/tamarind.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tamarind-1kg",
    category: "spices",
    name: "Tamarind / Puli (புளி - 1kg)",
    price: 165,
    unit: "1 kg",
    image: "images/tamarind.png",
    icon: "fa-pepper-hot"
  },

  // 7. Cardamom / Elachi (ஏலக்காய்)
  {
    id: "spice-cardamom-10g",
    category: "spices",
    name: "Green Cardamom / Elachi (ஏலக்காய் - 10g)",
    price: 42,
    unit: "10 g",
    image: "images/cardamom.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cardamom-20g",
    category: "spices",
    name: "Green Cardamom / Elachi (ஏலக்காய் - 20g)",
    price: 84,
    unit: "20 g",
    image: "images/cardamom.jpg",
    icon: "fa-pepper-hot"
  },

  // 8. Cinnamon / Pattai (பட்டை)
  {
    id: "spice-cinnamon-10g",
    category: "spices",
    name: "Cinnamon / Pattai (பட்டை - 10g)",
    price: 5,
    unit: "10 g",
    image: "images/cinnamon.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cinnamon-20g",
    category: "spices",
    name: "Cinnamon / Pattai (பட்டை - 20g)",
    price: 10,
    unit: "20 g",
    image: "images/cinnamon.png",
    icon: "fa-pepper-hot"
  },

  // 9. Cloves / Kirambu (கிராம்பு)
  {
    id: "spice-cloves-10g",
    category: "spices",
    name: "Cloves / Kirambu (கிராம்பு - 10g)",
    price: 15,
    unit: "10 g",
    image: "images/cloves.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cloves-20g",
    category: "spices",
    name: "Cloves / Kirambu (கிராம்பு - 20g)",
    price: 30,
    unit: "20 g",
    image: "images/cloves.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-cloves-50g",
    category: "spices",
    name: "Cloves / Kirambu (கிராம்பு - 50g)",
    price: 65,
    unit: "50 g",
    image: "images/cloves.jpg",
    icon: "fa-pepper-hot"
  },

  // 10. Bay Leaf / Biryani Leaf (பிரிஞ்சி இலை)
  {
    id: "spice-bay-leaf-40g",
    category: "spices",
    name: "Biryani Bay Leaf / Brinji Ilai (பிரிஞ்சி இலை - 40g)",
    price: 10,
    unit: "40 g",
    image: "images/bay_leaf.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-bay-leaf-80g",
    category: "spices",
    name: "Biryani Bay Leaf / Brinji Ilai (பிரிஞ்சி இலை - 80g)",
    price: 20,
    unit: "80 g",
    image: "images/bay_leaf.png",
    icon: "fa-pepper-hot"
  },

  // 11. Poppy Seeds / Kasakasa (கசகசா)
  {
    id: "spice-kasakasa-10g",
    category: "spices",
    name: "Poppy Seeds / Kasakasa (கசகசா - 10g)",
    price: 35,
    unit: "10 g",
    image: "images/kasakasa.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-kasakasa-20g",
    category: "spices",
    name: "Poppy Seeds / Kasakasa (கசகசா - 20g)",
    price: 70,
    unit: "20 g",
    image: "images/kasakasa.png",
    icon: "fa-pepper-hot"
  },

  // 12. Dry Red Chilli / Kaintha Milagai (காய்ந்த மிளகாய்)
  {
    id: "spice-dry-chilli-100g",
    category: "spices",
    name: "Dry Red Chilli (காய்ந்த மிளகாய் - 100g)",
    price: 25,
    unit: "100 g",
    image: "images/dry_red_chilli.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-dry-chilli-250g",
    category: "spices",
    name: "Dry Red Chilli (காய்ந்த மிளகாய் - 250g)",
    price: 85,
    unit: "250 g",
    image: "images/dry_red_chilli.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-dry-chilli-500g",
    category: "spices",
    name: "Dry Red Chilli (காய்ந்த மிளகாய் - 500g)",
    price: 170,
    unit: "500 g",
    image: "images/dry_red_chilli.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-dry-chilli-1kg",
    category: "spices",
    name: "Dry Red Chilli (காய்ந்த மிளகாய் - 1kg)",
    price: 340,
    unit: "1 kg",
    image: "images/dry_red_chilli.jpg",
    icon: "fa-pepper-hot"
  },

  // 13. Star Anise / Annasipoo (அன்னாசிப்பூ)
  {
    id: "spice-star-anise-10g",
    category: "spices",
    name: "Star Anise / Annasipoo (அன்னாசிப்பூ - 10g)",
    price: 10,
    unit: "10 g",
    image: "images/star_anise.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-star-anise-20g",
    category: "spices",
    name: "Star Anise / Annasipoo (அன்னாசிப்பூ - 20g)",
    price: 20,
    unit: "20 g",
    image: "images/star_anise.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-star-anise-50g",
    category: "spices",
    name: "Star Anise / Annasipoo (அன்னாசிப்பூ - 50g)",
    price: 60,
    unit: "50 g",
    image: "images/star_anise.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-star-anise-100g",
    category: "spices",
    name: "Star Anise / Annasipoo (அன்னாசிப்பூ - 100g)",
    price: 100,
    unit: "100 g",
    image: "images/star_anise.png",
    icon: "fa-pepper-hot"
  },

  // 14. Whole Coriander Seeds / Dhaniya (முழு கொத்தமல்லி / தனியா)
  {
    id: "spice-coriander-seeds-50g",
    category: "spices",
    name: "Whole Coriander Seeds / Dhaniya (முழு கொத்தமல்லி - 50g)",
    price: 10,
    unit: "50 g",
    image: "images/coriander_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-coriander-seeds-100g",
    category: "spices",
    name: "Whole Coriander Seeds / Dhaniya (முழு கொத்தமல்லி - 100g)",
    price: 20,
    unit: "100 g",
    image: "images/coriander_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-coriander-seeds-250g",
    category: "spices",
    name: "Whole Coriander Seeds / Dhaniya (முழு கொத்தமல்லி - 250g)",
    price: 50,
    unit: "250 g",
    image: "images/coriander_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-coriander-seeds-500g",
    category: "spices",
    name: "Whole Coriander Seeds / Dhaniya (முழு கொத்தமல்லி - 500g)",
    price: 100,
    unit: "500 g",
    image: "images/coriander_seeds.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-coriander-seeds-1kg",
    category: "spices",
    name: "Whole Coriander Seeds / Dhaniya (முழு கொத்தமல்லி - 1kg)",
    price: 200,
    unit: "1 kg",
    image: "images/coriander_seeds.png",
    icon: "fa-pepper-hot"
  },

  // 15. Stone Flower / Kalpasi (கல்பாசி)
  {
    id: "spice-kalpasi-10g",
    category: "spices",
    name: "Stone Flower / Kalpasi (கல்பாசி - 10g)",
    price: 10,
    unit: "10 g",
    image: "images/kalpasi.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-kalpasi-20g",
    category: "spices",
    name: "Stone Flower / Kalpasi (கல்பாசி - 20g)",
    price: 20,
    unit: "20 g",
    image: "images/kalpasi.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-kalpasi-50g",
    category: "spices",
    name: "Stone Flower / Kalpasi (கல்பாசி - 50g)",
    price: 50,
    unit: "50 g",
    image: "images/kalpasi.png",
    icon: "fa-pepper-hot"
  },

  // 16. Omam / Ajwain (ஓமம்)
  {
    id: "spice-omam-50g",
    category: "spices",
    name: "Omam / Ajwain (ஓமம் - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/omam.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-omam-100g",
    category: "spices",
    name: "Omam / Ajwain (ஓமம் - 100g)",
    price: 48,
    unit: "100 g",
    image: "images/omam.jpg",
    icon: "fa-pepper-hot"
  },

  // 17. Black Sesame Seeds / Karuppu Ellu (கருப்பு எள்ளு)
  {
    id: "spice-sesame-black-50g",
    category: "spices",
    name: "Black Sesame Seeds / Karuppu Ellu (கருப்பு எள்ளு - 50g)",
    price: 10,
    unit: "50 g",
    image: "images/sesame_black.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-sesame-black-100g",
    category: "spices",
    name: "Black Sesame Seeds / Karuppu Ellu (கருப்பு எள்ளு - 100g)",
    price: 20,
    unit: "100 g",
    image: "images/sesame_black.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-sesame-black-250g",
    category: "spices",
    name: "Black Sesame Seeds / Karuppu Ellu (கருப்பு எள்ளு - 250g)",
    price: 50,
    unit: "250 g",
    image: "images/sesame_black.jpg",
    icon: "fa-pepper-hot"
  },

  // 18. White Sesame Seeds / Vellai Ellu (வெள்ளை எள்ளு)
  {
    id: "spice-sesame-white-50g",
    category: "spices",
    name: "White Sesame Seeds / Vellai Ellu (வெள்ளை எள்ளு - 50g)",
    price: 10,
    unit: "50 g",
    image: "images/sesame_white.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-sesame-white-100g",
    category: "spices",
    name: "White Sesame Seeds / Vellai Ellu (வெள்ளை எள்ளு - 100g)",
    price: 20,
    unit: "100 g",
    image: "images/sesame_white.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-sesame-white-250g",
    category: "spices",
    name: "White Sesame Seeds / Vellai Ellu (வெள்ளை எள்ளு - 250g)",
    price: 50,
    unit: "250 g",
    image: "images/sesame_white.png",
    icon: "fa-pepper-hot"
  },

  // 19. Dry Ginger / Sukku (சுக்கு)
  {
    id: "spice-sukku-50g",
    category: "spices",
    name: "Dry Ginger / Sukku (சுக்கு - 50g)",
    price: 30,
    unit: "50 g",
    image: "images/sukku.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-sukku-100g",
    category: "spices",
    name: "Dry Ginger / Sukku (சுக்கு - 100g)",
    price: 60,
    unit: "100 g",
    image: "images/sukku.png",
    icon: "fa-pepper-hot"
  },

  // 20. Nutmeg / Jathikkai (ஜாதிக்காய்)
  {
    id: "spice-jathikkai-1pc",
    category: "spices",
    name: "Nutmeg / Jathikkai (ஜாதிக்காய் - 1 Piece)",
    price: 6,
    unit: "1 Piece",
    image: "images/jathikkai.png",
    icon: "fa-pepper-hot"
  },

  // 21. Mace / Jathipathiri (ஜாதிபத்திரி)
  {
    id: "spice-jathipathiri-10g",
    category: "spices",
    name: "Mace / Jathipathiri (ஜாதிபத்திரி - 10g)",
    price: 15,
    unit: "10 g",
    image: "images/jathipathiri.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-jathipathiri-20g",
    category: "spices",
    name: "Mace / Jathipathiri (ஜாதிபத்திரி - 20g)",
    price: 30,
    unit: "20 g",
    image: "images/jathipathiri.jpg",
    icon: "fa-pepper-hot"
  },

  // 22. TT Compounded Asafoetida (TT கட்டி பெருங்காயம்)
  {
    id: "spice-tt-perungayam-katti-25g",
    category: "spices",
    name: "TT Compounded Asafoetida (TT கட்டி பெருங்காயம் - 25g)",
    price: 20,
    unit: "25 g",
    image: "images/tt_katti_perungayam.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tt-perungayam-katti-50g",
    category: "spices",
    name: "TT Compounded Asafoetida (TT கட்டி பெருங்காயம் - 50g)",
    price: 65,
    unit: "50 g",
    image: "images/tt_katti_perungayam.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tt-perungayam-katti-100g",
    category: "spices",
    name: "TT Compounded Asafoetida (TT கட்டி பெருங்காயம் - 100g)",
    price: 130,
    unit: "100 g",
    image: "images/tt_katti_perungayam.png",
    icon: "fa-pepper-hot"
  },

  // 23. TT Powder Asafoetida (TT தூள் பெருங்காயம்)
  {
    id: "spice-tt-perungayam-powder-25g",
    category: "spices",
    name: "TT Powder Asafoetida (TT தூள் பெருங்காயம் - 25g)",
    price: 30,
    unit: "25 g",
    image: "images/tt_powder_perungayam.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tt-perungayam-powder-50g",
    category: "spices",
    name: "TT Powder Asafoetida (TT தூள் பெருங்காயம் - 50g)",
    price: 65,
    unit: "50 g",
    image: "images/tt_powder_perungayam.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-tt-perungayam-powder-100g",
    category: "spices",
    name: "TT Powder Asafoetida (TT தூள் பெருங்காயம் - 100g)",
    price: 130,
    unit: "100 g",
    image: "images/tt_powder_perungayam.png",
    icon: "fa-pepper-hot"
  },

  // 24. Kasuri Methi (கஸ்தூரி மேத்தி)
  {
    id: "spice-kasuri-methi-50g",
    category: "spices",
    name: "Kasuri Methi (கஸ்தூரி மேத்தி - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/kasuri_methi.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-kasuri-methi-100g",
    category: "spices",
    name: "Kasuri Methi (கஸ்தூரி மேத்தி - 100g)",
    price: 50,
    unit: "100 g",
    image: "images/kasuri_methi.jpg",
    icon: "fa-pepper-hot"
  },

  // 25. Biryani Whole Spice Combo Pack (பிரியாணி மசாலா மிக்ஸ் பாக்கெட்)
  {
    id: "spice-biryani-combo-5rs",
    category: "spices",
    name: "Biryani Whole Spice Combo Pack (பிரியாணி மசாலா மிக்ஸ் பாக்கெட் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet",
    image: "images/biryani_combo_pack.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-biryani-combo-10rs",
    category: "spices",
    name: "Biryani Whole Spice Combo Pack (பிரியாணி மசாலா மிக்ஸ் பாக்கெட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet",
    image: "images/biryani_combo_pack.jpg",
    icon: "fa-pepper-hot"
  },

  // 26. Whole Turmeric / Virali Manjal (விரலி மஞ்சள்)
  {
    id: "spice-virali-manjal-50g",
    category: "spices",
    name: "Whole Turmeric / Virali Manjal (விரலி மஞ்சள் - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/virali_manjal.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-virali-manjal-100g",
    category: "spices",
    name: "Whole Turmeric / Virali Manjal (விரலி மஞ்சள் - 100g)",
    price: 50,
    unit: "100 g",
    image: "images/virali_manjal.png",
    icon: "fa-pepper-hot"
  },

  // 27. Marathi Moggu / Kapok Buds (மராத்தி மொக்கு)
  {
    id: "spice-marathi-moggu-10g",
    category: "spices",
    name: "Marathi Moggu / Kapok Buds (மராத்தி மொக்கு - 10g)",
    price: 10,
    unit: "10 g",
    image: "images/marathi_moggu.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-marathi-moggu-20g",
    category: "spices",
    name: "Marathi Moggu / Kapok Buds (மராத்தி மொக்கு - 20g)",
    price: 20,
    unit: "20 g",
    image: "images/marathi_moggu.png",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-marathi-moggu-50g",
    category: "spices",
    name: "Marathi Moggu / Kapok Buds (மராத்தி மொக்கு - 50g)",
    price: 50,
    unit: "50 g",
    image: "images/marathi_moggu.png",
    icon: "fa-pepper-hot"
  },

  // 28. Country Garlic / Poondu (நாட்டு பூண்டு)
  {
    id: "spice-garlic-50g",
    category: "spices",
    name: "Country Garlic / Poondu (நாட்டு பூண்டு - 50g)",
    price: 18,
    unit: "50 g",
    image: "images/garlic.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-garlic-100g",
    category: "spices",
    name: "Country Garlic / Poondu (நாட்டு பூண்டு - 100g)",
    price: 35,
    unit: "100 g",
    image: "images/garlic.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-garlic-250g",
    category: "spices",
    name: "Country Garlic / Poondu (நாட்டு பூண்டு - 250g)",
    price: 85,
    unit: "250 g",
    image: "images/garlic.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-garlic-500g",
    category: "spices",
    name: "Country Garlic / Poondu (நாட்டு பூண்டு - 500g)",
    price: 170,
    unit: "500 g",
    image: "images/garlic.jpg",
    icon: "fa-pepper-hot"
  },
  {
    id: "spice-garlic-1kg",
    category: "spices",
    name: "Country Garlic / Poondu (நாட்டு பூண்டு - 1kg)",
    price: 340,
    unit: "1 kg",
    image: "images/garlic.jpg",
    icon: "fa-pepper-hot"
  },

  // ==========================================
  // 10. MASALA POWDERS (மசாலா தூள் வகைகள்)
  // ==========================================
  // 1. Sakthi Turmeric Powder (சக்தி மஞ்சள் தூள்)
  {
    id: "masala-sakthi-turmeric-20g",
    category: "masalas",
    name: "Sakthi Turmeric Powder (சக்தி மஞ்சள் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_turmeric_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-turmeric-50g",
    category: "masalas",
    name: "Sakthi Turmeric Powder (சக்தி மஞ்சள் தூள் - 50g)",
    price: 14,
    unit: "50 g",
    image: "images/sakthi_turmeric_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-turmeric-100g",
    category: "masalas",
    name: "Sakthi Turmeric Powder (சக்தி மஞ்சள் தூள் - 100g)",
    price: 28,
    unit: "100 g",
    image: "images/sakthi_turmeric_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-turmeric-200g",
    category: "masalas",
    name: "Sakthi Turmeric Powder (சக்தி மஞ்சள் தூள் - 200g)",
    price: 55,
    unit: "200 g",
    image: "images/sakthi_turmeric_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-turmeric-500g",
    category: "masalas",
    name: "Sakthi Turmeric Powder (சக்தி மஞ்சள் தூள் - 500g)",
    price: 140,
    unit: "500 g",
    image: "images/sakthi_turmeric_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 2. Sakthi Chilli Powder (சக்தி தனி மிளகாய் தூள்)
  {
    id: "masala-sakthi-chilli-20g",
    category: "masalas",
    name: "Sakthi Chilli Powder (சக்தி தனி மிளகாய் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chilli-50g",
    category: "masalas",
    name: "Sakthi Chilli Powder (சக்தி தனி மிளகாய் தூள் - 50g)",
    price: 16,
    unit: "50 g",
    image: "images/sakthi_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chilli-100g",
    category: "masalas",
    name: "Sakthi Chilli Powder (சக்தி தனி மிளகாய் தூள் - 100g)",
    price: 32,
    unit: "100 g",
    image: "images/sakthi_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chilli-200g",
    category: "masalas",
    name: "Sakthi Chilli Powder (சக்தி தனி மிளகாய் தூள் - 200g)",
    price: 63,
    unit: "200 g",
    image: "images/sakthi_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chilli-500g",
    category: "masalas",
    name: "Sakthi Chilli Powder (சக்தி தனி மிளகாய் தூள் - 500g)",
    price: 160,
    unit: "500 g",
    image: "images/sakthi_chilli_powder_500g.png",
    icon: "fa-mortar-pestle"
  },

  // 3. Aachi Kashmiri Chilli Powder (ஆச்சி காஷ்மீரி மிளகாய் தூள்)
  {
    id: "masala-aachi-kashmiri-chilli-50g",
    category: "masalas",
    name: "Aachi Kashmiri Chilli Powder (ஆச்சி காஷ்மீரி மிளகாய் தூள் - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/aachi_kashmiri_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-aachi-kashmiri-chilli-100g",
    category: "masalas",
    name: "Aachi Kashmiri Chilli Powder (ஆச்சி காஷ்மீரி மிளகாய் தூள் - 100g)",
    price: 50,
    unit: "100 g",
    image: "images/aachi_kashmiri_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 4. Sakthi Coriander Powder / Malli Thool (சக்தி மல்லி தூள்)
  {
    id: "masala-sakthi-coriander-20g",
    category: "masalas",
    name: "Sakthi Coriander Powder (சக்தி மல்லி தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_coriander_powder.jpg",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-coriander-50g",
    category: "masalas",
    name: "Sakthi Coriander Powder (சக்தி மல்லி தூள் - 50g)",
    price: 13,
    unit: "50 g",
    image: "images/sakthi_coriander_powder.jpg",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-coriander-100g",
    category: "masalas",
    name: "Sakthi Coriander Powder (சக்தி மல்லி தூள் - 100g)",
    price: 25,
    unit: "100 g",
    image: "images/sakthi_coriander_powder.jpg",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-coriander-200g",
    category: "masalas",
    name: "Sakthi Coriander Powder (சக்தி மல்லி தூள் - 200g)",
    price: 50,
    unit: "200 g",
    image: "images/sakthi_coriander_powder.jpg",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-coriander-500g",
    category: "masalas",
    name: "Sakthi Coriander Powder (சக்தி மல்லி தூள் - 500g)",
    price: 125,
    unit: "500 g",
    image: "images/sakthi_coriander_powder.jpg",
    icon: "fa-mortar-pestle"
  },

  // 5. Sakthi Cumin Powder / Jeeraga Thool (சக்தி சீரகத் தூள்)
  {
    id: "masala-sakthi-cumin-20g",
    category: "masalas",
    name: "Sakthi Cumin Powder (சக்தி சீரகத் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_cumin_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-cumin-50g",
    category: "masalas",
    name: "Sakthi Cumin Powder (சக்தி சீரகத் தூள் - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/sakthi_cumin_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-cumin-100g",
    category: "masalas",
    name: "Sakthi Cumin Powder (சக்தி சீரகத் தூள் - 100g)",
    price: 50,
    unit: "100 g",
    image: "images/sakthi_cumin_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 6. Black Pepper Powder / Milagu Thool (மிளகுத் தூள்)
  {
    id: "masala-sakthi-pepper-20g",
    category: "masalas",
    name: "Sakthi Black Pepper Powder (சக்தி மிளகுத் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_pepper_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-pepper-50g",
    category: "masalas",
    name: "Sakthi Black Pepper Powder (சக்தி மிளகுத் தூள் - 50g)",
    price: 45,
    unit: "50 g",
    image: "images/sakthi_pepper_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-pepper-100g",
    category: "masalas",
    name: "Sakthi Black Pepper Powder (சக்தி மிளகுத் தூள் - 100g)",
    price: 90,
    unit: "100 g",
    image: "images/sakthi_pepper_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-aachi-pepper-20g",
    category: "masalas",
    name: "Aachi Black Pepper Powder (ஆச்சி மிளகுத் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_pepper_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 7. Sakthi Sambar Powder (சக்தி சாம்பார் பொடி)
  {
    id: "masala-sakthi-sambar-20g",
    category: "masalas",
    name: "Sakthi Sambar Powder (சக்தி சாம்பார் பொடி - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_sambar_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-sambar-50g",
    category: "masalas",
    name: "Sakthi Sambar Powder (சக்தி சாம்பார் பொடி - 50g)",
    price: 19,
    unit: "50 g",
    image: "images/sakthi_sambar_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-sambar-100g",
    category: "masalas",
    name: "Sakthi Sambar Powder (சக்தி சாம்பார் பொடி - 100g)",
    price: 38,
    unit: "100 g",
    image: "images/sakthi_sambar_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-sambar-200g",
    category: "masalas",
    name: "Sakthi Sambar Powder (சக்தி சாம்பார் பொடி - 200g)",
    price: 75,
    unit: "200 g",
    image: "images/sakthi_sambar_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-sambar-500g",
    category: "masalas",
    name: "Sakthi Sambar Powder (சக்தி சாம்பார் பொடி - 500g)",
    price: 185,
    unit: "500 g",
    image: "images/sakthi_sambar_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 8. Sakthi Rasam Powder (சக்தி ரசம் பொடி)
  {
    id: "masala-sakthi-rasam-20g",
    category: "masalas",
    name: "Sakthi Rasam Powder (சக்தி ரசம் பொடி - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_rasam_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-rasam-50g",
    category: "masalas",
    name: "Sakthi Rasam Powder (சக்தி ரசம் பொடி - 50g)",
    price: 27,
    unit: "50 g",
    image: "images/sakthi_rasam_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-rasam-100g",
    category: "masalas",
    name: "Sakthi Rasam Powder (சக்தி ரசம் பொடி - 100g)",
    price: 53,
    unit: "100 g",
    image: "images/sakthi_rasam_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 9. Aachi Kuzhambu Chilli Powder (ஆச்சி குழம்பு மிளகாய் தூள்)
  {
    id: "masala-aachi-kuzhambu-chilli-20g",
    category: "masalas",
    name: "Aachi Kuzhambu Chilli Powder (ஆச்சி குழம்பு மிளகாய் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/aachi_kuzhambu_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-aachi-kuzhambu-chilli-50g",
    category: "masalas",
    name: "Aachi Kuzhambu Chilli Powder (ஆச்சி குழம்பு மிளகாய் தூள் - 50g)",
    price: 19,
    unit: "50 g",
    image: "images/aachi_kuzhambu_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-aachi-kuzhambu-chilli-100g",
    category: "masalas",
    name: "Aachi Kuzhambu Chilli Powder (ஆச்சி குழம்பு மிளகாய் தூள் - 100g)",
    price: 38,
    unit: "100 g",
    image: "images/aachi_kuzhambu_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-aachi-kuzhambu-chilli-200g",
    category: "masalas",
    name: "Aachi Kuzhambu Chilli Powder (ஆச்சி குழம்பு மிளகாய் தூள் - 200g)",
    price: 75,
    unit: "200 g",
    image: "images/aachi_kuzhambu_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-aachi-kuzhambu-chilli-500g",
    category: "masalas",
    name: "Aachi Kuzhambu Chilli Powder (ஆச்சி குழம்பு மிளகாய் தூள் - 500g)",
    price: 185,
    unit: "500 g",
    image: "images/aachi_kuzhambu_chilli_powder.png",
    icon: "fa-mortar-pestle"
  },

  // 10. Sakthi Garam Masala (சக்தி கரம் மசாலா)
  {
    id: "masala-sakthi-garam-20g",
    category: "masalas",
    name: "Sakthi Garam Masala (சக்தி கரம் மசாலா - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_garam_masala.jpg",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-garam-50g",
    category: "masalas",
    name: "Sakthi Garam Masala (சக்தி கரம் மசாலா - 50g)",
    price: 26,
    unit: "50 g",
    image: "images/sakthi_garam_masala.jpg",
    icon: "fa-mortar-pestle"
  },

  // 11. Sakthi Chicken Masala (சக்தி சிக்கன் மசாலா)
  {
    id: "masala-sakthi-chicken-20g",
    category: "masalas",
    name: "Sakthi Chicken Masala (சக்தி சிக்கன் மசாலா - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_chicken_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chicken-50g",
    category: "masalas",
    name: "Sakthi Chicken Masala (சக்தி சிக்கன் மசாலா - 50g)",
    price: 19,
    unit: "50 g",
    image: "images/sakthi_chicken_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chicken-100g",
    category: "masalas",
    name: "Sakthi Chicken Masala (சக்தி சிக்கன் மசாலா - 100g)",
    price: 38,
    unit: "100 g",
    image: "images/sakthi_chicken_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chicken-200g",
    category: "masalas",
    name: "Sakthi Chicken Masala (சக்தி சிக்கன் மசாலா - 200g)",
    price: 75,
    unit: "200 g",
    image: "images/sakthi_chicken_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-chicken-500g",
    category: "masalas",
    name: "Sakthi Chicken Masala (சக்தி சிக்கன் மசாலா - 500g)",
    price: 190,
    unit: "500 g",
    image: "images/sakthi_chicken_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 12. Sakthi Mutton Masala (சக்தி மட்டன் மசாலா)
  {
    id: "masala-sakthi-mutton-20g",
    category: "masalas",
    name: "Sakthi Mutton Masala (சக்தி மட்டன் மசாலா - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_mutton_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-mutton-50g",
    category: "masalas",
    name: "Sakthi Mutton Masala (சக்தி மட்டன் மசாலா - 50g)",
    price: 23,
    unit: "50 g",
    image: "images/sakthi_mutton_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-mutton-100g",
    category: "masalas",
    name: "Sakthi Mutton Masala (சக்தி மட்டன் மசாலா - 100g)",
    price: 45,
    unit: "100 g",
    image: "images/sakthi_mutton_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 13. JP Fish Fry / Curry Masala (JP மீன் வறுவல் / குழம்பு மசாலா)
  {
    id: "masala-jp-fish-20g",
    category: "masalas",
    name: "JP Fish Fry / Curry Masala (JP மீன் வறுவல் / குழம்பு மசாலா - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/jp_fish_fry_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-jp-fish-50g",
    category: "masalas",
    name: "JP Fish Fry / Curry Masala (JP மீன் வறுவல் / குழம்பு மசாலா - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/jp_fish_fry_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 14. Sakthi Biryani Masala (சக்தி பிரியாணி மசாலா)
  {
    id: "masala-sakthi-biryani-20g",
    category: "masalas",
    name: "Sakthi Biryani Masala (சக்தி பிரியாணி மசாலா - 20g / ₹12 Pack)",
    price: 12,
    unit: "20 g",
    image: "images/sakthi_biryani_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-biryani-50g",
    category: "masalas",
    name: "Sakthi Biryani Masala (சக்தி பிரியாணி மசாலா - 50g)",
    price: 28,
    unit: "50 g",
    image: "images/sakthi_biryani_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 15. Sakthi Egg Curry Masala (சக்தி முட்டை மசாலா)
  {
    id: "masala-sakthi-egg-20g",
    category: "masalas",
    name: "Sakthi Egg Curry Masala (சக்தி முட்டை மசாலா - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_egg_masala.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-egg-50g",
    category: "masalas",
    name: "Sakthi Egg Curry Masala (சக்தி முட்டை மசாலா - 50g)",
    price: 28,
    unit: "50 g",
    image: "images/sakthi_egg_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 16. Sakthi Idli Chutney Podi (சக்தி இட்லி மிளகாய் பொடி)
  {
    id: "masala-sakthi-idli-podi-50g",
    category: "masalas",
    name: "Sakthi Idli Chutney Podi (சக்தி இட்லி மிளகாய் பொடி - 50g)",
    price: 15,
    unit: "50 g",
    image: "images/sakthi_idli_podi.png",
    icon: "fa-mortar-pestle"
  },

  // 17. Sakthi Kari Masal Powder (சக்தி கறி மசால் தூள்)
  {
    id: "masala-sakthi-kari-masal-20g",
    category: "masalas",
    name: "Sakthi Kari Masal Powder (சக்தி கறி மசால் தூள் - 20g / ₹10 Pack)",
    price: 10,
    unit: "20 g",
    image: "images/sakthi_kari_masal.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-kari-masal-50g",
    category: "masalas",
    name: "Sakthi Kari Masal Powder (சக்தி கறி மசால் தூள் - 50g)",
    price: 23,
    unit: "50 g",
    image: "images/sakthi_kari_masal.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "masala-sakthi-kari-masal-100g",
    category: "masalas",
    name: "Sakthi Kari Masal Powder (சக்தி கறி மசால் தூள் - 100g)",
    price: 45,
    unit: "100 g",
    image: "images/sakthi_kari_masal.png",
    icon: "fa-mortar-pestle"
  },

  // 18. JP Chilli Chicken Masala (JP சில்லி சிக்கன் மசாலா)
  {
    id: "masala-jp-chilli-chicken-50g",
    category: "masalas",
    name: "JP Chilli Chicken Masala (JP சில்லி சிக்கன் மசாலா - 50g)",
    price: 25,
    unit: "50 g",
    image: "images/jp_chilli_chicken.png",
    icon: "fa-mortar-pestle"
  },

  // 19. JP Chilli Gobi / Mushroom Masala (JP சில்லி கோபி மசாலா)
  {
    id: "masala-jp-chilli-gobi-50g",
    category: "masalas",
    name: "JP Chilli Gobi / Mushroom Masala (JP சில்லி கோபி மசாலா - 50g)",
    price: 20,
    unit: "50 g",
    image: "images/jp_chilli_gobi.png",
    icon: "fa-mortar-pestle"
  },

  // 20. Aachi Iducha Sambar Powder (ஆச்சி இடிச்ச சாம்பார் பொடி)
  {
    id: "masala-aachi-iducha-sambar-50g",
    category: "masalas",
    name: "Aachi Iducha Sambar Powder (ஆச்சி இடிச்ச சாம்பார் பொடி - 50g)",
    price: 19,
    unit: "50 g",
    image: "images/aachi_iducha_sambar.png",
    icon: "fa-mortar-pestle"
  },

  // 21. Aachi Hotel Sambar Powder (ஆச்சி ஹோட்டல் சாம்பார் பொடி)
  {
    id: "masala-aachi-hotel-sambar-50g",
    category: "masalas",
    name: "Aachi Hotel Sambar Powder (ஆச்சி ஹோட்டல் சாம்பார் பொடி - 50g)",
    price: 20,
    unit: "50 g",
    image: "images/aachi_hotel_sambar.png",
    icon: "fa-mortar-pestle"
  },

  // 22. Aachi Chicken Masala (ஆச்சி சிக்கன் மசாலா)
  {
    id: "masala-aachi-chicken-50g",
    category: "masalas",
    name: "Aachi Chicken Masala (ஆச்சி சிக்கன் மசாலா - 50g)",
    price: 20,
    unit: "50 g",
    image: "images/aachi_chicken_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 23. Ginger Garlic Paste (இஞ்சி பூண்டு பேஸ்ட்)
  {
    id: "masala-ginger-garlic-paste-4rs",
    category: "masalas",
    name: "Ginger Garlic Paste (இஞ்சி பூண்டு பேஸ்ட் - ₹4 Pack)",
    price: 4,
    unit: "1 Packet",
    image: "images/ginger_garlic_paste.png",
    icon: "fa-mortar-pestle"
  },

  // 24. Aachi Tomato Rice Powder (ஆச்சி தக்காளி சாதம் பொடி)
  {
    id: "masala-aachi-tomato-rice-50g",
    category: "masalas",
    name: "Aachi Tomato Rice Powder (ஆச்சி தக்காளி சாதம் பொடி - 50g)",
    price: 20,
    unit: "50 g",
    image: "images/aachi_tomato_rice_powder.jpg",
    icon: "fa-mortar-pestle"
  },

  // 25. Sakthi Lemon Rice Powder (சக்தி எலுமிச்சை சாதம் பொடி)
  {
    id: "masala-sakthi-lemon-rice-50g",
    category: "masalas",
    name: "Sakthi Lemon Rice Powder (சக்தி எலுமிச்சை சாதம் பொடி - 50g)",
    price: 22,
    unit: "50 g",
    image: "images/sakthi_lemon_rice.png",
    icon: "fa-mortar-pestle"
  },

  // 26. Sakthi Puliyotharai Powder (சக்தி புளியோதரை பொடி)
  {
    id: "masala-sakthi-puliyotharai-50g",
    category: "masalas",
    name: "Sakthi Puliyotharai Powder (சக்தி புளியோதரை பொடி - 50g)",
    price: 22,
    unit: "50 g",
    image: "images/sakthi_puliyotharai.png",
    icon: "fa-mortar-pestle"
  },

  // 27. Sakthi Chicken 65 / Kabab Masala (சக்தி சிக்கன் 65 / கபாப் மசாலா)
  {
    id: "masala-sakthi-chicken-65-50g",
    category: "masalas",
    name: "Sakthi Chicken 65 / Kabab Masala (சக்தி சிக்கன் 65 மசாலா - 50g)",
    price: 22,
    unit: "50 g",
    image: "images/sakthi_chicken_65.png",
    icon: "fa-mortar-pestle"
  },

  // 28. Sakthi Vatha Puli Kuzhambu Masala (சக்தி வத்த புளிக் குழம்பு மசாலா)
  {
    id: "masala-sakthi-vatha-kuzhambu-50g",
    category: "masalas",
    name: "Sakthi Vatha Puli Kuzhambu Masala (சக்தி வத்த புளிக் குழம்பு மசாலா - 50g)",
    price: 20,
    unit: "50 g",
    image: "images/sakthi_vatha_kuzhambu.png",
    icon: "fa-mortar-pestle"
  },

  // 29. JP Fish Curry Masala (JP மீன் குழம்பு மசாலா)
  {
    id: "masala-jp-fish-curry-50g",
    category: "masalas",
    name: "JP Fish Curry Masala (JP மீன் குழம்பு மசாலா - 50g)",
    price: 17,
    unit: "50 g",
    image: "images/jp_fish_curry_masala.png",
    icon: "fa-mortar-pestle"
  },

  // 30. Cooking Soda / Appa Soda (சமையல் சோடா / ஆப்ப சோடா)
  {
    id: "masala-cooking-soda-5rs",
    category: "masalas",
    name: "Cooking Soda / Appa Soda (சமையல் சோடா / ஆப்ப சோடா - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/cooking_soda.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "masala-cooking-soda-10rs",
    category: "masalas",
    name: "Cooking Soda / Appa Soda (சமையல் சோடா / ஆப்ப சோடா - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/cooking_soda.png",
    icon: "fa-bowl-rice"
  },

  // 31. Food Color Powders / Kesari Powder (கேசரி பவுடர் / கலர் பொடி)
  {
    id: "masala-food-color-red",
    category: "masalas",
    name: "Red Food Color Powder / Kesari Powder (சிவப்பு கேசரி பவுடர் - ₹2 Pack)",
    price: 2,
    unit: "1 Packet (₹2)",
    image: "images/food_color_powder.png",
    icon: "fa-fill-drip"
  },
  {
    id: "masala-food-color-yellow",
    category: "masalas",
    name: "Yellow Food Color Powder / Kesari Powder (மஞ்சள் கேசரி பவுடர் - ₹2 Pack)",
    price: 2,
    unit: "1 Packet (₹2)",
    image: "images/food_color_powder.png",
    icon: "fa-fill-drip"
  },

  // ==========================================
  // 11. BEVERAGES (பானங்கள் & தேயிலை/காபி - 42 SKUs)
  // ==========================================

  // 1. 3 Roses Tea (3 ரோஸஸ் டீ தூள்)
  {
    id: "bev-3roses-tea-2rs",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-tea-5rs",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - ₹5 Sachet)",
    price: 5,
    unit: "1 Sachet (₹5)",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-tea-20rs",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - ₹20 Sachet)",
    price: 20,
    unit: "1 Sachet (₹20)",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-tea-50g",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - 50g)",
    price: 43,
    unit: "50 g",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-tea-100g",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - 100g)",
    price: 90,
    unit: "100 g",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-tea-250g",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - 250g)",
    price: 225,
    unit: "250 g",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-tea-500g",
    category: "beverages",
    name: "3 Roses Tea (3 ரோஸஸ் டீ தூள் - 500g)",
    price: 339,
    unit: "500 g",
    image: "images/3roses_tea.png",
    icon: "fa-mug-hot"
  },

  // 2. 3 Roses Natural Care Tea (3 ரோஸஸ் நேச்சுரல் கேர் டீ)
  {
    id: "bev-3roses-natural-care-100g",
    category: "beverages",
    name: "3 Roses Natural Care Tea (3 ரோஸஸ் நேச்சுரல் கேர் டீ - 100g)",
    price: 98,
    unit: "100 g",
    image: "images/3roses_natural_care.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-3roses-natural-care-250g",
    category: "beverages",
    name: "3 Roses Natural Care Tea (3 ரோஸஸ் நேச்சுரல் கேர் டீ - 250g)",
    price: 240,
    unit: "250 g",
    image: "images/3roses_natural_care.png",
    icon: "fa-mug-hot"
  },

  // 3. AVT Premium Tea (AVT பிரீமியம் டீ தூள்)
  {
    id: "bev-avt-tea-10rs",
    category: "beverages",
    name: "AVT Premium Tea (AVT பிரீமியம் டீ தூள் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/avt_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-avt-tea-20rs",
    category: "beverages",
    name: "AVT Premium Tea (AVT பிரீமியம் டீ தூள் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/avt_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-avt-tea-100g",
    category: "beverages",
    name: "AVT Premium Tea (AVT பிரீமியம் டீ தூள் - 100g)",
    price: 40,
    unit: "100 g",
    image: "images/avt_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-avt-tea-250g",
    category: "beverages",
    name: "AVT Premium Tea (AVT பிரீமியம் டீ தூள் - 250g)",
    price: 100,
    unit: "250 g",
    image: "images/avt_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-avt-tea-500g",
    category: "beverages",
    name: "AVT Premium Tea (AVT பிரீமியம் டீ தூள் - 500g)",
    price: 185,
    unit: "500 g",
    image: "images/avt_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-avt-tea-1kg",
    category: "beverages",
    name: "AVT Premium Tea (AVT பிரீமியம் டீ தூள் - 1 kg)",
    price: 286,
    unit: "1 kg",
    image: "images/avt_tea.png",
    icon: "fa-mug-hot"
  },

  // 4. Chakra Gold Tea (சக்ரா கோல்ட் டீ தூள்)
  {
    id: "bev-chakra-gold-5rs",
    category: "beverages",
    name: "Chakra Gold Tea (சக்ரா கோல்ட் டீ தூள் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/chakra_gold_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-chakra-gold-10rs",
    category: "beverages",
    name: "Chakra Gold Tea (சக்ரா கோல்ட் டீ தூள் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/chakra_gold_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-chakra-gold-100g",
    category: "beverages",
    name: "Chakra Gold Tea (சக்ரா கோல்ட் டீ தூள் - 100g)",
    price: 90,
    unit: "100 g",
    image: "images/chakra_gold_tea.png",
    icon: "fa-mug-hot"
  },

  // 5. Taj Mahal Tea (தாஜ் மஹால் டீ தூள்)
  {
    id: "bev-taj-mahal-100g",
    category: "beverages",
    name: "Taj Mahal Tea (தாஜ் மஹால் டீ தூள் - 100g)",
    price: 98,
    unit: "100 g",
    image: "images/taj_mahal_tea.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-taj-mahal-250g",
    category: "beverages",
    name: "Taj Mahal Tea (தாஜ் மஹால் டீ தூள் - 250g)",
    price: 225,
    unit: "250 g",
    image: "images/taj_mahal_tea.png",
    icon: "fa-mug-hot"
  },

  // 6. Bru Instant Coffee (புரூ இன்ஸ்டன்ட் காபி)
  {
    id: "bev-bru-coffee-2rs",
    category: "beverages",
    name: "Bru Instant Coffee (புரூ இன்ஸ்டன்ட் காபி - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/bru_instant_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-bru-coffee-3rs",
    category: "beverages",
    name: "Bru Instant Coffee (புரூ இன்ஸ்டன்ட் காபி - ₹3 Sachet)",
    price: 3,
    unit: "1 Sachet (₹3)",
    image: "images/bru_instant_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-bru-coffee-5rs",
    category: "beverages",
    name: "Bru Instant Coffee (புரூ இன்ஸ்டன்ட் காபி - ₹5 Sachet)",
    price: 5,
    unit: "1 Sachet (₹5)",
    image: "images/bru_instant_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-bru-coffee-10rs",
    category: "beverages",
    name: "Bru Instant Coffee (புரூ இன்ஸ்டன்ட் காபி - ₹10 Sachet)",
    price: 10,
    unit: "1 Sachet (₹10)",
    image: "images/bru_instant_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-bru-coffee-200g",
    category: "beverages",
    name: "Bru Instant Coffee (புரூ இன்ஸ்டன்ட் காபி - 200g)",
    price: 230,
    unit: "200 g",
    image: "images/bru_instant_coffee.png",
    icon: "fa-mug-hot"
  },

  // 7. Narasu's Udhayam Filter Coffee (நரசுஸ் உதயம் காபி தூள்)
  {
    id: "bev-narasus-udhayam-50g",
    category: "beverages",
    name: "Narasu's Udhayam Filter Coffee (நரசுஸ் உதயம் காபி தூள் - 50g)",
    price: 88,
    unit: "50 g",
    image: "images/narasus_udhayam_coffee.png",
    icon: "fa-mug-hot"
  },

  // 8. Sunrise Instant Coffee (சன்ரைஸ் காபி தூள்)
  {
    id: "bev-sunrise-coffee-2rs",
    category: "beverages",
    name: "Sunrise Instant Coffee (சன்ரைஸ் காபி தூள் - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/sunrise_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-sunrise-coffee-5rs",
    category: "beverages",
    name: "Sunrise Instant Coffee (சன்ரைஸ் காபி தூள் - ₹5 Sachet)",
    price: 5,
    unit: "1 Sachet (₹5)",
    image: "images/sunrise_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-sunrise-coffee-10rs",
    category: "beverages",
    name: "Sunrise Instant Coffee (சன்ரைஸ் காபி தூள் - ₹10 Sachet)",
    price: 10,
    unit: "1 Sachet (₹10)",
    image: "images/sunrise_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-sunrise-coffee-50g",
    category: "beverages",
    name: "Sunrise Instant Coffee (சன்ரைஸ் காபி தூள் - 50g)",
    price: 90,
    unit: "50 g",
    image: "images/sunrise_coffee.png",
    icon: "fa-mug-hot"
  },
  {
    id: "bev-sunrise-coffee-200g",
    category: "beverages",
    name: "Sunrise Instant Coffee (சன்ரைஸ் காபி தூள் - 200g)",
    price: 240,
    unit: "200 g",
    image: "images/sunrise_coffee.png",
    icon: "fa-mug-hot"
  },

  // 9. Boost Health Drink (பூஸ்ட் ஹெல்த் டிரிங்க்)
  {
    id: "bev-boost-5rs",
    category: "beverages",
    name: "Boost Health Drink (பூஸ்ட் ஹெல்த் டிரிங்க் - ₹5 Sachet)",
    price: 5,
    unit: "1 Sachet (₹5)",
    image: "images/boost_health_drink.png",
    icon: "fa-bolt"
  },
  {
    id: "bev-boost-200g",
    category: "beverages",
    name: "Boost Health Drink (பூஸ்ட் ஹெல்த் டிரிங்க் - 200g Refill)",
    price: 97,
    unit: "200 g (Refill)",
    image: "images/boost_200g.png",
    icon: "fa-bolt"
  },
  {
    id: "bev-boost-250g-jar",
    category: "beverages",
    name: "Boost Health Drink (பூஸ்ட் ஹெல்த் டிரிங்க் - 250g Jar)",
    price: 110,
    unit: "250 g (Jar)",
    image: "images/boost_jar.png",
    icon: "fa-bolt"
  },
  {
    id: "bev-boost-500g",
    category: "beverages",
    name: "Boost Health Drink (பூஸ்ட் ஹெல்த் டிரிங்க் - 500g Refill)",
    price: 235,
    unit: "500 g (Refill)",
    image: "images/boost_500g.png",
    icon: "fa-bolt"
  },
  {
    id: "bev-boost-500g-jar",
    category: "beverages",
    name: "Boost Health Drink (பூஸ்ட் ஹெல்த் டிரிங்க் - 500g Jar)",
    price: 250,
    unit: "500 g (Jar)",
    image: "images/boost_jar.png",
    icon: "fa-bolt"
  },

  // 10. Horlicks Classic Malt (ஹார்லிக்ஸ்)
  {
    id: "bev-horlicks-5rs",
    category: "beverages",
    name: "Horlicks Classic Malt (ஹார்லிக்ஸ் - ₹5 Sachet)",
    price: 5,
    unit: "1 Sachet (₹5)",
    image: "images/horlicks_5rs.png",
    icon: "fa-glass-water"
  },
  {
    id: "bev-horlicks-200g",
    category: "beverages",
    name: "Horlicks Classic Malt (ஹார்லிக்ஸ் - 200g Refill)",
    price: 87,
    unit: "200 g (Refill)",
    image: "images/horlicks_malt.png",
    icon: "fa-glass-water"
  },
  {
    id: "bev-horlicks-200g-jar",
    category: "beverages",
    name: "Horlicks Classic Malt (ஹார்லிக்ஸ் - 200g Jar)",
    price: 95,
    unit: "200 g (Jar)",
    image: "images/horlicks_jar.png",
    icon: "fa-glass-water"
  },
  {
    id: "bev-horlicks-500g",
    category: "beverages",
    name: "Horlicks Classic Malt (ஹார்லிக்ஸ் - 500g Refill)",
    price: 220,
    unit: "500 g (Refill)",
    image: "images/horlicks_malt.png",
    icon: "fa-glass-water"
  },
  {
    id: "bev-horlicks-500g-jar",
    category: "beverages",
    name: "Horlicks Classic Malt (ஹார்லிக்ஸ் - 500g Jar)",
    price: 230,
    unit: "500 g (Jar)",
    image: "images/horlicks_jar.png",
    icon: "fa-glass-water"
  },

  // 11. Complan Nutrition Drink (காம்பிளான்)
  {
    id: "bev-complan-5rs",
    category: "beverages",
    name: "Complan Nutrition Drink (காம்பிளான் - ₹5 Sachet)",
    price: 5,
    unit: "1 Sachet (₹5)",
    image: "images/complan.png",
    icon: "fa-heart-pulse"
  },

  // ==========================================
  // 12. BREADS, BAKERY & COOL DRINKS (பேக்கரி & குளிர்பானங்கள்)
  // ==========================================

  // Cool Drinks & Water
  {
    id: "bake-7up-200ml",
    category: "bakery",
    name: "7Up Soft Drink (செவன் அப் - 200ml)",
    price: 20,
    unit: "200 ml",
    image: "images/7up_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-7up-500ml",
    category: "bakery",
    name: "7Up Soft Drink (செவன் அப் - 500ml)",
    price: 40,
    unit: "500 ml",
    image: "images/7up_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-7up-1-25l",
    category: "bakery",
    name: "7Up Soft Drink (செவன் அப் - 1.25L)",
    price: 50,
    unit: "1.25 L",
    image: "images/7up_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-7up-2-5l",
    category: "bakery",
    name: "7Up Soft Drink (செவன் அப் - 2.5L)",
    price: 100,
    unit: "2.5 L",
    image: "images/7up_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-slice-500ml",
    category: "bakery",
    name: "Slice Mango Drink (ஸ்லைஸ் மாம்பழ பானம் - 500ml)",
    price: 40,
    unit: "500 ml",
    image: "images/slice_mango.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-slice-1-25l",
    category: "bakery",
    name: "Slice Mango Drink (ஸ்லைஸ் மாம்பழ பானம் - 1.25L)",
    price: 50,
    unit: "1.25 L",
    image: "images/slice_mango.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-mirinda-500ml",
    category: "bakery",
    name: "Mirinda Orange Drink (மிரிண்டா - 500ml)",
    price: 40,
    unit: "500 ml",
    image: "images/mirinda_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-mirinda-1-25l",
    category: "bakery",
    name: "Mirinda Orange Drink (மிரிண்டா - 1.25L)",
    price: 50,
    unit: "1.25 L",
    image: "images/mirinda_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-mirinda-2l",
    category: "bakery",
    name: "Mirinda Orange Drink (மிரிண்டா - 2L)",
    price: 100,
    unit: "2 L",
    image: "images/mirinda_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-tilo-10rs",
    category: "bakery",
    name: "Tilo Lemon Soda Drink (டிலோ கூல்டிரிங்க்ஸ் - ₹10 Bottle)",
    price: 10,
    unit: "1 Bottle (₹10)",
    image: "images/tilo_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-maaza-10rs",
    category: "bakery",
    name: "Maaza Mango Drink (மாஸா மாம்பழ ஜூஸ் - ₹10 Bottle)",
    price: 10,
    unit: "1 Bottle (₹10)",
    image: "images/maaza_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-water-500ml",
    category: "bakery",
    name: "Packaged Drinking Water (குடிநீர் பாட்டில் - 500ml)",
    price: 10,
    unit: "500 ml",
    image: "images/water_bottle.png",
    icon: "fa-bottle-water"
  },
  {
    id: "bake-water-1l",
    category: "bakery",
    name: "Packaged Drinking Water (குடிநீர் பாட்டில் - 1L)",
    price: 20,
    unit: "1 L",
    image: "images/water_bottle.png",
    icon: "fa-bottle-water"
  },
  {
    id: "bake-water-2l",
    category: "bakery",
    name: "Packaged Drinking Water (குடிநீர் பாட்டில் - 2L)",
    price: 35,
    unit: "2 L",
    image: "images/water_bottle.png",
    icon: "fa-bottle-water"
  },
  {
    id: "bake-soda-20rs",
    category: "bakery",
    name: "Club Soda / Lehar Soda (சோடா பாட்டில் - ₹20 Bottle)",
    price: 20,
    unit: "1 Bottle (₹20)",
    image: "images/soda_bottle.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-bovonto-20rs",
    category: "bakery",
    name: "Bovonto Soft Drink (போவோண்டோ - ₹20 Bottle)",
    price: 20,
    unit: "1 Bottle (₹20)",
    image: "images/bovonto_drink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "bake-bovonto-500ml",
    category: "bakery",
    name: "Bovonto Soft Drink (போவோண்டோ - 500ml)",
    price: 40,
    unit: "500 ml",
    image: "images/bovonto_drink.png",
    icon: "fa-bottle-droplet"
  },

  // Breads
  {
    id: "bake-milk-bread",
    category: "bakery",
    name: "Fresh Milk Bread (பால் ரொட்டி - 1 Packet)",
    price: 35,
    unit: "1 Packet",
    image: "images/milk_bread.png",
    icon: "fa-bread-slice"
  },
  {
    id: "bake-round-bread",
    category: "bakery",
    name: "Fresh Round Bread (ரவுண்ட் பிரெட் - 1 Packet)",
    price: 35,
    unit: "1 Packet",
    image: "images/round_bread.png",
    icon: "fa-bread-slice"
  },
  {
    id: "bake-wheat-bread",
    category: "bakery",
    name: "Fresh Wheat Bread (கோதுமை ரொட்டி - 1 Packet)",
    price: 60,
    unit: "1 Packet",
    image: "images/wheat_bread.png",
    icon: "fa-bread-slice"
  },

  // Biscuits & Cookies
  {
    id: "bake-milk-bikis-5rs",
    category: "bakery",
    name: "Britannia Milk Bikis (பிரிட்டானியா மில்க் பிக்கிஸ் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/milk_bikis.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-milk-bikis-10rs",
    category: "bakery",
    name: "Britannia Milk Bikis (பிரிட்டானியா மில்க் பிக்கிஸ் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/milk_bikis.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-milk-bikis-15rs",
    category: "bakery",
    name: "Britannia Milk Bikis (பிரிட்டானியா மில்க் பிக்கிஸ் - ₹15 Pack)",
    price: 15,
    unit: "1 Packet (₹15)",
    image: "images/milk_bikis.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-milk-bikis-35rs",
    category: "bakery",
    name: "Britannia Milk Bikis (பிரிட்டானியா மில்க் பிக்கிஸ் - ₹35 Pack)",
    price: 35,
    unit: "1 Packet (₹35)",
    image: "images/milk_bikis.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-marie-gold-5rs",
    category: "bakery",
    name: "Britannia Marie Gold (பிரிட்டானியா மேரி கோல்ட் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/marie_gold.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-marie-gold-10rs",
    category: "bakery",
    name: "Britannia Marie Gold (பிரிட்டானியா மேரி கோல்ட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/marie_gold.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-marie-gold-20rs",
    category: "bakery",
    name: "Britannia Marie Gold (பிரிட்டானியா மேரி கோல்ட் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/marie_gold.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-marie-gold-30rs",
    category: "bakery",
    name: "Britannia Marie Gold (பிரிட்டானியா மேரி கோல்ட் - ₹30 Pack)",
    price: 30,
    unit: "1 Packet (₹30)",
    image: "images/marie_gold.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-good-day-5rs",
    category: "bakery",
    name: "Britannia Good Day (பிரிட்டானியா குட் டே - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/good_day.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-good-day-10rs",
    category: "bakery",
    name: "Britannia Good Day (பிரிட்டானியா குட் டே - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/good_day.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-good-day-20rs",
    category: "bakery",
    name: "Britannia Good Day (பிரிட்டானியா குட் டே - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/good_day.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-britannia-milk-10rs",
    category: "bakery",
    name: "Britannia White Milk Cream (பிரிட்டானியா மில்க் கிரீம் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/britannia_milk_cream.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-britannia-milk-20rs",
    category: "bakery",
    name: "Britannia White Milk Cream (பிரிட்டானியா மில்க் கிரீம் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/britannia_milk_cream.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-5050-5rs",
    category: "bakery",
    name: "Britannia 50-50 Sweet & Salty (50-50 பிஸ்கட் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/5050_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-5050-10rs",
    category: "bakery",
    name: "Britannia 50-50 Sweet & Salty (50-50 பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/5050_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-5050-25rs",
    category: "bakery",
    name: "Britannia 50-50 Sweet & Salty (50-50 பிஸ்கட் - ₹25 Pack)",
    price: 25,
    unit: "1 Packet (₹25)",
    image: "images/5050_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-5050-maska-chaska-10rs",
    category: "bakery",
    name: "Britannia 50-50 Maska Chaska (50-50 மஸ்கா சஸ்கா - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/5050_maska_chaska.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-tiger-3rs",
    category: "bakery",
    name: "Britannia Tiger Glucose (டைகர் பிஸ்கட் - ₹3 Pack)",
    price: 3,
    unit: "1 Packet (₹3)",
    image: "images/tiger_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-tiger-5rs",
    category: "bakery",
    name: "Britannia Tiger Glucose (டைகர் பிஸ்கட் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/tiger_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-tiger-10rs",
    category: "bakery",
    name: "Britannia Tiger Glucose (டைகர் பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/tiger_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-parleg-3rs",
    category: "bakery",
    name: "Parle-G Glucose Biscuit (பார்லே-ஜி பிஸ்கட் - ₹3 Pack)",
    price: 3,
    unit: "1 Packet (₹3)",
    image: "images/parle_g.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-parleg-5rs",
    category: "bakery",
    name: "Parle-G Glucose Biscuit (பார்லே-ஜி பிஸ்கட் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/parle_g.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-parleg-10rs",
    category: "bakery",
    name: "Parle-G Glucose Biscuit (பார்லே-ஜி பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/parle_g.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-nutrichoice-10rs",
    category: "bakery",
    name: "Britannia NutriChoice (நியூட்ரி சாய்ஸ் பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/nutrichoice.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-nutrichoice-25rs",
    category: "bakery",
    name: "Britannia NutriChoice (நியூட்ரி சாய்ஸ் பிஸ்கட் - ₹25 Pack)",
    price: 25,
    unit: "1 Packet (₹25)",
    image: "images/nutrichoice.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-nutrichoice-40rs",
    category: "bakery",
    name: "Britannia NutriChoice (நியூட்ரி சாய்ஸ் பிஸ்கட் - ₹40 Pack)",
    price: 40,
    unit: "1 Packet (₹40)",
    image: "images/nutrichoice.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-oreo-10rs",
    category: "bakery",
    name: "Cadbury Oreo Cream Biscuit (ஓரியோ கிரீம் பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/oreo_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-treat-cream-red-10rs",
    category: "bakery",
    name: "Britannia Treat Cream (ட்ரீட் ஸ்ட்ராபெரி கிரீம் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/treat_cream_red.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-treat-cream-choco-10rs",
    category: "bakery",
    name: "Britannia Treat Cream (ட்ரீட் சாக்லேட் கிரீம் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/treat_cream_choco.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-moms-magic-green-10rs",
    category: "bakery",
    name: "Sunfeast Mom's Magic (மாம்ஸ் மேஜிக் முந்திரி - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/moms_magic_green.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-moms-magic-violet-20rs",
    category: "bakery",
    name: "Sunfeast Mom's Magic (மாம்ஸ் மேஜிக் வெண்ணெய் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/moms_magic_violet.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-bourbon-10rs",
    category: "bakery",
    name: "Britannia Bourbon Chocolate (போர்பன் பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/bourbon_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-bourbon-20rs",
    category: "bakery",
    name: "Britannia Bourbon Chocolate (போர்பன் பிஸ்கட் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/bourbon_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-dark-fantasy-5rs",
    category: "bakery",
    name: "Sunfeast Dark Fantasy (டார்க் பேண்டஸி - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/dark_fantasy.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-dark-fantasy-10rs",
    category: "bakery",
    name: "Sunfeast Dark Fantasy (டார்க் பேண்டஸி - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/dark_fantasy.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-dark-fantasy-20rs",
    category: "bakery",
    name: "Sunfeast Dark Fantasy (டார்க் பேண்டஸி - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/dark_fantasy.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-dark-fantasy-40rs",
    category: "bakery",
    name: "Sunfeast Dark Fantasy (டார்க் பேண்டஸி - ₹40 Pack)",
    price: 40,
    unit: "1 Packet (₹40)",
    image: "images/dark_fantasy.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-marie-light-15rs",
    category: "bakery",
    name: "Sunfeast Marie Light (மேரி லைட் பிஸ்கட் - ₹15 Pack)",
    price: 15,
    unit: "1 Packet (₹15)",
    image: "images/marie_light.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-marie-light-30rs",
    category: "bakery",
    name: "Sunfeast Marie Light (மேரி லைட் பிஸ்கட் - ₹30 Pack)",
    price: 30,
    unit: "1 Packet (₹30)",
    image: "images/marie_light.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-hifi-5rs",
    category: "bakery",
    name: "Hi-Fi Biscuit (ஹைபை பிஸ்கட் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/hifi_biscuit.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-happy-happy-5rs",
    category: "bakery",
    name: "Parle Happy Happy Choco-Chip (ஹேப்பி ஹேப்பி - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/happy_happy.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-happy-happy-10rs",
    category: "bakery",
    name: "Parle Happy Happy Choco-Chip (ஹேப்பி ஹேப்பி - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/happy_happy.png",
    icon: "fa-cookie"
  },

  // Cakes
  {
    id: "bake-winkies-cake-choco",
    category: "bakery",
    name: "Winkies / Britannia Chocolate Cake (சாக்லேட் கேக் - ₹10)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/cake_chocolate.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-winkies-cake-orange",
    category: "bakery",
    name: "Winkies / Britannia Orange Cake (ஆரஞ்சு கேக் - ₹10)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/cake_orange.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-winkies-cake-fruit",
    category: "bakery",
    name: "Winkies / Britannia Fruit Cake (பழ கேக் - ₹10)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/cake_fruit.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-treat-cake-20rs",
    category: "bakery",
    name: "Britannia Treat Cake (ட்ரீட் கேக் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/treat_cake.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-sunfeast-cake-choco-10rs",
    category: "bakery",
    name: "Sunfeast Chocolate Cake (சன்ஃபீஸ்ட் சாக்லேட் கேக் - ₹10)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/sunfeast_cake_choco.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-sunfeast-cake-vanilla-10rs",
    category: "bakery",
    name: "Sunfeast Vanilla Cake (சன்ஃபீஸ்ட் வென்னிலா கேக் - ₹10)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/sunfeast_cake_white.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-lotte-choco-pie-15rs",
    category: "bakery",
    name: "Lotte Choco Pie (லாட்டே சோகோ பை - ₹15 Pack)",
    price: 15,
    unit: "1 Pack (₹15)",
    image: "images/lotte_choco_pie.png",
    icon: "fa-cake-candles"
  },
  {
    id: "bake-elite-brownie-20rs",
    category: "bakery",
    name: "Elite Dreams Choco Brownie Cake (எலைட் பிரவுனி கேக் - ₹20 Pack)",
    price: 20,
    unit: "1 Pack (₹20)",
    image: "images/elite_brownie.png",
    icon: "fa-cake-candles"
  },

  // ==========================================
  // 13. SNACKS & SAVORIES (கார பலகாரங்கள் & தின்பண்டங்கள்)
  // ==========================================

  // Special Mixture
  {
    id: "snack-special-mixture-20rs",
    category: "snacks",
    name: "Special Mixture (ஸ்பெஷல் மிக்ஸர் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/special_mixture.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-special-mixture-250g",
    category: "snacks",
    name: "Special Mixture (ஸ்பெஷல் மிக்ஸர் - 250g)",
    price: 45,
    unit: "250 g",
    image: "images/special_mixture.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-special-mixture-500g",
    category: "snacks",
    name: "Special Mixture (ஸ்பெஷல் மிக்ஸர் - 500g)",
    price: 70,
    unit: "500 g",
    image: "images/special_mixture.png",
    icon: "fa-cookie-bite"
  },

  // Kara Boondi
  {
    id: "snack-kara-boondi-20rs",
    category: "snacks",
    name: "Kara Boondi (கார பூந்தி - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/kara_boondi.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-kara-boondi-250g",
    category: "snacks",
    name: "Kara Boondi (கார பூந்தி - 250g)",
    price: 45,
    unit: "250 g",
    image: "images/kara_boondi.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-kara-boondi-500g",
    category: "snacks",
    name: "Kara Boondi (கார பூந்தி - 500g)",
    price: 75,
    unit: "500 g",
    image: "images/kara_boondi.png",
    icon: "fa-cookie-bite"
  },

  // Traditional Murukku Varieties
  {
    id: "snack-murukku-seeval-20rs",
    category: "snacks",
    name: "Seeval Murukku (சீவல் முறுக்கு - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/murukku_seeval.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-murukku-thattavadai-20rs",
    category: "snacks",
    name: "Thattavadai / Thattai (தட்டாவடை - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/murukku_thattavadai.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-murukku-kuchi-20rs",
    category: "snacks",
    name: "Kuchi Murukku (குச்சி முறுக்கு - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/murukku_kuchi.png",
    icon: "fa-cookie-bite"
  },

  // Ring Murukku
  {
    id: "snack-ring-murukku-20rs",
    category: "snacks",
    name: "Ring Murukku (ரிங் முறுக்கு - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/ring_murukku.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-ring-murukku-500g",
    category: "snacks",
    name: "Ring Murukku (ரிங் முறுக்கு - 500g)",
    price: 70,
    unit: "500 g",
    image: "images/ring_murukku.png",
    icon: "fa-cookie-bite"
  },

  // Kachayam
  {
    id: "snack-kachayam-30rs",
    category: "snacks",
    name: "Traditional Kachayam (கச்சாயம் - 1 Packet)",
    price: 30,
    unit: "1 Packet",
    image: "images/kachayam.png",
    icon: "fa-cookie-bite"
  },

  // Potato Chips
  {
    id: "snack-potato-chips-60rs",
    category: "snacks",
    name: "Hot Potato Chips (உருளைக்கிழங்கு சிப்ஸ் - 1 Packet)",
    price: 60,
    unit: "1 Packet",
    image: "images/potato_chips.png",
    icon: "fa-cookie-bite"
  },

  // Maravalli Kizhangu Chips
  {
    id: "snack-maravalli-chips-20rs",
    category: "snacks",
    name: "Maravalli Kizhangu Chips (மரவள்ளிக்கிழங்கு சிப்ஸ் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/maravalli_chips.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-maravalli-chips-250g",
    category: "snacks",
    name: "Maravalli Kizhangu Chips (மரவள்ளிக்கிழங்கு சிப்ஸ் - 250g)",
    price: 45,
    unit: "250 g",
    image: "images/maravalli_chips.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-maravalli-chips-500g",
    category: "snacks",
    name: "Maravalli Kizhangu Chips (மரவள்ளிக்கிழங்கு சிப்ஸ் - 500g)",
    price: 90,
    unit: "500 g",
    image: "images/maravalli_chips.png",
    icon: "fa-cookie-bite"
  },

  // Banana Chips
  {
    id: "snack-banana-chips-30rs",
    category: "snacks",
    name: "Nendran Banana Chips (நேந்திரங்காய் சிப்ஸ் - ₹30 Pack)",
    price: 30,
    unit: "1 Packet (₹30)",
    image: "images/banana_chips.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-banana-chips-250g",
    category: "snacks",
    name: "Nendran Banana Chips (நேந்திரங்காய் சிப்ஸ் - 250g)",
    price: 70,
    unit: "250 g",
    image: "images/banana_chips.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-banana-chips-500g",
    category: "snacks",
    name: "Nendran Banana Chips (நேந்திரங்காய் சிப்ஸ் - 500g)",
    price: 140,
    unit: "500 g",
    image: "images/banana_chips.png",
    icon: "fa-cookie-bite"
  },

  // Ooty Varkey
  {
    id: "snack-ooty-varkey-25rs",
    category: "snacks",
    name: "Ooty Varkey (ஊட்டி வர்க்கி - ₹25 Pack)",
    price: 25,
    unit: "1 Packet (₹25)",
    image: "images/ooty_varkey.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-ooty-varkey-40rs",
    category: "snacks",
    name: "Ooty Varkey (ஊட்டி வர்க்கி - ₹40 Pack)",
    price: 40,
    unit: "1 Packet (₹40)",
    image: "images/ooty_varkey.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-ooty-varkey-80rs",
    category: "snacks",
    name: "Ooty Varkey (ஊட்டி வர்க்கி - ₹80 Pack)",
    price: 80,
    unit: "1 Packet (₹80)",
    image: "images/ooty_varkey.png",
    icon: "fa-cookie-bite"
  },
  {
    id: "snack-ooty-varkey-90rs",
    category: "snacks",
    name: "Ooty Varkey (ஊட்டி வர்க்கி - ₹90 Pack)",
    price: 90,
    unit: "1 Packet (₹90)",
    image: "images/ooty_varkey.png",
    icon: "fa-cookie-bite"
  },

  // Additional Biscuits, Rusks & Chocolates
  {
    id: "bake-jim-jam-10rs",
    category: "bakery",
    name: "Britannia Jim Jam Biscuits (ஜிம் ஜாம் பிஸ்கட் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/jim_jam.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-little-hearts-5rs",
    category: "bakery",
    name: "Britannia Little Hearts (லிட்டில் ஹார்ட்ஸ் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/little_hearts.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-little-hearts-10rs",
    category: "bakery",
    name: "Britannia Little Hearts (லிட்டில் ஹார்ட்ஸ் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/little_hearts.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-hide-and-seek-30rs",
    category: "bakery",
    name: "Parle Hide & Seek Choco-Chip (ஹைட் & சீக் - ₹30 Pack)",
    price: 30,
    unit: "1 Packet (₹30)",
    image: "images/hide_and_seek.png",
    icon: "fa-cookie"
  },
  {
    id: "bake-britannia-rusk-10rs",
    category: "bakery",
    name: "Britannia Toastea Premium Bake Rusk (டீ ரஸ்க் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/britannia_rusk.png",
    icon: "fa-bread-slice"
  },
  {
    id: "bake-britannia-rusk-40rs",
    category: "bakery",
    name: "Britannia Toastea Premium Bake Rusk (டீ ரஸ்க் - ₹40 Pack)",
    price: 40,
    unit: "1 Packet (₹40)",
    image: "images/britannia_rusk.png",
    icon: "fa-bread-slice"
  },
  {
    id: "bake-dairy-milk-5rs",
    category: "bakery",
    name: "Cadbury Dairy Milk Chocolate (டைரி மில்க் - ₹5 Bar)",
    price: 5,
    unit: "1 Bar (₹5)",
    image: "images/dairy_milk.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-dairy-milk-10rs",
    category: "bakery",
    name: "Cadbury Dairy Milk Chocolate (டைரி மில்க் - ₹10 Bar)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/dairy_milk.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-dairy-milk-20rs",
    category: "bakery",
    name: "Cadbury Dairy Milk Chocolate (டைரி மில்க் - ₹20 Bar)",
    price: 20,
    unit: "1 Bar (₹20)",
    image: "images/dairy_milk.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-dairy-milk-40rs",
    category: "bakery",
    name: "Cadbury Dairy Milk Chocolate (டைரி மில்க் - ₹40 Bar)",
    price: 40,
    unit: "1 Bar (₹40)",
    image: "images/dairy_milk.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-kitkat-10rs",
    category: "bakery",
    name: "Nestle KitKat Chocolate (கிட்கேட் - ₹10 Pack)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/kitkat.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-kitkat-20rs",
    category: "bakery",
    name: "Nestle KitKat Chocolate (கிட்கேட் - ₹20 Pack)",
    price: 20,
    unit: "1 Pack (₹20)",
    image: "images/kitkat.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-kitkat-40rs",
    category: "bakery",
    name: "Nestle KitKat Chocolate (கிட்கேட் - ₹40 Pack)",
    price: 40,
    unit: "1 Pack (₹40)",
    image: "images/kitkat.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-munch-perk-5rs",
    category: "bakery",
    name: "Nestle Munch / Cadbury Perk (மன்ச் / பெர்க் - ₹5 Pack)",
    price: 5,
    unit: "1 Pack (₹5)",
    image: "images/munch_perk.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-munch-perk-10rs",
    category: "bakery",
    name: "Nestle Munch / Cadbury Perk (மன்ச் / பெர்க் - ₹10 Pack)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/munch_perk.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-5star-5rs",
    category: "bakery",
    name: "Cadbury 5 Star Chocolate (5 ஸ்டார் - ₹5 Bar)",
    price: 5,
    unit: "1 Bar (₹5)",
    image: "images/5star.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-5star-10rs",
    category: "bakery",
    name: "Cadbury 5 Star Chocolate (5 ஸ்டார் - ₹10 Bar)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/5star.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-milkybar-5rs",
    category: "bakery",
    name: "Nestle Milkybar Chocolate (மில்கிபார் - ₹5 Bar)",
    price: 5,
    unit: "1 Bar (₹5)",
    image: "images/milkybar.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "bake-milkybar-10rs",
    category: "bakery",
    name: "Nestle Milkybar Chocolate (மில்கிபார் - ₹10 Bar)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/milkybar.png",
    icon: "fa-cubes-stacked"
  },

  // Traditional Candies & Sweets
  {
    id: "snack-kadalai-mittai-5rs",
    category: "snacks",
    name: "Kadalai Mittai / Peanut Candy (கடலை மிட்டாய் - ₹5)",
    price: 5,
    unit: "1 Piece (₹5)",
    image: "images/kadalai_mittai.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-kadalai-mittai-10rs",
    category: "snacks",
    name: "Kadalai Mittai / Peanut Candy (கடலை மிட்டாய் - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/kadalai_mittai.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-kadalai-mittai-20rs",
    category: "snacks",
    name: "Kadalai Mittai / Peanut Candy (கடலை மிட்டாய் - ₹20 Pack)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/kadalai_mittai.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-ellu-urundai-5rs",
    category: "snacks",
    name: "Ellu Urundai / Sesame Balls (எள்ளு உருண்டை - ₹5)",
    price: 5,
    unit: "1 Piece (₹5)",
    image: "images/ellu_urundai.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-soan-papdi-5rs",
    category: "snacks",
    name: "Soan Papdi Sweet (சோன் பப்டி - ₹5)",
    price: 5,
    unit: "1 Piece (₹5)",
    image: "images/soan_papdi.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-thaen-mittai-5rs",
    category: "snacks",
    name: "Thaen Mittai / Honey Candy (தேன் மிட்டாய் - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/thaen_mittai.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-kamarkattu-2rs",
    category: "snacks",
    name: "Traditional Kamarkattu (கமர்கட்டு - ₹2)",
    price: 2,
    unit: "1 Piece (₹2)",
    image: "images/kamarkattu.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-halwa-5rs",
    category: "snacks",
    name: "Traditional Halwa (அல்வா - ₹5 Pack)",
    price: 5,
    unit: "1 Packet (₹5)",
    image: "images/halwa.png",
    icon: "fa-candy-cane"
  },
  {
    id: "snack-halwa-10rs",
    category: "snacks",
    name: "Traditional Halwa (அல்வா - ₹10 Pack)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/halwa.png",
    icon: "fa-candy-cane"
  },

  // ==========================================
  // 14. PERSONAL CARE & HYGIENE (தனிநபர் பராமரிப்பு & சோப்புகள்)
  // ==========================================

  // 1. Hamam Neem Soap
  {
    id: "care-hamam-10rs",
    category: "personal-care",
    name: "Hamam Neem Soap (ஹமாம் சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/hamam_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-hamam-38rs",
    category: "personal-care",
    name: "Hamam Neem Soap (ஹமாம் சோப்பு - 100g)",
    price: 38,
    unit: "100 g",
    image: "images/hamam_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-hamam-67rs",
    category: "personal-care",
    name: "Hamam Neem Soap (ஹமாம் சோப்பு - 150g / Pack)",
    price: 67,
    unit: "1 Pack (₹67)",
    image: "images/hamam_soap.png",
    icon: "fa-soap"
  },

  // 2. Medimix Ayurvedic Soap
  {
    id: "care-medimix-10rs",
    category: "personal-care",
    name: "Medimix Ayurvedic Soap (மெடிமிக்ஸ் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/medimix_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-medimix-26rs",
    category: "personal-care",
    name: "Medimix Ayurvedic Soap (மெடிமிக்ஸ் - ₹26)",
    price: 26,
    unit: "1 Bar (₹26)",
    image: "images/medimix_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-medimix-48rs",
    category: "personal-care",
    name: "Medimix Ayurvedic Soap (மெடிமிக்ஸ் - ₹48)",
    price: 48,
    unit: "1 Bar (₹48)",
    image: "images/medimix_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-medimix-105rs",
    category: "personal-care",
    name: "Medimix Ayurvedic Soap Cut Pack (மெடிமிக்ஸ் - ₹105 Pack)",
    price: 105,
    unit: "1 Multipack (₹105)",
    image: "images/medimix_soap.png",
    icon: "fa-soap"
  },

  // 3. Cinthol Soaps
  {
    id: "care-cinthol-orig-10rs",
    category: "personal-care",
    name: "Cinthol Original Soap (சின்தால் ஒரிஜினல் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/cinthol_orig_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-orig-28rs",
    category: "personal-care",
    name: "Cinthol Original Soap (சின்தால் ஒரிஜினல் - ₹28)",
    price: 28,
    unit: "1 Bar (₹28)",
    image: "images/cinthol_orig_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-orig-48rs",
    category: "personal-care",
    name: "Cinthol Original Soap (சின்தால் ஒரிஜினல் - ₹48)",
    price: 48,
    unit: "1 Bar (₹48)",
    image: "images/cinthol_orig_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-orig-120rs",
    category: "personal-care",
    name: "Cinthol Original Soap Cut Pack (சின்தால் - ₹120 Pack)",
    price: 120,
    unit: "1 Multipack (₹120)",
    image: "images/cinthol_orig_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-lime-10rs",
    category: "personal-care",
    name: "Cinthol Lime Fresh Soap (சின்தால் லெமன் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/cinthol_lime_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-lime-45rs",
    category: "personal-care",
    name: "Cinthol Lime Fresh Soap (சின்தால் லெமன் - ₹45)",
    price: 45,
    unit: "1 Bar (₹45)",
    image: "images/cinthol_lime_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-black-10rs",
    category: "personal-care",
    name: "Cinthol Cool / Black Soap (சின்தால் கூல் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/cinthol_black_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-cinthol-black-40rs",
    category: "personal-care",
    name: "Cinthol Cool / Black Soap (சின்தால் கூல் - ₹40)",
    price: 40,
    unit: "1 Bar (₹40)",
    image: "images/cinthol_black_soap.png",
    icon: "fa-soap"
  },

  // 4. Lifebuoy Total Red Soap
  {
    id: "care-lifebuoy-red-10rs",
    category: "personal-care",
    name: "Lifebuoy Total Red Soap (லைஃபாய் ரெட் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/lifebuoy_red_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-lifebuoy-red-38rs",
    category: "personal-care",
    name: "Lifebuoy Total Red Soap (லைஃபாய் ரெட் - 100g)",
    price: 38,
    unit: "100 g",
    image: "images/lifebuoy_red_soap.png",
    icon: "fa-soap"
  },

  // 5. Lux Rose Soap
  {
    id: "care-lux-rose-10rs",
    category: "personal-care",
    name: "Lux Rose Beauty Soap (லக்ஸ் ரோஸ் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/lux_rose_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-lux-rose-38rs",
    category: "personal-care",
    name: "Lux Rose Beauty Soap (லக்ஸ் ரோஸ் - ₹38)",
    price: 38,
    unit: "1 Bar (₹38)",
    image: "images/lux_rose_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-lux-rose-67rs",
    category: "personal-care",
    name: "Lux Rose Beauty Soap (லக்ஸ் ரோஸ் - ₹67 Pack)",
    price: 67,
    unit: "1 Pack (₹67)",
    image: "images/lux_rose_soap.png",
    icon: "fa-soap"
  },

  // 6. Mysore Sandal Soap
  {
    id: "care-mysore-sandal-38rs",
    category: "personal-care",
    name: "Mysore Sandal Soap (மைசூர் சாண்டல் - ₹38)",
    price: 38,
    unit: "1 Bar (₹38)",
    image: "images/mysore_sandal_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-mysore-sandal-70rs",
    category: "personal-care",
    name: "Mysore Sandal Soap (மைசூர் சாண்டல் - ₹70)",
    price: 70,
    unit: "1 Bar (₹70)",
    image: "images/mysore_sandal_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-mysore-sandal-90rs",
    category: "personal-care",
    name: "Mysore Sandal Soap (மைசூர் சாண்டல் - ₹90)",
    price: 90,
    unit: "1 Bar (₹90)",
    image: "images/mysore_sandal_soap.png",
    icon: "fa-soap"
  },

  // 7. Dettol Bathing Soap
  {
    id: "care-dettol-soap-10rs",
    category: "personal-care",
    name: "Dettol Original Bathing Soap (டெட்டால் சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/dettol_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-dettol-soap-40rs",
    category: "personal-care",
    name: "Dettol Original Bathing Soap (டெட்டால் சோப்பு - ₹40)",
    price: 40,
    unit: "1 Bar (₹40)",
    image: "images/dettol_soap.png",
    icon: "fa-soap"
  },

  // 8. Santoor Sandal & Turmeric Soap
  {
    id: "care-santoor-soap-10rs",
    category: "personal-care",
    name: "Santoor Sandal & Turmeric (சந்தூர் சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/santoor_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-santoor-soap-38rs",
    category: "personal-care",
    name: "Santoor Sandal & Turmeric (சந்தூர் சோப்பு - ₹38)",
    price: 38,
    unit: "1 Bar (₹38)",
    image: "images/santoor_soap.png",
    icon: "fa-soap"
  },

  // 9. Pears Soaps
  {
    id: "care-pears-pure-50rs",
    category: "personal-care",
    name: "Pears Pure & Gentle Soap (பியர்ஸ் நீலம்/பச்சை - ₹50)",
    price: 50,
    unit: "1 Bar (₹50)",
    image: "images/pears_pure_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-pears-orange-50rs",
    category: "personal-care",
    name: "Pears Amber Glycerin Soap (பியர்ஸ் ஆரஞ்சு - ₹50)",
    price: 50,
    unit: "1 Bar (₹50)",
    image: "images/pears_orange_soap.png",
    icon: "fa-soap"
  },

  // 10. Dove Cream Beauty Bar
  {
    id: "care-dove-soap-25rs",
    category: "personal-care",
    name: "Dove Cream Beauty Bar (டவ் சோப்பு - ₹25)",
    price: 25,
    unit: "1 Bar (₹25)",
    image: "images/dove_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-dove-soap-52rs",
    category: "personal-care",
    name: "Dove Cream Beauty Bar (டவ் சோப்பு - ₹52)",
    price: 52,
    unit: "1 Bar (₹52)",
    image: "images/dove_soap.png",
    icon: "fa-soap"
  },

  // 11. Margo Neem Soap
  {
    id: "care-margo-soap-36rs",
    category: "personal-care",
    name: "Margo Original Neem Soap (மார்கோ வேப்பிலை - ₹36)",
    price: 36,
    unit: "1 Bar (₹36)",
    image: "images/margo_soap.png",
    icon: "fa-soap"
  },

  // 12. Nature Power Soaps
  {
    id: "care-nature-power-lime-42rs",
    category: "personal-care",
    name: "Nature Power Lime Beauty Soap (நேச்சர் பவர் லெமன் - ₹42)",
    price: 42,
    unit: "1 Bar (₹42)",
    image: "images/nature_power_lime.png",
    icon: "fa-soap"
  },
  {
    id: "care-nature-power-sandal-42rs",
    category: "personal-care",
    name: "Nature Power Sandal Soap (நேச்சர் பவர் சந்தனம் - ₹42)",
    price: 42,
    unit: "1 Bar (₹42)",
    image: "images/nature_power_sandal.png",
    icon: "fa-soap"
  },
  {
    id: "care-nature-power-lavender-42rs",
    category: "personal-care",
    name: "Nature Power Lavender Soap (நேச்சர் பவர் லாவெண்டர் - ₹42)",
    price: 42,
    unit: "1 Bar (₹42)",
    image: "images/nature_power_lavender.png",
    icon: "fa-soap"
  },
  {
    id: "care-nature-power-papaya-52rs",
    category: "personal-care",
    name: "Nature Power Papaya Aura Soap (நேச்சர் பவர் பப்பாளி - ₹52)",
    price: 52,
    unit: "1 Bar (₹52)",
    image: "images/nature_power_papaya.png",
    icon: "fa-soap"
  },

  // 13. Vivel, Liril, Chandrika & Rexona Soaps
  {
    id: "care-vivel-soap-34rs",
    category: "personal-care",
    name: "Vivel Satin Soft Beauty Soap (விவெல் சோப்பு - ₹34)",
    price: 34,
    unit: "1 Bar (₹34)",
    image: "images/vivel_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-liril-soap-38rs",
    category: "personal-care",
    name: "Liril Lemon & Tea Tree Soap (லிரில் எலுமிச்சை - ₹38)",
    price: 38,
    unit: "1 Bar (₹38)",
    image: "images/liril_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-chandrika-soap-40rs",
    category: "personal-care",
    name: "Chandrika Ayurvedic Soap (சந்திரிகா சோப்பு - ₹40)",
    price: 40,
    unit: "1 Bar (₹40)",
    image: "images/chandrika_soap.png",
    icon: "fa-soap"
  },
  {
    id: "care-rexona-soap-42rs",
    category: "personal-care",
    name: "Rexona Coconut & Olive Soap (ரெக்சோனா சோப்பு - ₹42)",
    price: 42,
    unit: "1 Bar (₹42)",
    image: "images/rexona_soap.png",
    icon: "fa-soap"
  },

  // Shampoos & Hair Care
  {
    id: "care-clinic-plus-1rs",
    category: "personal-care",
    name: "Clinic Plus Strong & Long Shampoo (கிளினிக் பிளஸ் - ₹1 Sachet)",
    price: 1,
    unit: "1 Sachet (₹1)",
    image: "images/clinic_plus_shampoo.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-sunsilk-black-1rs",
    category: "personal-care",
    name: "Sunsilk Black Shine Shampoo (சன்சில்க் பிளாக் - ₹1 Sachet)",
    price: 1,
    unit: "1 Sachet (₹1)",
    image: "images/sunsilk_black_shampoo.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-head-shoulders-2rs",
    category: "personal-care",
    name: "Head & Shoulders Anti-Dandruff (ஹெட் அண்ட் ஷோல்டர்ஸ் - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/head_shoulders_shampoo.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-meera-shampoo-badam-2rs",
    category: "personal-care",
    name: "Meera Shampoo Badam & Shikakai (மீரா பாதாம் ஷாம்பூ - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/meera_shampoo_badam.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-meera-shampoo-onion-2rs",
    category: "personal-care",
    name: "Meera Shampoo Small Onion & Fenugreek (மீரா சின்ன வெங்காயம் ஷாம்பூ - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/meera_shampoo_onion.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-meera-powder-4rs",
    category: "personal-care",
    name: "Meera Herbal Shikakai Powder (மீரா சீயக்காய் தூள் - ₹4 Sachet)",
    price: 4,
    unit: "1 Sachet (₹4)",
    image: "images/meera_powder.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-chik-shampoo-1rs",
    category: "personal-care",
    name: "Chik Hair Shampoo (சிக் ஷாம்பூ - ₹1 Sachet)",
    price: 1,
    unit: "1 Sachet (₹1)",
    image: "images/chik_shampoo.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-karthika-shampoo-1rs",
    category: "personal-care",
    name: "Karthika Shikakai Shampoo (கார்த்திகா ஷாம்பூ - ₹1 Sachet)",
    price: 1,
    unit: "1 Sachet (₹1)",
    image: "images/karthika_shampoo.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-dove-shampoo-2rs",
    category: "personal-care",
    name: "Dove Daily Shine Shampoo (டவ் ஷாம்பூ - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/dove_shampoo.png",
    icon: "fa-pump-soap"
  },
  {
    id: "care-himalaya-shampoo-2rs",
    category: "personal-care",
    name: "Himalaya Protein Shampoo (இமாலயா ஷாம்பூ - ₹2 Sachet)",
    price: 2,
    unit: "1 Sachet (₹2)",
    image: "images/himalaya_shampoo.png",
    icon: "fa-pump-soap"
  },


  // Oral Care - Toothpastes & Brushes
  {
    id: "care-colgate-strong-10rs",
    category: "personal-care",
    name: "Colgate Strong Teeth Toothpaste (கோல்கேட் பற்பசை - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/colgate_strong_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-colgate-strong-18rs",
    category: "personal-care",
    name: "Colgate Strong Teeth Toothpaste (கோல்கேட் பற்பசை - ₹18)",
    price: 18,
    unit: "1 Tube (₹18)",
    image: "images/colgate_strong_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-colgate-strong-68rs",
    category: "personal-care",
    name: "Colgate Strong Teeth Toothpaste (கோல்கேட் பற்பசை - ₹68)",
    price: 68,
    unit: "1 Tube (₹68)",
    image: "images/colgate_strong_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-closeup-red-10rs",
    category: "personal-care",
    name: "Close Up Red Hot Gel Toothpaste (குளோஸ் அப் ஜெல் - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/closeup_red_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-closeup-red-18rs",
    category: "personal-care",
    name: "Close Up Red Hot Gel Toothpaste (குளோஸ் அப் ஜெல் - ₹18)",
    price: 18,
    unit: "1 Tube (₹18)",
    image: "images/closeup_red_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-closeup-red-70rs",
    category: "personal-care",
    name: "Close Up Red Hot Gel Toothpaste (குளோஸ் அப் ஜெல் - ₹70)",
    price: 70,
    unit: "1 Tube (₹70)",
    image: "images/closeup_red_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-sensodyne-20rs",
    category: "personal-care",
    name: "Sensodyne Toothpaste (சென்சோடைன் பற்பசை - ₹20)",
    price: 20,
    unit: "1 Tube (₹20)",
    image: "images/sensodyne_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-sensodyne-88rs",
    category: "personal-care",
    name: "Sensodyne Toothpaste (சென்சோடைன் பற்பசை - 75g)",
    price: 88,
    unit: "75 g (₹88)",
    image: "images/sensodyne_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-pepsodent-10rs",
    category: "personal-care",
    name: "Pepsodent Germicheck Toothpaste (பெப்சோடென்ட் - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/pepsodent_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-pepsodent-18rs",
    category: "personal-care",
    name: "Pepsodent Germicheck Toothpaste (பெப்சோடென்ட் - ₹18)",
    price: 18,
    unit: "1 Tube (₹18)",
    image: "images/pepsodent_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-pepsodent-72rs",
    category: "personal-care",
    name: "Pepsodent Germicheck Toothpaste (பெப்சோடென்ட் - ₹72)",
    price: 72,
    unit: "1 Tube (₹72)",
    image: "images/pepsodent_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-dabur-red-10rs",
    category: "personal-care",
    name: "Dabur Red Ayurvedic Toothpaste (டாபர் ரெட் பேஸ்ட் - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/dabur_red_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-dabur-red-18rs",
    category: "personal-care",
    name: "Dabur Red Ayurvedic Toothpaste (டாபர் ரெட் பேஸ்ட் - ₹18)",
    price: 18,
    unit: "1 Tube (₹18)",
    image: "images/dabur_red_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-dabur-red-68rs",
    category: "personal-care",
    name: "Dabur Red Ayurvedic Toothpaste (டாபர் ரெட் பேஸ்ட் - ₹68)",
    price: 68,
    unit: "1 Tube (₹68)",
    image: "images/dabur_red_paste.png",
    icon: "fa-tooth"
  },
  {
    id: "care-toothbrush-13rs",
    category: "personal-care",
    name: "Classic Toothbrush (டூத் பிரஷ் - ₹13)",
    price: 13,
    unit: "1 Piece (₹13)",
    image: "images/oral_b_brush.png",
    icon: "fa-tooth"
  },
  {
    id: "care-toothbrush-15rs",
    category: "personal-care",
    name: "Oral-B Cavity Defense Toothbrush (ஓரல்-பி பிரஷ் - ₹15)",
    price: 15,
    unit: "1 Piece (₹15)",
    image: "images/oral_b_brush.png",
    icon: "fa-tooth"
  },
  {
    id: "care-toothbrush-35rs",
    category: "personal-care",
    name: "Colgate Zig Zag Charcoal Toothbrush (கோல்கேட் ஜிக் ஜாக் - ₹35)",
    price: 35,
    unit: "1 Piece (₹35)",
    image: "images/colgate_zigzag_brush.png",
    icon: "fa-tooth"
  },
  {
    id: "care-toothbrush-40rs",
    category: "personal-care",
    name: "Colgate Super Flexi Clean Toothbrush (கோல்கேட் சூப்பர் ஃப்ளெக்ஸி - ₹40)",
    price: 40,
    unit: "1 Piece (₹40)",
    image: "images/colgate_super_flexi_brush.png",
    icon: "fa-tooth"
  },

  // Face Care, Talcum Powder & Creams
  {
    id: "care-gokul-santol-62rs",
    category: "personal-care",
    name: "Gokul Santol Sandal Talcum Powder (கோகுல் சந்தோல் - ₹62)",
    price: 62,
    unit: "1 Pack (₹62)",
    image: "images/gokul_santol_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-gokul-santol-120rs",
    category: "personal-care",
    name: "Gokul Santol Sandal Talcum Powder (கோகுல் சந்தோல் - ₹120)",
    price: 120,
    unit: "1 Pack (₹120)",
    image: "images/gokul_santol_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-powder-10rs",
    category: "personal-care",
    name: "Ponds Dreamflower Pink Lily Talcum Powder (பாண்ட்ஸ் பவுடர் - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/ponds_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-powder-65rs",
    category: "personal-care",
    name: "Ponds Dreamflower Pink Lily Talcum Powder (பாண்ட்ஸ் பவுடர் - ₹65)",
    price: 65,
    unit: "100 g (₹65)",
    image: "images/ponds_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-powder-130rs",
    category: "personal-care",
    name: "Ponds Dreamflower Pink Lily Talcum Powder (பாண்ட்ஸ் பவுடர் - ₹130)",
    price: 130,
    unit: "300 g (₹130)",
    image: "images/ponds_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-lavender-10rs",
    category: "personal-care",
    name: "Ponds Magic Lavender Bloom Talcum Powder (பாண்ட்ஸ் லாவெண்டர் பவுடர் - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/ponds_lavender_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-lavender-65rs",
    category: "personal-care",
    name: "Ponds Magic Lavender Bloom Talcum Powder (பாண்ட்ஸ் லாவெண்டர் பவுடர் - ₹65)",
    price: 65,
    unit: "100 g (₹65)",
    image: "images/ponds_lavender_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-lavender-130rs",
    category: "personal-care",
    name: "Ponds Magic Lavender Bloom Talcum Powder (பாண்ட்ஸ் லாவெண்டர் பவுடர் - ₹130)",
    price: 130,
    unit: "300 g (₹130)",
    image: "images/ponds_lavender_powder.png",
    icon: "fa-spa"
  },
  {
    id: "care-glow-lovely-10rs",
    category: "personal-care",
    name: "Fair & Lovely / Glow & Lovely Cream (ஃபேர் & லவ்லி - ₹10)",
    price: 10,
    unit: "1 Pouch (₹10)",
    image: "images/fair_lovely_cream.png",
    icon: "fa-spa"
  },
  {
    id: "care-glow-lovely-18rs",
    category: "personal-care",
    name: "Fair & Lovely / Glow & Lovely Cream (ஃபேர் & லவ்லி - ₹18)",
    price: 18,
    unit: "1 Tube (₹18)",
    image: "images/fair_lovely_cream.png",
    icon: "fa-spa"
  },
  {
    id: "care-glow-lovely-65rs",
    category: "personal-care",
    name: "Fair & Lovely / Glow & Lovely Cream (ஃபேர் & லவ்லி - 50g)",
    price: 65,
    unit: "50 g (₹65)",
    image: "images/fair_lovely_cream.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-face-10rs",
    category: "personal-care",
    name: "Ponds Bright Beauty Serum Cream (பாண்ட்ஸ் கிரீம் - ₹10)",
    price: 10,
    unit: "1 Sachet (₹10)",
    image: "images/ponds_bright_beauty_cream.png",
    icon: "fa-spa"
  },
  {
    id: "care-ponds-face-65rs",
    category: "personal-care",
    name: "Ponds Bright Beauty Serum Cream (பாண்ட்ஸ் கிரீம் - ₹65)",
    price: 65,
    unit: "1 Tube / Jar (₹65)",
    image: "images/ponds_bright_beauty_cream.png",
    icon: "fa-spa"
  },
  {
    id: "care-vaseline-6rs",
    category: "personal-care",
    name: "Vaseline Petroleum Jelly (வாசலின் - ₹6)",
    price: 6,
    unit: "1 Piece (₹6)",
    image: "images/vaseline_jelly.png",
    icon: "fa-spa"
  },
  {
    id: "care-vaseline-10rs",
    category: "personal-care",
    name: "Vaseline Petroleum Jelly (வாசலின் - ₹10)",
    price: 10,
    unit: "1 Piece (₹10)",
    image: "images/vaseline_jelly.png",
    icon: "fa-spa"
  },

  // Shaving & Hygiene Essentials
  {
    id: "care-dettol-liquid-18rs",
    category: "personal-care",
    name: "Dettol Antiseptic Liquid (டெட்டால் திரவம் - 60ml)",
    price: 18,
    unit: "60 ml (₹18)",
    image: "images/dettol_antiseptic.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-dettol-liquid-44rs",
    category: "personal-care",
    name: "Dettol Antiseptic Liquid (டெட்டால் திரவம் - 110ml)",
    price: 44,
    unit: "110 ml (₹44)",
    image: "images/dettol_antiseptic.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-dettol-liquid-73rs",
    category: "personal-care",
    name: "Dettol Antiseptic Liquid (டெட்டால் திரவம் - 250ml)",
    price: 73,
    unit: "250 ml (₹73)",
    image: "images/dettol_antiseptic.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-winner-blade-10rs",
    category: "personal-care",
    name: "Winner Shaving Blades (வின்னர் பிளேடு - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/winner_blade.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-gillette-blade-15rs",
    category: "personal-care",
    name: "Gillette 7 O'Clock Super Platinum Blades (கில்லெட் பிளேடு - ₹15 Box)",
    price: 15,
    unit: "1 Box (₹15)",
    image: "images/gillette_blade.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-gillette-razor-25rs",
    category: "personal-care",
    name: "Gillette Presto / Machine Razor (கில்லெட் ரேசர் - ₹25)",
    price: 25,
    unit: "1 Razor (₹25)",
    image: "images/gillette_razor.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-whisper-choice-35rs",
    category: "personal-care",
    name: "Whisper Choice Wings Sanitary Pads (விஸ்பர் சாய்ஸ் - ₹35)",
    price: 35,
    unit: "1 Pack (₹35)",
    image: "images/whisper_choice.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-whisper-choice-50rs",
    category: "personal-care",
    name: "Whisper Choice Wings Sanitary Pads (விஸ்பர் சாய்ஸ் - ₹50)",
    price: 50,
    unit: "1 Pack (₹50)",
    image: "images/whisper_choice.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-stayfree-33rs",
    category: "personal-care",
    name: "Stayfree Secure Cottony Pads (ஸ்டேஃப்ரீ நாப்கின் - ₹33)",
    price: 33,
    unit: "1 Pack (₹33)",
    image: "images/stayfree_secure.png",
    icon: "fa-shield-halved"
  },
  {
    id: "care-stayfree-45rs",
    category: "personal-care",
    name: "Stayfree Secure Cottony Pads (ஸ்டேஃப்ரீ நாப்கின் - ₹45)",
    price: 45,
    unit: "1 Pack (₹45)",
    image: "images/stayfree_secure.png",
    icon: "fa-shield-halved"
  },



  // ==========================================
  // 18. FOOD INGREDIENTS & COOKING ESSENTIALS (உணவு பொருட்கள் & நூடுல்ஸ்)
  // ==========================================
  {
    id: "ing-maggi-noodles-15rs",
    category: "ingredients",
    name: "Maggi 2-Minute Noodles (மேகி நூடுல்ஸ் - ₹15 Pack)",
    price: 15,
    unit: "1 Pack (₹15)",
    image: "images/maggi_noodles.png",
    icon: "fa-bowl-food"
  },
  {
    id: "ing-maggi-noodles-30rs",
    category: "ingredients",
    name: "Maggi 2-Minute Noodles (மேகி நூடுல்ஸ் - ₹30 Pack)",
    price: 30,
    unit: "1 Pack (₹30)",
    image: "images/maggi_noodles.png",
    icon: "fa-bowl-food"
  },
  {
    id: "ing-maggi-noodles-55rs",
    category: "ingredients",
    name: "Maggi 2-Minute Noodles (மேகி நூடுல்ஸ் - ₹55 Super Saver)",
    price: 55,
    unit: "1 Pack (₹55)",
    image: "images/maggi_noodles.png",
    icon: "fa-bowl-food"
  },
  {
    id: "ing-yippee-noodles-15rs",
    category: "ingredients",
    name: "Sunfeast YiPPee! Noodles (இப்பி நூடுல்ஸ் - ₹15 Pack)",
    price: 15,
    unit: "1 Pack (₹15)",
    image: "images/yippee_noodles.png",
    icon: "fa-bowl-food"
  },
  {
    id: "ing-yippee-noodles-30rs",
    category: "ingredients",
    name: "Sunfeast YiPPee! Noodles (இப்பி நூடுல்ஸ் - ₹30 Pack)",
    price: 30,
    unit: "1 Pack (₹30)",
    image: "images/yippee_noodles.png",
    icon: "fa-bowl-food"
  },
  {
    id: "ing-yippee-noodles-55rs",
    category: "ingredients",
    name: "Sunfeast YiPPee! Noodles (இப்பி நூடுல்ஸ் - ₹55 Super Saver)",
    price: 55,
    unit: "1 Pack (₹55)",
    image: "images/yippee_noodles.png",
    icon: "fa-bowl-food"
  },
    // ==========================================
  // 15. HOUSEHOLD & CLEANING (வீட்டு பராமரிப்பு & சலவை பொருட்கள்)
  // ==========================================

  // 1. Detergent Bars & Washing Soaps
  {
    id: "house-arasan-soap-31rs",
    category: "household",
    name: "Arasan Washing Soap (அரசன் சலவை சோப்பு - ₹31)",
    price: 31,
    unit: "1 Bar (₹31)",
    image: "images/arasan_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-arasan-soap-pack4",
    category: "household",
    name: "Arasan Washing Soap Saver Pack (அரசன் சலவை சோப்பு - 4 Bars)",
    price: 122,
    unit: "4 Bars (₹122 / ₹30.5 each)",
    image: "images/arasan_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-rin-bar-10rs",
    category: "household",
    name: "Rin Detergent Bar (ரின் பார் சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/rin_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-rin-bar-20rs",
    category: "household",
    name: "Rin Detergent Bar (ரின் பார் சோப்பு - ₹20)",
    price: 20,
    unit: "1 Bar (₹20)",
    image: "images/rin_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-surf-excel-bar-10rs",
    category: "household",
    name: "Surf Excel Stain Eraser Bar (சர்ப் எக்செல் பார் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/surf_excel_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-surf-excel-bar-20rs",
    category: "household",
    name: "Surf Excel Stain Eraser Bar (சர்ப் எக்செல் பார் - ₹20)",
    price: 20,
    unit: "1 Bar (₹20)",
    image: "images/surf_excel_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-surf-excel-bar-40rs",
    category: "household",
    name: "Surf Excel Stain Eraser Bar (சர்ப் எக்செல் பார் - ₹40)",
    price: 40,
    unit: "1 Bar (₹40)",
    image: "images/surf_excel_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-power-bar-10rs",
    category: "household",
    name: "Power Detergent Soap (பவர் சலவை சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/power_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-power-bar-23rs",
    category: "household",
    name: "Power Detergent Soap (பவர் சலவை சோப்பு - ₹23)",
    price: 23,
    unit: "1 Bar (₹23)",
    image: "images/power_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-ponvandu-bar-10rs",
    category: "household",
    name: "Ponvandu Detergent Soap (பொன்வண்டு சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/ponvandu_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-ponvandu-bar-25rs",
    category: "household",
    name: "Ponvandu Detergent Soap (பொன்வண்டு சோப்பு - ₹25)",
    price: 25,
    unit: "1 Bar (₹25)",
    image: "images/ponvandu_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-chutti-soap-15rs",
    category: "household",
    name: "Chutti Washing Soap (சுட்டி சலவை சோப்பு - ₹15)",
    price: 15,
    unit: "1 Bar (₹15)",
    image: "images/chutti_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-chutti-soap-30rs",
    category: "household",
    name: "Chutti Washing Soap (சுட்டி சலவை சோப்பு - ₹30)",
    price: 30,
    unit: "1 Bar (₹30)",
    image: "images/chutti_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-arasan-yellow-20rs",
    category: "household",
    name: "Arasan Yellow Washing Soap (அரசன் மஞ்சள் சோப்பு - ₹20)",
    price: 20,
    unit: "1 Bar (₹20)",
    image: "images/arasan_yellow_soap.png",
    icon: "fa-soap"
  },

  // 2. Washing Powders
  {
    id: "house-rin-powder-10rs",
    category: "household",
    name: "Rin Advanced Detergent Powder (ரின் சலவைத் தூள் - ₹10 Sachet)",
    price: 10,
    unit: "1 Sachet (₹10)",
    image: "images/rin_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-rin-powder-56rs",
    category: "household",
    name: "Rin Advanced Detergent Powder (ரின் சலவைத் தூள் - 500g)",
    price: 56,
    unit: "500 g",
    image: "images/rin_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-rin-powder-114rs",
    category: "household",
    name: "Rin Advanced Detergent Powder (ரின் சலவைத் தூள் - 1kg)",
    price: 114,
    unit: "1 kg",
    image: "images/rin_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-surf-excel-powder-10rs",
    category: "household",
    name: "Surf Excel Easy Wash Powder (சர்ப் எக்செல் பவுடர் - ₹10 Sachet)",
    price: 10,
    unit: "1 Sachet (₹10)",
    image: "images/surf_excel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-surf-excel-powder-87rs",
    category: "household",
    name: "Surf Excel Easy Wash Powder (சர்ப் எக்செல் பவுடர் - 500g)",
    price: 87,
    unit: "500 g",
    image: "images/surf_excel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-surf-excel-powder-175rs",
    category: "household",
    name: "Surf Excel Easy Wash Powder (சர்ப் எக்செல் பவுடர் - 1kg)",
    price: 175,
    unit: "1 kg",
    image: "images/surf_excel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-ariel-powder-10rs",
    category: "household",
    name: "Ariel Perfect Wash Detergent Powder (ஏரியல் பவுடர் - ₹10 Sachet)",
    price: 10,
    unit: "1 Sachet (₹10)",
    image: "images/ariel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-ariel-powder-62rs",
    category: "household",
    name: "Ariel Perfect Wash Detergent Powder (ஏரியல் பவுடர் - 500g)",
    price: 62,
    unit: "500 g",
    image: "images/ariel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-wheel-powder-48rs",
    category: "household",
    name: "Active Wheel Detergent Powder (வீல் பவுடர் - 500g)",
    price: 48,
    unit: "500 g",
    image: "images/wheel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-wheel-powder-95rs",
    category: "household",
    name: "Active Wheel Detergent Powder (வீல் பவுடர் - 1kg)",
    price: 95,
    unit: "1 kg",
    image: "images/wheel_powder.png",
    icon: "fa-soap"
  },
  {
    id: "house-tide-powder-52rs",
    category: "household",
    name: "Tide Plus Extra Power Detergent Powder (டைட் பவுடர் - 500g)",
    price: 52,
    unit: "500 g",
    image: "images/tide_powder.png",
    icon: "fa-soap"
  },

  // 3. Dishwash Bars, Liquids & Fabric Care
  {
    id: "house-vim-bar-5rs",
    category: "household",
    name: "Vim Dishwash Bar (விம் பார் - ₹5)",
    price: 5,
    unit: "1 Bar (₹5)",
    image: "images/vim_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-vim-bar-10rs",
    category: "household",
    name: "Vim Dishwash Bar (விம் பார் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/vim_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-vim-bar-20rs",
    category: "household",
    name: "Vim Dishwash Bar (விம் பார் - ₹20)",
    price: 20,
    unit: "1 Bar (₹20)",
    image: "images/vim_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-exo-bar-5rs",
    category: "household",
    name: "Exo Dishwash Bar (எக்ஸோ பார் - ₹5)",
    price: 5,
    unit: "1 Bar (₹5)",
    image: "images/exo_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-exo-bar-10rs",
    category: "household",
    name: "Exo Dishwash Bar (எக்ஸோ பார் - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/exo_bar.png",
    icon: "fa-soap"
  },
  {
    id: "house-exo-box-32rs",
    category: "household",
    name: "Exo Dishwash Round Tub / Box (எக்ஸோ டப் - ₹32)",
    price: 32,
    unit: "1 Tub (₹32)",
    image: "images/exo_box.png",
    icon: "fa-soap"
  },
  {
    id: "house-exo-box-63rs",
    category: "household",
    name: "Exo Dishwash Round Tub / Box (எக்ஸோ டப் - ₹63)",
    price: 63,
    unit: "1 Tub (₹63)",
    image: "images/exo_box.png",
    icon: "fa-soap"
  },
  {
    id: "house-gio-soap-10rs",
    category: "household",
    name: "GIO Dishwash Soap Bar (ஜியோ பாத்திரம் கழுவும் சோப்பு - ₹10)",
    price: 10,
    unit: "1 Bar (₹10)",
    image: "images/gio_soap.png",
    icon: "fa-soap"
  },
  {
    id: "house-vim-liquid-15rs",
    category: "household",
    name: "Vim Gel Dishwash Liquid Pouch (விம் ஜெல் லிக்விட் - ₹15)",
    price: 15,
    unit: "1 Pouch (₹15)",
    image: "images/vim_liquid.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "house-steel-scrub-8rs",
    category: "household",
    name: "Steel Wire Scrubber (ஸ்டீல் ஸ்க்ரப்பர் - ₹8)",
    price: 8,
    unit: "1 Piece (₹8)",
    image: "images/steel_scrubber.png",
    icon: "fa-circle-dot"
  },
  {
    id: "house-green-scrub-8rs",
    category: "household",
    name: "Exo / Scotch-Brite Green Scrub Pad (கிரீன் ஸ்க்ரப் - ₹8)",
    price: 8,
    unit: "1 Piece (₹8)",
    image: "images/green_scrubber.png",
    icon: "fa-square"
  },
  {
    id: "house-ujala-supreme-10rs",
    category: "household",
    name: "Ujala Supreme Fabric Whitener (உஜாலா சுப்ரீம் - ₹10)",
    price: 10,
    unit: "1 Bottle (₹10)",
    image: "images/ujala_supreme.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "house-ujala-supreme-20rs",
    category: "household",
    name: "Ujala Supreme Fabric Whitener (உஜாலா சுப்ரீம் - ₹20)",
    price: 20,
    unit: "1 Bottle (₹20)",
    image: "images/ujala_supreme.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "house-comfort-sachet-4rs",
    category: "household",
    name: "Comfort Fabric Conditioner Sachet (கம்ஃபோர்ட் - ₹4 Sachet)",
    price: 4,
    unit: "1 Sachet (₹4)",
    image: "images/comfort_sachet.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "house-comfort-pink-58rs",
    category: "household",
    name: "Comfort Fabric Conditioner Pink (கம்ஃபோர்ட் பிங்க் - ₹58 Bottle)",
    price: 58,
    unit: "1 Bottle (Pink - ₹58)",
    image: "images/comfort_pink.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "house-comfort-blue-58rs",
    category: "household",
    name: "Comfort Fabric Conditioner Blue (கம்ஃபோர்ட் ப்ளூ - ₹58 Bottle)",
    price: 58,
    unit: "1 Bottle (Blue - ₹58)",
    image: "images/comfort_blue.png",
    icon: "fa-bottle-droplet"
  },
  {
    id: "house-comfort-black-58rs",
    category: "household",
    name: "Comfort Fabric Conditioner Black (கம்ஃபோர்ட் பிளாக் - ₹58 Bottle)",
    price: 58,
    unit: "1 Bottle (Black - ₹58)",
    image: "images/comfort_black.png",
    icon: "fa-bottle-droplet"
  },

  // 4. Floor, Surface & Toilet Cleaners
  {
    id: "house-harpic-blue-46rs",
    category: "household",
    name: "Harpic Power Plus Toilet Cleaner Blue (ஹார்பிக் ப்ளூ - ₹46)",
    price: 46,
    unit: "200 ml (₹46)",
    image: "images/harpic_blue.png",
    icon: "fa-spray-can-sparkles"
  },
  {
    id: "house-harpic-red-48rs",
    category: "household",
    name: "Harpic Bathroom Cleaner Red (ஹார்பிக் ரெட் - ₹48)",
    price: 48,
    unit: "200 ml (₹48)",
    image: "images/harpic_red.png",
    icon: "fa-spray-can-sparkles"
  },
  {
    id: "house-lizol-lemon-44rs",
    category: "household",
    name: "Lizol Disinfectant Floor Cleaner Citrus Lemon (லைசால் எலுமிச்சை - ₹44)",
    price: 44,
    unit: "200 ml (₹44)",
    image: "images/lizol_lemon.png",
    icon: "fa-spray-can-sparkles"
  },
  {
    id: "house-lizol-pink-44rs",
    category: "household",
    name: "Lizol Disinfectant Floor Cleaner Floral Pink (லைசால் பூ வாசம் - ₹44)",
    price: 44,
    unit: "200 ml (₹44)",
    image: "images/lizol_pink.png",
    icon: "fa-spray-can-sparkles"
  },
  {
    id: "house-bleaching-powder-10rs",
    category: "household",
    name: "Bleaching Powder (ப்ளீச்சிங் பவுடர் - ₹10 Pack)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/bleaching_powder.png",
    icon: "fa-box-tissue"
  },
  {
    id: "house-bleaching-powder-250g",
    category: "household",
    name: "Bleaching Powder (ப்ளீச்சிங் பவுடர் - 250g)",
    price: 20,
    unit: "250 g",
    image: "images/bleaching_powder.png",
    icon: "fa-box-tissue"
  },
  {
    id: "house-bleaching-powder-500g",
    category: "household",
    name: "Bleaching Powder (ப்ளீச்சிங் பவுடர் - 500g)",
    price: 40,
    unit: "500 g",
    image: "images/bleaching_powder.png",
    icon: "fa-box-tissue"
  },
  {
    id: "house-bleaching-powder-1kg",
    category: "household",
    name: "Bleaching Powder (ப்ளீச்சிங் பவுடர் - 1kg)",
    price: 75,
    unit: "1 kg",
    image: "images/bleaching_powder.png",
    icon: "fa-box-tissue"
  },
  {
    id: "house-phenyl-white-50rs",
    category: "household",
    name: "Phenyl Floor Cleaner White (பினாயில் வெள்ளை - ₹50)",
    price: 50,
    unit: "1 Bottle (White - ₹50)",
    image: "images/phenyl_white.png",
    icon: "fa-spray-can-sparkles"
  },
  {
    id: "house-phenyl-green-50rs",
    category: "household",
    name: "Phenyl Floor Cleaner Green (பினாயில் பச்சை - ₹50)",
    price: 50,
    unit: "1 Bottle (Green - ₹50)",
    image: "images/phenyl_green.png",
    icon: "fa-spray-can-sparkles"
  },
  {
    id: "house-phenyl-pink-50rs",
    category: "household",
    name: "Phenyl Floor Cleaner Pink (பினாயில் பிங்க் - ₹50)",
    price: 50,
    unit: "1 Bottle (Pink - ₹50)",
    image: "images/phenyl_pink.png",
    icon: "fa-spray-can-sparkles"
  },

  // 5. Pest, Mosquito Care & Freshener
  {
    id: "house-goodknight-refill-85rs",
    category: "household",
    name: "Good Knight Flash Liquid Refill (குட்நைட் ரீபில் - ₹85)",
    price: 85,
    unit: "1 Refill (₹85)",
    image: "images/goodknight_refill.png",
    icon: "fa-shield-virus"
  },
  {
    id: "house-allout-refill-83rs",
    category: "household",
    name: "All Out Mosquito Liquid Refill (ஆல் அவுட் ரீபில் - ₹83)",
    price: 83,
    unit: "1 Refill (₹83)",
    image: "images/allout_refill.png",
    icon: "fa-shield-virus"
  },
  {
    id: "house-goodknight-combo-100rs",
    category: "household",
    name: "Good Knight Machine + Refill Combo (குட்நைட் மெஷின் செட் - ₹100)",
    price: 100,
    unit: "1 Machine + Refill Set (₹100)",
    image: "images/goodknight_combo.png",
    icon: "fa-shield-virus"
  },
  {
    id: "house-allout-combo-100rs",
    category: "household",
    name: "All Out Machine + Refill Combo (ஆல் அவுட் மெஷின் செட் - ₹100)",
    price: 100,
    unit: "1 Machine + Refill Set (₹100)",
    image: "images/allout_combo.png",
    icon: "fa-shield-virus"
  },
  {
    id: "house-goodknight-coil-5rs",
    category: "household",
    name: "Good Knight Mosquito Coils (குட்நைட் சுருள் - 1 Set)",
    price: 5,
    unit: "1 Set (₹5)",
    image: "images/goodknight_coils.png",
    icon: "fa-shield-virus"
  },
  {
    id: "house-goodknight-coil-45rs",
    category: "household",
    name: "Good Knight Mosquito Coils Packet (குட்நைட் சுருள் பாக்கெட் - 10 Coils)",
    price: 45,
    unit: "1 Packet (10 Coils - ₹45)",
    image: "images/goodknight_coils.png",
    icon: "fa-shield-virus"
  },
  {
    id: "house-hit-red-83rs",
    category: "household",
    name: "Hit Mosquito & Cockroach Spray Red (ஹிட் ரெட் ஸ்ப்ரே - 200ml)",
    price: 83,
    unit: "200 ml (Red - ₹83)",
    image: "images/hit_red_spray.png",
    icon: "fa-spray-can"
  },
  {
    id: "house-hit-black-83rs",
    category: "household",
    name: "Hit Mosquito Spray Black (ஹிட் பிளாக் ஸ்ப்ரே - 200ml)",
    price: 83,
    unit: "200 ml (Black - ₹83)",
    image: "images/hit_black_spray.png",
    icon: "fa-spray-can"
  },
  {
    id: "house-odonil-20rs",
    category: "household",
    name: "Odonil Air Freshener Block (ஓடோனில் நறுமணம் - ₹20)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/odonil_packet.png",
    icon: "fa-wind"
  },
  // -------------------------------------------------------------
  // CATEGORY 16: POOJA & DEVOTIONAL ITEMS (பூஜை பொருட்கள்)
  // -------------------------------------------------------------
  {
    id: "dev-camphor-pkt-5rs",
    category: "devotional",
    name: "Camphor Packet (கற்பூரம் பாக்கெட் - ₹5)",
    price: 5,
    unit: "1 Small Pack (₹5)",
    image: "images/camphor_packet.png",
    icon: "fa-fire"
  },
  {
    id: "dev-camphor-pkt-10rs",
    category: "devotional",
    name: "Camphor Packet (கற்பூரம் பாக்கெட் - ₹10)",
    price: 10,
    unit: "1 Medium Pack (₹10)",
    image: "images/camphor_packet.png",
    icon: "fa-fire"
  },
  {
    id: "dev-camphor-pkt-20rs",
    category: "devotional",
    name: "Camphor Packet (கற்பூரம் பாக்கெட் - ₹20)",
    price: 20,
    unit: "1 Big Pack (₹20)",
    image: "images/camphor_packet.png",
    icon: "fa-fire"
  },
  {
    id: "dev-camphor-pkt-45rs",
    category: "devotional",
    name: "Camphor Packet (கற்பூரம் பாக்கெட் - ₹45)",
    price: 45,
    unit: "1 Jumbo Pack (₹45)",
    image: "images/camphor_packet.png",
    icon: "fa-fire"
  },
  {
    id: "dev-camphor-btl-45rs",
    category: "devotional",
    name: "Camphor Bottle (கற்பூரம் டப்பா / பாட்டில் - ₹45)",
    price: 45,
    unit: "1 Small Bottle (₹45)",
    image: "images/camphor_bottle.png",
    icon: "fa-fire"
  },
  {
    id: "dev-camphor-btl-95rs",
    category: "devotional",
    name: "Camphor Bottle (கற்பூரம் டப்பா / பாட்டில் - ₹95)",
    price: 95,
    unit: "1 Big Bottle (₹95)",
    image: "images/camphor_bottle.png",
    icon: "fa-fire"
  },
  {
    id: "dev-cycle-agarbathi-10rs",
    category: "devotional",
    name: "Cycle Pure Agarbathi (சைக்கிள் பியூர் அகர்பத்தி - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/cycle_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-cycle-agarbathi-20rs",
    category: "devotional",
    name: "Cycle Pure Agarbathi (சைக்கிள் பியூர் அகர்பத்தி - ₹20)",
    price: 20,
    unit: "1 Medium Pack (₹20)",
    image: "images/cycle_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-cycle-agarbathi-45rs",
    category: "devotional",
    name: "Cycle Pure Agarbathi (சைக்கிள் பியூர் அகர்பத்தி - ₹45)",
    price: 45,
    unit: "1 Big Pack (₹45)",
    image: "images/cycle_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-rose-agarbathi-10rs",
    category: "devotional",
    name: "Rose Agarbathi (ரோஸ் நறுமண அகர்பத்தி - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/rose_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-mangaldeep-agarbathi-10rs",
    category: "devotional",
    name: "Mangaldeep Agarbathi (மங்கள்தீப் அகர்பத்தி - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/mangaldeep_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-mangaldeep-agarbathi-45rs",
    category: "devotional",
    name: "Mangaldeep Agarbathi (மங்கள்தீப் அகர்பத்தி - ₹45)",
    price: 45,
    unit: "1 Big Pack (₹45)",
    image: "images/mangaldeep_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-zedblack-agarbathi-45rs",
    category: "devotional",
    name: "Zed Black Agarbathi (ஸெட் பிளாக் அகர்பத்தி - ₹45)",
    price: 45,
    unit: "1 Pack (₹45)",
    image: "images/zedblack_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-whitestick-agarbathi-45rs",
    category: "devotional",
    name: "White Stick Agarbathi (ஒயிட் ஸ்டிக் அகர்பத்தி - ₹45)",
    price: 45,
    unit: "1 Pack (₹45)",
    image: "images/whitestick_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-sadhavi-agarbathi-30rs",
    category: "devotional",
    name: "Sadhavi Agarbathi (சாத்வி அகர்பத்தி - ₹30)",
    price: 30,
    unit: "1 Pack (₹30)",
    image: "images/sadhavi_agarbathi.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-sivam-sambrani-16rs",
    category: "devotional",
    name: "Sivam Sambrani (சிவம் சாம்பிராணி - ₹16)",
    price: 16,
    unit: "1 Pack (₹16)",
    image: "images/sivam_sambrani.png",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "dev-mangaldeep-sambrani-20rs",
    category: "devotional",
    name: "Mangaldeep Sambrani (மங்கள்தீப் சாம்பிராணி - ₹20)",
    price: 20,
    unit: "1 Pack (₹20)",
    image: "images/mangaldeep_sambrani.png",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "dev-camel-sambrani-16rs",
    category: "devotional",
    name: "Camel Sambrani (கேமல் சாம்பிராணி - ₹16)",
    price: 16,
    unit: "1 Pack (₹16)",
    image: "images/camel_sambrani.png",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "dev-sugandhi-sambrani-15rs",
    category: "devotional",
    name: "Sugandhi Sambrani (சுகந்தி சாம்பிராணி - ₹15)",
    price: 15,
    unit: "1 Pack (₹15)",
    image: "images/sugandhi_sambrani.png",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "dev-cup-sambrani-50rs",
    category: "devotional",
    name: "Cup Sambrani Box (கப் சாம்பிராணி பாக்ஸ் - ₹50)",
    price: 50,
    unit: "1 Box (₹50)",
    image: "images/cup_sambrani.png",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "dev-katti-sambrani-20rs",
    category: "devotional",
    name: "Katti Sambrani (கட்டி சாம்பிராணி - ₹20)",
    price: 20,
    unit: "1 Packet (₹20)",
    image: "images/katti_sambrani.png",
    icon: "fa-fire-flame-curved"
  },
  {
    id: "dev-kumkum-5rs",
    category: "devotional",
    name: "Pooja Kumkum (பூஜை குங்குமம் - ₹5)",
    price: 5,
    unit: "1 Small Pack (₹5)",
    image: "images/pooja_kumkum.png",
    icon: "fa-spa"
  },
  {
    id: "dev-kumkum-10rs",
    category: "devotional",
    name: "Pooja Kumkum (பூஜை குங்குமம் - ₹10)",
    price: 10,
    unit: "1 Medium Pack (₹10)",
    image: "images/pooja_kumkum.png",
    icon: "fa-spa"
  },
  {
    id: "dev-turmeric-15rs",
    category: "devotional",
    name: "Pooja Turmeric Powder (பூஜை மஞ்சள் தூள் - ₹15)",
    price: 15,
    unit: "1 Pack (₹15)",
    image: "images/pooja_turmeric.png",
    icon: "fa-mortar-pestle"
  },
  {
    id: "dev-vibhuti-5rs",
    category: "devotional",
    name: "Holy Ash / Vibhuti (தூய திருநீறு / விபூதி - ₹5)",
    price: 5,
    unit: "1 Small Pack (₹5)",
    image: "images/pooja_vibhuti.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-vibhuti-10rs",
    category: "devotional",
    name: "Holy Ash / Vibhuti (தூய திருநீறு / விபூதி - ₹10)",
    price: 10,
    unit: "1 Medium Pack (₹10)",
    image: "images/pooja_vibhuti.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-vibhuti-25rs",
    category: "devotional",
    name: "Holy Ash / Vibhuti (தூய திருநீறு / விபூதி - ₹25)",
    price: 25,
    unit: "1 Big Pack (₹25)",
    image: "images/pooja_vibhuti.png",
    icon: "fa-hands-praying"
  },
  {
    id: "dev-sandal-pkt-10rs",
    category: "devotional",
    name: "Sandal Tablet / Packet (சந்தன மாத்திரை / பாக்கெட் - ₹10)",
    price: 10,
    unit: "1 Packet (₹10)",
    image: "images/sandal_packet.png",
    icon: "fa-spa"
  },
  {
    id: "dev-sandal-pkt-25rs",
    category: "devotional",
    name: "Sandal Tablet / Packet (சந்தன மாத்திரை / பாக்கெட் - ₹25)",
    price: 25,
    unit: "1 Big Packet (₹25)",
    image: "images/sandal_packet.png",
    icon: "fa-spa"
  },
  {
    id: "dev-sandal-btl-23rs",
    category: "devotional",
    name: "Sandal Paste Bottle (சந்தன பேஸ்ட் பாட்டில் - ₹23)",
    price: 23,
    unit: "1 Bottle (₹23)",
    image: "images/sandal_bottle.png",
    icon: "fa-spa"
  },
  {
    id: "dev-cotton-wicks-2rs",
    category: "devotional",
    name: "Cotton Wicks / Lamp Thiri (விளக்கு பஞ்சு திரி - ₹2)",
    price: 2,
    unit: "1 Small Pack (₹2)",
    image: "images/cotton_wicks.png",
    icon: "fa-fire"
  },
  {
    id: "dev-cotton-wicks-3rs",
    category: "devotional",
    name: "Cotton Wicks / Lamp Thiri (விளக்கு பஞ்சு திரி - ₹3)",
    price: 3,
    unit: "1 Pack (₹3)",
    image: "images/cotton_wicks.png",
    icon: "fa-fire"
  },
  {
    id: "dev-matchbox-1rs",
    category: "devotional",
    name: "Safety Matchbox (தீப்பெட்டி - ₹1)",
    price: 1,
    unit: "1 Single Box (₹1)",
    image: "images/safety_matchbox.png",
    icon: "fa-fire"
  },
  {
    id: "dev-matchbox-2rs",
    category: "devotional",
    name: "Safety Matchbox (தீப்பெட்டி - ₹2)",
    price: 2,
    unit: "1 Big Box (₹2)",
    image: "images/safety_matchbox.png",
    icon: "fa-fire"
  },
  {
    id: "dev-matchbox-bundle-10rs",
    category: "devotional",
    name: "Safety Matchbox Bundle (தீப்பெட்டி கட்டு - 10 Boxes)",
    price: 10,
    unit: "10 Pieces Pack (₹10)",
    image: "images/safety_matchbox_bundle.png",
    icon: "fa-fire"
  },
  // -------------------------------------------------------------
  // CATEGORY 17: STATIONERY & SCHOOL SUPPLIES (பள்ளி & அலுவலக பொருட்கள்)
  // -------------------------------------------------------------
  {
    id: "stat-apsara-pencil-single",
    category: "stationery",
    name: "Apsara Extra Dark Pencil (அப்சரா பென்சில் - ₹5)",
    price: 5,
    unit: "1 Pencil (₹5)",
    image: "images/apsara_pencil.png",
    icon: "fa-pencil"
  },
  {
    id: "stat-apsara-pencil-box",
    category: "stationery",
    name: "Apsara Extra Dark Pencil Box (அப்சரா பென்சில் பாக்ஸ் - 10 Pcs)",
    price: 50,
    unit: "1 Box (10 Pencils - ₹50)",
    image: "images/apsara_pencil_box.png",
    icon: "fa-pencil"
  },
  {
    id: "stat-nataraj-pencil-single",
    category: "stationery",
    name: "Nataraj 621 Bold Pencil (நடராஜ் பென்சில் - ₹5)",
    price: 5,
    unit: "1 Pencil (₹5)",
    image: "images/nataraj_pencil.png",
    icon: "fa-pencil"
  },
  {
    id: "stat-nataraj-pencil-box",
    category: "stationery",
    name: "Nataraj 621 Pencil Box (நடராஜ் பென்சில் பாக்ஸ் - 10 Pcs)",
    price: 50,
    unit: "1 Box (10 Pencils - ₹50)",
    image: "images/nataraj_pencil_box.png",
    icon: "fa-pencil"
  },
  {
    id: "stat-doms-pencil-single",
    category: "stationery",
    name: "Doms Neon / Groove Pencil (டோம்ஸ் பென்சில் - ₹5)",
    price: 5,
    unit: "1 Pencil (₹5)",
    image: "images/doms_pencil.png",
    icon: "fa-pencil"
  },
  {
    id: "stat-doms-pencil-box",
    category: "stationery",
    name: "Doms Pencil Box (டோம்ஸ் பென்சில் பாக்ஸ் - 10 Pcs)",
    price: 50,
    unit: "1 Box (10 Pencils - ₹50)",
    image: "images/doms_pencil_box.png",
    icon: "fa-pencil"
  },
  {
    id: "stat-refill-pen-6rs",
    category: "stationery",
    name: "Ballpoint Refill Pen (ரீஃபில் பால்பாயிண்ட் பேனா - ₹6)",
    price: 6,
    unit: "1 Pen (₹6)",
    image: "images/refill_pen.png",
    icon: "fa-pen-clip"
  },
  {
    id: "stat-ox-pen-10rs",
    category: "stationery",
    name: "OX Ball Pen (ஓஎக்ஸ் பால்பாயிண்ட் பேனா - ₹10)",
    price: 10,
    unit: "1 Pen (₹10)",
    image: "images/ox_pen.png",
    icon: "fa-pen-clip"
  },
  {
    id: "stat-reynolds-pen-10rs",
    category: "stationery",
    name: "Reynolds Ballpoint Pen (ரெய்னால்ட்ஸ் பேனா - ₹10)",
    price: 10,
    unit: "1 Pen (₹10)",
    image: "images/reynolds_pen.png",
    icon: "fa-pen-clip"
  },
  {
    id: "stat-montex-pen-10rs",
    category: "stationery",
    name: "Montex Gel / Ball Pen (மான்டெக்ஸ் பேனா - ₹10)",
    price: 10,
    unit: "1 Pen (₹10)",
    image: "images/montex_pen.png",
    icon: "fa-pen-clip"
  },
  {
    id: "stat-ink-pen-45rs",
    category: "stationery",
    name: "Fountain Ink Pen (மை பேனா / இங்க் பேனா - ₹45)",
    price: 45,
    unit: "1 Pen (₹45)",
    image: "images/ink_pen.png",
    icon: "fa-pen-nib"
  },
  {
    id: "stat-nataraj-eraser-3rs",
    category: "stationery",
    name: "Nataraj Plasto Eraser (நடராஜ் அழிப்பான் - ₹3)",
    price: 3,
    unit: "1 Small Eraser (₹3)",
    image: "images/nataraj_eraser.png",
    icon: "fa-eraser"
  },
  {
    id: "stat-nataraj-eraser-5rs",
    category: "stationery",
    name: "Nataraj Plasto Eraser (நடராஜ் அழிப்பான் - ₹5)",
    price: 5,
    unit: "1 Big Eraser (₹5)",
    image: "images/nataraj_eraser.png",
    icon: "fa-eraser"
  },
  {
    id: "stat-apsara-eraser-3rs",
    category: "stationery",
    name: "Apsara Non-Dust Eraser (அப்சரா அழிப்பான் - ₹3)",
    price: 3,
    unit: "1 Small Eraser (₹3)",
    image: "images/apsara_eraser.png",
    icon: "fa-eraser"
  },
  {
    id: "stat-apsara-eraser-5rs",
    category: "stationery",
    name: "Apsara Non-Dust Eraser (அப்சரா அழிப்பான் - ₹5)",
    price: 5,
    unit: "1 Big Eraser (₹5)",
    image: "images/apsara_eraser.png",
    icon: "fa-eraser"
  },
  {
    id: "stat-sharpener-5rs",
    category: "stationery",
    name: "Pencil Sharpener (பென்சில் சீவி / ஷார்ப்னர் - ₹5)",
    price: 5,
    unit: "1 Sharpener (₹5)",
    image: "images/pencil_sharpener.png",
    icon: "fa-shapes"
  },
  {
    id: "stat-small-note-tamil-20rs",
    category: "stationery",
    name: "Small Notebook - Tamil 2-Line (தமிழ் நோட்டு 80 பக்கங்கள் - ₹20)",
    price: 20,
    unit: "80 Pages (2-Line - ₹20)",
    image: "images/small_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-small-note-english-20rs",
    category: "stationery",
    name: "Small Notebook - English 4-Line (ஆங்கிலம் நோட்டு 80 பக்கங்கள் - ₹20)",
    price: 20,
    unit: "80 Pages (4-Line - ₹20)",
    image: "images/small_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-small-note-maths-20rs",
    category: "stationery",
    name: "Small Notebook - Maths Square (கணக்கு கட்ட நோட்டு 80 பக்கங்கள் - ₹20)",
    price: 20,
    unit: "80 Pages (Square - ₹20)",
    image: "images/small_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-small-note-ruled-20rs",
    category: "stationery",
    name: "Small Notebook - Single Ruled (கோடு போட்ட நோட்டு 80 பக்கங்கள் - ₹20)",
    price: 20,
    unit: "80 Pages (Single Ruled - ₹20)",
    image: "images/small_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-small-note-unruled-20rs",
    category: "stationery",
    name: "Small Notebook - Unruled (வெள்ளை நோட்டு 80 பக்கங்கள் - ₹20)",
    price: 20,
    unit: "80 Pages (Unruled - ₹20)",
    image: "images/small_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-long-note-ruled-45rs",
    category: "stationery",
    name: "Long Size Notebook - Single Ruled (லாங் நோட்டு கோடு போட்டது - ₹45)",
    price: 45,
    unit: "1 Long Notebook (Ruled - ₹45)",
    image: "images/long_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-long-note-unruled-45rs",
    category: "stationery",
    name: "Long Size Notebook - Unruled (லாங் நோட்டு வெள்ளை - ₹45)",
    price: 45,
    unit: "1 Long Notebook (Unruled - ₹45)",
    image: "images/long_notebook.png",
    icon: "fa-book-open"
  },
  {
    id: "stat-chart-paper-6rs",
    category: "stationery",
    name: "Multicolor Chart Paper (வண்ண சார்ட் பேப்பர் - ₹6)",
    price: 6,
    unit: "1 Sheet (₹6)",
    image: "images/chart_paper.png",
    icon: "fa-note-sticky"
  },
  {
    id: "stat-fevicol-5rs",
    category: "stationery",
    name: "Fevicol MR Squeeze Bottle (ஃபெவிகால் பசை - ₹5)",
    price: 5,
    unit: "1 Squeeze Pack (₹5)",
    image: "images/fevicol_glue.png",
    icon: "fa-paste"
  },
  {
    id: "stat-fevicol-10rs",
    category: "stationery",
    name: "Fevicol MR Squeeze Bottle (ஃபெவிகால் பசை - ₹10)",
    price: 10,
    unit: "1 Bottle (₹10)",
    image: "images/fevicol_glue.png",
    icon: "fa-paste"
  },
  {
    id: "stat-fevistick-5rs",
    category: "stationery",
    name: "Fevi Stik Super Glue Stick (ஃபெவிஸ்டிக் பசை - ₹5)",
    price: 5,
    unit: "1 Stick (₹5)",
    image: "images/fevistick.png",
    icon: "fa-paste"
  },
  {
    id: "stat-fevikwik-5rs",
    category: "stationery",
    name: "Fevikwik Instant Adhesive (ஃபெவிக்விக் - ₹5)",
    price: 5,
    unit: "1 Tube (₹5)",
    image: "images/fevistick.png",
    icon: "fa-paste"
  },
  {
    id: "stat-anabond-5rs",
    category: "stationery",
    name: "Anabond Super Glue / Quick Fix (அனபான்ட் பசை - ₹5)",
    price: 5,
    unit: "1 Tube (₹5)",
    image: "images/anabond_glue.png",
    icon: "fa-paste"
  },
  {
    id: "stat-liquid-gum-5rs",
    category: "stationery",
    name: "Office Liquid Gum / Glue (கம் பாட்டில் - ₹5)",
    price: 5,
    unit: "1 Bottle (₹5)",
    image: "images/liquid_gum.png",
    icon: "fa-paste"
  },
  {
    id: "stat-scale-15cm-5rs",
    category: "stationery",
    name: "Plastic Ruler / Scale 15cm (சின்ன ஸ்கேல் 15cm - ₹5)",
    price: 5,
    unit: "1 Scale (15 cm - ₹5)",
    image: "images/plastic_scale.png",
    icon: "fa-ruler"
  },
  {
    id: "stat-scale-30cm-10rs",
    category: "stationery",
    name: "Plastic Ruler / Scale 30cm (பெரிய ஸ்கேல் 30cm - ₹10)",
    price: 10,
    unit: "1 Scale (30 cm - ₹10)",
    image: "images/plastic_scale.png",
    icon: "fa-ruler"
  },
  {
    id: "stat-crayons-10rs",
    category: "stationery",
    name: "Wax Crayons Color Set (மெழுகு வண்ண கிரையான்ஸ் - ₹10)",
    price: 10,
    unit: "1 Pack (₹10)",
    image: "images/crayons_set.png",
    icon: "fa-palette"
  },
  {
    id: "stat-color-pencils-20rs",
    category: "stationery",
    name: "Color Pencils Set (வண்ண பென்சில்கள் - ₹20)",
    price: 20,
    unit: "1 Pack (₹20)",
    image: "images/color_pencils.png",
    icon: "fa-palette"
  },
  {
    id: "stat-sketch-pens-20rs",
    category: "stationery",
    name: "Sketch Pens Color Set (ஸ்கெட்ச் பேனாக்கள் - ₹20)",
    price: 20,
    unit: "1 Pack (₹20)",
    image: "images/sketch_pens.png",
    icon: "fa-palette"
  },
  {
    id: "stat-a4-sheets-10rs",
    category: "stationery",
    name: "A4 White Paper Sheets Pack (ஏ4 வெள்ளை பேப்பர் கட்டு)",
    price: 10,
    unit: "1 Pack (10 Sheets - ₹10)",
    image: "images/a4_sheets.png",
    icon: "fa-file-lines"
  },
  {
    id: "stat-ruled-paper-10rs",
    category: "stationery",
    name: "Ruled Exam Paper Sheets (கோடு போட்ட பேப்பர் கட்டு)",
    price: 10,
    unit: "1 Pack (Ruled Sheets - ₹10)",
    image: "images/ruled_paper.png",
    icon: "fa-file-lines"
  },
  {
    id: "stat-unruled-paper-10rs",
    category: "stationery",
    name: "Unruled White Paper Sheets (வெள்ளை தாள் பேப்பர் கட்டு)",
    price: 10,
    unit: "1 Pack (Unruled Sheets - ₹10)",
    image: "images/unruled_paper.png",
    icon: "fa-file-lines"
  },
  // -------------------------------------------------------------
  // CATEGORY: INGREDIENTS & COOKING ESSENTIALS (சமையல் பொருட்கள்)
  // -------------------------------------------------------------
  {
    id: "ing-sakthi-appalam-20rs",
    category: "ingredients",
    name: "Sakthi Appalam (சக்தி அப்பளம் - ₹20)",
    price: 20,
    unit: "1 Pack (₹20)",
    image: "images/sakthi_appalam.png",
    icon: "fa-circle-dot"
  },
  {
    id: "ing-sakthi-appalam-30rs",
    category: "ingredients",
    name: "Sakthi Appalam (சக்தி அப்பளம் - ₹30)",
    price: 30,
    unit: "1 Big Pack (₹30)",
    image: "images/sakthi_appalam.png",
    icon: "fa-circle-dot"
  },
  {
    id: "ing-rsr-appalam-10rs",
    category: "ingredients",
    name: "RSR Appalam (ஆர்.எஸ்.ஆர் அப்பளம் - ₹10)",
    price: 10,
    unit: "1 Small Pack (₹10)",
    image: "images/rsr_appalam.png",
    icon: "fa-circle-dot"
  },
  {
    id: "ing-rsr-appalam-17rs",
    category: "ingredients",
    name: "RSR Appalam (ஆர்.எஸ்.ஆர் அப்பளம் - ₹17)",
    price: 17,
    unit: "1 Medium Pack (₹17)",
    image: "images/rsr_appalam.png",
    icon: "fa-circle-dot"
  },
  {
    id: "ing-rsr-appalam-32rs",
    category: "ingredients",
    name: "RSR Appalam (ஆர்.எஸ்.ஆர் அப்பளம் - ₹32)",
    price: 32,
    unit: "1 Big Pack (₹32)",
    image: "images/rsr_appalam.png",
    icon: "fa-circle-dot"
  },
  {
    id: "ing-rushi-semiya-15rs",
    category: "ingredients",
    name: "Rushi Vermicelli / Semiya (ருஷி சேமியா - ₹15)",
    price: 15,
    unit: "1 Pack (₹15)",
    image: "images/rushi_semiya.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "ing-sudar-semiya-18rs",
    category: "ingredients",
    name: "Sudar Vermicelli / Semiya (சுடர் சேமியா - ₹18)",
    price: 18,
    unit: "1 Pack (₹18)",
    image: "images/sudar_semiya.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "ing-anil-semiya-22rs",
    category: "ingredients",
    name: "Anil Roasted Semiya (அனில் வறுத்த சேமியா - ₹22)",
    price: 22,
    unit: "1 Pack (₹22)",
    image: "images/anil_semiya.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "ing-anil-ragi-semiya-25rs",
    category: "ingredients",
    name: "Anil Ragi Vermicelli / Semiya (அனில் ராகி சேமியா - ₹25)",
    price: 25,
    unit: "1 Pack (Ragi - ₹25)",
    image: "images/anil_ragi_semiya.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "ing-macaroni-200g",
    category: "ingredients",
    name: "Macaroni Pasta (மக்ரோனி பாஸ்தா - 200g)",
    price: 30,
    unit: "200 g (₹30)",
    image: "images/macaroni.png",
    icon: "fa-bowl-rice"
  },
  {
    id: "ing-munthiri-10g",
    category: "ingredients",
    name: "Cashews / Munthiri (முந்திரி பருப்பு - 10g)",
    price: 10,
    unit: "10 g (₹10)",
    image: "images/munthiri.png",
    icon: "fa-seedling"
  },
  {
    id: "ing-munthiri-20g",
    category: "ingredients",
    name: "Cashews / Munthiri (முந்திரி பருப்பு - 20g)",
    price: 20,
    unit: "20 g (₹20)",
    image: "images/munthiri.png",
    icon: "fa-seedling"
  },
  {
    id: "ing-badam-10g",
    category: "ingredients",
    name: "Almonds / Badam (பாதாம் பருப்பு - 10g)",
    price: 10,
    unit: "10 g (₹10)",
    image: "images/badam.png",
    icon: "fa-seedling"
  },
  {
    id: "ing-badam-50g",
    category: "ingredients",
    name: "Almonds / Badam (பாதாம் பருப்பு - 50g)",
    price: 50,
    unit: "50 g (₹50)",
    image: "images/badam.png",
    icon: "fa-seedling"
  },
  {
    id: "ing-ular-thiratchi-90rs",
    category: "ingredients",
    name: "Raisins / Ular Thiratchi (உலர் திராட்சை / கிஸ்மிஸ் - ₹90)",
    price: 90,
    unit: "1 Packet (₹90)",
    image: "images/ular_thiratchi.png",
    icon: "fa-cubes-stacked"
  },
  {
    id: "ing-gulab-jamun-mix-135rs",
    category: "ingredients",
    name: "Gulab Jamun Mix (குலாப் ஜாமூன் மிக்ஸ் - 1+1 Offer)",
    price: 135,
    unit: "1 Pack (Buy 1 Get 1 Free - ₹135)",
    image: "images/gulab_jamun_mix.png",
    icon: "fa-cake-candles"
  },
  {
    id: "ing-payasam-mix-90rs",
    category: "ingredients",
    name: "Aachi Royal Semiya Payasam Mix (ஆச்சி பாயாசம் மிக்ஸ் - 1+1 Offer - ₹90)",
    price: 90,
    unit: "1 Packet (Buy 1 Get 1 Free - ₹90)",
    image: "images/aachi_payasam_mix.png",
    icon: "fa-mug-hot"
  }
];