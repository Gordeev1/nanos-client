import { getBottomSpace } from 'react-native-iphone-x-helper';
import FastImage from 'react-native-fast-image';
import Touchable from '@components/Touchable';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

const bottomSpace = getBottomSpace();

const size = scale(56);

export const RoundedTouchable = styled(Touchable)`
	width: ${size};
	height: ${size};
	border-radius: ${size};
	background-color: ${p => p.theme.colors.cloudBurst};
	shadow-color: ${p => p.theme.colors.cloudBurst};
	shadow-opacity: 0.3;
	shadow-offset: 1px 3px;
	shadow-radius: 5px;
	elevation: 5;
	z-index: 2;
	position: absolute;
	bottom: ${bottomSpace + scaleVertical(bottomSpace ? 10 : 30)}px;
	right: ${scale(30)};
	justify-content: center;
	align-items: center;
`;

export const BackIcon = styled(FastImage)`
	width: ${scale(20)}px;
	height: ${scale(20)}px;
`;
