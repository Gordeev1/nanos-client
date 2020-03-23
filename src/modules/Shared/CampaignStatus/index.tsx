import React from 'react';
import { translate } from '@i18n';
import { CampaignStatus } from '@LTypes/campaign';
import Badge from './Badge';
import { Container, Label } from './styled';

interface IProps {
	value: CampaignStatus;
}

export default ({ value }: IProps) => (
	<Container>
		<Badge status={value} />
		<Label>{translate(`campaign.statusLabels.${value}`)}</Label>
	</Container>
);
