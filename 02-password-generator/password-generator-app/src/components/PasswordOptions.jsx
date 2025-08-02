function PasswordOptions({ length, setLength, options, setOptions }) {
  const handleOptionChange = (optionName) => {
    setOptions((prev) => ({
      ...prev,
      [optionName]: !prev[optionName],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Password Options
      </h2>

      {/* Password Length Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700">
            Password Length
          </label>
          <span className="text-lg font-bold text-blue-600">{length}</span>
        </div>
        <input
          type="range"
          min="8"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 
                     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 
                     [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md
                     [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:cursor-pointer 
                     [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-md"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>8</span>
          <span>50</span>
        </div>
      </div>

      {/* Character Type Checkboxes */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Include Characters:
        </h3>

        {[
          {
            key: "lowercase",
            label: "Lowercase Letters (a-z)",
            example: "abc",
          },
          {
            key: "uppercase",
            label: "Uppercase Letters (A-Z)",
            example: "ABC",
          },
          { key: "numbers", label: "Numbers (0-9)", example: "123" },
          { key: "symbols", label: "Symbols (!@#$%^&*)", example: "!@#" },
        ].map(({ key, label, example }) => (
          <label
            key={key}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => handleOptionChange(key)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              {label}
            </span>
            <span className="text-xs text-gray-400 font-mono">{example}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default PasswordOptions;
