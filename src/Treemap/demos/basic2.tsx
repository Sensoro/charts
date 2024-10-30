import type { TreemapConfig } from '@sensoro-design/charts';
import { Treemap } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = {
  name: 'root',
  children: [
    {
      name: '人员聚集',
      value: 1088,
    },
    {
      name: '消防通道占用',
      value: 250,
    },
    {
      name: '人员离岗',
      value: 220,
    },
    {
      name: '电动车识别',
      value: 200,
    },
    {
      name: '未带口罩',
      value: 100,
    },
    {
      name: '行为识别',
      value: 90,
    },
    {
      name: '预防溺水',
      value: 80,
    },
    {
      name: '区域入侵',
      value: 170,
    },
    {
      name: '打架斗殴',
      value: 30,
    },
    {
      name: '遛狗不牵绳',
      value: 20,
    },
  ],
};

export default () => {
  const [config, setConfig] = useState<TreemapConfig['config']>({
    data,
    colorField: 'name',
    tooltip: {
      formatter: (v: any) => {
        return {
          name: v.name,
          value: `${v.value}`,
        };
      },
    },
    height: 200,
    limitInPlot: true,
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
        <Treemap
          key="11"
          title="矩形树图"
          config={config}
          style={{ width: 640 }}
        />
      </div>
    </div>
  );
};
