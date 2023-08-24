import type { LineConfig as BaseLineConfig } from '@ant-design/plots';
import type { FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface LineConfig extends BaseConfig {
    type: 'multiple';
    data?: BaseLineConfig['data'];
    config?: Omit<BaseLineConfig, 'data'> & {
        data?: BaseLineConfig['data'];
    };
}
declare const Line: FC<LineConfig>;
export default Line;
