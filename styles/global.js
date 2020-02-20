import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#32100D',
    flexDirection: 'column',
    alignItems: 'center',
  },

  signInRegisterWrapper:{
    width: 350,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  signIn:{
    width: 150,
    textAlign: 'center',
    fontSize: 30,
    color: '#F7C077',
    borderBottomColor: '#F7C077',
    borderBottomWidth: 3,
    paddingBottom: 7,
  },

  signInWhite:{
    width: 150,
    fontSize: 30,
    color: '#EEEEEE',
    textAlign: 'center',
  },

  register:{
    width: 170,
    fontSize: 30,
    color: '#EEEEEE',
    textAlign: 'center',
  },

  registerBorder:{
    width: 170,
    textAlign: 'center',
    fontSize: 30,
    color: '#F7C077',
    borderBottomColor: '#F7C077',
    borderBottomWidth: 3,
    paddingBottom: 7,
  },

  sms: {
    marginBottom: 20,
  },

  textInput:{
    fontSize: 18,
    marginTop: 100,
    marginBottom: 110,
    width: 337,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: '#EEEEEE',
    paddingBottom: 10,
  },

  // test:{
  //   fontSize: 18,
  //   marginTop: 40,
  //   marginBottom: 110,
  //   width: 337,
  //   borderBottomColor: '#fff',
  //   borderBottomWidth: 1,
  //   textAlign: 'center',
  //   color: '#fff'
  // },

  nameWrapper:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    width: '100%',
  },

  nameInput:{
    fontSize: 18,
    width: 155,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: '#EEEEEE',
    paddingBottom: 10,
  },

  numberDateInput:{
    fontSize: 18,
    width: '100%',
    paddingBottom: 20,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: '#EEEEEE',
    marginTop: 25,
  },

  logoImg:{
    width: 184,
    height: 184,
    marginTop: 30,
  },

  btnSignIn:{
    width: 337,
    height: 63,
    backgroundColor: '#F7C077',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerBtnWrapper:{
    width: 337,
    height: 63,
    backgroundColor: '#F7C077',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 135,
  },

  textBtn:{
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  registerBtn:{
    fontSize: 25,
    fontWeight: 'bold',
  },
});