import { View } from 'react-native';
import Touchable from '@components/Touchable';
import styled, { css } from '@utils/styled-components';

const common = css`
	border-radius: 10px;
	background-color: ${p => p.theme.colors.white};
	shadow-color: ${p => p.theme.colors.grey};
	shadow-opacity: 0.3;
	shadow-offset: 1px 3px;
	shadow-radius: 5px;
	elevation: 2;
`;

export const TouchableContainer = styled(Touchable)`
	${common};
`;

export const ViewContainer = styled(View)`
	${common};
`;
