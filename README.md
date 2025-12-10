# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS v4.

## Features

- 🎨 **Modern Design** - Clean, professional design with dark mode support
- ⚡ **Performance** - Optimized for Core Web Vitals with lazy loading and code splitting
- 📱 **Responsive** - Fully responsive design that works on all devices
- ♿ **Accessible** - Built with accessibility best practices
- 🌙 **Dark Mode** - System preference detection with manual toggle
- 🎭 **Animations** - Smooth scroll-triggered animations and transitions
- 🎨 **WebGL Background** - Interactive liquid ether animation using Three.js

## Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript** - Full type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Three.js** - 3D graphics for background animation
- **React Hook Form** - Form validation and handling
- **Web3Forms** - Contact form submission

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Web3Forms access key to `.env`:
```
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

You can get a free access key from [Web3Forms](https://web3forms.com).

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images, icons, and other static assets
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles and Tailwind configuration
├── public/              # Public assets
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## Deployment

This project is configured for deployment on GitHub Pages via GitHub Actions. The workflow automatically builds and deploys on pushes to the `main` branch.

## License

This project is private and proprietary.

## Contact

For inquiries, please use the contact form on the website or reach out via:
- Email: contact@hunterwindham.dev
- LinkedIn: [hunterwindham](https://www.linkedin.com/in/hunterwindham/)
- GitHub: [hunterwindham](https://github.com/hunterwindham)
