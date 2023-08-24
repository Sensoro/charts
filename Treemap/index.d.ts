import type { BaseConfig as AntVBaseConfig } from '@ant-design/plots';
import type { FC } from 'react';
import type { BaseConfig } from '../types';
interface Child {
    [key: string]: any;
}
interface Data {
    name: string;
    children: Child[];
}
declare type BaseTreemapConfig = Omit<AntVBaseConfig<any>, 'tooltip'>;
export interface TreemapConfig extends BaseTreemapConfig, BaseConfig {
    title?: string;
    data?: Data;
    config?: Omit<BaseTreemapConfig, 'data'> & {
        data?: Data;
    };
}
declare const Treemap: FC<TreemapConfig>;
export default Treemap;
