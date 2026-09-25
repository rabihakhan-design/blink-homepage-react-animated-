# Blink Homepage Clone (React)

Isi Blink website ke screenshots se banaya gaya homepage clone, React + Vite ke saath.
Saare images aapke diye gaye screenshots se hi crop kiye gaye hain (asli logo, device
mockups, customer logos, integration logos) — koi stock/placeholder image nahi.

## Logos strip — auto-sliding + more brands
"Trusted by Hundreds" wali logo strip ab ek continuous, infinite auto-sliding
marquee hai (`LogoMarquee` component). Isme:
- Aapke screenshots se cropped saare 10 asli logos (Tanmiah, Al Meera, Al Rifai,
  Baskin Robbins x2, Cakes & Bakes, Cinnabon, Dunkin, Jalal Sons, heart logo)
- + 10 extra well-known brand names (McDonald's, KFC, Pizza Hut, Domino's,
  Starbucks, Subway, Hardee's, Chili's, Papa John's, Burger King) — plain text
  badges, kyunki inki asli logo artwork trademarked hoti hai isliye reproduce
  nahi ki jaa sakti, sirf naam show kiya hai.

Speed/size change karni ho to `App.jsx` mein `blink-logo-scroll` animation ka
`32s` duration ya `LogoBadge` ka `height:64` value adjust kar dein. Hover karne
par slide pause ho jata hai.

## Buttons — sab functional hain
- **Book a Demo** (nav bar) → "Book a Demo" form modal khulta hai
- **Get Started** (hero) → smoothly Products section pe scroll karta hai
- **Products / Resources** (nav) → click karne se dropdown menu khulta hai, item click karne se us section pe scroll
- **About us / Pricing / Academy / Customers / Our Integrations** (nav) → apne section pe smooth scroll
- **Learn More** (har product card) → us product ki detail modal khulti hai, jisme "Book a Demo for this" button bhi hai
- **Chat bubble** (bottom-right) → click se chat window open/close hoti hai, message type karke "Send" bhi kaam karta hai

## Blue dot animation
"Connections" section mein (App / Merchant Console / Website / Restaurant POS wali
image) 3 blue dots hain. Ek time pe sirf ek dot "light" (glow + bada) hota hai, aur
har ~1.1 second baad woh highlight agle dot par shift ho jata hai — `src/App.jsx`
ke `ConnectionsSection` component mein `useState` + `setInterval` se control hota hai.
Dot position % values (`DOT_POINTS` array) tabhi change karein agar `scene.png`
image ka size/crop badlein.

## Run locally

```bash
npm install
npm run dev
```

Phir browser mein `http://localhost:5173` open karein.

## Build for production

```bash
npm run build
```

Output `dist/` folder mein banega, jise kahin bhi (Netlify, Vercel, etc.) host kar
sakte hain.

## Folder structure

```
src/
  App.jsx          -> pura homepage (nav, hero, connections, logos, products, integrations)
  main.jsx         -> React entry point
  assets/          -> aapke screenshots se crop ki gayi asli images
```
