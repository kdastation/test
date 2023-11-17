export const getMaxAmount = (balance: number, price: number) => {
  return Math.floor(balance / price);
};
