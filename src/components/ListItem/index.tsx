import React, { memo } from 'react';
import { Container, Label, Value } from './styled';

export interface IListItem {
	label: string;
	value: string;
	active?: boolean;
	last?: boolean;
	withHorizontalPadding?: boolean;
	withLargeValue?: boolean;
}

export default memo(
	({ active, last, withHorizontalPadding, withLargeValue, label, value }: IListItem) => (
		<Container withHorizontalPadding={withHorizontalPadding} active={active} last={last}>
			<Label>{label}</Label>
			<Value withLargeValue={withLargeValue}>{value}</Value>
		</Container>
	),
);
