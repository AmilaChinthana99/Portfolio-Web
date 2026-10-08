# Amila Chinthana - Cyberpunk Glassmorphism Portfolio

A production-ready, ultra-modern single-page personal portfolio built with **pure HTML5, CSS3, and Vanilla JavaScript** (zero frameworks, zero build step). Designed with a dark cyberpunk neon aesthetic, glowing visual effects, particle art canvas, interactive stat counters, project filtering, and Netlify Forms integration.

---

## 🌟 Key Features

- **Futuristic Aesthetic:** Dark navy base (`#05060f`) with cyan, pink, and violet glowing accents, glassmorphism cards (`backdrop-filter`), and animated gradient elements.
- **Particle & Light Canvas:** High-performance background canvas rendering glowing particle connections.
- **Dynamic Typing Hero:** Rotating roles ("Web Developer", "IoT Enthusiast", "Mobile App Developer", "UI/UX Designer", "Innovator").
- **Theme Accent Switcher:** Live accent color toggling between Cyan, Pink, and Violet with `localStorage` persistence.
- **Custom Glowing Cursor:** Interactive trailing neon cursor for desktop pointers.
- **Interactive Project Showcase:** Category filter tabs (All, Web, Mobile, Tools) with smooth transitions.
- **Netlify Forms Integration:** Fully functional AJAX-submitted contact form.
- **Responsive & Accessible:** Seamless mobile-first drawer navigation, keyboard focus rings, and `prefers-reduced-motion` compliance.

---

## 📁 File Structure

```text
Portfolio Web/
├── index.html              # Main HTML structure with SEO & JSON-LD
├── css/
│   └── style.css           # Complete design tokens & responsive styles
├── js/
│   └── main.js            # Particle canvas, typing, animations & form logic
├── assets/
│   ├── profile.png         # Main portrait photo (object-fit centered)
│   ├── favicon.svg         # Neon "AC" monogram favicon
│   └── Amila_Chinthana_CV.pdf # Placeholder CV document (Replace with your updated CV)
├── netlify.toml            # Netlify build configuration & security headers
└── README.md               # Documentation & deployment guide
```

---

## 📝 Updating Your CV

To upload your full Curriculum Vitae:
1. Export your CV as a PDF file named `Amila_Chinthana_CV.pdf`.
2. Replace the file at `assets/Amila_Chinthana_CV.pdf`.

---

## 🚀 Local Running

Since this project relies on vanilla HTML/CSS/JS with zero build steps, you can run it directly:

Using Node `serve` or VS Code Live Server:
```bash
npx serve .
```
Open `http://localhost:3000` in your browser.

---

## ☁️ Deployment to Netlify

### Method A: Netlify CLI (Automated)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

### Method B: Netlify Drag-and-Drop (Manual)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the root `Portfolio Web` folder directly into the browser upload box.
3. Once deployed, set your custom site name to `amilachinthana` under **Site Settings > Change Site Name**.

### Method C: GitHub Continuous Deployment
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Push to your GitHub repo (`AmilaChinthana99/Portfolio-Web`).
3. Connect your repo on Netlify dashboard. Netlify will automatically build and deploy every push!
