import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  errorLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingBottom: 50
  },
  errorBack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    width: '100%',
    position: 'relative'
  },
  errorTopLine: {
    borderBottomColor: '#F3F1FE',
    borderBottomWidth: 1,
    width: '100%'
  }
});
