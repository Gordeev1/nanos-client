import React, { memo, useMemo, useCallback } from 'react';
import { VictoryPie } from 'victory-native';
import { HEADER_CONTENT_HEIGHT } from '@modules/Shared/ScrollPanelView/constants';
import { Platforms } from '@LTypes/platform';
import { ICampaignSummary } from '@LTypes/campaign';
import { colorByPlatform } from '@utils/platforms';
import { translate } from '@i18n';

export interface IChartData {
	x: Platforms;
	y: number | undefined;
}

export interface IChartItem {
	summaryKey: keyof ICampaignSummary;
	data: IChartData[];
}

const radius = 90;
const styles = {
	labels: { fill: 'white' },
};

interface IProps extends IChartItem {}

export default memo(({ data }: IProps) => {
	const colorScale = useMemo(() => data.map(({ x }) => colorByPlatform[x]), [data]);

	const labels = useCallback(
		({ datum }: { datum: IChartData }) =>
			datum.y ? `${translate(`platforms.labels.${datum.x}`)}\n(${datum.y})` : null,
		[],
	);

	return (
		<VictoryPie
			data={data}
			colorScale={colorScale}
			height={HEADER_CONTENT_HEIGHT}
			labels={labels}
			style={styles}
			cornerRadius={5}
			padAngle={1}
			innerRadius={radius * 0.75}
			radius={radius}
		/>
	);
});
