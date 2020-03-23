import React, { ReactNode, PropsWithChildren, memo } from 'react';
import { Animated } from 'react-native';
import {
	ScrollView,
	Header,
	Panel,
	StickPanelControlWrapper,
	StickPanelControlContainer,
	PanelControl,
} from './styled';
import { HEADER_HEIGHT, HEADER_CONTENT_HEIGHT } from './constants';

type IProps = PropsWithChildren<{
	header: ReactNode;
	backgroundColor?: string;
}>;

const scrollY = new Animated.Value(0);

const panelContentOffset = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
	useNativeDriver: true,
});

const headerTranslateY = scrollY.interpolate({
	inputRange: [-HEADER_HEIGHT, HEADER_HEIGHT],
	outputRange: [-HEADER_HEIGHT, HEADER_HEIGHT],
	extrapolate: 'clamp',
});

const headerStyles = {
	transform: [{ translateY: headerTranslateY }],
};

const maxPossibleScrollValue = 1500;

const panelControlContainerTranslateY = scrollY.interpolate({
	inputRange: [0, HEADER_CONTENT_HEIGHT, maxPossibleScrollValue],
	outputRange: [0, 0, maxPossibleScrollValue - HEADER_CONTENT_HEIGHT],
	extrapolate: 'clamp',
});

const panelControlContainerStyle = {
	transform: [{ translateY: panelControlContainerTranslateY }],
};

export default memo(({ children, header, backgroundColor }: IProps) => (
	<ScrollView scrollEventThrottle={16} color={backgroundColor} onScroll={panelContentOffset}>
		<Header color={backgroundColor} style={headerStyles}>
			{header}
		</Header>
		<StickPanelControlWrapper color={backgroundColor} style={panelControlContainerStyle}>
			<StickPanelControlContainer>
				<PanelControl />
			</StickPanelControlContainer>
		</StickPanelControlWrapper>
		<Panel>{children}</Panel>
	</ScrollView>
));
