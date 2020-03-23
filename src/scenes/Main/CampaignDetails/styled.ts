import styled from '@utils/styled-components';
import ScrollPanelView from '@modules/Shared/ScrollPanelView';

export const ScrollPanelViewWithBackground = styled(ScrollPanelView).attrs(p => ({
	backgroundColor: p.theme.colors.cloudBurst,
}))``;
