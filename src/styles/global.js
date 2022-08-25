import {StyleSheet, Dimensions} from 'react-native';

import {PRIMARY_COLOR} from './constant';

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height - 70,
  },
  header: {
    height: Dimensions.get('screen').width / 2,
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: 10,
  },
  text: {
    color: PRIMARY_COLOR,
    fontSize: 20,
  },
  textHeader: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  footer: {
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: (Dimensions.get('screen').width * 50) / 100,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
