import { View, Text, TextInput } from 'react-native';
import { AppButton } from '../../components';
import styles from './_styles';

const Confirm = ({ toRedirect }: any) => {
  return (
    <View style={[styles.formControl, { width: '100%' }]}>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10 }}>
        <Text style={{ color: '#2E2E5D', fontSize: 14, fontWeight: 400 }}>Enter the confirmation code we sent to</Text>
        <Text style={{ color: '#2E2E5D', fontSize: 14, fontWeight: 600 }}>&nbsp;your@mail.com.</Text>
      </View>
      <TextInput secureTextEntry={true} placeholder="Confirmation Code" style={styles.textInput} />
      <View style={{ display: 'flex', flexDirection: 'row', gap: 4, paddingLeft: 10 }}>
        <Text style={{ textAlign: 'center', color: '#2E2E5D' }}>Didn’t receive the code?</Text>
        <Text style={{ textAlign: 'center', color: '#F77A55', fontWeight: 'bold' }} onPress={() => toRedirect(1)}>
          Resend
        </Text>
      </View>
      <AppButton type="primary" title="Submit" style={{ height: 52 }} />
      <AppButton type="outline" title="Cancel" style={{ height: 52 }} onPress={() => toRedirect(1)} />
    </View>
  );
};

export default Confirm;
