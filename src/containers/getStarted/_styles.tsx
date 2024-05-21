import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gSLayout: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: '100%',
    paddingBottom: 40
  },
  gSImg1: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  },
  gSImg2: {
    position: 'absolute',
    top: 50,
    right: 0,
    zIndex: 0
  },
  gSDescriptions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 250,
    gap: 4
  },
  gSStepTitles: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2E2E5D'
  },
  gSStepDetails: {
    textAlign: 'center',
    fontSize: 14,
    color: '#2E2E5D'
  },
  gSIndexs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  gSController: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 20
  }
});
