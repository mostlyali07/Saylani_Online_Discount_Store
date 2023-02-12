import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';

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
        <Pressable
          style={{
            marginTop: 220,
            backgroundColor: '#61b846',
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 65,
            paddingRight: 65,
            borderRadius: 12,
          }}>
          <Text style={{color: '#fff', fontSize: 26, fontWeight: 600}}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export default WelcomeScreen;
