import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import throttle from 'lodash/throttle';
import { CampaignStatus } from '@LTypes/campaign';
import { IStoreState } from '@store';
import {
	selectCampaignsByStatus,
	selectLoadingStateByStatus,
	loadCampaigns,
	selectErrorStateByStatus,
} from '@store/slices/campaigns';
import CampaignsHeader, { ICampaignsHeaderRenderProps } from '@modules/Campaigns/CampaignsHeader';
import CampaignsSummary from '@modules/Campaigns/CampaignsSummary';
import CampaignsStatusTabs from '@modules/Campaigns/CampaignsStatusTabs';
import CampaingList from '@modules/Campaigns/CampaignsList';

interface IProps {}

export default ({}: IProps) => {
	const [activeSegment, setActiveSegment] = useState(CampaignStatus.Delivering);
	const dispatch = useDispatch();

	const load = useCallback(
		throttle(() => dispatch(loadCampaigns({ status: activeSegment })), 1000),
		[activeSegment],
	);

	useEffect(() => {
		load();
	}, [load]);

	const data = useSelector<IStoreState, ReturnType<typeof selectCampaignsByStatus>>(state =>
		selectCampaignsByStatus(state, activeSegment),
	);
	const loading = useSelector<IStoreState, ReturnType<typeof selectLoadingStateByStatus>>(state =>
		selectLoadingStateByStatus(state, activeSegment),
	);
	const error = useSelector<IStoreState, ReturnType<typeof selectErrorStateByStatus>>(state =>
		selectErrorStateByStatus(state, activeSegment),
	);

	const renderList = useCallback(
		({ scrollY, headerHeight }: ICampaignsHeaderRenderProps) => (
			<CampaingList
				scrollY={scrollY}
				headerHeight={headerHeight}
				data={data}
				loading={loading}
				error={error}
				load={load}
			/>
		),
		[data, loading, load, error],
	);

	return (
		<CampaignsHeader
			paralaxContent={<CampaignsSummary />}
			stickContent={<CampaignsStatusTabs value={activeSegment} onChange={setActiveSegment} />}
			render={renderList}
		/>
	);
};
