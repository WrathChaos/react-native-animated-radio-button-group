<img alt="React Native Animated Radio Button Group" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-radio-button-group)

[![Fully customizable, animated & easy to use radio button group](https://img.shields.io/badge/-Fully%20customizable%2C%20animated%20%26%20easy%20to%20use%20radio%20button%20group-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-animated-radio-button-group)

[![npm version](https://img.shields.io/npm/v/react-native-animated-radio-button-group.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-radio-button-group)
[![npm](https://img.shields.io/npm/dt/react-native-animated-radio-button-group.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-animated-radio-button-group)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Animated Radio Button Group"
        src="assets/Screenshots/react-native-animated-radio-button-group.gif" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-animated-radio-button-group
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"@freakycoder/react-native-bounceable": ">= 0.2.5",
"react-native-animated-radio-button": ">= 0.0.4"
```

# Usage

## Import

```js
import RadioButtonGroup from "react-native-animated-radio-button-group";
```

## Usage

Data is just an example, you can customize **each** radio button with data itself.
You must use the `IRadioButton` data model for customize the radio buttons.
They take all props which is available on [React Native Animated Radio Button](https://github.com/WrathChaos/react-native-animated-radio-button).

### Data Model

```js
export type IRadioButton = {
  id: number,
  color: string,
  outerStyle?: ViewStyle,
  innerStyle?: ViewStyle,
};
```

### Example Usage

```jsx
<RadioButtonGroup
  initial={2}
  data={data}
  horizontal
  onChange={(item) => console.log("Selected Item: ", item)}
  onPress={() => {}}
/>
```

### Example Data Array

```jsx
const data: Array<IRadioButton> = [
  {
    id: 0,
    outerStyle: {
      width: 50,
      height: 50,
      borderColor: "#FF0004",
      borderRadius: 25,
    },
    innerStyle: {
      borderRadius: 25,
    },
    color: "#FF0004",
  },
  {
    id: 1,
    outerStyle: {
      width: 50,
      height: 50,
      borderColor: "#FB4009",
      borderRadius: 25,
    },
    innerStyle: {
      borderRadius: 25,
    },
    color: "#FB4009",
  },
  {
    id: 2,
    outerStyle: {
      width: 50,
      height: 50,
      borderColor: "#F6800F",
      borderRadius: 25,
    },
    innerStyle: {
      borderRadius: 25,
    },
    color: "#F6800F",
  },
  {
    id: 4,
    outerStyle: {
      width: 50,
      height: 50,
      borderColor: "#F4A012",
      borderRadius: 25,
    },
    innerStyle: {
      borderRadius: 25,
    },
    color: "#F4A012",
  },
  {
    id: 5,
    outerStyle: {
      width: 50,
      height: 50,
      borderColor: "#F0E017",
      borderRadius: 25,
    },
    innerStyle: {
      borderRadius: 25,
    },
    color: "#F0E017",
  },
];
```

# Configuration - Props

| Property |     Type     |  Default  | Description                                                                          |
| -------- | :----------: | :-------: | ------------------------------------------------------------------------------------ |
| initial  |    number    |     0     | default selection of the radio button group                                          |
| data     | Object Array |   null    | creates and customize each radio button for the group                                |
| onChange |   function   | undefined | you can make your business logic or get the selection of the data from this function |
| onPress  |   function   | undefined | onPress function for each of them                                                    |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~TypeScript Challenge!~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Animated Radio Button Group is available under the MIT license. See the LICENSE file for more info.
