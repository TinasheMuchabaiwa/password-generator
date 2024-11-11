import { calculateEntropy } from "./security";

/**
 * Calculate password strength based on various criteria
 * @param {string} password - The password to analyze
 * @param {Object} options - The options used to generate the password
 * @param {boolean} options.uppercase - Whether uppercase letters were included
 * @param {boolean} options.lowercase - Whether lowercase letters were included
 * @param {boolean} options.numbers - Whether numbers were included
 * @param {boolean} options.symbols - Whether symbols were included
 * @returns {string} Strength rating ('TOO WEAK' | 'WEAK' | 'MEDIUM' | 'STRONG')
 */
export const calculateStrength = (password, options) => {
    const { rating } = calculateEntropy(password, options);
    return rating;
  };
  
  /**
   * Analyses specific password characteristics for detailed feedback
   * @param {string} password - The password to analyze
   * @returns {Object} Detailed analysis of password characteristics
   */
  export const analyzePassword = (password) => {
    return {
      length: password.length,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSymbol: /[^A-Za-z0-9]/.test(password),
      varietyCount: [
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[^A-Za-z0-9]/.test(password)
      ].filter(Boolean).length
    };
  };