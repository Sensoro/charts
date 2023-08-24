import type { RoseConfig as BaseRoseConfig } from '@ant-design/plots';
import { type FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface RoseConfig extends BaseConfig {
    title?: string;
    data?: BaseRoseConfig['data'];
    config?: Omit<BaseRoseConfig, 'data'> & {
        data?: BaseRoseConfig['data'];
    };
}
declare const Rose: FC<RoseConfig>;
export default Rose;
