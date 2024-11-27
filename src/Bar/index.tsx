import type { BarConfig as BaseBarConfig } from '@ant-design/plots';
import { Bar as BaseBar } from '@ant-design/plots';
import { entries, groupBy, map, merge, sumBy, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import type { CustomBarProps } from './CustomBar';
import './index.less';

export interface BarConfig extends BaseConfig {
  title?: string;
  type?: 'basic' | 'alone' | 'range' | 'multiRange'; // 正常、单独行、区间条形图、多行区间条形图
  data?: CustomBarProps['data'];
  labelFormatter?: (text: number | string) => string;
  config: Omit<BaseBarConfig, 'data'> & { data?: CustomBarProps['data'] };
}

const defaultInlineLabel = {
  offset: 16,
  style: {
    fill: '#0a1b39',
    fillOpacity: 0.6,
  },
  formatter: (text: string) => {
    const maxWidth = 110; // 设置最大宽度（px）

    // 创建临时 canvas 计算文本宽度
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = '12px'; // 需要匹配实际使用的字体和大小
      const width = context.measureText(text).width;

      // 如果超出最大宽度，逐个字符截断直到满足宽度要求
      if (width > maxWidth) {
        let truncatedText = text;
        while (truncatedText.length > 0) {
          truncatedText = truncatedText.slice(0, -1);
          const truncatedWidth = context.measureText(
            truncatedText + '...',
          ).width;
          if (truncatedWidth <= maxWidth) {
            return truncatedText + '...';
          }
        }
      }
    }
    return text;
  },
};

const defaultAloneLabel = {
  position: 'left',
  offsetX: 8,
  offsetY: -16,
  style: {
    fill: '#0a1b39',
    fillOpacity: 0.6,
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'left',
  },
};

const getDefaultBarConfig = (type: 'basic' | 'alone') => ({
  legend: false,
  minBarWidth: 8,
  maxBarWidth: 8,
  // 设置条形图背景色
  barBackground: {
    style: {
      fill: '#0a1b39',
      fillOpacity: 0.04,
      fontSize: 12,
      lineHeight: 20,
    },
  },
  marginRatio: 0, // 关闭自动调整间距
  interactions: [], // 交互设置为空，不显示hover效果
  xAxis: false, // 隐藏x轴
  label: false, // 关闭默认标签
  yAxis: {
    label: type === 'basic' ? defaultInlineLabel : defaultAloneLabel,
    line: false, // 隐藏y轴线
    tickLine: false, // 隐藏y轴刻度线
  },
});

const genDefaultConfig = ({
  showTooltipTitle,
  customContentData,
}: Partial<GetDefaultConfigProps>) => {
  return {
    basic: {
      ...getDefaultConfig({
        tooltip: true,
        tooltipBox: true,
        showTooltipTitle,
        customContentData,
      }),
      ...getDefaultBarConfig('basic'),
      // tooltip: false,
    },
    alone: {
      ...getDefaultConfig({
        tooltip: true,
        tooltipBox: true,
        showTooltipTitle,
        customContentData,
      }),
      ...getDefaultBarConfig('alone'),
      layout: [
        {
          type: 'flex',
          alignItems: 'flex-start', // 左对齐
        },
      ],
      // tooltip: false,
    },
    range: {
      ...getDefaultConfig({
        rangebar: true,
        tooltip: true,
        tooltipBox: true,
        showTooltipTitle,
        customContentData,
      }),
      legend: false,
    },
    multiRange: {
      ...getDefaultConfig({
        rangebar: true,
        multiRange: true,
        tooltip: true,
        tooltipBox: true,
        showTooltipTitle,
        customContentData,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-bar';
const showLabelValue = ['alone', 'basic'];

const Bar: FC<BarConfig> = ({
  config,
  data,
  title,
  type = 'basic',
  timeRange,
  empty,
  style = {},
  className = '',
  tooltip,
  legend = false,
  customContentData,
  labelFormatter,
  customsColors,
}) => {
  const {
    yField = 'label',
    xField = 'value',
    isStack = false,
    seriesField,
  } = config || {};

  // 转换数据格式
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({
        ...item,
        label: item[yField],
        value: item[xField],
        __index__: idx,
      })),
    [data, config?.data],
  );
  // 条形图右侧数值labelData 数据
  const labelData = isStack
    ? map(entries(groupBy(originalData, yField)), ([key, value]) => ({
        label: key,
        value: labelFormatter
          ? labelFormatter(sumBy(value, 'value'))
          : sumBy(value, 'value'),
      }))
    : originalData.map((item) => ({
        label: item.label,
        value: labelFormatter ? labelFormatter(item.value) : item.value,
      }));

  const legendMap = useMemo(
    () => (seriesField ? groupBy(originalData, seriesField) : {}),
    [seriesField, originalData],
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
    return generateColorMap(
      data,
      undefined,
      (config?.color as string[]) || customsColors,
    );
  }, [legendMap]);

  const height =
    labelData.length * 8 +
    (labelData.length - 1) * (type === 'alone' ? 36 : 21) +
    (type === 'alone' ? 36 : 20);

  // 生成新的配置
  const newConfig = merge(
    {
      height,
    },
    genDefaultConfig({
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
      customContentData,
    })[type],
    config,
    {
      data: originalData,
    },
  ) as BaseBarConfig;

  if ((type === 'alone' || type === 'basic') && !isStack) {
    newConfig.tooltip = false;
  }

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <div className={`${prefixCls}-content`}>
        <Composite
          title={title}
          legend={legend}
          seriesField={seriesField}
          colorMap={colorMap}
          timeRange={timeRange}
        >
          {
            empty ? (
              <div className={`${prefixCls}-empty`}>
                {typeof empty === 'boolean' ? '暂无内容' : empty}
              </div>
            ) : (
              <div style={{ display: 'flex', height }}>
                <BaseBar {...newConfig} className={`${prefixCls}-main`} />
                {showLabelValue.includes(type) && (
                  <div
                    className={`${prefixCls}-label-value ${
                      type === 'alone' ? `${prefixCls}-label-value-alone` : ''
                    }`}
                  >
                    {labelData.map((item) => (
                      <div
                        key={item.label}
                        className={`${prefixCls}-label-value-item`}
                      >
                        {item.value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
            //   ['basic', 'alone'].includes(type) ? (
            // <CustomBar type={type as 'basic' | 'alone'} data={originalData} />
            // ) : (
            //   <BaseBar {...newConfig} style={{flex: 1}} />
            // )
          }
        </Composite>
      </div>
    </div>
  );
};

export default Bar;
