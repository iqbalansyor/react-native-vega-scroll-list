import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { height: wHeight } = Dimensions.get('window');
const height = wHeight;
interface VegaScrollItemProps {
  y: Animated.Value;
  index: number;
  margin: number;
  item: React.ReactElement;
}

const VegaScrollItem = ({ y, index, margin, item }: VegaScrollItemProps) => {
  const [cardHeight, setCardHeight] = useState(0);
  const position = Animated.subtract(index * cardHeight, y);
  const isDisappearing = -cardHeight;
  const isTop = 0;
  const isBottom = height - cardHeight;
  const isAppearing = height;
  console.log('card height', cardHeight);
  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.00001 + index * cardHeight],
      outputRange: [0, -index * cardHeight],
      extrapolateRight: 'clamp',
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.9, 0.9, 1, 1],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [1, 1, 1, 1],
  });
  return (
    <Animated.View
      style={[
        {
          marginVertical: margin,
          alignSelf: 'center',
        },
        { opacity, transform: [{ translateY }, { scale }] },
      ]}
      key={index}
    >
      <View
        transparant
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout;
          setCardHeight(height + margin * 2);
        }}
      >
        {item}
      </View>
    </Animated.View>
  );
};

export default VegaScrollItem;
