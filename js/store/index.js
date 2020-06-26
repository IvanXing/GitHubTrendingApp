import {applyMiddleware, createStore} from 'redux';
import thunk from 'react-redux';
import reducer from '../reducer';

// 创建中间件
const middlewares = [thunk];

// 创建store
export default createStore(reducer, applyMiddleware());
