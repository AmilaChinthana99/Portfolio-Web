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

## 📧 EmailJS Setup Guide

The contact form is configured to send emails using **EmailJS** (`service_jn58snh`). To ensure proper delivery to your inbox:

1. **EmailJS Credentials (in `js/main.js`):**
   - `serviceId`: `service_jn58snh`
   - `templateId`: `template_2mcn2p2`
   - `publicKey`: `JtTQ2J0wrk7d8k2V6`

2. **Required Template Variables:**
   Ensure your EmailJS template (`template_2mcn2p2`) uses the following variable tags in the template editor:
   - `{{from_name}}` – Sender's Name
   - `{{reply_to}}` – Sender's Email
   - `{{subject}}` – Inquiry Subject
   - `{{message}}` – Message Body Content
   - `{{time}}` – Submission Timestamp

3. **EmailJS Dashboard Settings:**
   - **To Email:** `achinthanaa@gmail.com`
   - **Reply To:** `{{reply_to}}`

4. **Domain Restriction (Security):**
   - If domain restriction is enabled in your EmailJS dashboard under **Account > Security**, make sure to add your live domain (e.g., `https://amilachinthana.netlify.app` or `http://localhost:8080`) to the **Allowed Origins** list.

