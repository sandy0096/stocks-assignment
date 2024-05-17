/**
 *  All the API calls from the components/pages should exist here and not anywhere
 */

import {listStocksUrl} from './urls';

enum Methods {
  'get' = 'GET',
}

const defaultOptions = {
  method: Methods.get,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: null,
};

export const listStocks = async () => {
  const options = {...defaultOptions};
  try {
    // fetch could also be used without options as default would be a GET request
    const result = await fetch(listStocksUrl, options);
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    console.error(error);
  }
};
