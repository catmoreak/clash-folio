
# Clash of Clans Portfolio – Astro Edition

Welcome to your professional Clash of Clans–themed portfolio, built with [Astro](https://astro.build/)! This site features a custom animated treasure map, stylish navigation, and a modern, game-inspired design.

## ✨ Features

- **Animated Treasure Map**: SVG-based, parchment-style map with animated pirate ship, treasure route, islands, and pulsing treasure marker.
- **Professional Visuals**: Custom styles, themed colors, and polished layout.
- **Responsive Design**: Works great on desktop and mobile.
- **Easy Navigation**: Navbar with quick access to the map and other pages.

## 🚀 Getting Started

Clone this repo and install dependencies:

```sh
git clone <your-repo-url>
cd my-website
npm install
```

Start the local development server:

```sh
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view your site.

## 📁 Project Structure

```text
/ (root)
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/         # Images and SVGs
│   ├── components/     # Reusable UI components (e.g., Navbar)
│   ├── layouts/        # Layout wrappers
│   └── pages/          # Site pages (index.astro, map.astro, etc.)
├── package.json
└── README.md
```

## 🗺️ Map Page

- Find the animated treasure map at `/map`.
- Features:
  - Parchment background
  - Animated pirate ship following a treasure route
  - Bouncing treasure chests and coins
  - Pulsing "X marks the spot" with glow
  - Legend for map symbols

## 🧑‍💻 Scripts

| Command           | Action                                    |
|-------------------|-------------------------------------------|
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start local dev server                    |
| `npm run build`   | Build your production site to `./dist/`   |
| `npm run preview` | Preview your build locally                |

## 📦 Deployment

Build your site for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## � Credits

- Built with [Astro](https://astro.build/)
- Inspired by Clash of Clans visuals

---

For more info, see the [Astro documentation](https://docs.astro.build/).
