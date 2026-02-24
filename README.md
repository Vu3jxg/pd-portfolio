# Poulami Dhar — Portfolio

A dynamic, animated personal portfolio for **Poulami Dhar**, a medical researcher interested in medical science, technology, and philosophy.

## 🚀 Tech Stack

- **React 18** + **Vite** — fast dev/build
- **Framer Motion** — page animations, scroll reveals, hover effects
- **React Intersection Observer** — trigger animations on scroll
- **Canvas API** — particle network hero background
- **Pure CSS** — glassmorphism cards, CSS variables, custom animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor/          Custom animated cursor
│   ├── Preloader/       DNA-wave loading screen
│   ├── Navbar/          Sticky navbar with section tracking
│   ├── Hero/            Typewriter + particle canvas
│   ├── About/           Animated avatar + number counters
│   ├── Interests/       Three interest cards
│   ├── Skills/          Animated skill bars + tech chips
│   ├── Experience/      Vertical timeline
│   ├── Research/        Project cards grid
│   ├── QuoteSection/    Philosophy quote
│   ├── Contact/         Form (mailto) + contact info
│   ├── Footer/          Footer with nav
│   └── BackToTop/       Spring-animated scroll button
├── App.jsx
├── main.jsx
└── index.css            Global design tokens & utilities
```

## 🛠 Development

```bash
npm install
npm run dev
```

## 🌐 GitHub Pages Deployment

1. Update `homepage` in `package.json` to your GitHub Pages URL:
   ```
   "homepage": "https://YOUR_USERNAME.github.io/pd-portfolio"
   ```
2. Update `base` in `vite.config.js` to match your repo name:
   ```js
   base: '/pd-portfolio/'
   ```
3. Install gh-pages and deploy:
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

This builds the app and pushes the `dist/` folder to the `gh-pages` branch automatically.

## ✏️ Customising

Update these files with your real information:
- **Email / LinkedIn / GitHub** → `src/components/Contact/Contact.jsx`
- **Skills & percentages** → `src/components/Skills/Skills.jsx`
- **Projects** → `src/components/Research/Research.jsx`
- **Timeline entries** → `src/components/Experience/Experience.jsx`
