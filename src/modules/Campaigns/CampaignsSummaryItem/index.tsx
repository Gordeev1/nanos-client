import React, { memo } from 'react';
import { ICampaignsSummary } from '@LTypes/campaign';
import { translate } from '@i18n';
import { Container, Label, Value } from './styled';

interface IProps {
	itemKey: keyof ICampaignsSummary;
	value: number;
}

export default memo(({ itemKey, value }: IProps) => (
	<Container>
		<Value>{itemKey === 'cost_per_click' ? value.toFixed(3) : value}</Value>
		<Label>{translate(`campaignsSummary.labels.${itemKey}`)}</Label>
	</Container>
));
