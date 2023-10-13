import React from 'react';
import type { BaseConfig } from '../types';
import type { ColorMap } from '../utils';

import { get, map } from 'lodash';
import SVG from 'react-inlinesvg';
import marker from '../assets/marker.svg';
import { COLORS_LARGE, COLORS_SMALL } from '../style';

export interface GetDefaultConfigProps extends BaseConfig {
  /** 自定义标点 */
  point?: boolean;
  /** 自定义 Tooltip */
  tooltip?: boolean;
  /** 自定义 Tooltip */
  tooltipBox?: boolean;
  /** 自定义颜色映射值 */
  colorMap?: ColorMap;
  /** 分类字段 */
  seriesField?: string;
  /** 是否展示十字辅助线 */
  showCrosshairs?: boolean;
  /** 是否是饼图 */
  pie?: boolean;
  /** 是否是环图 */
  ring?: boolean;
  /** 饼图、环图的颜色分类 */
  colorField?: string;
  /** treemap */
  treemap?: boolean;
  /** rose */
  rose?: boolean;
  /** radar 雷达图 */
  radar?: boolean;
}

const prefixCls = 'g2-tooltip';

/**
 * 获取默认配置
 * @param point 是否开启点配置
 * @param tooltip 是否开启自定义 Tooltip
 * @param colorMap 自定义颜色映射值
 * @param seriesField 分类字段
 * @param customContentData 修改tooltip render数据
 */
export const getDefaultConfig = ({
  point,
  tooltip,
  tooltipBox,
  colorMap,
  seriesField,
  customContentData,
  showCrosshairs = false,
  pie,
  ring,
  treemap,
  rose,
  radar,
}: GetDefaultConfigProps): any => {
  const config = {
    xAxis: rose
      ? null
      : {
          // x轴文字
          label: {
            style: {
              textAlign: 'center',
              fill: 'rgba(10, 27, 57, 0.25)',
              fontSize: 12,
            },
          },
          // x轴的线
          line: {
            style: {
              stroke: '#eceef0',
              fill: 'none',
            },
          },
          // 刻度线
          tickLine: {
            style: {
              stroke: '#eceef0',
              length: 4,
            },
          },
        },
    yAxis: rose
      ? null
      : {
          label: {
            style: {
              fill: 'rgba(10, 27, 57, 0.25)',
              fontSize: 12,
            },
          },
          grid: {
            line: {
              style: {
                stroke: '#f1f2f4',
                lineWidth: 1,
                lineDash: [3, 2],
              },
            },
          },
        },
    tooltip: {
      showCrosshairs,
      crosshairs: {
        type: 'x', // 展示十字辅助线
        line: {
          style: {
            stroke: '#82b6ff',
            lineWidth: 2,
            lineDash: [3, 2],
            lineOpacity: 1,
          },
        },
      },
    },
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
                stroke: '#588BEE',
              },
            },
          },
        },
      },
    });
  }

  if (tooltip) {
    Object.assign(config, {
      tooltip: {
        ...config.tooltip,
        domStyles: {
          'g2-tooltip': {
            boxShadow: 'none',
            backgroundColor: 'rgba(10, 27, 57, 0.8)',
          },
          'g2-tooltip-title': {
            color: '#c2c7ce',
            fontSize: 12,
            lineHeight: '20px',
            margin: '12px 0 4px',
          },
          'g2-tooltip-name': {
            color: '#fff',
          },
          'g2-tooltip-value': {
            color: '#fff',
          },
          'g2-tooltip-marker': {
            borderRadius: '2px',
            height: 2,
          },
          'g2-tooltip-list-item': {
            display: 'flex',
            alignItems: 'center',
          },
        },
        customContent: (title: string, original: any[]) => {
          const data = customContentData
            ? customContentData(original)
            : original;

          return (
            <>
              <div className={`${prefixCls}-title`}>{title}</div>
              <ul className={`${prefixCls}-list`}>
                {map(data, (item, idx) => {
                  const color = seriesField
                    ? colorMap?.[get(item, `data.${seriesField}`)]
                    : COLORS_SMALL[0];

                  return (
                    <li key={idx} className={`${prefixCls}-list-item`}>
                      <SVG
                        src={marker}
                        preProcessor={(code) =>
                          code.replace(/fill=".*?"/g, `fill="${color}"`)
                        }
                        style={{ marginRight: 8 }}
                        width={8}
                        height={8}
                      />
                      <span className={`${prefixCls}-name`}>{item.name}</span>
                      <span className={`${prefixCls}-value`}>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        },
      },
    });
  }

  if (tooltipBox) {
    Object.assign(config, {
      tooltip: {
        ...config.tooltip,
        domStyles: {
          'g2-tooltip': {
            boxShadow: 'none',
            backgroundColor: 'rgba(10, 27, 57, 0.8)',
          },
          'g2-tooltip-title': {
            color: '#c2c7ce',
            fontSize: 12,
            lineHeight: '20px',
            margin: '12px 0 4px',
          },
          'g2-tooltip-name': {
            color: '#fff',
          },
          'g2-tooltip-value': {
            color: '#fff',
          },
          'g2-tooltip-marker': {
            borderRadius: '2px',
            height: 8,
            width: 8,
          },
          'g2-tooltip-list-item': {
            display: 'flex',
            alignItems: 'center',
          },
        },
        customContent: (title: string, original: any[]) => {
          const data = customContentData
            ? customContentData(original)
            : original;

          return (
            <>
              <ul className={`${prefixCls}-list`}>
                {map(data, (item, idx) => {
                  const color = item.color ?? COLORS_SMALL[0];

                  return (
                    <li key={idx} className={`${prefixCls}-list-item`}>
                      <div
                        className={`${prefixCls}-marker`}
                        style={{ background: color, width: 8, height: 8 }}
                      />
                      <span className={`${prefixCls}-name`}>{item.name}</span>
                      <span className={`${prefixCls}-value`}>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        },
      },
    });
  }

  if (treemap) {
    Object.assign(config, {
      color: Array.from(Array(24), (item, index) => COLORS_LARGE[index % 24]),
      label: {
        style: {
          fill: '#fff',
          fontSize: '12px',
          opacity: 1,
        },
      },
      rectStyle: {
        lineWidth: 2,
      },
    });
  }

  if (pie) {
    Object.assign(config, {
      theme: {
        colors10: Array.from(
          Array(10),
          (item, index) => COLORS_SMALL[index % 8],
        ),
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
      width: 154,
      height: 154,
      autoFit: false,
      padding: 0,
      label: undefined,
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
            transform: 'translate(-50%, 8px)',
          },
        },
        content: {
          style: {
            fontSize: '24px',
            lineHeight: '24px',
            height: '24px',
            color: '#0a1b39',
            fontFamily: 'DIN Alternate',
            transform: 'translate(-50%, -100%)',
          },
        },
      },
    });
  }

  if (rose) {
    Object.assign(config, {
      color: Array.from(Array(24), (item, index) => COLORS_LARGE[index % 24]),
      label: {
        style: {
          opacity: 0,
        },
      },
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
            fontSize: 12,
          },
        },
        grid: {
          line: {
            style: {
              stroke: '#f1f2f4',
              lineWidth: 1,
              lineDash: [3, 2],
            },
          },
        },
      },
      yAxis: {
        line: null,
        tickLine: null,
        label: {
          style: {
            fill: 'rgba(10, 27, 57, 0.25)',
            fontSize: 12,
          },
        },
        grid: {
          line: {
            type: 'line',
            style: {
              stroke: '#f1f2f4',
              lineWidth: 1,
              lineDash: [3, 2],
            },
          },
        },
      },
      // 开启面积
      area: {},
      // 开启辅助点
      point: {
        size: 4,
      },
    });
  }

  return config;
};