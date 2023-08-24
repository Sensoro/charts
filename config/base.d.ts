import type { BaseConfig } from '../types';
import type { ColorMap } from '../utils';
export interface GetDefaultConfigProps extends BaseConfig {
    /** 自定义标点 */
    point?: boolean;
    /** 自定义 Tooltip */
    tooltip?: boolean;
    /** 自定义 Tooltip */
    tooltipBox?: boolean;
    /** 自定义颜色映射值 */
    colorMap?: ColorMap;
    /** 分类字段 */
    seriesField?: string;
    /** 是否展示十字辅助线 */
    showCrosshairs?: boolean;
    /** 是否是饼图 */
    pie?: boolean;
    /** 是否是环图 */
    ring?: boolean;
    /** 饼图、环图的颜色分类 */
    colorField?: string;
    /** treemap */
    treemap?: boolean;
    /** rose */
    rose?: boolean;
    /** radar 雷达图 */
    radar?: boolean;
}
/**
 * 获取默认配置
 * @param point 是否开启点配置
 * @param tooltip 是否开启自定义 Tooltip
 * @param colorMap 自定义颜色映射值
 * @param seriesField 分类字段
 * @param customContentData 修改tooltip render数据
 */
export declare const getDefaultConfig: ({ point, tooltip, tooltipBox, colorMap, seriesField, customContentData, showCrosshairs, pie, ring, treemap, rose, radar, }: GetDefaultConfigProps) => any;
