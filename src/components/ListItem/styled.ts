import { Text, View } from 'react-native';
import { scale, scaleVertical } from '@utils/styles';
import styled from '@utils/styled-components';

interface IProps {
	active?: boolean;
	last?: boolean;
	withHorizontalPadding?: boolean;
}

export const Container = styled(View)<IProps>`
	flex-direction: row;
	justify-content: space-between;
	padding-vertical: ${scaleVertical(8)}px;
	border-bottom-color: ${p => p.theme.colors.wildSand};
	border-bottom-width: ${p => (!p.last ? '1px' : 0)};
	${p =>
		p.withHorizontalPadding &&
		`
			padding-horizontal: ${scale(20)}px;
		`}
	${p =>
		p.active &&
		`
			background-color: ${p.theme.colors.wildSand};
		`}
`;

export const Label = styled(Text)`
	font-size: ${scale(16)}px;
	color: ${p => p.theme.colors.bombay};
	flex: 1;
`;

interface IValueProps {
	withLargeValue?: boolean;
}

export const Value = styled(Text)<IValueProps>`
	flex: ${p => (p.withLargeValue ? 2 : 1)};
	font-size: ${scale(16)}px;
	text-align: right;
`;
