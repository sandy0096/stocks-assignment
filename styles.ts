import {StyleSheet} from 'react-native';
import {COLORS} from './variables';

export default StyleSheet.create({
  headerBox: {
    backgroundColor: COLORS.primary,
    height: 50,
    paddingLeft: 20,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 20,
    marginTop: 10,
  },
  container: {
    backgroundColor: COLORS.white,
    height: '100%'
  },
  fullView: {
    flex: 1
  },
  selfCenter: {
    alignSelf: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  stockBox: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  withTopGap: {
    marginTop: 4,
  },
  stockTextBold: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  stockTextMedium: {
    color: COLORS.black,
    fontWeight: '500',
  },
  bottomSummaryBox: {
    backgroundColor: COLORS.white,
    width: '100%',
    paddingHorizontal: 18,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottomTextBold: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomTextNormal: {
    fontSize: 18,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 35,
    alignSelf: 'center',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.primary,
  },
  triangleDown: {
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    transform: [{rotate: '180deg'}],
  },
});
