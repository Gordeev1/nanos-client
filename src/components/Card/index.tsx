import React, { memo, PropsWithChildren } from 'react';
import { ViewStyle } from 'react-native';
import { ITouchableProps } from '@components/Touchable';
import { ViewContainer, TouchableContainer } from './styled';

type IProps = ITouchableProps & {
	touchable?: boolean;
	style?: ViewStyle;
};

export default memo(({ touchable, ...props }: PropsWithChildren<IProps>) => {
	if (touchable) {
		return <TouchableContainer {...props} />;
	}

	return <ViewContainer {...props} />;
});
