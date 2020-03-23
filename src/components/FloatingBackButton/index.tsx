import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RoundedTouchable, BackIcon } from './styled';
const arrowLeftIcon = require('@assets/icons/arrow-left.png');

export default () => {
	const navigation = useNavigation();

	const handleBackPress = useCallback(() => navigation.canGoBack() && navigation.goBack(), [
		navigation,
	]);

	return (
		<RoundedTouchable onPress={handleBackPress}>
			<BackIcon resizeMode="contain" source={arrowLeftIcon} />
		</RoundedTouchable>
	);
};
