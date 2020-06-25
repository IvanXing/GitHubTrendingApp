export default class NavigationUtil {
  // fix动态底部导航包裹问题
  static goPage(params, page) {
    const navigation = NavigationUtil.navigation; //全局赋值
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
    }
    navigation.navigate(page, {...params});
  }
  // welcome页面跳转到首页
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
}
