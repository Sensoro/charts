import React from 'react';
import type { BaseLegend } from '../../types';
import './index.less';
interface LegendProps {
    legend: BaseLegend;
    colors: Record<string, string>;
}
declare const Legend: React.FC<LegendProps>;
export default Legend;
