import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  authContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingBottom: 50
  },
  formLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 20,
    paddingTop: 16,
    paddingLeft: 30,
    paddingRight: 30
  },
  authTitle: {
    color: '#2E2E5D',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  loginLayout: {
    width: '100%'
  },
  registerLayout: {
    width: '100%'
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  textInput: {
    backgroundColor: '#F5F5FA',
    width: '100%',
    height: 48,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    color: '#2E2E5D',
    borderColor: 'transparent',
    borderRadius: 8
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 10
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 24
  },
  socialLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10
  },
  socialBtns: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 74,
    height: 50,
    elevation: 9,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4838D1',
    borderRadius: 8
  },
  redirectToRegister: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  }
});
