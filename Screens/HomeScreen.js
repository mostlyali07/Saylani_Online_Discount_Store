import React from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';

const items = [
  {
    image: require('../Assets/Rectangle_1.png'),
    text: 'Groceries',
  },
  {
    image: require('../Assets/Rectangle_6.png'),
    text: 'Vegetables',
  },
  {
    image: require('../Assets/Rectangle_7.png'),
    text: 'Fruits',
  },
  {
    image: require('../Assets/Rectangle_1.png'),
    text: 'Groceries',
  },
  {
    image: require('../Assets/Rectangle_6.png'),
    text: 'Vegetables',
  },
  {
    image: require('../Assets/Rectangle_7.png'),
    text: 'Fruits',
  },
];

export default function HomeScreen() {
  return (
    <>
      <View
        style={{
          // flex: 6,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
        }}>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              color: '#61b846',
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            SAYLANI WELFARE
          </Text>
          <Text
            style={{
              color: '#024f9d',
              fontSize: 16,
              fontWeight: 500,
            }}>
            DISCOUNT STORE
          </Text>
        </View>
        <View>
          <Image
            style={{width: 32, height: 28, marginTop: 26, marginRight: 10}}
            source={{
              uri: 'https://i.snipboard.io/mLCRwa.jpg',
            }}
          />
        </View>
      </View>
      <Image
        style={{
          width: 380,
          height: 220,
          marginTop: 26,
          margin: 6,
          borderRadius: 9,
        }}
        source={{
          uri: 'https://i.snipboard.io/Keb3r8.jpg',
        }}
      />
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: '#e8e8e8',
            borderRadius: 60,
            width: 360,
            marginTop: 6,
          }}
          placeholder={'🔍 Search by product name'}
        />
      </View>
      <Text
        style={{
          color: '#000',
          marginTop: 30,
          marginLeft: 10,
          fontWeight: 600,
          fontSize: 18,
        }}>
        Shop by Category
      </Text>
      <View
        style={{
          marginTop: 5,
          backgroundColor: '#fff',
          paddingVertical: 10,
          paddingLeft: 20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View key={index} style={{alignItems: 'center', marginRight: 30}}>
              <Image
                source={item.image}
                style={{
                  width: 70,
                  height: 60,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
