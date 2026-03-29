# AeroTeerth — Aastha ko Udaan do

> Luxury Char Dham Yatra by Helicopter — A minimalist, responsive static website.

## 🛕 About

AeroTeerth is a luxury pilgrimage planning company offering:
- **Char Dham Yatra** (5 Nights / 6 Days) — All four sacred dhams by helicopter
- **Do Dham Yatra** — Focused two-dham journeys
- **Custom Yatras** — Tailored pilgrimage experiences

## 🏗️ Project Structure

```
aeroteerth/
├── index.html              # Main single-page website
├── css/
│   ├── style.css           # Design system & global styles
│   ├── navbar.css          # Navigation component
│   ├── hero.css            # Hero section
│   └── components.css      # All other UI components
├── js/
│   └── main.js             # Interactivity (scroll, reveal, hamburger)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages auto-deploy
```

## 🚀 Deployment

This site deploys automatically to GitHub Pages on every push to `main`.

### Manual Setup

1. Fork / clone this repository
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. Push to `main` — the workflow handles the rest

### Local Development

No build step required. Just open `index.html` in your browser:

```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve .
```

## ✨ Features

- Fully static — no build tools, no dependencies
- Modular CSS (one file per concern)
- Responsive & mobile-first
- Scroll-based reveal animations
- IntersectionObserver for active nav links
- Accessible markup (ARIA labels, semantic HTML)
- Contact enquiry form with success feedback

## 📞 Contact

- **Phone:** +91 78921 46813
- **Email:** Sales@aeroteerth.com
- **Office:** Sector 62, Noida, Uttar Pradesh

---

*All flights operated under NSOP permit · Subject to DGCA & ATC clearances*
