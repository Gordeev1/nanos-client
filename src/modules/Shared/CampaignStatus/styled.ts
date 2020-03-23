import { View, Text } from 'react-native';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';
import { CampaignStatus } from '@LTypes/campaign';

export const Container = styled(View)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

interface IStatusProps {
	status: CampaignStatus;
}

const colorsByStatus: { [key in CampaignStatus]: string } = {
	[CampaignStatus.Delivering]: 'blue',
	[CampaignStatus.Scheduled]: 'red',
	[CampaignStatus.Ended]: 'yellow',
};

export const Badge = styled(View)<IStatusProps>`
	width: ${scale(10)}px;
	height: ${scale(10)}px;
	border-radius: ${scale(10)}px;
	background-color: ${p => colorsByStatus[p.status]};
`;

export const Label = styled(Text)`
	margin-left: ${scale(10)}px;
	font-weight: 500;
`;
