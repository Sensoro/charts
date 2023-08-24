function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { classNames } from '@pansy/shared';
import { Space } from 'antd';
import { get, isFunction, keys, map } from 'lodash';
import React, { useMemo } from 'react';
import SVG from 'react-inlinesvg';
import marker from "../../assets/marker.svg";
import "./index.less";
var prefixCls = 'sen-legend';
var Legend = function Legend(_ref) {
  var legend = _ref.legend,
    colors = _ref.colors;
  var direction = useMemo(function () {
    var _ref2;
    return (_ref2 = get(legend, 'direction', 'horizontal')) !== null && _ref2 !== void 0 ? _ref2 : 'horizontal';
  }, [legend]);
  var type = useMemo(function () {
    var _get;
    return (_get = get(legend, 'type', 'svg')) !== null && _get !== void 0 ? _get : 'svg';
  }, [legend]);
  return /*#__PURE__*/React.createElement(Space, {
    direction: direction,
    align: direction === 'vertical' ? 'baseline' : 'start',
    size: direction === 'horizontal' ? 24 : 8,
    className: classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-center"), true)),
    style: {
      rowGap: direction === 'horizontal' ? 24 : 8,
      columnGap: 24,
      flexWrap: 'wrap'
    }
  }, map(keys(colors), function (name, index) {
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item"),
      key: name
    }, type === 'svg' ? /*#__PURE__*/React.createElement(SVG, {
      src: marker,
      preProcessor: function preProcessor(code) {
        return code.replace(/fill=".*?"/g, "fill=\"".concat(colors[name], "\""));
      },
      style: {
        marginRight: 8
      },
      width: 8,
      height: 8
    }) : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-box"),
      style: {
        background: colors[name]
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-name")
    }, legend !== null && legend !== void 0 && legend.processData && isFunction(legend === null || legend === void 0 ? void 0 : legend.processData) ? legend.processData(name, index) : name));
  }));
};
export default Legend;