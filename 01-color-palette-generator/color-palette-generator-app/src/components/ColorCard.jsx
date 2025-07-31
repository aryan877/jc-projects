import { useState } from "react";

function ColorCard({ color }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    // Reset the "Copied!" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={handleCopy}
    >
      <div
        className="h-40 w-full rounded-t-lg shadow-lg"
        style={{ backgroundColor: color }}
      ></div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <p className="text-center font-mono text-gray-800">
          {color.toUpperCase()}
        </p>
        <div className="mt-2 text-center text-xs">
          {copied ? (
            <span className="font-semibold text-green-600">✓ Copied!</span>
          ) : (
            <span className="text-gray-400 group-hover:text-gray-700 transition-colors">
              Click to copy
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ColorCard;
