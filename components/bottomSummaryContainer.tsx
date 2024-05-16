import React from 'react';
import {Text, View, Animated} from 'react-native';
import styles from '../styles';

type BottomSummaryContainerProps = {
  open: boolean;
  totalCurrentValue: number;
  totalInvestment: number;
  totalPNL: number;
  todayPNL: number;
};

const BottomSummaryContainer = ({
  open,
  totalCurrentValue,
  totalInvestment,
  totalPNL,
  todayPNL,
}: BottomSummaryContainerProps) => {
  const popAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (open) {
      popUp();
    } else {
      popDown();
    }
  }, [open]);

  const popUp = () => {
    Animated.timing(popAnim, {
      toValue: 180,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const popDown = () => {
    Animated.timing(popAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View style={[styles.bottomSummaryBox, {height: popAnim}]}>
      <View style={styles.bottomRow}>
        <Text style={styles.bottomTextBold}>Current Value:</Text>
        <Text style={styles.bottomTextNormal}>₹ {totalCurrentValue}</Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.bottomTextBold}>Total Investment:</Text>
        <Text style={styles.bottomTextNormal}>₹ {totalInvestment}</Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.bottomTextBold}>Today's Profit & Loss:</Text>
        <Text style={styles.bottomTextNormal}>₹ {todayPNL}</Text>
      </View>
      <View style={[styles.bottomRow, {marginTop: 20}]}>
        <Text style={styles.bottomTextBold}>Profit & Loss:</Text>
        <Text style={styles.bottomTextNormal}>₹ {totalPNL}</Text>
      </View>
    </Animated.View>
  );
};

export default BottomSummaryContainer;
