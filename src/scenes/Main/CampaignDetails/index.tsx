import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import CampaignDetailsCharts from '@modules/CampaignDetails/CampaignDetailsCharts';
import CampaignDetailsSummary from '@modules/CampaignDetails/CampaignDetailsSummary';
import CampaignDetailsPlatforms from '@modules/CampaignDetails/CampaignDetailsPlatforms';
import { MainStackParamList } from '@scenes/Main';
import { MAIN_SCENES } from '@scenes/Main/scenes';
import Spinner from '@components/Spinner';
import RefreshButton from '@components/RefreshButton';
import FloatingBackButton from '@components/FloatingBackButton';
import StatusBarBackground from '@components/StatusBarBackground';
import {
	selectCampaignById,
	loadCampaignDetails,
	selectDetailsLoadingStatusById,
} from '@store/slices/campaigns';
import { IStoreState } from '@store';
import { ScrollPanelViewWithBackground } from './styled';

interface IProps {
	route: RouteProp<MainStackParamList, MAIN_SCENES.CampaignDetails>;
}

export default ({ route }: IProps) => {
	const dispatch = useDispatch();

	const loadDetails = useCallback(() => dispatch(loadCampaignDetails(route.params.id)), [
		dispatch,
		route.params.id,
	]);

	useEffect(() => {
		loadDetails();
	}, [loadDetails]);

	const campaign = useSelector<IStoreState, ReturnType<typeof selectCampaignById>>(state =>
		selectCampaignById(state, route.params.id),
	);

	const loading = useSelector<IStoreState, ReturnType<typeof selectDetailsLoadingStatusById>>(
		state => selectDetailsLoadingStatusById(state, route.params.id),
	);

	const [activeSlide, changeActiveSlide] = useState<number>(0);

	const platforms = 'platforms' in campaign ? campaign.platforms : undefined;

	return (
		<>
			<ScrollPanelViewWithBackground
				header={
					<CampaignDetailsCharts
						loading={loading}
						activeSlide={activeSlide}
						onSlideChange={changeActiveSlide}
						platforms={platforms}
					/>
				}
			>
				{loading ? (
					<Spinner paddingAreaSize={30} />
				) : !platforms ? (
					<RefreshButton margin={30} onPress={loadDetails} />
				) : (
					<>
						<CampaignDetailsSummary
							activeSlide={activeSlide}
							onSlideChange={changeActiveSlide}
							status={campaign.status}
							platforms={platforms}
						/>
						<CampaignDetailsPlatforms platforms={platforms} />
					</>
				)}
			</ScrollPanelViewWithBackground>
			<FloatingBackButton />
			<StatusBarBackground />
		</>
	);
};
