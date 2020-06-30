import React from 'react';
import {Animated, FlatList, View} from 'react-native';

import VegaScrollItem from './VegaScrollItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const VegaScrollList = props => {
  const {data, renderItem, marginVertical: margin, ...otherProps} = props;
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  let marginVertical: number = margin || 8;
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={data}
      renderItem={data => {
        let item = renderItem(data);
        const {index} = data;
        return <VegaScrollItem {...{index, y, item, margin: marginVertical}} />;
      }}
      {...{onScroll}}
      {...otherProps}
    />
  );
};

export default VegaScrollList;
