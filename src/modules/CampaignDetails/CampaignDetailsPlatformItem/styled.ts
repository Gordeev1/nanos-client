import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from '@utils/styled-components';
import Card from '@components/Card';
import { scale, scaleVertical } from '@utils/styles';

interface ICardProps {
	last?: boolean;
}

export const StyledCard = styled(Card)<ICardProps>`
	padding-vertical: ${scale(10)}px;
	padding-horizontal: ${scale(10)}px;
	/* NOTE: apply margin here to save shadow  */
	margin-vertical: ${scaleVertical(15)}px;
`;

const commonSectionPadding = scaleVertical(10);

export const Header = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1;
	border-bottom-color: ${p => p.theme.colors.wildSand};
	padding-bottom: ${commonSectionPadding}px;
`;

export const Title = styled(Text)`
	font-weight: 700;
	font-size: ${scale(24)}px;
`;

export const Logo = styled(FastImage)`
	width: ${scale(35)}px;
	height: ${scale(35)}px;
	border-radius: 50px;
`;

export const Section = styled(View)`
	margin-top: ${commonSectionPadding}px;
`;

export const SectionTitle = styled(Text)`
	font-weight: 500;
	font-size: ${scale(18)};
	margin-bottom: ${commonSectionPadding}px;
`;
