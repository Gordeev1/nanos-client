import React, { memo, useCallback } from 'react';
import { Platforms } from '@LTypes/platform';
import { iconByPlatform } from '@utils/platforms';
import { Container, BadgeContainer, Badge } from './styled';

interface IProps {
	items: Platforms[];
}

export default memo(({ items }: IProps) => {
	const renderBadge = useCallback(
		(platform: Platforms, index: number) => (
			<BadgeContainer key={platform} index={index}>
				<Badge resizeMode="contain" source={iconByPlatform[platform]} />
			</BadgeContainer>
		),
		[],
	);

	return <Container>{items.map(renderBadge)}</Container>;
});
