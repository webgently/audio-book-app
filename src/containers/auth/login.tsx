import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GoogleIcon, FaceBookIcon, TwitterIcon } from '../../components/icons';
import CheckBox from '../../components/checkbox';
import { AppButton } from '../../components/button';
import styles from './_styles';

const Login = ({ toRedirect }: any) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <View style={styles.loginLayout}>
      <View style={styles.formControl}>
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput} />
        <View style={styles.checkbox}>
          <CheckBox selected={checked} onPress={() => setChecked(!checked)} />
          <Text style={{ color: '#2E2E5D', fontSize: 14, fontWeight: 400, paddingBottom: 2 }}>Remember me</Text>
        </View>
        <AppButton type="primary" title="Login" style={{ height: 52 }} />
        <Text style={{ textAlign: 'right', color: '#F77A55', fontWeight: 'bold' }} onPress={() => toRedirect(2)}>
          Forget Password?
        </Text>
      </View>
      <View style={styles.socialContainer}>
        <Text style={{ textAlign: 'center', color: '#2E2E5D', fontSize: 14 }}>Or login with</Text>
        <View style={styles.socialLayout}>
          <TouchableOpacity style={styles.socialBtns}>
            <GoogleIcon size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtns}>
            <FaceBookIcon size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtns}>
            <TwitterIcon size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.redirectToRegister}>
          <Text style={{ textAlign: 'center', color: '#2E2E5D' }}>Don’t have an accoun’t ?</Text>
          <Text style={{ textAlign: 'center', color: '#F77A55', fontWeight: 'bold' }} onPress={() => toRedirect(1)}>
            Register
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
