/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {COLORS} from './variables';
import {
  BottomSummaryContainer,
  Header,
  Loader,
  StockListing,
} from './components';
import {listStocks} from './services';
import {ListOfStockT, SUMMARY} from './types';
import styles from './styles';
import {roundToTwoDecimal} from './utils';
import TouchButton from './components/touchButton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : COLORS.primary,
  };

  const [stockData, setStockData] = React.useState<ListOfStockT | []>([]);
  const [summaryOpen, setSummary] = React.useState<boolean>(false);
  const [summaryData, setSummaryData] = React.useState<SUMMARY>({
    todayPNL: 0,
    totalCurrentValue: 0,
    totalInvestmentValue: 0,
    totalPNL: 0,
  });
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!stockData.length) {
      getListOfStocks();
    }
  }, []);

  const getListOfStocks = async () => {
    setLoading(true);
    try {
      const result = await listStocks();
      console.log('stocks -->', JSON.stringify(result));
      setLoading(false);
      if (result.data.userHolding) {
        setStockData(result.data.userHolding);
        createSummaryTotal(result.data.userHolding);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const createSummaryTotal = (dat: ListOfStockT) => {
    let totalCurrentValue = 0,
      totalInvestmentValue = 0,
      totalPNL = 0,
      todayPNL = 0;
    dat.forEach(item => {
      totalCurrentValue += item.ltp * item.quantity;
      totalInvestmentValue += item.avgPrice * item.quantity;
      todayPNL += (item.close - item.ltp) * item.quantity;
    });
    todayPNL = roundToTwoDecimal(todayPNL);
    totalPNL = roundToTwoDecimal(totalCurrentValue - totalInvestmentValue);
    totalCurrentValue = roundToTwoDecimal(totalCurrentValue);
    totalInvestmentValue = roundToTwoDecimal(totalInvestmentValue);
    setSummaryData({
      totalCurrentValue,
      todayPNL,
      totalInvestmentValue,
      totalPNL,
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Header title={'Upstocks Holding'} />
        <StockListing data={stockData} />
        <TouchButton
            open={summaryOpen}
            onPress={() => setSummary(prevState => !prevState)}
          />
        <BottomSummaryContainer
          open={summaryOpen}
          totalCurrentValue={summaryData.totalCurrentValue}
          totalInvestment={summaryData.totalInvestmentValue}
          totalPNL={summaryData.totalPNL}
          todayPNL={summaryData.todayPNL}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
