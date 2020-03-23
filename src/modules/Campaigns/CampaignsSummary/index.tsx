import React, { memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadCampaignsSummary,
	selectCampaignsSummaryLoading,
	selectCampaignsSummary,
} from '@store/slices/campaignsSummary';
import RefreshButton from '@components/RefreshButton';
import Spinner from '@components/Spinner';
import CampaignsSummaryItem from '@modules/Campaigns/CampaignsSummaryItem';
import { ICampaignsSummary } from '@LTypes/campaign';
import { Container } from './styled';

export default memo(() => {
	const dispatch = useDispatch();

	const loadSummary = useCallback(() => {
		dispatch(loadCampaignsSummary());
	}, [dispatch]);

	useEffect(() => {
		loadSummary();
	}, [loadSummary]);

	const loading = useSelector(selectCampaignsSummaryLoading);
	const summary = useSelector(selectCampaignsSummary);

	const renderSummaryItem = useCallback(
		(key: keyof ICampaignsSummary) => (
			<CampaignsSummaryItem key={key} itemKey={key} value={summary![key]} />
		),
		[summary],
	);

	return (
		<Container>
			{loading ? (
				<Spinner light />
			) : !summary ? (
				<RefreshButton onPress={loadSummary} />
			) : (
				(Object.keys(summary) as Array<keyof ICampaignsSummary>).map(renderSummaryItem)
			)}
		</Container>
	);
});
