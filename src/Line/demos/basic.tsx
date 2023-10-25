import type { LineConfig } from '@sensoro-design/charts';
import { Line } from '@sensoro-design/charts';
import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<LineConfig['config']>({
    data: [],
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setConfig({ ...config, data: json }))
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
        <Line
          legend={{
            processData: (name, index) => `类型${name}${index + 1}`,
          }}
          title="基础折线图"
          type="basic"
          config={config}
          customContentData={(data) => {
            return map(data, (item, idx) => ({
              ...item,
              name: `类型${idx + 1}`,
              value: `${item.value}`.replace(
                /\d{1,3}(?=(\d{3})+$)/g,
                (s) => `${s},`,
              ),
            }));
          }}
        />
      </div>
    </div>
  );
};
