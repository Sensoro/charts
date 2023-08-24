import type { RadarConfig as BaseRadarConfig } from '@ant-design/plots';
import { type FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface RadarConfig extends BaseConfig {
    title?: string;
    data?: BaseRadarConfig['data'];
    config?: Omit<BaseRadarConfig, 'data'> & {
        data?: BaseRadarConfig['data'];
    };
}
declare const Radar: FC<RadarConfig>;
export default Radar;
