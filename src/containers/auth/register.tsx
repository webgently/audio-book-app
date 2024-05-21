import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { AppButton } from '../../components/button';
import styles from './_styles';

const Register = ({ toRedirect }: any) => {
  return (
    <View style={[styles.registerLayout, styles.formControl]}>
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} />
      <TextInput placeholder="Date of Birth" style={styles.textInput} />
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10 }}>
        <Text style={{ color: '#2E2E5D' }}>By signing up, you agree to our</Text>
        <Text style={{ color: '#F77A55', fontWeight: 600, paddingLeft: 4 }}>Terms</Text>
        <Text style={{ color: '#2E2E5D' }}>,</Text>
        <Text style={{ color: '#F77A55', fontWeight: 600, paddingRight: 4 }}>Data Policy</Text>
        <Text style={{ color: '#2E2E5D' }}>and</Text>
        <Text style={{ color: '#F77A55', fontWeight: 600, paddingLeft: 4 }}>Cookies Policy</Text>
        <Text style={{ color: '#2E2E5D' }}>.</Text>
      </View>
      <AppButton type="primary" title="Register" style={{ height: 52 }} />
      <AppButton type="outline" title="Cancel" style={{ height: 52 }} onPress={() => toRedirect(0)} />
    </View>
  );
};

export default Register;
