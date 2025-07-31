import React, { useState, useEffect, useCallback } from "react";
import ColorCard from "./ColorCard";

function PaletteGenerator() {
  const [colors, setColors] = useState([]);

  const generateRandomColor = () => {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateNewPalette = useCallback(() => {
    const newColors = Array.from({ length: 5 }, () => generateRandomColor());
    setColors(newColors);
  }, []);

  // Generate the first palette when the component loads
  useEffect(() => {
    generateNewPalette();
  }, [generateNewPalette]);

  // Add keyboard shortcut for generating a new palette
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        generateNewPalette();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [generateNewPalette]); // Include generateNewPalette as dependency

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6 flex flex-col items-center">
      <header className="text-center my-10">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Color Palette Generator
        </h1>
        <p className="text-purple-200 mt-2">
          Click a color to copy it, or generate a new palette!
        </p>
      </header>

      <div className="mb-10">
        <button
          onClick={generateNewPalette}
          className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-purple-100 transform hover:scale-105 transition-all duration-300"
        >
          ✨ Generate New Palette
        </button>
      </div>

      <main className="w-full max-w-6xl">
        {colors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {colors.map((color, index) => (
              <ColorCard key={index} color={color} />
            ))}
          </div>
        ) : (
          <p className="text-white text-center">Generating colors...</p>
        )}
      </main>

      <p className="text-purple-300 text-sm mt-4">
        💡 Tip: Press the{" "}
        <kbd className="px-2 py-1 bg-purple-800 rounded">SPACE</kbd> key to
        generate new palettes!
      </p>
    </div>
  );
}

export default PaletteGenerator;
