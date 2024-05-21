import React from 'react';
import { View, Text } from 'react-native';
import { AppButton } from '../../components';
import styles from './_styles';

const Sent = ({ toRedirect }: any) => {
  return (
    <View style={[styles.formControl, { width: '100%' }]}>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10 }}>
        <Text style={{ color: '#2E2E5D', fontSize: 14, fontWeight: 400 }}>We sent an email to</Text>
        <Text style={{ color: '#2E2E5D', fontSize: 14, fontWeight: 600 }}>&nbsp;y***@mail.com&nbsp;</Text>
        <Text style={{ color: '#2E2E5D', fontSize: 14, fontWeight: 400 }}>
          with a link to get back into your account.
        </Text>
      </View>
      <AppButton type="outline" title="Close" style={{ height: 52 }} onPress={() => toRedirect(0)} />
    </View>
  );
};

export default Sent;
