import React, { useCallback } from 'react';
import Touchable from '@components/Touchable';
import { ICampaignSummary } from '@LTypes/campaign';
import ListItem, { IListItem } from '@components/ListItem';

export interface ICampaignDetailsSummaryListItem extends IListItem {
	id: keyof ICampaignSummary;
}

interface IProps extends ICampaignDetailsSummaryListItem {
	onPress: (id: ICampaignDetailsSummaryListItem['id']) => void;
}

export default React.memo(({ id, onPress, ...props }: IProps) => {
	const handlePress = useCallback(() => onPress(id), [id, onPress]);

	return (
		<Touchable disabled={props.active} onPress={handlePress}>
			<ListItem withHorizontalPadding {...props} />
		</Touchable>
	);
});
