import styled from '@utils/styled-components';
import Touchable from '@components/Touchable';
import FastImage from 'react-native-fast-image';
import { scale, scaleVertical } from '@utils/styles';

const size = scale(25);
const padding = scale(7.5);

interface IProps {
	margin?: number;
}

export const Container = styled(Touchable)<IProps>`
	border-radius: ${size}px;
	padding-horizontal: ${padding}px;
	padding-vertical: ${padding}px;
	background-color: ${p => p.theme.colors.codGray};
	justify-content: center;
	align-items: center;
	align-self: center;
	margin-vertical: ${p => (p.margin ? scaleVertical(p.margin) : 0)};
`;

export const Icon = styled(FastImage)`
	width: ${size}px;
	height: ${size}px;
`;
