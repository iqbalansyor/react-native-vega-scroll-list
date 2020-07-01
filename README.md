[![npm](https://img.shields.io/badge/npm-v0.1.0-blue)](https://www.npmjs.com/package/react-native-vega-scroll-list)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# React Native Vega Scroll List

A React Native FlatList with a lightweight animation which fade and shrink the head item of list when scrolling. **Works on iOS & Android.**
#### Inspired by [Vega Scroll](https://github.com/ApplikeySolutions/VegaScroll) - an iOS dependency.

## Preview
![react-native-vega-scroll-list](vega-scroll-list-demo.gif)

## Installation
`npm install react-native-vega-scroll-list --save`

## Usage
Import **VegaScrollList** component:

```
import VegaScrollList from 'react-native-vega-scroll-list';
```

Usage:

This usage is similar with **FlatList**. **VegaScrollList** accepts **FlatList** props.

```
<VegaScrollList
  marginVertical={12} // Add margin between item. Need to calculate animated
  data={data}
  keyExtractor={this.keyExtractor}
  renderItem={this.renderItem}
</VegaScrollList>
```

## Configuration
**VegaScrollList** accepts **FlatList** props.
Only need to add `"marginVertical"` to calculate animation.

| prop | type/valid values | default | description |
| - | - | - | - |
| marginVertical | number | 8 | margin between item. Needed to calculate the animation|

## Demo Application
This repository contains a demo React Native application with a customizable example of the `VegaScrollList` component in use.

To use the demo application:

1) Clone this repository: `https://github.com/iqbalansyor/react-native-vega-scroll-list.git`
2) Navigate to the demo application: `cd path/to/this/repository/react-native-vega-scroll-list/Example`
3) Install demo application dependencies: `npm install`
4) Run `npm run start` || `react-native run-android` || `react-native run-ios`

## Contact me
* **Iqbal Ansyori** - [ansyori.iqbal@gmail.com](mailto:ansyori.iqbal@gmail.com)

## Contributing
Feel free to try it out. Please submit a pull request with any features/fixes for the project.

## License
This project is licensed under the MIT License - see the [MIT Open Source Initiative](https://opensource.org/licenses/MIT) for details.
