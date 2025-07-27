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

## Setup React Project in Existing Folder

### Option 1: Setup in Current Directory (Recommended)

```bash
# Navigate to your existing project folder
cd your-project-folder

# Create Vite React project in current directory (will prompt to continue)
npm create vite@latest . -- --template react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Alternative Method

```bash
# Navigate to your existing project folder
cd your-project-folder

# Create temporary project and move files
npm create vite@latest temp-project -- --template react
mv temp-project/* .
mv temp-project/.* . 2>/dev/null || true
rmdir temp-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 3: Manual Setup

```bash
# Navigate to your existing project folder
cd your-project-folder

# Initialize package.json
npm init -y

# Install Vite and React dependencies
npm install vite @vitejs/plugin-react react react-dom

# Install dev dependencies (optional)
npm install -D @types/react @types/react-dom

# Create vite.config.js, index.html, and src folder manually
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

## Generic Project Structure

```
your-project-folder/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
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

> **For Project Folders**: Use the "Setup React Project in Existing Folder" commands above to initialize React in any of your existing project directories (01-color-palette-generator, 02-password-generator, etc.).
