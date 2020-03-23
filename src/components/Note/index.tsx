import { Text } from 'react-native';
import styled from '@utils/styled-components';
import { scale } from '@utils/styles';

interface IProps {
	padding?: number;
}

export default styled(Text)<IProps>`
	font-size: ${scale(16)};
	color: ${p => p.theme.colors.bombay};
	text-align: center;
	align-self: center;
	${p =>
		p.padding &&
		`
		padding-horizontal: ${scale(p.padding)};
		padding-vertical: ${scale(p.padding)};
	`}
`;
