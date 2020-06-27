import Types from '../types';

export function OnThemeChange(theme) {
  // 返回纯函数
  return {
    type: Types.THEME_CHANGE,
    theme: theme,
  };
}
