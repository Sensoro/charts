import type { BaseConfig } from '@ant-design/plots';
declare type ColorType = 'small' | 'middle' | 'large';
declare type Config = BaseConfig<any>;
export declare type ColorMap = Record<string, string>;
export declare const mergeConfig: (config: Config, data: Record<string, any>[] | {
    name: string;
    children: Record<string, any>[];
} | undefined) => any;
/**
 * 生成自定义颜色
 */
export declare const generateColorMap: (colors: ColorMap, type?: ColorType) => ColorMap;
export {};
