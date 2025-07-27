# Password Generator 🔐

**Level:** Beginner+  
**Time:** 3-4 hours  
**Focus:** Forms, State Management, Controlled Components

## What You'll Build

A secure password generator with customizable options. Users can adjust length, include/exclude character types, and generate strong passwords with visual strength indicators.

## Learning Goals

- Working with forms and input elements
- Controlled components with useState
- Handling multiple state variables
- String manipulation and randomization
- Conditional rendering
- Props and component communication

## Features to Implement

1. **Password Length Slider** - Adjust from 8-50 characters
2. **Character Options** - Checkboxes for uppercase, lowercase, numbers, symbols
3. **Generate Button** - Creates new password based on settings
4. **Copy to Clipboard** - One-click copy functionality
5. **Password Strength** - Visual indicator (weak/medium/strong)
6. **Password History** - Show last 5 generated passwords

## Project Structure

```
src/
  components/
    PasswordGenerator.js  # Main component
    PasswordOptions.js    # Settings form
    PasswordDisplay.js    # Shows generated password
    StrengthMeter.js     # Visual strength indicator
  utils/
    passwordUtils.js     # Password generation logic
  App.js
  index.css
```

## Step-by-Step Guide

### Step 1: Setup & Planning (20 mins)

```bash
npx create-react-app password-generator
cd password-generator
npm start
```

### Step 2: Create Options Component (60 mins)

- Learn about controlled inputs
- Range slider for password length
- Checkboxes for character types
- Form state management

### Step 3: Password Generation Logic (45 mins)

- Create utility functions
- Generate random characters
- Combine different character sets
- Handle edge cases

### Step 4: Display Component (30 mins)

- Show generated password
- Copy to clipboard functionality
- Visual feedback for copying

### Step 5: Strength Meter (45 mins)

- Calculate password strength
- Visual progress bar
- Color coding (red/yellow/green)

### Step 6: Password History (30 mins)

- Store previous passwords in state
- Display as a list
- Click to copy old passwords

## Key React Concepts

- **Controlled Components:** Form inputs managed by React state
- **useEffect:** Side effects and lifecycle
- **Props Drilling:** Passing data through components
- **Event Handling:** onChange, onClick events
- **Conditional Rendering:** Show/hide elements based on state
- **Array Methods:** map, filter, slice for data manipulation

## Code Examples

### Controlled Input

```jsx
const [length, setLength] = useState(12);

<input
  type="range"
  min="8"
  max="50"
  value={length}
  onChange={(e) => setLength(e.target.value)}
/>;
```

### Checkbox State

```jsx
const [options, setOptions] = useState({
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
});
```

## Bonus Challenges

- Export passwords to text file
- Password templates (for different sites)
- Dark/light theme toggle
- Save preferences to localStorage
- Password pronunciation guide

## Resources

- [React Forms Documentation](https://react.dev/reference/react-dom/components/input)
- [Password Security Best Practices](https://www.nist.gov/itl/applied-cybersecurity/tig/projects/special-publication-800-63)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

## Security Notes

- Never log or store generated passwords
- Use cryptographically secure random methods
- Educate about password best practices

## Next Steps

After mastering forms and state management here, you'll be ready for the Weather App where you'll learn about API calls and asynchronous operations!
