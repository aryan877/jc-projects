import { useState } from "react";

function PasswordHistory({ history, onCopy }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (password, index) => {
    try {
      await navigator.clipboard.writeText(password);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
      if (onCopy) {
        onCopy(password);
      }
    } catch (err) {
      console.error("Failed to copy password:", err);
    }
  };

  if (history.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Password History
        </h2>
        <div className="text-gray-400 text-center py-8">
          No passwords generated yet
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Password History
        <span className="text-sm font-normal text-gray-500 ml-2">
          (Last {history.length})
        </span>
      </h2>

      <div className="space-y-2">
        {history.map((password, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <span className="font-mono text-sm text-gray-700 truncate flex-1 mr-4">
              {password}
            </span>
            <button
              onClick={() => handleCopy(password, index)}
              className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors opacity-0 group-hover:opacity-100"
            >
              {copiedIndex === index ? "✓ Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        💡 Tip: Hover over any password to copy it
      </div>
    </div>
  );
}

export default PasswordHistory;
