import { keys, merge, reduce } from 'lodash';
import { COLORS_LARGE, COLORS_MIDDLE, COLORS_SMALL } from "../style";
var colorObj = {
  small: COLORS_SMALL,
  middle: COLORS_MIDDLE,
  large: COLORS_LARGE
};
var sizeObj = {
  small: 8,
  middle: 16,
  large: 24
};
export var mergeConfig = function mergeConfig(config, data) {
  // TODO 这里是默认配置,各个组件默认配置不同，定义不同的配置项
  // TODO 这里先不用UI规范，默认空对象，接收传入配置
  var defaultConfig = {};

  // TODO any需要替换，类型需要兼容所有组件的类型分类
  return merge({}, defaultConfig, config, {
    data: data
  });
};

/**
 * 生成自定义颜色
 */
export var generateColorMap = function generateColorMap(colors) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'small';
  return reduce(keys(colors), function (res, key, index) {
    res[key] = colorObj[type][index % sizeObj[type]];
    return res;
  }, colors);
  return colors;
};