import type { BarConfig } from '@sensoro-design/charts';
import { Bar } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    year: '1951 年',
    value: 38,
  },
  {
    year: '1952 年',
    value: 52,
  },
  {
    year: '1956 年',
    value: 61,
  },
  {
    year: '1957 年',
    value: 145,
  },
  {
    year: '1958 年',
    value: 48,
  },
  {
    year: '1959 年',
    value: 62,
  },
  {
    year: '1960 年',
    value: 78,
  },
];

export default () => {
  const [config, setConfig] = useState<BarConfig['config']>({
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
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
        <Bar type="basic" title="条形图" config={config} />
      </div>
    </div>
  );
};
