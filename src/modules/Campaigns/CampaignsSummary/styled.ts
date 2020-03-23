import { View } from 'react-native';
import styled from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';

export const Container = styled(View)`
	flex-direction: row;
	justify-content: space-evenly;
	padding-horizontal: ${scale(10)}px;
	padding-top: ${scale(10)}px;
	margin-bottom: ${scaleVertical(30)}px;
`;
