import { View, Text, Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

const statusBarHeight = getStatusBarHeight();

export const STACK_HEADER_HEIGHT = scaleVertical(50) + statusBarHeight;
export const PARALAX_CONTENT_HEIGHT = scaleVertical(80);
export const STICK_CONTENT_HEIGHT = scaleVertical(50);

export const HEADER_HEIGHT = STACK_HEADER_HEIGHT + PARALAX_CONTENT_HEIGHT + STICK_CONTENT_HEIGHT;

const absolute = css`
	position: absolute;
	width: 100%;
`;

export const StackHeader = styled(View)`
	${absolute};
	height: ${STACK_HEADER_HEIGHT}px;
	padding-top: ${statusBarHeight}px;
	justify-content: center;
`;

export const StackHeaderTitle = styled(Text)`
	font-weight: 700;
	font-size: ${scale(16)}px;
	color: ${p => p.theme.colors.white};
	text-align: center;
`;

export const Container = styled(Animated.View)`
	${absolute};
	padding-top: ${STACK_HEADER_HEIGHT}px;
	background-color: ${p => p.theme.colors.cloudBurst};
	height: ${HEADER_HEIGHT}px;
`;

export const ParalaxContent = styled(Animated.View)`
	height: ${PARALAX_CONTENT_HEIGHT}px;
	justify-content: center;
`;

export const StickContent = styled(Animated.View)`
	height: ${STICK_CONTENT_HEIGHT}px;
	justify-content: flex-end;
`;
