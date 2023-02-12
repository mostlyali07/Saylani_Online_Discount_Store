import React from 'react';
import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate(LoginScreen)}
//       />
//     </View>
//   );
// }
// const Stack = createNativeStackNavigator();
function WelcomeScreen() {
  return (
    <>
    <View style={{alignItems: 'center', marginTop: 50}}>
        <Image
          style={{width: 230, height: 180}}
          source={{
            uri: 'https://i.snipboard.io/UY32my.jpg',
          }}
        />
        <Text
          style={{
            color: '#61b846',
            fontSize: 36,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 50,
          }}>
          SAYLANI WELFARE
        </Text>
        <Text
          style={{
            color: '#024f9d',
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
          }}>
          ONLINE DISCOUNT STORE
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 220,
            backgroundColor: '#61b846',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 65,
            paddingRight: 65,
            borderRadius: 12,
          }}
          onPress={() => navigation.navigate(to)}>
          <Text style={{color: '#fff', fontSize: 26, fontWeight: 600}}>
            Get Started
            {/* {title} */}
          </Text>
        </TouchableOpacity>

        <Button
          title="Get Started"
          onPress={() => navigation.navigate(LoginScreen)}
        />
      </View>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome To Sylani Online Store'}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

export default WelcomeScreen;
