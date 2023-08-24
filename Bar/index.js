function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Bar as BaseBar } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo } from 'react';
import Composite from "../components/Composite";
import { getDefaultConfig } from "../config/base";
import { generateColorMap } from "../utils";
import "./index.less";
var prefixCls = 'sen-bar';
var Bar = function Bar(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config,
    data = _ref.data,
    title = _ref.title,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'basic' : _ref$type,
    legend = _ref.legend,
    timeRange = _ref.timeRange,
    customContentData = _ref.customContentData,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var seriesField = config.seriesField;
  var originalData = useMemo(function () {
    return map(data !== null && data !== void 0 ? data : config === null || config === void 0 ? void 0 : config.data, function (item, idx) {
      return _objectSpread(_objectSpread({}, item), {}, {
        __index__: idx
      });
    });
  }, [data, config === null || config === void 0 ? void 0 : config.data]);
  var legendMap = useMemo(function () {
    return seriesField ? groupBy(originalData, seriesField) : {};
  }, [seriesField, originalData]);
  var colorMap = useMemo(function () {
    var data = transform(legendMap, function (result, value, key) {
      result[key] = '';
      return result;
    }, {});
    return generateColorMap(data);
  }, [legendMap]);
  var defaultConfig = {
    basic: _objectSpread(_objectSpread({}, getDefaultConfig({
      tooltip: true
    })), {}, {
      legend: false
    })
  };
  console.log('%c 🚀🚀🚀 defaultConfig：：', 'font-size:20px;background: #33A5FF;color:#fff;', defaultConfig);
  var newConfig = merge(defaultConfig[type], config, {
    data: originalData
  });
  console.log('%c 🚀🚀🚀 newConfig：：', 'font-size:20px;background: #33A5FF;color:#fff;', newConfig);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, " ").concat(className),
    style: style
  }, /*#__PURE__*/React.createElement(Composite, {
    title: title,
    seriesField: seriesField,
    legend: legend,
    colorMap: colorMap,
    timeRange: timeRange
  }, /*#__PURE__*/React.createElement(BaseBar, newConfig)));
};
export default Bar;