import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

// symbol":"ONGC","quantity":120,"ltp":150,"avgPrice":140,"close":160

type StockContainerProps = {
  symbol: string;
  quantity: number;
  ltp: number;
  profitLoss: number;
};

const StockContainer = memo(
  ({
    symbol,
    quantity,
    ltp,
    profitLoss,
  }: StockContainerProps): React.ReactNode => {
    return (
      <View style={styles.stockBox}>
        <View style={styles.stockRow}>
          <Text style={styles.stockTextBold}>{symbol}</Text>
          <Text>
            LTP: <Text style={styles.stockTextMedium}>₹ {ltp}</Text>
          </Text>
        </View>

        <View style={[styles.stockRow, styles.withTopGap]}>
          <Text>{quantity}</Text>
          <Text>
            P/L: <Text style={styles.stockTextMedium}>₹ {profitLoss}</Text>
          </Text>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.profitLoss === nextProps.profitLoss ||
      prevProps.quantity === nextProps.quantity ||
      prevProps.ltp === prevProps.ltp
    );
  },
);

export default StockContainer;
