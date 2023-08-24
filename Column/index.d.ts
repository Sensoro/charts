import type { ColumnConfig as BaseColumnConfig } from '@ant-design/plots';
import { type FC } from 'react';
import type { BaseConfig } from '../types';
import './index.less';
export interface ColumnConfig extends BaseConfig {
    type: 'basic' | 'group' | 'bidirection';
    title?: string;
    data?: BaseColumnConfig['data'];
    config?: Omit<BaseColumnConfig, 'data'> & {
        data?: BaseColumnConfig['data'];
    };
}
declare const Column: FC<ColumnConfig>;
export default Column;
