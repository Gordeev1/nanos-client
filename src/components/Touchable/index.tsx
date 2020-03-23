import React, { PropsWithChildren } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

const defaultHitSlop = {
	top: 10,
	left: 10,
	right: 10,
	bottom: 10,
};

export interface ITouchableProps extends TouchableOpacityProps {}

export default (props: PropsWithChildren<ITouchableProps>) => (
	<TouchableOpacity activeOpacity={0.8} hitSlop={defaultHitSlop} {...props} />
);
