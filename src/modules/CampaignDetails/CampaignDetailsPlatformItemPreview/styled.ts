import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';
import Link from '@components/Link';

const borderRadius = 5;

export const Container = styled(View)`
	border-width: 1;
	border-color: ${p => p.theme.colors.wildSand};
	border-radius: ${borderRadius}px;
`;

export const Preview = styled(FastImage)`
	width: 100%;
	height: ${scaleVertical(130)}px;
	border-top-right-radius: ${borderRadius}px;
	border-top-left-radius: ${borderRadius}px;
`;

export const ContentContainer = styled(View)`
	padding-horizontal: ${scale(10)}px;
	padding-vertical: ${scale(10)}px;
`;

export const Header = styled(View)`
	border-bottom-width: 1;
	border-bottom-color: ${p => p.theme.colors.wildSand};
	padding-bottom: ${scale(10)}px;
	margin-bottom: ${scale(10)}px;
`;

export const HeaderTitle = styled(Text)`
	font-weight: 500;
	font-size: ${scale(16)}px;
`;

export const HeaderSubtitle = styled(Text)`
	color: ${p => p.theme.colors.bombay};
	font-size: ${scale(14)}px;
`;

export const Descrition = styled(Text)``;

export const StyleLink = styled(Link)`
	border-bottom-right-radius: ${borderRadius}px;
	border-bottom-left-radius: ${borderRadius}px;
	border-top-width: 1;
	border-top-color: ${p => p.theme.colors.wildSand};
`;
