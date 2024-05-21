import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { AppButton } from '../../components';
import styles from './_styles';

const Forget = ({ toRedirect }: any) => {
  return (
    <View style={[styles.formControl, { width: '100%' }]}>
      <Text style={{ paddingLeft: 10, paddingRight: 10, color: '#2E2E5D', fontSize: 14, fontWeight: 400 }}>
        Please fill email or phone number and we'll send you a link to get back into your account.
      </Text>
      <TextInput placeholder="Email" style={styles.textInput} />
      <AppButton type="primary" title="Submit" style={{ height: 52 }} onPress={() => toRedirect(3)} />
      <AppButton type="outline" title="Cancel" style={{ height: 52 }} onPress={() => toRedirect(0)} />
    </View>
  );
};

export default Forget;
