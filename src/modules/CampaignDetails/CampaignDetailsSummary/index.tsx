import React, { memo, useCallback, useMemo } from 'react';
import Title from '@components/Title';
import ListItem, {
	ICampaignDetailsSummaryListItem,
} from '@modules/CampaignDetails/CampaignDetailsSummaryListItem';
import CampaignStatusView from '@modules/Shared/CampaignStatus';
import { calculateInsightsSummary, platformSummaryKeys } from '@utils/campaign';
import { translate } from '@i18n';
import { ICampaignSummary, CampaignStatus, CampaignPlatforms } from '@LTypes/campaign';
import { Header, ListContainer } from './styled';

interface IProps {
	activeSlide: number;
	onSlideChange: (slide: number) => void;
	status: CampaignStatus;
	platforms: CampaignPlatforms;
}

const prepareData = (data: ICampaignSummary) =>
	platformSummaryKeys
		.map(id => ({
			id,
			value: data[id] ? `${data[id]}` : undefined,
			label: translate(`campaign.keys.${id}`),
		}))
		.filter(item => item.value) as ICampaignDetailsSummaryListItem[];

export default memo(({ platforms, status, activeSlide, onSlideChange }: IProps) => {
	const summaryListItems = useMemo(() => prepareData(calculateInsightsSummary(platforms)), [
		platforms,
	]);

	const handlePress = useCallback(
		(id: ICampaignDetailsSummaryListItem['id']) => {
			const slide = platformSummaryKeys.findIndex(key => key === id);
			onSlideChange(slide);
		},
		[onSlideChange],
	);

	const renderListItem = useCallback(
		(
			item: ICampaignDetailsSummaryListItem,
			index: number,
			items: ICampaignDetailsSummaryListItem[],
		) => (
			<ListItem
				key={item.id}
				active={index === activeSlide}
				last={index === items.length - 1}
				{...item}
				onPress={handlePress}
			/>
		),
		[activeSlide, handlePress],
	);

	return (
		<>
			<Header>
				<Title>{translate('campaignDetails.summary.title')}</Title>
				<CampaignStatusView value={status} />
			</Header>
			<ListContainer>{summaryListItems.map(renderListItem)}</ListContainer>
		</>
	);
});
