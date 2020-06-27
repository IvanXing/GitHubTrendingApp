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
import {connect} from 'react-redux';

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

class DynamicTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true; // 关闭黄色警告
  }
  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    }
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    PopularPage.navigationOptions.tabBarLabel = '最热0'; // 动态修改tab属性
    return (this.Tabs = createAppContainer(
      createBottomTabNavigator(
        tabs,
        // 配置部分
        {
          tabBarComponent: props => {
            return <TabBarComponent theme={this.props.theme} {...props} />;
          },
        },
      ),
    ));
  }
  render() {
    const Tab = this._tabNavigator(); // 通过jsx语法返回
    return <Tab />;
  }
}

// 每次切换tab时都会调用此配置
class TabBarComponent extends React.Component {
  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />;
  }
}

// state和组件关联并导出
const mapStateToProps = state => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps)(DynamicTabNavigator);
