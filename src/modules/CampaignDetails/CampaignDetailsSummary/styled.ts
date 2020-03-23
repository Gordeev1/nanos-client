import { View } from 'react-native';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

export const Header = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	padding-horizontal: ${scale(20)}px;
	padding-top: ${scale(15)}px;
`;

export const ListContainer = styled(View)`
	margin-top: ${scale(15)}px;
`;
