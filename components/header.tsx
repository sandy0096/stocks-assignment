import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
