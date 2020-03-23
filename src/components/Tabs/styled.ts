import { Text, View } from 'react-native';
import styled from '@utils/styled-components';
import Touchable from '@components/Touchable';
import { scaleVertical, scale } from '@utils/styles';

export const Container = styled(View)`
	flex-direction: row;
	width: 100%;
	background-color: ${p => p.theme.colors.white};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	shadow-color: ${p => p.theme.colors.grey};
	shadow-opacity: 0.3;
	shadow-offset: 3px 3px;
	shadow-radius: 5px;
	elevation: 3;
`;

interface IProps {
	active?: boolean;
}

export const ItemContainer = styled(Touchable)<IProps>`
	flex: 1;
	padding-horizontal: ${scale(25)}px;
	padding-vertical: ${scaleVertical(15)}px;
	${p =>
		p.active &&
		`
		border-bottom-width: 2px;
		border-bottom-color: ${p.theme.colors.yellow};
	`}
`;

export const ItemTitle = styled(Text)<IProps>`
	color: ${p => (p.active ? p.theme.colors.codGray : p.theme.colors.grey)};
	font-weight: 500;
	text-align: center;
`;
