import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import {PRIMARY_COLOR} from './src/styles/constant';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{
              headerShown: false,
              // title: "Auth Login",
              // headerStyle: {
              //   backgroundColor: PRIMARY_COLOR
              // }
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Signup" component={Signup} /> */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
