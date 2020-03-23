import React, { memo, useCallback } from 'react';
import { ICampaign, ICampaignPreview } from '@LTypes/campaign';
import { useNavigation } from '@react-navigation/native';
import { MAIN_SCENES } from '@scenes/Main/scenes';
import CampaignStatusBadge from '@modules/Shared/CampaignStatus/Badge';
import PlatformsBadges from '@modules/Shared/PlatformsBadges';
import { Platforms } from '@LTypes/platform';
import { StyledCard, Header, Goal, Title } from './styled';
import { View } from 'react-native';

interface IProps {
	item: ICampaign | ICampaignPreview;
}

export default memo(({ item }: IProps) => {
	const navigation = useNavigation();

	const openDetailsScene = useCallback(
		() => navigation.navigate(MAIN_SCENES.CampaignDetails, { id: item._id }),
		[item._id, navigation],
	);

	return (
		<StyledCard touchable onPress={openDetailsScene}>
			<View>
				<Header>
					<Goal>{item.goal}</Goal>
					<CampaignStatusBadge status={item.status} />
				</Header>
				<Title>{item.name}</Title>
				<PlatformsBadges items={item.platforms_names} />
			</View>
		</StyledCard>
	);
});
