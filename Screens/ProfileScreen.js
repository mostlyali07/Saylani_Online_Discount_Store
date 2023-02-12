import React from 'react';
import {Text, View, Image} from 'react-native';

function ProfileScreen() {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{width: 150, height: 150, marginTop: 10}}
        source={{
          uri: 'https://i.snipboard.io/TgwZFo.jpg',
        }}
      />
      <Text style={{color: '#000', fontWeight: 900, fontSize: 26}}>
        Ali Rehan
      </Text>
    </View>
  );
}

export default ProfileScreen;
