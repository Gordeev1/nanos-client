import { Animated, View } from 'react-native';
import styled, { ThemeWithProps } from '@utils/styled-components';
import { HEADER_HEIGHT } from './constants';
import { scaleVertical, scale } from '@utils/styles';

export interface IBGColorProps {
	color?: string;
}

const getMainColor = (p: ThemeWithProps<IBGColorProps>) => p.color || p.theme.colors.white;

export const ScrollView = styled(Animated.ScrollView).attrs(p => ({
	contentContainerStyle: {
		backgroundColor: getMainColor(p),
	},
}))<IBGColorProps>`
	background-color: ${p => p.theme.colors.white};
`;

export const Panel = styled(View)`
	background-color: ${p => p.theme.colors.white};
	overflow: hidden;
`;

export const Header = styled(Animated.View)<IBGColorProps>`
	width: 100%;
	height: ${HEADER_HEIGHT}px;
	position: absolute;
	background-color: ${getMainColor};
`;

export const StickPanelControlWrapper = styled(Animated.View)`
	z-index: 1;
	margin-top: ${HEADER_HEIGHT}px;
	background-color: ${p => p.theme.colors.white};
	background-color: ${getMainColor};
`;

const panelRadius = 20;

export const StickPanelControlContainer = styled(View)`
	elevation: 1;
	shadow-opacity: 0.3;
	shadow-offset: 0 -5px;
	shadow-radius: 5px;
	shadow-color: ${p => p.theme.colors.grey};
	border-top-left-radius: ${panelRadius}px;
	border-top-right-radius: ${panelRadius}px;
	background-color: ${p => p.theme.colors.white};
`;

export const PanelControl = styled(View)`
	align-self: center;
	margin-vertical: ${scaleVertical(15)}px;
	width: ${scale(50)}px;
	height: ${scaleVertical(5)}px;
	border-radius: 5px;
	background-color: ${p => p.theme.colors.bombay};
	opacity: 0.5;
`;
