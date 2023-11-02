/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import type { PieConfig as BasePieConfig } from '@ant-design/plots';
import { Pie as BasePie } from '@ant-design/plots';
import { classNames } from '@pansy/shared';
import { every, groupBy, includes, map, merge, transform } from 'lodash';
import React, { useEffect, useMemo, useState, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface PieConfig extends BaseConfig {
  type: 'pie' | 'ring'; // 基础、分组、双向
  title?: string;
  customsColors?: string[]; // 自定义lengend 色值
  data?: BasePieConfig['data'] & { value: number };
  config?: Omit<BasePieConfig, 'data'> & { data?: BasePieConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  colorField,
  customContentData,
  customsColors,
}: Partial<GetDefaultConfigProps>) => {
  return {
    pie: {
      ...getDefaultConfig({
        pie: true,
        tooltipBox: true,
        colorMap,
        colorField,
        customContentData,
        customsColors,
      }),
      legend: false,
    },
    ring: {
      ...getDefaultConfig({
        pie: true,
        ring: true,
        tooltipBox: true,
        colorMap,
        colorField,
        customContentData,
        customsColors,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-pie';

const Pie: FC<PieConfig> = ({
  config,
  data,
  title,
  type,
  legend,
  timeRange,
  customsColors,
  style = {},
  className = '',
  customContentData,
  empty,
}) => {
  const { colorField } = config ?? {};
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );
  const [rightPadding, setRightPadding] = useState(0);
  const [width, setWidth] = useState(154);
  const [showPie, setShowPie] = useState(false);

  // 环图如果所有数据都为空，展示一个完整的不换色的环： #F6F7F8;
  const isRingZero = useMemo(() => {
    // @ts-ignore
    return type === 'ring' && every(originalData, (data) => !data.value);
  }, [originalData]);

  const legendMap = useMemo(
    () => (colorField ? groupBy(originalData, colorField) : {}),
    [colorField, originalData],
  );

  const colorMap = useMemo(() => {
    const data = transform(
      legendMap,
      (result: Record<string, ''>, value, key) => {
        result[key] = '';
        return result;
      },
      {},
    );

    return generateColorMap(data, undefined, customsColors);
  }, [legendMap]);

  const newConfig = merge(
    {},
    genDefaultConfig({
      colorMap,
      colorField,
      customContentData,
      customsColors,
    })[type],
    config,
    {
      data: originalData,
    },
  ) as BasePieConfig;

  const newData = isRingZero ? newConfig.data.slice(0, 1) : newConfig.data;
  let tootip = newConfig.tooltip;

  if (isRingZero) {
    // @ts-ignore
    newConfig.theme = {
      colors10: Array.from(Array(10), () => '#F6F7F8'),
    };
    tootip = false;
  }

  useEffect(() => {
    if (legend === false) {
      setShowPie(true);
      return;
    }
    const pieWidth =
      (document.querySelector('.sen-pie')?.clientWidth! ?? 300) - 48;
    const legendWidth = document.querySelector('.sen-legend')?.clientWidth ?? 0;
    const width = newConfig.height ?? 154;

    const { verticalGap } =
      legend === true || !legend
        ? { verticalGap: 48 }
        : { verticalGap: 48, ...legend };

    const legendRightPadding = legendWidth + verticalGap;
    const contentWidth = width + legendRightPadding;
    const contentPadding = (pieWidth - contentWidth) / 2;
    const left = contentPadding + width + verticalGap;

    const curStyle = document
      .querySelector(
        `${className ? `.${className} .sen-legend` : '.sen-legend'}`,
      )
      ?.getAttribute('style');

    document
      .querySelector(
        `${className ? `.${className} .sen-legend` : '.sen-legend'}`,
      )
      ?.setAttribute(
        'style',
        `position: absolute; left: ${left}px; ${
          includes(curStyle, 'position: absolute;') ? '' : curStyle
        }`,
      );

    setRightPadding(legendRightPadding);
    setWidth(pieWidth);
    setShowPie(true);
  }, [newConfig, legend]);

  return (
    <div className={classNames(`${prefixCls}`, `${className}`)} style={style}>
      <Composite
        title={title}
        seriesField={colorField}
        legend={
          legend === false
            ? false
            : {
                direction: 'vertical',
                type: 'box',
                ...(typeof legend === 'object' ? legend : {}),
              }
        }
        colorMap={colorMap}
        timeRange={timeRange}
      >
        {!showPie ? null : empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BasePie
            {...newConfig}
            width={width}
            padding={[0, rightPadding, 0, 0]}
            data={newData}
            tooltip={tootip}
            interactions={[]}
          />
        )}
      </Composite>
    </div>
  );
};

export default Pie;