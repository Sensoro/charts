import type { DualAxesConfig } from '@sensoro-design/charts';
import { DualAxes } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  // 第一个数组是柱状图数据
  [
    { time: '2020-01', 事件数量: 100 },
    { time: '2020-02', 事件数量: 200 },
    { time: '2020-03', 事件数量: 100 },
    { time: '2020-04', 事件数量: 300 },
    { time: '2020-05', 事件数量: 200 },
    { time: '2020-06', 事件数量: 400 },
  ],
  // 第二个数组是折线图数据
  [
    { time: '2020-01', 完结率: 10 },
    { time: '2020-02', 完结率: 65 },
    { time: '2020-03', 完结率: 10 },
    { time: '2020-04', 完结率: 30 },
    { time: '2020-05', 完结率: 20 },
    { time: '2020-06', 完结率: 44 },
  ],
];

export default () => {
  const [config, setConfig] = useState<DualAxesConfig['config']>({
    data,
    xField: 'time',
    yField: ['事件数量', '完结率'],
    // yAxis: {
    //   事件数量: {
    //     min: 0, // 第一个 y 轴从 0 开始
    //     tickCount: 5,
    //   },
    //   完结率: {
    //     min: 0, // 第二个 y 轴从 0 开始
    //     max: 100,
    //     tickCount: 5,
    //     label: {
    //       formatter: (v) => `${v}%`,
    //     },
    //   },
    // },
    geometryOptions: [
      // 柱状图配置
      {
        geometry: 'column',
        color: '#5B8FF9',
      },
      // 折线图配置
      {
        geometry: 'line',
        // smooth: true,
        color: '#5AD8A6',
        // 可选：配置折线上的点
        point: {
          size: 4,
          shape: 'circle',
          style: {
            fill: '#fff',
            stroke: '#5AD8A6',
            lineWidth: 2,
          },
        },
      },
    ],
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
      <div style={{ width: '40%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <DualAxes
          title="基础双轴图"
          legend={{ type: ['box', 'svg'] }}
          config={config}
          // tooltip={{ showTitle: false }}
        />
      </div>
    </div>
  );
};
