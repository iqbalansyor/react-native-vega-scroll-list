import React from 'react';
import { Animated, FlatList, View } from 'react-native';

import VegaScrollItem from './VegaScrollItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const VegaScrollList = (props) => {
  const {
    data,
    renderItem,
    distanceBetweenItem: distance,
    fadeOnTop,
    scaleOutMin,
    ...otherProps
  } = props;
  const numColumns = otherProps.numColumns || 1; // Dont remove the numColumns from otherProps, as FlatList will need it
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  let distanceBetweenItem: number = distance || 8;
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={data}
      renderItem={(data) => {
        let item = renderItem(data);
        const { index } = data;
        return <VegaScrollItem {...{ index, y, item, distanceBetweenItem, fadeOnTop, scaleOutMin, numColumns }} />;
      }}
      {...{ onScroll }}
      {...otherProps}
    />
  );
};

export default VegaScrollList;
