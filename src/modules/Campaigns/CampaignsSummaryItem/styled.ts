import { Text, View } from 'react-native';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

export const Container = styled(View)`
	justify-content: center;
`;

export const Value = styled(Text)`
	color: ${p => p.theme.colors.white};
	font-size: ${scale(16)}px;
	font-weight: 700;
	text-align: center;
	margin-bottom: ${scale(3)}px;
`;

export const Label = styled(Text)`
	color: ${p => p.theme.colors.bombay};
	text-align: center;
	flex-wrap: wrap;
`;
