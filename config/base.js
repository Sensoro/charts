function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import { get, map } from 'lodash';
import SVG from 'react-inlinesvg';
import marker from "../assets/marker.svg";
import { COLORS_LARGE, COLORS_SMALL } from "../style";
var prefixCls = 'g2-tooltip';

/**
 * 获取默认配置
 * @param point 是否开启点配置
 * @param tooltip 是否开启自定义 Tooltip
 * @param colorMap 自定义颜色映射值
 * @param seriesField 分类字段
 * @param customContentData 修改tooltip render数据
 */
export var getDefaultConfig = function getDefaultConfig(_ref) {
  var point = _ref.point,
    tooltip = _ref.tooltip,
    tooltipBox = _ref.tooltipBox,
    colorMap = _ref.colorMap,
    seriesField = _ref.seriesField,
    customContentData = _ref.customContentData,
    _ref$showCrosshairs = _ref.showCrosshairs,
    showCrosshairs = _ref$showCrosshairs === void 0 ? false : _ref$showCrosshairs,
    pie = _ref.pie,
    ring = _ref.ring,
    treemap = _ref.treemap,
    rose = _ref.rose,
    radar = _ref.radar;
  var config = {
    xAxis: rose ? null : {
      // x轴文字
      label: {
        style: {
          textAlign: 'center',
          fill: 'rgba(10, 27, 57, 0.25)',
          fontSize: 12
        }
      },
      // x轴的线
      line: {
        style: {
          stroke: '#eceef0',
          fill: 'none'
        }
      },
      // 刻度线
      tickLine: {
        style: {
          stroke: '#eceef0',
          length: 4
        }
      }
    },
    yAxis: rose ? null : {
      label: {
        style: {
          fill: 'rgba(10, 27, 57, 0.25)',
          fontSize: 12
        }
      },
      grid: {
        line: {
          style: {
            stroke: '#f1f2f4',
            lineWidth: 1,
            lineDash: [3, 2]
          }
        }
      }
    },
    tooltip: {
      showCrosshairs: showCrosshairs,
      crosshairs: {
        type: 'x',
        // 展示十字辅助线
        line: {
          style: {
            stroke: '#82b6ff',
            lineWidth: 2,
            lineDash: [3, 2],
            lineOpacity: 1
          }
        }
      }
    }
  };
  if (point) {
    Object.assign(config, {
      point: {
        size: 4,
        shape: 'circle',
        style: {
          fill: 'white',
          stroke: '#5591F2',
          lineWidth: 1,
          state: {
            active: {
              style: {
                stroke: '#588BEE'
              }
            }
          }
        }
      }
    });
  }
  if (tooltip) {
    Object.assign(config, {
      tooltip: _objectSpread(_objectSpread({}, config.tooltip), {}, {
        domStyles: {
          'g2-tooltip': {
            boxShadow: 'none',
            backgroundColor: 'rgba(10, 27, 57, 0.8)'
          },
          'g2-tooltip-title': {
            color: '#c2c7ce',
            fontSize: 12,
            lineHeight: '20px',
            margin: '12px 0 4px'
          },
          'g2-tooltip-name': {
            color: '#fff'
          },
          'g2-tooltip-value': {
            color: '#fff'
          },
          'g2-tooltip-marker': {
            borderRadius: '2px',
            height: 2
          },
          'g2-tooltip-list-item': {
            display: 'flex',
            alignItems: 'center'
          }
        },
        customContent: function customContent(title, original) {
          var data = customContentData ? customContentData(original) : original;
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-title")
          }, title), /*#__PURE__*/React.createElement("ul", {
            className: "".concat(prefixCls, "-list")
          }, map(data, function (item, idx) {
            var color = seriesField ? colorMap === null || colorMap === void 0 ? void 0 : colorMap[get(item, "data.".concat(seriesField))] : COLORS_SMALL[0];
            return /*#__PURE__*/React.createElement("li", {
              key: idx,
              className: "".concat(prefixCls, "-list-item")
            }, /*#__PURE__*/React.createElement(SVG, {
              src: marker,
              preProcessor: function preProcessor(code) {
                return code.replace(/fill=".*?"/g, "fill=\"".concat(color, "\""));
              },
              style: {
                marginRight: 8
              },
              width: 8,
              height: 8
            }), /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-name")
            }, item.name), /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-value")
            }, item.value));
          })));
        }
      })
    });
  }
  if (tooltipBox) {
    Object.assign(config, {
      tooltip: _objectSpread(_objectSpread({}, config.tooltip), {}, {
        domStyles: {
          'g2-tooltip': {
            boxShadow: 'none',
            backgroundColor: 'rgba(10, 27, 57, 0.8)'
          },
          'g2-tooltip-title': {
            color: '#c2c7ce',
            fontSize: 12,
            lineHeight: '20px',
            margin: '12px 0 4px'
          },
          'g2-tooltip-name': {
            color: '#fff'
          },
          'g2-tooltip-value': {
            color: '#fff'
          },
          'g2-tooltip-marker': {
            borderRadius: '2px',
            height: 8,
            width: 8
          },
          'g2-tooltip-list-item': {
            display: 'flex',
            alignItems: 'center'
          }
        },
        customContent: function customContent(title, original) {
          var data = customContentData ? customContentData(original) : original;
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
            className: "".concat(prefixCls, "-list")
          }, map(data, function (item, idx) {
            var _item$color;
            var color = (_item$color = item.color) !== null && _item$color !== void 0 ? _item$color : COLORS_SMALL[0];
            return /*#__PURE__*/React.createElement("li", {
              key: idx,
              className: "".concat(prefixCls, "-list-item")
            }, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-marker"),
              style: {
                background: color,
                width: 8,
                height: 8
              }
            }), /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-name")
            }, item.name), /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-value")
            }, item.value));
          })));
        }
      })
    });
  }
  if (treemap) {
    Object.assign(config, {
      color: Array.from(Array(24), function (item, index) {
        return COLORS_LARGE[index % 24];
      }),
      label: {
        style: {
          fill: '#fff',
          fontSize: '12px',
          opacity: 1
        }
      },
      rectStyle: {
        lineWidth: 2
      }
    });
  }
  if (pie) {
    Object.assign(config, {
      theme: {
        colors10: Array.from(Array(10), function (item, index) {
          return COLORS_SMALL[index % 8];
        })
      },
      interactions: [{
        type: 'element-active'
      }],
      width: 154,
      height: 154,
      autoFit: false,
      padding: 0,
      label: undefined
    });
  }
  if (ring) {
    Object.assign(config, {
      innerRadius: 0.6,
      statistic: {
        title: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '12px',
            lineHeight: '12px',
            height: '12px',
            color: 'rgba(10, 27, 57, 0.35)',
            transform: 'translate(-50%, 8px)'
          }
        },
        content: {
          style: {
            fontSize: '24px',
            lineHeight: '24px',
            height: '24px',
            color: '#0a1b39',
            fontFamily: 'DIN Alternate',
            transform: 'translate(-50%, -100%)'
          }
        }
      }
    });
  }
  if (rose) {
    Object.assign(config, {
      color: Array.from(Array(24), function (item, index) {
        return COLORS_LARGE[index % 24];
      }),
      label: {
        style: {
          opacity: 0
        }
      }
    });
  }
  if (radar) {
    Object.assign(config, {
      xAxis: {
        line: null,
        tickLine: null,
        label: {
          offset: 12,
          style: {
            fill: 'rgba(10, 27, 57, 0.25)',
            fontSize: 12
          }
        },
        grid: {
          line: {
            style: {
              stroke: '#f1f2f4',
              lineWidth: 1,
              lineDash: [3, 2]
            }
          }
        }
      },
      yAxis: {
        line: null,
        tickLine: null,
        label: {
          style: {
            fill: 'rgba(10, 27, 57, 0.25)',
            fontSize: 12
          }
        },
        grid: {
          line: {
            type: 'line',
            style: {
              stroke: '#f1f2f4',
              lineWidth: 1,
              lineDash: [3, 2]
            }
          }
        }
      },
      // 开启面积
      area: {},
      // 开启辅助点
      point: {
        size: 4
      }
    });
  }
  return config;
};