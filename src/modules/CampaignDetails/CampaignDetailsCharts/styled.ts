import { View } from 'react-native';
import styled from '@utils/styled-components';
import { scaleVertical } from '@utils/styles';

export const Container = styled(View)`
	padding-top: ${scaleVertical(20)}px;
	height: 100%;
`;
