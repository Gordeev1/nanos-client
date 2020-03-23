import React, { memo, useCallback } from 'react';
import { Linking } from 'react-native';
import { ITouchableProps } from '@components/Touchable';
import { Link, LinkLabel } from './styled';

type IProps = ITouchableProps & {
	label: string;
	value: string;
};

export default memo(({ label, value, ...props }: IProps) => {
	const handleLinkPress = useCallback(() => Linking.openURL(value), [value]);

	return (
		<Link onPress={handleLinkPress} {...props}>
			<LinkLabel>{label}</LinkLabel>
		</Link>
	);
});
