import type { AreaConfig as BaseAreaConfig } from '@ant-design/plots';
import type { FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface AreaConfig extends BaseConfig {
    type: 'basic' | 'gradient' | 'stack' | 'smooth';
    title?: string;
    data?: BaseAreaConfig['data'];
    config?: Omit<BaseAreaConfig, 'data'> & {
        data?: BaseAreaConfig['data'];
    };
}
declare const Area: FC<AreaConfig>;
export default Area;
