import { View, Text } from 'react-native';
import Card from '@components/Card';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

export const StyledCard = styled(Card)`
	margin-bottom: ${scale(15)}px;
	padding-vertical: ${scale(10)}px;
	padding-horizontal: ${scale(10)}px;
	background-color: ${p => p.theme.colors.white};
`;

export const Header = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${scale(3)}px;
`;

export const Goal = styled(Text)`
	color: ${p => p.theme.colors.bombay};
`;

export const Title = styled(Text)`
	font-size: ${scale(18)}px;
	font-weight: 700;
`;
