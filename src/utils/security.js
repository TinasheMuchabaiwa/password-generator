import sha1 from 'crypto-js/sha1';

// Entropy calculation
export const calculateEntropy = (password, options) => {
  let poolSize = 0;
  if (options.lowercase) poolSize += 26;
  if (options.uppercase) poolSize += 26;
  if (options.numbers) poolSize += 10;
  if (options.symbols) poolSize += 33;

  const entropy = password.length * Math.log2(Math.max(poolSize, 1));
  return {
    entropy,
    rating: getEntropyRating(entropy, password, poolSize),
  };
};

const getEntropyRating = (entropy, password, poolSize) => {
  if (entropy >= 120 || (password.length > 14 && poolSize === 95)) return 'STRONG';
  if (entropy >= 80 || (password.length >= 12 && poolSize === 95)) return 'MEDIUM';
  if (entropy >= 32 || (password.length > 10)) return 'WEAK';
  return 'TOO WEAK';
};

// Have I Been Pwned check
export const checkPasswordPwned = async (password) => {
  try {
    // Generate SHA-1 hash
    const hash = sha1(password).toString().toUpperCase();
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    // Call API with k-anonymity
    const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    const text = await response.text();
    
    // Check if hash suffix exists in response
    const hashList = text.split('\n');
    const match = hashList.find(line => line.startsWith(suffix));
    
    if (match) {
      const occurrences = parseInt(match.split(':')[1]);
      return {
        isPwned: true,
        occurrences
      };
    }
    
    return {
      isPwned: false,
      occurrences: 0
    };
  } catch (error) {
    console.error('Error checking password:', error);
    return {
      isPwned: false,
      error: true
    };
  }
};

// Timing attack prevention
export const secureClipboardCopy = async (text) => {
  // Add random delay to mask timing
  const delay = Math.random() * 100 + 50;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Copy failed:', error);
    return false;
  }
};
