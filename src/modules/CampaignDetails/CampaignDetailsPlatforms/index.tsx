import React, { memo, useCallback, useMemo } from 'react';
import CampaignDetailsPlatformItem from '@modules/CampaignDetails/CampaignDetailsPlatformItem';
import { CampaignPlatforms } from '@LTypes/campaign';
import { Platforms } from '@LTypes/platform';
import { translate } from '@i18n';
import { StyledTitle, StyledCarousel } from './styled';

interface IProps {
	platforms: CampaignPlatforms;
}

export default memo(({ platforms }: IProps) => {
	const keys = useMemo(() => Object.keys(platforms), [platforms]);

	const renderPlatform = useCallback(
		({ item, index }: { item: Platforms; index: number }) => (
			<CampaignDetailsPlatformItem
				key={item}
				platform={platforms[item]}
				last={index === keys.length - 1}
			/>
		),
		[platforms, keys],
	);

	return (
		<>
			<StyledTitle>{translate('campaignDetails.platforms.title')}</StyledTitle>
			<StyledCarousel
				data={keys}
				renderItem={renderPlatform}
				inactiveSlideScale={0.9}
				activeSlideAlignment="start"
			/>
		</>
	);
});
