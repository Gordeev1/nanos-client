import React, { ReactNode } from 'react';
import { Animated } from 'react-native';
import { translate } from '@i18n';
import {
	Container,
	StackHeader,
	StackHeaderTitle,
	ParalaxContent,
	StickContent,
	HEADER_HEIGHT,
	PARALAX_CONTENT_HEIGHT,
} from './styled';

export interface ICampaignsHeaderRenderProps {
	scrollY: Animated.Value;
	headerHeight: number;
}

interface IProps {
	paralaxContent: ReactNode;
	stickContent: ReactNode;
	render: (props: ICampaignsHeaderRenderProps) => ReactNode;
}

const scrollY = new Animated.Value(0);
const childrenProps: ICampaignsHeaderRenderProps = { scrollY, headerHeight: HEADER_HEIGHT };

const containerTranslateY = scrollY.interpolate({
	inputRange: [0, PARALAX_CONTENT_HEIGHT],
	outputRange: [0, -PARALAX_CONTENT_HEIGHT],
	extrapolate: 'clamp',
});

const paralaxContentOpacity = scrollY.interpolate({
	inputRange: [0, PARALAX_CONTENT_HEIGHT],
	outputRange: [1, 0],
	extrapolate: 'clamp',
});

const paralaxContentTranslateY = scrollY.interpolate({
	inputRange: [0, PARALAX_CONTENT_HEIGHT],
	outputRange: [0, PARALAX_CONTENT_HEIGHT],
	extrapolate: 'clamp',
});

const containerStyle = {
	transform: [{ translateY: containerTranslateY }],
};

const paralaxContentStyles = {
	opacity: paralaxContentOpacity,
	transform: [{ translateY: paralaxContentTranslateY }],
};

export default ({ paralaxContent, stickContent, render }: IProps) => (
	<>
		{render(childrenProps)}
		<Container style={containerStyle}>
			<ParalaxContent style={paralaxContentStyles}>{paralaxContent}</ParalaxContent>
			<StickContent>{stickContent}</StickContent>
		</Container>
		<StackHeader>
			<StackHeaderTitle>{translate('campaigns.listTitle')}</StackHeaderTitle>
		</StackHeader>
	</>
);
