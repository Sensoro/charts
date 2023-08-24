import type { SegmentedProps } from 'antd/es/segmented';
import React, { type FC } from 'react';
import type { BaseLegend } from '../../types';
import type { ColorMap } from '../../utils';
import './index.less';
interface CompositeProps {
    title?: string;
    /** 自定义颜色映射值 */
    colorMap?: ColorMap;
    /** 分类字段 */
    seriesField?: string;
    /** 自定义图例配置 */
    legend?: boolean | BaseLegend;
    /** 时间选择器配置 */
    timeRange?: SegmentedProps;
    /** 图表内容 */
    children: React.ReactNode;
}
declare const Composite: FC<CompositeProps>;
export default Composite;
