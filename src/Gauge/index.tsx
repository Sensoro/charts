import type { GaugeConfig as BaseGaugeConfig } from '@ant-design/plots';
import { Gauge as BaseGauge, G2 } from '@ant-design/plots';
import { merge } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import { getDefaultConfig } from '../config/base';
import { COLORS_SMALL } from '../style';
import type { BaseConfig, BaseLegend } from '../types';
import './index.less';

export interface GaugeConfig extends BaseConfig {
  type?: 'basic';
  title?: string;
  percent?: BaseGaugeConfig['percent'];
  config?: Omit<BaseGaugeConfig, 'percent'> & {
    percent?: BaseGaugeConfig['percent'];
  };
}

const genDefaultConfig = ({ height }: { height?: number }) => {
  return {
    basic: {
      ...getDefaultConfig({
        gauge: true,
        height,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-gauge';

const Gauge: FC<GaugeConfig> = ({
  config,
  percent,
  title,
  type = 'basic',
  legend,
  style = {},
  className = '',
  empty,
  customsColors,
}) => {
  const { registerShape, Util } = G2; // 自定义 Shape 部分

  registerShape('point', 'custom-gauge-indicator', {
    draw(cfg, container) {
      // 使用 customInfo 传递参数
      const { indicator, defaultColor } = cfg.customInfo;
      const { pointer, pin } = indicator;

      const group = container.addGroup(); // 获取极坐标系下画布中心点

      // 获取极坐标系下画布中心点;
      // @ts-ignore
      const center = this.parsePoint({
        x: 0,
        y: 0,
      }); // 绘制指针

      if (pointer) {
        // @ts-ignore
        const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
        // @ts-ignore
        const midAngle = (startAngle + endAngle) / 2;
        // @ts-ignore
        const radius = this.coordinate.getRadius();

        const { x: x1, y: y1 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius / 15,
          midAngle + 2 / Math.PI,
        );
        const { x: x2, y: y2 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius / 15,
          midAngle - 2 / Math.PI,
        );
        const { x, y } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.6,
          midAngle - 0.0001,
        );

        const { x: x3, y: y3 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.6,
          midAngle + 0.0001,
        );

        const path = [
          ['M', x1, y1], // 移动到起始点
          ['A', 4, 4, 0, 0, 0, x2, y2], // 绘制一个圆弧
          // ['L', x2, y2],
          ['L', x, y],
          ['L', x3, y3],
          ['Z'],
        ]; // pointer

        group.addShape('path', {
          name: 'pointer',
          attrs: {
            path,
            fill: defaultColor,
            ...pointer.style,
          },
        });

        group.addShape('circle', {
          name: 'pin-inner',
          attrs: {
            x: center.x,
            y: center.y,
            r: 3.5,
            stroke: defaultColor,
            fill: 'transparent',
          },
        });
      }

      if (pin) {
        // @ts-ignore
        const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
        // @ts-ignore
        const midAngle = (startAngle + endAngle) / 2;
        // @ts-ignore
        const radius = this.coordinate.getRadius();

        // @ts-ignore
        const isBig = cfg.data.percent > 0.625;
        // @ts-ignore
        const isBig2 = cfg.data.percent < 0.375;

        const { x: x1, y: y1 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.8,
          -1.25 * Math.PI,
        );
        const { x: x2, y: y2 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.8,
          midAngle,
        );
        const { x: x3, y: y3 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.8,
          0.25 * Math.PI,
        );

        // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
        // x-axis-rotation 是椭圆相对于 x 轴的旋转角度。
        // large-arc-flag 是一个布尔值，表示是否绘制大弧。
        // sweep-flag 也是一个布尔值，表示是否顺时针绘制弧。
        const path = [
          ['M', x1, y1], // 移动到起始点
          ['A', radius * 0.8, radius * 0.8, 0, isBig ? 1 : 0, 1, x2, y2], // 绘制一个半径为 radius * 0.8 的圆弧
        ];

        const path2 = [
          ['M', x3, y3], // 移动到起始点
          ['A', radius * 0.8, radius * 0.8, 0, isBig2 ? 1 : 0, 0, x2, y2], // 绘制一个半径为 radius * 0.8 的圆弧
        ];

        const pinStyle = pin.style || {};
        const { lineWidth = 8, stroke = defaultColor } = pinStyle;
        group.addShape('path', {
          name: 'pin-outer',
          attrs: {
            path,
            ...pin.style,
            fill: 'transparent',
            lineDash: [1, 2],
            lineWidth,
            stroke: COLORS_SMALL[0],
          },
        });
        group.addShape('path', {
          name: 'pin-outer',
          attrs: {
            path: path2,
            ...pin.style,
            fill: 'transparent',
            lineDash: [1, 2],
            lineWidth,
            stroke,
          },
        });
        // group.addShape('circle', {
        //   name: 'pin-inner',
        //   attrs: {
        //     x: center.x,
        //     y: center.y,
        //     r: 3.5,
        //     stroke: 'transparent',
        //     fill,
        //   },
        // });
      }

      return group;
    },
  });

  const colorMap = useMemo(() => {
    if (typeof legend !== 'object') return;

    const { labels = ['成功', '失败'] } = legend as BaseLegend;
    const colors: { [key: string]: string } = {};
    colors[labels[0]] = customsColors?.[0] || COLORS_SMALL[0];
    colors[labels[1]] = customsColors?.[1] || '#ECEEF0';

    return colors;
  }, [legend]);

  const newConfig = merge(
    {},
    genDefaultConfig({ height: config?.height })[type],
    config,
    {
      data: percent,
    },
  ) as BaseGaugeConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={'parcent'}
        legend={legend}
        colorMap={colorMap}
      >
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseGauge {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Gauge;
