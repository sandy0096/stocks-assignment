/**
 * Utils
 */

export const memoize = (func: (...args: number[]) => number) => {
  const cache: Record<string, number> = {};
  return (...args: number[]): number => {
    const key = args.join(','); // key
    if (cache.hasOwnProperty(key)) {
      console.log('fetching from cache');
      return cache[key];
    }
    console.log('adding to cache');
    const res = func.apply(this, args);
    cache[key] = res;
    return res;
  };
};

export const roundToTwoDecimal = (num: number) => Math.round(num * 1e2) / 1e2;

export const evaluateCurrentValue = (ltp: number, quantity: number) =>
  ltp * quantity;

export const evaluateInvestmentValue = (avgPrice: number, quantity: number) =>
  avgPrice * quantity;

export const evaluateProfitLoss = (
  ltp: number,
  quantity: number,
  avgPrice: number,
) => {
  const currentValue = evaluateCurrentValue(ltp, quantity);
  const currentInvestment = evaluateInvestmentValue(avgPrice, quantity);
  return roundToTwoDecimal(currentValue - currentInvestment);
};
