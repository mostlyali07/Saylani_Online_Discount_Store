import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';

function CartScreen() {
  return (
    <>
      <ScrollView>
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
        <View
          style={{
            backgroundColor: '#fff',
            margin: 6,
            padding: 10,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 120, height: 90, resizeMode: 'contain'}}
            source={{
              uri: 'https://i.snipboard.io/xg1PT6.jpg',
            }}
          />
          <View>
            <Text>
              ITEN NAME -<Text style={{backgroundColor: '#d4d3d3'}}>1</Text>+
            </Text>
          </View>
          <View>
            <Text style={{color: '#000', fontWeight: 900, fontSize: 18}}>
              $25.00
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            margin: 6,
            padding: 10,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 120, height: 90, resizeMode: 'contain'}}
            source={{
              uri: 'https://i.snipboard.io/P28jvZ.jpg',
            }}
          />
          <View>
            <Text>
              ITEN NAME -<Text style={{backgroundColor: '#d4d3d3'}}>1</Text>+
            </Text>
          </View>
          <View>
            <Text style={{color: '#000', fontWeight: 900, fontSize: 18}}>
              $25.00
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            margin: 6,
            padding: 10,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 120, height: 90, resizeMode: 'contain'}}
            source={{
              uri: 'https://i.snipboard.io/eB1p7L.jpg',
            }}
          />
          <View>
            <Text>
              ITEN NAME -<Text style={{backgroundColor: '#d4d3d3'}}>1</Text>+
            </Text>
          </View>
          <View>
            <Text style={{color: '#000', fontWeight: 900, fontSize: 18}}>
              $25.00
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            margin: 6,
            padding: 16,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: 900, fontSize: 18}}>
            Total:{' '}
          </Text>
          <Text style={{color: '#000', fontWeight: 900, fontSize: 18}}>
            $185
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor: '#fff',
              borderRadius: 60,
              width: 300,
              borderColor: '#c0c0c0',
              borderWidth: 1,
              marginTop: 6,
            }}
            placeholder={'Full Name'}
          />
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor: '#fff',
              borderRadius: 60,
              width: 300,
              borderColor: '#c0c0c0',
              borderWidth: 1,
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
              width: 300,
              borderColor: '#c0c0c0',
              borderWidth: 1,
              marginTop: 6,
            }}
            placeholder={'Phone Number'}
          />
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor: '#fff',
              borderRadius: 20,
              width: 300,
              borderColor: '#c0c0c0',
              borderWidth: 1,
              marginTop: 6,
            }}
            placeholder={'Shipping Address'}
            multiline={true}
            numberOfLines={4}
          />
          <Pressable
            style={{
              marginTop: 10,
              backgroundColor: '#61b846',
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 78,
              paddingRight: 78,
              borderRadius: 12,
              marginBottom: 50
            }}>
            <Text style={{color: '#fff', fontSize: 26, fontWeight: 600}}>
              Place Order
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

export default CartScreen;
