import React from 'react';
import {View, Text, Image} from 'react-native';

function CartScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 12,
        }}>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              color: '#024f9d',
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Shopping
          </Text>
          <Text
            style={{
              color: '#61b846',
              fontSize: 16,
              fontWeight: 500,
            }}>
            Cart
          </Text>
        </View>
      </View>
      <View>
      <Image
            style={{width: 32, height: 28, marginTop: 26, marginRight: 10}}
            source={{
              uri: 'https://i.snipboard.io/mLCRwa.jpg',
            }}
          />
      </View>
    </>
  );
}

export default CartScreen;
