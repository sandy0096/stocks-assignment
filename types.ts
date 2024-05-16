/**
 * All types that has k,v pair should exist here
 */

export type STOCK = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

export type ListOfStockT = Array<STOCK>

export type SUMMARY = {
  totalCurrentValue: number;
  totalInvestmentValue: number;
  totalPNL: number;
  todayPNL: number;
}
