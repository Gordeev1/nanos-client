import styled from '@utils/styled-components';
import { ActivityIndicator } from 'react-native';
import { scale } from '@utils/styles';

interface IProps {
	paddingAreaSize?: number;
	light?: boolean;
}

export default styled(ActivityIndicator).attrs<IProps>(p => ({
	color: p.light ? p.theme.colors.yellow : p.theme.colors.cloudBurst,
	size: 'small',
}))<IProps>`
	flex: 1;
	align-self: center;
	${p =>
		p.paddingAreaSize &&
		`
		padding-horizontal: ${scale(p.paddingAreaSize)};
		padding-vertical: ${scale(p.paddingAreaSize)};
	`}
`;
