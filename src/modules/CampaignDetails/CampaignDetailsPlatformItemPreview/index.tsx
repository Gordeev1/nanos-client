import React, { memo } from 'react';
import { ICampaignPlatformCreatives } from '@LTypes/campaign';
import { translate } from '@i18n';
import { getRemoteImageSource } from '@utils/filles';
import {
	Container,
	Preview,
	ContentContainer,
	Header,
	HeaderTitle,
	HeaderSubtitle,
	Descrition,
	StyleLink,
} from './styled';

export default memo(
	({ header, header_1, header_2, description, url, image }: ICampaignPlatformCreatives) => {
		return (
			<Container>
				<Preview resizeMode="cover" source={getRemoteImageSource(image)} />
				<ContentContainer>
					<Header>
						<HeaderTitle>{header || header_1}</HeaderTitle>
						{header_2 && <HeaderSubtitle>{header_2}</HeaderSubtitle>}
					</Header>
					<Descrition>{description}</Descrition>
				</ContentContainer>
				<StyleLink
					label={translate('campaignDetails.platforms.preview.linkLabel')}
					value={url}
				/>
			</Container>
		);
	},
);
