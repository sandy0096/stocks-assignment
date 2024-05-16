import React, {PropsWithChildren} from 'react';
import {FlatList, View} from 'react-native';
import {ListOfStockT} from '../types';
import {StockContainer} from '../components';
import {evaluateProfitLoss, memoize} from '../utils';

type ListingProps = {
  data: ListOfStockT;
};

const mInstance = memoize(evaluateProfitLoss);

const StockListing = ({data}: ListingProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <StockContainer
          symbol={item.symbol}
          quantity={item.quantity}
          ltp={item.ltp}
          profitLoss={mInstance(item.ltp, item.quantity, item.avgPrice)}
        />
      )}
      keyExtractor={s => s.symbol}
    />
  );
};

export default StockListing;
