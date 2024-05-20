import React, { useEffect } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { View } from 'react-native';

const Containers = () => {
  const token = '';
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: token ? 'home_page' : 'get_started' }]
      })
    );
  }, []);
  return <View />;
};

export default Containers;
