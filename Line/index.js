function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Line as BaseLine } from '@ant-design/plots';
import { groupBy, merge, transform } from 'lodash';
import React, { useMemo } from 'react';
import Composite from "../components/Composite";
import { getDefaultConfig } from "../config/base";
import { COLORS_SMALL } from "../style";
import { generateColorMap } from "../utils";
import "./index.less";
var genDefaultConfig = function genDefaultConfig(_ref) {
  var colorMap = _ref.colorMap,
    seriesField = _ref.seriesField,
    customContentData = _ref.customContentData;
  return {
    multiple: _objectSpread(_objectSpread({}, getDefaultConfig({
      point: false,
      tooltip: true,
      colorMap: colorMap,
      seriesField: seriesField,
      customContentData: customContentData,
      showCrosshairs: true
    })), {}, {
      color: function color(data) {
        if (seriesField) {
          return colorMap === null || colorMap === void 0 ? void 0 : colorMap[data[seriesField]];
        }
        return COLORS_SMALL[0];
      },
      legend: false
    })
  };
};
var prefixCls = 'sen-line';
var Line = function Line(_ref2) {
  var _ref2$config = _ref2.config,
    config = _ref2$config === void 0 ? {} : _ref2$config,
    type = _ref2.type,
    data = _ref2.data,
    title = _ref2.title,
    legend = _ref2.legend,
    timeRange = _ref2.timeRange,
    customContentData = _ref2.customContentData,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? {} : _ref2$style,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className;
  var seriesField = config.seriesField;
  var originalData = useMemo(function () {
    return data !== null && data !== void 0 ? data : config === null || config === void 0 ? void 0 : config.data;
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
  var newConfig = useMemo(function () {
    return merge(genDefaultConfig({
      colorMap: colorMap,
      seriesField: seriesField,
      customContentData: customContentData
    })[type], config, {
      data: originalData
    });
  }, [colorMap, seriesField]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, " ").concat(className),
    style: style
  }, /*#__PURE__*/React.createElement(Composite, {
    title: title,
    seriesField: seriesField,
    legend: legend,
    colorMap: colorMap,
    timeRange: timeRange
  }, /*#__PURE__*/React.createElement(BaseLine, newConfig)));
};
export default Line;