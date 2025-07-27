# Vite React Setup Commands (2025)

## Quick Start - Create New React Project with JavaScript

### Method 1: Using npm (Recommended)

```bash
# Create new React project with Vite
npm create vite@latest my-react-app -- --template react

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Method 2: Using yarn

```bash
# Create new React project with Vite
yarn create vite my-react-app --template react

# Navigate to project directory
cd my-react-app

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Method 3: Using pnpm

```bash
# Create new React project with Vite
pnpm create vite my-react-app --template react

# Navigate to project directory
cd my-react-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Why Vite in 2025?

- ⚡ **Lightning Fast**: Instant server startup and hot module replacement
- 🚀 **Modern**: Uses native ES modules during development
- 📦 **Optimized Builds**: Rollup-based production builds
- 🔧 **Zero Config**: Works out of the box with sensible defaults
- 🎯 **Better DX**: Superior developer experience compared to Create React App

## Development Server

Your React app will be available at: `http://localhost:5173/`

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint (if configured)
```

## Project Structure

```
my-react-app/
├── public/          # Static assets
├── src/             # Source code
│   ├── App.jsx      # Main App component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Additional Setup (Optional)

### Add ESLint for Code Quality

```bash
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks
```

### Add Prettier for Code Formatting

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

### Add React Router for Navigation

```bash
npm install react-router-dom
```

---

> **Note**: Vite has become the standard for React development in 2025, replacing Create React App which is now deprecated. This setup provides the fastest development experience with modern tooling.
