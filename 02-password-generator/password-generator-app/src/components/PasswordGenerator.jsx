import { useState, useEffect, useCallback } from "react";
import { generatePassword } from "../utils/passwordUtils";
import PasswordOptions from "./PasswordOptions";
import PasswordDisplay from "./PasswordDisplay";
import StrengthMeter from "./StrengthMeter";
import PasswordHistory from "./PasswordHistory";

function PasswordGenerator() {
  // State for password configuration
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: false,
  });

  // State for generated data
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate a new password
  const handleGenerate = useCallback(async () => {
    setIsGenerating(true);

    // Add a small delay for visual feedback
    await new Promise((resolve) => setTimeout(resolve, 300));

    const newPassword = generatePassword(length, options);
    setPassword(newPassword);

    // Add to history (keep last 5)
    setHistory((prev) => {
      const newHistory = [newPassword, ...prev];
      return newHistory.slice(0, 5);
    });

    setIsGenerating(false);
  }, [length, options]);

  // Generate initial password when component mounts
  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  // Keyboard shortcut: Space to generate password (unless in input/textarea)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space" && !e.target.matches("input, textarea")) {
        e.preventDefault();
        handleGenerate();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleGenerate]);

  // Load preferences on mount
  useEffect(() => {
    const saved = localStorage.getItem("passwordPreferences");
    if (saved) {
      try {
        const { length: savedLength, options: savedOptions } =
          JSON.parse(saved);
        setLength(savedLength);
        setOptions(savedOptions);
      } catch (error) {
        console.error("Failed to load preferences:", error);
      }
    }
  }, []);

  // Save preferences when they change
  useEffect(() => {
    localStorage.setItem(
      "passwordPreferences",
      JSON.stringify({ length, options })
    );
  }, [length, options]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center py-10">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            🔐 Password Generator
          </h1>
          <p className="text-purple-100 text-lg">
            Create strong, secure passwords with customizable options
          </p>
          <p className="text-purple-200 text-sm mt-2">
            💡 Tip: Use different character types for maximum security
          </p>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <PasswordOptions
              length={length}
              setLength={setLength}
              options={options}
              setOptions={setOptions}
            />

            <PasswordDisplay
              password={password}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>

          {/* Right Column */}
          <div>
            <StrengthMeter password={password} options={options} />

            <PasswordHistory
              history={history}
              onCopy={(password) =>
                console.log("Copied from history:", password)
              }
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-10">
          <p className="text-purple-200 text-sm">
            🛡️ Your passwords are generated locally and never stored or
            transmitted
          </p>
        </footer>
      </div>
    </div>
  );
}

export default PasswordGenerator;
