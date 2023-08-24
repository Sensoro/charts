function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { classNames } from '@pansy/shared';
import { Segmented } from 'antd';
import { isBoolean } from 'lodash';
import React, { useMemo } from 'react';
import Legend from "../Legend";
import Title from "../Title";
import "./index.less";
var prefixCls = 'sen-charts';
var Composite = function Composite(_ref) {
  var _classNames;
  var title = _ref.title,
    seriesField = _ref.seriesField,
    legend = _ref.legend,
    colorMap = _ref.colorMap,
    timeRange = _ref.timeRange,
    children = _ref.children;
  var isLegend = useMemo(function () {
    return !!seriesField && !!legend && !!colorMap;
  }, [seriesField, legend, colorMap]);
  var legendDirection = useMemo(function () {
    var obj = {
      horizontal: true,
      vertical: false,
      alone: false,
      top: false,
      bottom: false,
      box: false
    };
    if (legend && !isBoolean(legend)) {
      var _ref2 = legend,
        _ref2$direction = _ref2.direction,
        direction = _ref2$direction === void 0 ? 'horizontal' : _ref2$direction,
        _ref2$position = _ref2.position,
        position = _ref2$position === void 0 ? 'bottom' : _ref2$position,
        _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? 'svg' : _ref2$type;
      obj.horizontal = false; // 先把默认值horizontal改为false
      obj[direction] = true;
      obj[position] = true;
      if (type === 'box') {
        obj['box'] = true;
      }
    }
    // 如果传递了时间选择器配置，legend为true时，默认设置图例为独立底部显示
    if (timeRange && obj.horizontal) {
      obj.alone = true;
      obj.bottom = true;
      obj.horizontal = false;
    }
    return obj;
  }, [legend, timeRange]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-header"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-horizontal"), legendDirection.horizontal), _defineProperty(_classNames, "".concat(prefixCls, "-alone-top"), legendDirection.alone && legendDirection.top), _defineProperty(_classNames, "".concat(prefixCls, "-timeRange"), timeRange), _classNames))
  }, !!timeRange ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-timeRange-wrap")
  }, /*#__PURE__*/React.createElement(Title, {
    text: title
  }), /*#__PURE__*/React.createElement(Segmented, timeRange)) : /*#__PURE__*/React.createElement(Title, {
    text: title
  }), isLegend && (legendDirection.horizontal || legendDirection.alone && legendDirection.top) && /*#__PURE__*/React.createElement(Legend, {
    legend: isBoolean(legend) ? {} : legend,
    colors: colorMap
  })), isLegend && legendDirection.vertical ? /*#__PURE__*/React.createElement("div", {
    style: {
      // @ts-ignore
      gap: legendDirection.vertical && !isBoolean(legend) ? legend === null || legend === void 0 ? void 0 : legend.verticalGap : undefined
    },
    className: classNames("".concat(prefixCls, "-vertical"), _defineProperty({}, "".concat(prefixCls, "-align-center"), legendDirection.box))
  }, /*#__PURE__*/React.createElement("div", null, children), /*#__PURE__*/React.createElement(Legend, {
    legend: isBoolean(legend) ? {} : legend,
    colors: colorMap
  })) : children, isLegend && legendDirection.alone && legendDirection.bottom && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-alone-bottom")
  }, /*#__PURE__*/React.createElement(Legend, {
    legend: isBoolean(legend) ? {} : legend,
    colors: colorMap
  })));
};
export default Composite;