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
    rating: getEntropyRating(entropy),
  };
};

const getEntropyRating = (entropy) => {
  if (entropy >= 128) return 'STRONG';
  if (entropy >= 60) return 'MEDIUM';
  if (entropy >= 36) return 'WEAK';
  return 'TOO WEAK';
};
