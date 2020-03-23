import React, { memo, useMemo, useCallback } from 'react';
import { ICampaignPlatformAudiance } from '@LTypes/campaign';
import ListItem, { IListItem } from '@components/ListItem';
import { platformAudienceKeys } from '@utils/campaign';
import { translate } from '@i18n';

interface IProps extends ICampaignPlatformAudiance {}

const prepareData = (data: ICampaignPlatformAudiance) =>
	platformAudienceKeys
		.map(key => {
			const value = data[key];
			return {
				value: value ? `${value.join(', ')}` : undefined,
				label: translate(`campaign.audienceKeys.${key}`),
			};
		})
		.filter(item => item.value) as IListItem[];

export default memo((audience: IProps) => {
	const audienceListItems = useMemo(() => prepareData(audience), [audience]);

	const renderListItem = useCallback(
		(item: IListItem, index: number, items: IListItem[]) => (
			<ListItem withLargeValue last={index === items.length - 1} key={item.label} {...item} />
		),
		[],
	);

	return <>{audienceListItems.map(renderListItem)}</>;
});
