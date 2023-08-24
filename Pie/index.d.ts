import type { PieConfig as BasePieConfig } from '@ant-design/plots';
import { type FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface PieConfig extends BaseConfig {
    type: 'pie' | 'ring';
    title?: string;
    data?: BasePieConfig['data'];
    config?: Omit<BasePieConfig, 'data'> & {
        data?: BasePieConfig['data'];
    };
}
declare const Pie: FC<PieConfig>;
export default Pie;
