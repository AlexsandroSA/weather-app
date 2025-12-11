# Weather App

[![Netlify Status](https://api.netlify.com/api/v1/badges/e620c35f-9261-44f4-ad69-f685de443b93/deploy-status)](https://app.netlify.com/sites/hopeful-morse-972f17/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)

A fast, simple and intuitive weather app with a clean interface — no clutter, no ads.

![Weather App Preview](/cover.png)

**[View Live Demo →](https://hopeful-morse-972f17.netlify.app/)**

## ✨ Features

- 🌍 **Geolocation-based** — Automatically detects your location
- 🎨 **Dynamic backgrounds** — Visual effects that match the weather
- 📱 **PWA support** — Install on any device, works offline
- ⚡ **Lightning fast** — Built with Vite for optimal performance
- 🧪 **Fully tested** — Unit tests with Vitest, E2E with Playwright

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- [OpenWeatherMap API key](https://openweathermap.org/appid) (free)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your OpenWeatherMap API key:

   ```env
   VITE_API_URL=https://api.openweathermap.org/data/2.5
   VITE_API_KEY=your_api_key_here
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:coverage` | Generate coverage report |
| `npm run e2e` | Run E2E tests |
| `npm run e2e:ui` | Run E2E tests with UI |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## 🌤️ Weather Types

The app supports dynamic backgrounds for these weather conditions:

| Type | Description |
|------|-------------|
| ☀️ Clear | Warm sunset gradient |
| ☁️ Clouds | Silver-gray atmosphere |
| 🌧️ Drizzle | Soft blue tones |
| 🌧️ Rain | Deep blue with rain animation |
| ❄️ Snow | Light blue with snowfall effect |
| ⛈️ Thunderstorm | Dark purple with lightning |

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Alexsandro Silva Alves](https://github.com/alexsandrosa)
