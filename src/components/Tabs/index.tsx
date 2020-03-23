import React, { useCallback } from 'react';
import { LayoutAnimation } from 'react-native';
import { Container, ItemContainer, ItemTitle } from './styled';

export interface ITabsProps<T extends string> {
	items: T[];
	value: T;
	onChange: (value: T) => void;
}

export default <T extends string>({ items, value, onChange }: ITabsProps<T>) => {
	const handlePress = useCallback(
		(item: T) => () => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			return onChange(item);
		},
		[onChange],
	);

	const renderItem = useCallback(
		(item: T) => {
			const isActive = item === value;
			return (
				<ItemContainer key={item} active={isActive} onPress={handlePress(item)}>
					<ItemTitle active={isActive}>{item}</ItemTitle>
				</ItemContainer>
			);
		},
		[value, handlePress],
	);

	return <Container>{items.map(renderItem)}</Container>;
};
