import { Animated, FlatList } from 'react-native';
import styled from '@utils/styled-components';
import { ICampaign, ICampaignPreview } from '@LTypes/campaign';
import { scale, scaleVertical } from '@utils/styles';

interface IProps {
	headerHeight: number;
}

export const StyledFlatList = styled(
	Animated.FlatList as new () => FlatList<ICampaign | ICampaignPreview>,
).attrs<IProps>(p => ({
	contentContainerStyle: {
		paddingVertical: scale(20),
		paddingHorizontal: scale(20),
		paddingTop: p.headerHeight + scaleVertical(15),
	},
}))<IProps>`
	background-color: ${p => p.theme.colors.athensGray};
`;
