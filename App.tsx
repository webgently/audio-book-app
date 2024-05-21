import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Containers from './src/containers';
import GetStarted from './src/containers/getStarted';
import Auth from './src/containers/auth';
import HomePage from './src/containers/homePage';
import Error from './src/containers/error';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const theme = DefaultTheme;
  theme.colors.background = '#FFFFFF';

  return (
    <NavigationContainer theme={theme}>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="initial">
        <Stack.Screen name="initial" component={Containers} options={{ headerShown: false }} />
        <Stack.Screen name="get_started" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="home_page" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="error" component={Error} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
