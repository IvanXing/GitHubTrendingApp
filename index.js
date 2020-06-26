/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// 欢迎页
// import WelcomePage from './js/page/WelcomePage';
// 导航页
// import AppNavigators from './js/navigator/AppNavigators';
// true入口页
import App from './js/App';

AppRegistry.registerComponent(appName, () => App);
