import { View } from 'react-native';
import styled from '@utils/styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight();

interface IProps {
	color?: string;
}

export default styled(View)<IProps>`
	width: 100%;
	height: ${statusBarHeight};
	position: absolute;
	background-color: ${p => p.color || p.theme.colors.cloudBurst};
`;
