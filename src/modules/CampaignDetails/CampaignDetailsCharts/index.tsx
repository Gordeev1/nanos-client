import React, { memo, useCallback, useMemo, useEffect, createRef } from 'react';
import Carousel, { CarouselStatic } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import CampaignDetailsChartItem, {
	IChartItem,
} from '@modules/CampaignDetails/CampaignDetailsChartItem';
import Spinner from '@components/Spinner';
import { CampaignPlatforms } from '@LTypes/campaign';
import { platformSummaryKeys } from '@utils/campaign';
import { Platforms } from '@LTypes/platform';
import { Container } from './styled';

interface IProps {
	loading?: boolean;
	activeSlide: number;
	onSlideChange: (slide: number) => void;
	platforms?: CampaignPlatforms;
}

const prepareData = (platforms?: CampaignPlatforms): IChartItem[] | undefined =>
	platforms &&
	platformSummaryKeys
		.map(summaryKey => {
			const data = (Object.keys(platforms) as Array<Partial<Platforms>>)
				.map(platformKey => {
					const value =
						summaryKey === 'total_budget' || summaryKey === 'remaining_budget'
							? platforms[platformKey][summaryKey]
							: platforms[platformKey].insights[summaryKey];

					return { x: platformKey, y: value };
				})
				.filter(({ y }) => y);

			return { summaryKey, data };
		})
		.filter(({ data }) => Boolean(data.length));

const carouselRef = createRef<CarouselStatic<IChartItem>>();
const { width } = Dimensions.get('window');

export default memo(({ loading, activeSlide, onSlideChange, platforms }: IProps) => {
	const chartItems = useMemo(() => prepareData(platforms), [platforms]);

	const renderChart = useCallback(
		({ item }: { item: IChartItem }) => (
			<CampaignDetailsChartItem key={item.summaryKey} {...item} />
		),
		[],
	);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.snapToItem(activeSlide);
		}
	}, [activeSlide]);

	return (
		<Container>
			{loading ? (
				<Spinner light />
			) : !chartItems ? null : (
				<Carousel
					// TODO: fix type
					ref={carouselRef as any}
					data={chartItems}
					renderItem={renderChart}
					onSnapToItem={onSlideChange}
					inactiveSlideScale={1}
					sliderWidth={width}
					itemWidth={width}
				/>
			)}
		</Container>
	);
});
