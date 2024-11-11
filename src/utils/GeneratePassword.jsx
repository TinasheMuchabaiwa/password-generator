/**
 * Generate a password based on the selected options
 * @param {Object} options - Password generation options
 * @returns {string} Generated password
 */
export const generatePassword = (options) => {
    const charset = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };
  
    let chars = '';
    Object.keys(charset).forEach(key => {
      if (options[key]) chars += charset[key];
    });
  
    if (chars === '') chars = charset.lowercase; // Fallback
  
    let password = '';
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    return password;
  };
  
  /**
   * Calculate password strength based on content and length
   * @param {string} password - The password to check
   * @param {Object} options - The options used to generate the password
   * @returns {string} Strength rating
   */
  export const calculateStrength = (password, options) => {
    let score = 0;
    const length = password.length;
  
    // Add points for length
    score += Math.floor(length / 4);
  
    // Add points for character types
    if (options.uppercase) score += 2;
    if (options.lowercase) score += 2;
    if (options.numbers) score += 2;
    if (options.symbols) score += 4;
  
    // Return strength rating
    if (score >= 10) return 'STRONG';
    if (score >= 7) return 'MEDIUM';
    if (score >= 4) return 'WEAK';
    return 'TOO WEAK';
  };