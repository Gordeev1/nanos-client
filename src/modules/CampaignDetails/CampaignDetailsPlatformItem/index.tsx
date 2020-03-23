import React, { memo } from 'react';
import CampaignDetailsPlatformItemAudience from '@modules/CampaignDetails/CampaignDetailsPlatformItemAudience';
import CampaignDetailsPlatformItemPreview from '@modules/CampaignDetails/CampaignDetailsPlatformItemPreview';
import { ICampaignPlatform } from '@LTypes/campaign';
import { iconByPlatform } from '@utils/platforms';
import { translate } from '@i18n';
import { StyledCard, Header, Title, Logo, Section, SectionTitle } from './styled';

interface IProps {
	platform: ICampaignPlatform;
	last?: boolean;
}

export default memo(({ platform, last }: IProps) => {
	return (
		<StyledCard last={last}>
			<Header>
				<Title>{translate(`platforms.labels.${platform.platform_name}`)}</Title>
				<Logo source={iconByPlatform[platform.platform_name]} />
			</Header>
			<Section>
				<SectionTitle>{translate('campaignDetails.platforms.audience.title')}</SectionTitle>
				<CampaignDetailsPlatformItemAudience {...platform.target_audiance} />
			</Section>
			<Section>
				<SectionTitle>{translate('campaignDetails.platforms.preview.title')}</SectionTitle>
				<CampaignDetailsPlatformItemPreview {...platform.creatives} />
			</Section>
		</StyledCard>
	);
});
