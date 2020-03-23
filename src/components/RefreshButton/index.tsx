import React from 'react';
import { ITouchableProps } from '@components/Touchable';
import { Container, Icon } from './styled';
const refreshIcon = require('@assets/icons/refresh.png');

type IProps = ITouchableProps & { margin?: number };

export default (props: IProps) => (
	<Container {...props}>
		<Icon resizeMode="contain" source={refreshIcon} />
	</Container>
);
