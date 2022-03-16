export const getNewBet = (rate: number, value: number): number =>
  +(rate + (rate / 100) * value).toFixed(2);
