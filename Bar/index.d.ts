import type { BarConfig as BaseBarConfig } from '@ant-design/plots';
import { type FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface BarConfig extends BaseConfig {
    type: 'basic';
    title?: string;
    data?: BaseBarConfig['data'];
    config?: Omit<BaseBarConfig, 'data'> & {
        data?: BaseBarConfig['data'];
    };
}
declare const Bar: FC<BarConfig>;
export default Bar;
