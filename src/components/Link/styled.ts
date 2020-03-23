import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import Touchable from '@components/Touchable';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

export const Link = styled(Touchable)`
	padding-horizontal: ${scale(10)}px;
	padding-vertical: ${scale(10)}px;
	justify-content: space-between;
`;

export const LinkLabel = styled(Text)`
	color: ${p => p.theme.colors.blue};
	font-weight: 500;
`;

export const LinkIcon = styled(FastImage)``;
