import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// 顶部tab导航
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Node.js', 'Java', 'Python', 'Go', 'PHP'];
  }
  _genTabs() {
    const tabs = {};
    // screen接受参数改变的
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  }
  render() {
    // 静态tab
    // const TabNavigator = createAppContainer(
    //   createMaterialTopTabNavigator({
    //     popularTab1: {
    //       screen: PopularTab,
    //       navigationOptions: {
    //         title: 'Tab1',
    //       },
    //     },
    //     popularTab2: {
    //       screen: PopularTab,
    //       navigationOptions: {
    //         title: 'Tab2',
    //       },
    //     },
    //   }),
    // );
    // 动态顶部
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(this._genTabs(), {
        tabBarOptions: {
          tabStyle: styles.tabStyle,
          upperCaseLable: false,
          scrollEnabled: true,
          style: {
            backgroundColor: '#e84e40',
          },
          indicatorSyle: styles.indicatorSyle,
          labelStyle: styles.labelStyle,
        },
      }),
    );
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

class PopularTab extends Component {
  render() {
    return (
      <View>
        <Text>PopularTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabStyle: {
    minWidth: 50,
  },
  indicatorSyle: {
    height: 2,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6,
  },
});
