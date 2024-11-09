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
    let score = 0;
  
    // Check length (0-5 points)
    const length = password.length;
    score += Math.min(5, Math.floor(length / 3));
  
    // Check character variety (0-8 points)
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
  
    if (hasUpper && options.uppercase) score += 2;
    if (hasLower && options.lowercase) score += 2;
    if (hasNumber && options.numbers) score += 2;
    if (hasSymbol && options.symbols) score += 2;
  
    // Check for mixed character types (0-3 points)
    const typesCount = [hasUpper, hasLower, hasNumber, hasSymbol]
      .filter(Boolean).length;
    score += typesCount - 1; // -1 because at least one type is required
  
    // Return strength rating based on final score
    if (score >= 12) return 'STRONG';
    if (score >= 8) return 'MEDIUM';
    if (score >= 5) return 'WEAK';
    return 'TOO WEAK';
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