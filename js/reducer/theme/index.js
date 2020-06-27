// reducer => 根据action返回新的state，不能修改原有的
// 换色reducer

import Types from '../../action/types';

const defaultState = {
  theme: '#e84e40',
};

export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.THEME_CHANGE:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}
