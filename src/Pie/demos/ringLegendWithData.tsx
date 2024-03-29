import type { PieConfig } from '@sensoro-design/charts';
import { Pie } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三wdfsd',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
];

export default () => {
  const [config, setConfig] = useState<PieConfig['config']>({
    data,
    angleField: 'value',
    colorField: 'type',
    statistic: {
      title: { content: 'title' },
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '100',
      },
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
      <div style={{ width: '40%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Pie
          title="环图-图例带数据"
          type="ring"
          config={config}
          legend={{
            legendItemGap: 8,
            verticalGap: 40,
            // @ts-ignore
            processData: (name: string, index: number) => {
              return (
                <span>
                  {name}
                  <span
                    style={{
                      fontFamily: 'DIN Alternate',
                      color: '#0A1B39',
                      marginLeft: 8,
                    }}
                  >
                    {data[index].value}
                  </span>
                </span>
              );
            },
          }}
          style={{ width: 384 }}
          className="ring-legend-data"
        />
      </div>
    </div>
  );
};
