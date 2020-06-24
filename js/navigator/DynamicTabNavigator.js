import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name="whatshot" size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name="md-trending-up" size={26} style={{color: tintColor}} />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name="favorite" size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Entypo name="user" size={26} style={{color: tintColor}} />
      ),
    },
  },
};

export default class DynamicTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true; // 关闭黄色警告
  }
  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    PopularPage.navigationOptions.tabBarLabel = '最热0'; // 动态修改tab属性
    return createAppContainer(
      createBottomTabNavigator(
        tabs,
        // 配置部分
        {
          tabBarComponent: TabBarComponent,
        },
      ),
    );
  }
  render() {
    const Tab = this._tabNavigator(); // 通过jsx语法返回
    return <Tab />;
  }
}

// 每次切换tab时都会调用此配置
class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    };
  }
  render() {
    // console.log('点击了=>', this.props.navigation.state);
    const {routes, index} = this.props.navigation.state;
    // 是否当前操作的tab
    if (routes[index].params) {
      // 取出旧的
      const {theme} = routes[index].params;
      // 判断是否过时
      // 以最新的更新时间为主，防止被其他tab之前的修改覆盖
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme; // 覆盖
      }
    }
    return (
      <BottomTabBar
        {...this.props} // 旧属性写入
        activeTintColor={this.theme.tintColor || this.props.activeTintColor} // 如果有自定义就取自定义，否则取默认激活颜色
      />
    );
  }
}
