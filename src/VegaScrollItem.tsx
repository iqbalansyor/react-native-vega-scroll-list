import React, { useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { height: wHeight } = Dimensions.get('window');
const height = wHeight;
interface VegaScrollItemProps {
  y: Animated.Value;
  index: number;
  distanceBetweenItem: number;
  item: React.ReactElement;
  fadeOnTop?: boolean;
  scaleOutMin?: number;
  numColumns: number;
}
const numberIsOdd = (nm: number, numCols: number) => {
  if (nm === 0) return false;
  return !!(nm % numCols);
};

const VegaScrollItem = ({
  y,
  index,
  distanceBetweenItem,
  item,
  fadeOnTop,
  scaleOutMin,
  numColumns,
}: VegaScrollItemProps) => {
  const [cardHeight, setCardHeight] = useState(0);
  // Constrains the indices to the number of columns
  const oddedIndex = Math.floor((numberIsOdd(index, numColumns) ? index - 1 : index) / numColumns);
  const position = Animated.subtract(oddedIndex * cardHeight, y);
  const isDisappearing = -cardHeight;
  const isTop = 0;
  const isBottom = height - cardHeight;
  const isAppearing = height;
  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.00001 + oddedIndex * cardHeight],
      outputRange: [0, -oddedIndex * cardHeight],
      extrapolateRight: 'clamp',
    })
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [scaleOutMin ?? 0.85, 1, 1, 1],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [fadeOnTop ? 0 : 1, 1, 1, 1],
  });
  return (
    <Animated.View
      style={[
        {
          marginVertical: distanceBetweenItem,
          alignSelf: 'center',
        },
        { opacity, transform: [{ translateY }, { scale }] },
      ]}
      key={index}
    >
      <View
        onLayout={(event) => {
          var { height } = event.nativeEvent.layout;
          setCardHeight(height + distanceBetweenItem * 2);
        }}
      >
        {item}
      </View>
    </Animated.View>
  );
};

export default VegaScrollItem;
