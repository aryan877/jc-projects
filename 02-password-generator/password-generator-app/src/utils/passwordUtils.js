// Character sets for password generation
const CHAR_SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

// Generate a random password based on options
export const generatePassword = (length, options) => {
  let availableChars = "";

  // Build character set based on selected options
  if (options.lowercase) {
    availableChars += CHAR_SETS.lowercase;
  }
  if (options.uppercase) {
    availableChars += CHAR_SETS.uppercase;
  }
  if (options.numbers) {
    availableChars += CHAR_SETS.numbers;
  }
  if (options.symbols) {
    availableChars += CHAR_SETS.symbols;
  }

  // Ensure at least one character type is selected
  if (availableChars === "") {
    availableChars = CHAR_SETS.lowercase; // Default fallback
  }

  let password = "";

  // Generate password character by character
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
};

// Calculate password strength (returns 0-4 scale)
export const calculatePasswordStrength = (password, options) => {
  let score = 0;

  // Length scoring
  if (password.length >= 8) {
    score += 1;
  }
  if (password.length >= 12) {
    score += 1;
  }
  if (password.length >= 16) {
    score += 1;
  }

  // Character variety scoring
  let varietyCount = 0;
  if (options.lowercase && /[a-z]/.test(password)) {
    varietyCount++;
  }
  if (options.uppercase && /[A-Z]/.test(password)) {
    varietyCount++;
  }
  if (options.numbers && /[0-9]/.test(password)) {
    varietyCount++;
  }
  if (options.symbols && /[^a-zA-Z0-9]/.test(password)) {
    varietyCount++;
  }

  // Add points for character variety
  if (varietyCount >= 3) {
    score += 1;
  }
  if (varietyCount >= 4) {
    score += 1;
  }

  return Math.min(score, 4); // Cap at 4
};

// Get strength label and color
export const getStrengthInfo = (strength) => {
  const strengthLevels = [
    { label: "Very Weak", color: "red", bgColor: "bg-red-500" },
    { label: "Weak", color: "orange", bgColor: "bg-orange-500" },
    { label: "Fair", color: "yellow", bgColor: "bg-yellow-500" },
    { label: "Good", color: "blue", bgColor: "bg-blue-500" },
    { label: "Strong", color: "green", bgColor: "bg-green-500" },
  ];

  return strengthLevels[strength] || strengthLevels[0];
};
