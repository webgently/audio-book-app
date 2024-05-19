import React, { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { View } from 'react-native';

const Containers = (props: any) => {
  const token = '';
  useEffect(() => {
    props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: token ? 'login' : 'get_started' }] }));
  }, [token]);
  return <View />;
};

export default Containers;
