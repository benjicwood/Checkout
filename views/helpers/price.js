export const formattedPrice = (num) => {
    return (num / 100).toFixed(2);
  };
  
  export const discountedPrice = (num) => {
    if (num > 1000) { return (num / 100 * 0.8).toFixed(2); }
    return (num / 100).toFixed(2);
  };