import React from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';

function LoginScreen() {
  return (
    <>
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
      <View style={{alignItems: 'center', marginTop: 50}}>
        <TextInput
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: '#fff',
            borderRadius: 60,
            borderColor: '#c0c0c0',
            borderWidth: 1,
            width: 300,
            marginTop: 6,
          }}
          placeholder={'Email'}
        />
        <TextInput
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: '#fff',
            borderRadius: 60,
            borderColor: '#c0c0c0',
            borderWidth: 1,
            width: 300,
            marginTop: 6,
          }}
          secureTextEntry={true}
          placeholder={'Password'}
        />
        <Pressable
          style={{
            marginTop: 10,
            backgroundColor: '#61b846',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 65,
            paddingRight: 65,
            borderRadius: 12,
          }}>
          <Text style={{color: '#fff', fontSize: 26, fontWeight: 600}}>
            Log In
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export default LoginScreen;
