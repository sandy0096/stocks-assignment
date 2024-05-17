import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

type LoaderProps = {};

const Loader = ({}: LoaderProps) => {
  return (
    <View style={[styles.fullView, styles.center]}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;
