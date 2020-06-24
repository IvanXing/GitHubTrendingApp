## GitHub Trending App

### 1.导航搭建

* 安装icon库 `react-native-vector-icons`
* 安装react-navigation
```js
    "react-native-gesture-handler": "1.4.1",
    "react-native-reanimated": "^1.3.0",
    "react-native-safe-area-context": "^3.0.6",
    "react-native-screens": "^2.9.0",
    "react-native-vector-icons": "^6.6.0",
    "react-navigation": "^4.0.10",
    "react-navigation-drawer": "^2.4.13",
    "react-navigation-stack": "1.9.0",
    "react-navigation-tabs": "2.5.5"
```
* 底部导航 
```js
  createAppContainer(
    createSwitchNavigator(
      createStackNavigator(Welcome), // 2s后跳Main
      createStackNavigator(Main),
    )
  )
  Main =>
  createAppContainer(
    createBottomTabNavigator(1, 2, 3, 4)
  )
```