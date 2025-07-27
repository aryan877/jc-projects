# Color Palette Generator 🎨

**Level:** Beginner  
**Time:** 2-3 hours  
**Focus:** JSX, Components, State, Event Handling

## What You'll Build

A beautiful color palette generator that creates random color schemes. Users can generate new palettes, copy hex codes, and see color names.

## Learning Goals

- Understanding JSX syntax and structure
- Creating functional components
- Using useState hook for state management
- Handling click events
- Working with arrays and map function
- Basic CSS styling in React

## Features to Implement

1. **Generate Random Palette** - Button to create 5 random colors
2. **Display Colors** - Show colors as cards with hex codes
3. **Copy to Clipboard** - Click any color to copy its hex code
4. **Color Names** - Display friendly names for colors
5. **Responsive Design** - Works on mobile and desktop

## Project Structure

```
01-color-palette-generator/
├── public/           # Static assets
├── src/
│   ├── components/
│   │   ├── ColorCard.jsx       # Individual color display
│   │   └── PaletteGenerator.jsx # Main component
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## Step-by-Step Guide

### Step 1: Setup (15 mins)

```bash
npx create-react-app color-palette-generator
cd color-palette-generator
npm start
```

### Step 2: Create ColorCard Component (30 mins)

- Learn about props
- Display hex code and color name
- Handle click to copy

### Step 3: Build Main Generator (45 mins)

- Generate random hex colors
- Store colors in state array
- Map over colors to render cards

### Step 4: Add Interactivity (30 mins)

- Copy to clipboard functionality
- Visual feedback for copied colors
- Generate new palette button

### Step 5: Styling (30 mins)

- CSS Grid for responsive layout
- Hover effects and transitions
- Mobile-friendly design

## Key React Concepts

- **Components:** Reusable UI pieces
- **Props:** Passing data between components
- **State:** Managing changing data with useState
- **Events:** Handling user interactions
- **Lists:** Rendering arrays with map()

## Bonus Challenges

- Save favorite palettes to localStorage
- Export palette as CSS variables
- Add color accessibility scores
- Implement different color harmony rules

## Resources

- [React Docs - Components](https://react.dev/learn/your-first-component)
- [React Docs - State](https://react.dev/learn/state-a-components-memory)
- [Color Theory Basics](https://www.canva.com/colors/color-wheel/)

## Next Steps

After completing this project, you'll be ready for the Password Generator where you'll learn about forms and more complex state management!
