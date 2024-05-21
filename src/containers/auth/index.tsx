import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Login from './login';
import Register from './register';
import Forget from './forget';
import Sent from './sent';
import Confirm from './confirm';
import styles from './_styles';

const titles = ['Login to Your Account', 'Register', 'Forget Password', 'Email Sent', 'Confirmation Code'];

const Auth = () => {
  const [stepIndex, setStepIndex] = React.useState<number>(0);
  const screens = [
    <Login toRedirect={setStepIndex} />,
    <Register toRedirect={setStepIndex} />,
    <Forget toRedirect={setStepIndex} />,
    <Sent toRedirect={setStepIndex} />,
    <Confirm toRedirect={setStepIndex} />
  ];

  return (
    <ScrollView>
      <View style={styles.authContainer}>
        <Image source={require('../../assets/images/logo.png')} />
        <View style={styles.formLayout}>
          <Text style={styles.authTitle}>{titles[stepIndex]}</Text>
          {screens[stepIndex]}
        </View>
      </View>
    </ScrollView>
  );
};

export default Auth;
