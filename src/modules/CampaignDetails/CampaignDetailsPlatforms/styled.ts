import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';
import Title from '@components/Title';

const horizontalPadding = scale(20);

export const StyledTitle = styled(Title)`
	margin-top: ${scaleVertical(15)}px;
	padding-horizontal: ${horizontalPadding}px;
`;

const bottomSpace = getBottomSpace();
const { width } = Dimensions.get('window');

export const StyledCarousel = styled(Carousel).attrs({
	sliderWidth: width,
	itemWidth: width * 0.85,
	contentContainerCustomStyle: {
		paddingLeft: horizontalPadding,
		paddingBottom: bottomSpace || scaleVertical(15),
	},
})``;
