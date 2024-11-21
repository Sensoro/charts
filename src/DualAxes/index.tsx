import type { DualAxesConfig as BaseDualAxesConfig } from '@ant-design/plots';
import { DualAxes as BaseDualAxes } from '@ant-design/plots';
import { map, merge, reduce } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface DualAxesConfig extends BaseConfig {
  title?: string;
  data?: BaseDualAxesConfig['data'];
  config?: Omit<BaseDualAxesConfig, 'data'> & {
    data?: BaseDualAxesConfig['data'];
  };
  customsColors?: string[]; // 自定义lengend 色值
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
  legend,
  showTooltipTitle,
}: Partial<GetDefaultConfigProps>) => {
  return {
    ...getDefaultConfig({
      tooltip: true,
      tooltipBox: typeof legend === 'object' && legend?.type === 'box',
      tooltipType: typeof legend === 'object' && legend?.type,
      showTooltipTitle,
      colorMap,
      seriesField,
      customContentData,
    }),
    legend: false,
  };
};

const prefixCls = 'sen-DualAxes';

const DualAxes: FC<DualAxesConfig> = (props) => {
  const {
    config,
    data,
    title,
    legend,
    timeRange,
    style = {},
    className = '',
    empty,
    tooltip,
    customContentData,
    customsColors,
  } = props;
  const { seriesField } = config ?? {};
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );

  const colorMap = useMemo(() => {
    const data = reduce(
      config?.yField,
      (result: Record<string, ''>, key) => {
        result[key] = '';
        return result;
      },
      {},
    );
    return generateColorMap(data, undefined, customsColors);
  }, [config?.yField]);

  const newConfig = merge(
    {},
    genDefaultConfig({
      colorMap,
      seriesField,
      customContentData,
      legend,
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
    }),
    config,
    {
      data: originalData,
    },
  ) as BaseDualAxesConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={config?.yField?.[0]}
        legend={legend}
        colorMap={colorMap}
        timeRange={timeRange}
      >
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseDualAxes {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default DualAxes;
