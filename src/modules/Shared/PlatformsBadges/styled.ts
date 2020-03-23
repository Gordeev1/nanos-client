import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

export const Container = styled(View)`
	align-self: flex-end;
	flex-direction: row-reverse;
`;

interface IIndexProps {
	index: number;
}

const badgeSize = scale(25);

export const BadgeContainer = styled(View)<IIndexProps>`
	border-radius: ${badgeSize / 2}px;
	padding-vertical: ${scale(3)}px;
	padding-horizontal: ${scale(3)}px;
	background-color: ${p => p.theme.colors.white};
	transform: translate(${p => p.index * scale(10)}px);
`;

export const Badge = styled(FastImage)`
	width: ${badgeSize}px;
	height: ${badgeSize}px;
	border-radius: ${badgeSize / 2}px;
`;
