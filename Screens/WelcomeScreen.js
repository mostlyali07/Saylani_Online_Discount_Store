import React from 'react';
import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function WelcomeScreen({navigation}) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome To Sylani Online Store'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default WelcomeScreen;
