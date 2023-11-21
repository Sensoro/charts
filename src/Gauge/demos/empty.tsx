import { Funnel } from '@sensoro-design/charts';
import React from 'react';

export default () => {
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
        <Funnel title="漏斗图" type="basic" empty style={{ height: 200 }} />
      </div>
      <div style={{ width: '50%' }}>
        <Funnel
          title="漏斗图"
          type="basic"
          empty={
            <div style={{ height: 160, display: 'flex', alignItems: 'center' }}>
              dom形式空状态
            </div>
          }
        />
      </div>
    </div>
  );
};
