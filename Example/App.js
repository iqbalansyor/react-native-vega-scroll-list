import React from 'react';
import {View, Text, StatusBar, Dimensions, Image} from 'react-native';

import VegaScrollList from 'react-native-vega-scroll-list';

import {data} from './data';

const App: () => React$Node = () => {
  let {width} = Dimensions.get('window');
  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#D3D3D3',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3,
          shadowOpacity: 0.5,
        }}>
        <Text
          style={{
            fontSize: 32,
            marginLeft: 16,
            marginTop: 50,
            fontWeight: '200',
          }}>
          Groceries
        </Text>
      </View>
      <VegaScrollList
        style={{marginTop: 8}}
        distanceBetweenItem={12}
        data={data}
        keyExtractor={item => item.index}
        renderItem={data => {
          return (
            <View
              elevation={5}
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                height: 70,
                width: width - 30,
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 6,
              }}>
              <Card item={data.item} />
            </View>
          );
        }}
      />
      {/* <SafeAreaView /> */}
    </>
  );
};

const Card = ({item}) => {
  let categoryColor = '#00ff00';
  if (item.category === 'Fruit') {
    categoryColor = '#ffa500';
  } else if (item.category === 'Meat') {
    categoryColor = '#ff0000';
  }
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        source={item.image}
        style={{
          width: 40,
          height: 40,
          alignSelf: 'center',
          marginLeft: 10,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 10,
          marginVertical: 8,
        }}>
        <Text
          style={{
            // flex: 1,
            fontSize: 22,
            fontWeight: '200',
            // fontFamily: 'sans-serif',
            marginBottom: 4,
            color: '#808080',
          }}>
          {item.name}
        </Text>
        <Text style={{alignItems: 'flex-end', color: categoryColor}}>
          {item.category}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'flex-end',
          // marginLe,
        }}>
        <Text
          style={{
            // flex: 1,
            marginBottom: 4,
            fontSize: 18,
            fontWeight: '100',
            // fontFamily: 'roboto',
          }}>
          {item.price}
        </Text>
        <Text style={{alignItems: 'flex-end', color: '#808080', fontSize: 12}}>
          {item.quantity}
        </Text>
      </View>
    </View>
  );
};

export default App;
