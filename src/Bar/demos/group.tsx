import type { BarConfig } from '@sensoro-design/charts';
import { Bar } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    label: 'Mon.',
    type: 'series1',
    value: 2800,
  },
  {
    label: 'Mon.',
    type: 'series2',
    value: 2260,
  },
  {
    label: 'Tues.',
    type: 'series1',
    value: 1800,
  },
  {
    label: 'Tues.',
    type: 'series2',
    value: 1300,
  },
  {
    label: 'Wed.',
    type: 'series1',
    value: 950,
  },
  {
    label: 'Wed.',
    type: 'series2',
    value: 900,
  },
  {
    label: 'Thur.',
    type: 'series1',
    value: 500,
  },
  {
    label: 'Thur.',
    type: 'series2',
    value: 390,
  },
  {
    label: 'Fri.',
    type: 'series1',
    value: 170,
  },
  {
    label: 'Fri.',
    type: 'series2',
    value: 100,
  },
];

export default () => {
  const [config, setConfig] = useState<BarConfig>({
    data,
    isGroup: true,
    xField: 'value',
    yField: 'label',

    /** 自定义颜色 */
    // color: ['#1383ab', '#c52125'],
    seriesField: 'type',
    marginRatio: 0,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 16,
        height: 500,
      }}
    >
      <div style={{ width: '50%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '50%' }}>
        <Bar config={config} />
      </div>
    </div>
  );
};