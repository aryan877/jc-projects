import {
  calculatePasswordStrength,
  getStrengthInfo,
} from "../utils/passwordUtils";

function StrengthMeter({ password, options }) {
  const strength = calculatePasswordStrength(password, options);
  const strengthInfo = getStrengthInfo(strength);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Password Strength
      </h2>

      {password ? (
        <div>
          {/* Strength Bar */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Strength Level
              </span>
              <span
                className={`text-sm font-bold text-${strengthInfo.color}-600`}
              >
                {strengthInfo.label}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${strengthInfo.bgColor}`}
                style={{ width: `${(strength / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Strength Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <span
                className={
                  password.length >= 12 ? "text-green-600" : "text-red-600"
                }
              >
                {password.length >= 12 ? "✓" : "✗"}
              </span>
              <span className="text-gray-700">
                Length: {password.length} chars
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className={
                  /[a-z]/.test(password) ? "text-green-600" : "text-red-600"
                }
              >
                {/[a-z]/.test(password) ? "✓" : "✗"}
              </span>
              <span className="text-gray-700">Lowercase letters</span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className={
                  /[A-Z]/.test(password) ? "text-green-600" : "text-red-600"
                }
              >
                {/[A-Z]/.test(password) ? "✓" : "✗"}
              </span>
              <span className="text-gray-700">Uppercase letters</span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className={
                  /[0-9]/.test(password) ? "text-green-600" : "text-red-600"
                }
              >
                {/[0-9]/.test(password) ? "✓" : "✗"}
              </span>
              <span className="text-gray-700">Numbers</span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className={
                  /[^a-zA-Z0-9]/.test(password)
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {/[^a-zA-Z0-9]/.test(password) ? "✓" : "✗"}
              </span>
              <span className="text-gray-700">Special characters</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-400 text-center py-8">
          Generate a password to see strength analysis
        </div>
      )}
    </div>
  );
}

export default StrengthMeter;
