// Capitalize first letter of string
export const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Shuffle array
export const shuffle = (arr) => {
  return arr.sort((a, b) => 0.5 - Math.random());
};
