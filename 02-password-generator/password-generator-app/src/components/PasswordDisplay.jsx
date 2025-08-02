import { useState } from "react";

function PasswordDisplay({ password, onGenerate, isGenerating }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password) {
      return;
    }

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy password:", err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Generated Password
        </h2>
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <span>🎲</span>
              <span>Generate</span>
            </>
          )}
        </button>
      </div>

      {/* Password Display Area */}
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
        {password ? (
          <div
            className="font-mono text-lg text-gray-800 break-all cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
            onClick={handleCopy}
            title="Click to copy"
          >
            {password}
          </div>
        ) : (
          <div className="text-gray-400 text-center py-4">
            Click "Generate" to create your password
          </div>
        )}
      </div>

      {/* Copy Button */}
      {password && (
        <button
          onClick={handleCopy}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copy to Clipboard</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default PasswordDisplay;
