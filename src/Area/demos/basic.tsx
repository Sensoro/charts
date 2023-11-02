import type { AreaConfig } from '@sensoro-design/charts';
import { Area } from '@sensoro-design/charts';
import { slice } from 'lodash';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<AreaConfig['config']>({
    data: [],
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    seriesField: 'type',
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json',
    )
      .then((response) => response.json())
      .then((json) =>
        setConfig({
          ...config,
          data: slice(json, 0).map((item: any) => ({
            ...item,
            type: 'value',
          })),
        }),
      )
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

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
        <Area title="基础面积图" config={config} legend type="basic" empty />
      </div>
    </div>
  );
};