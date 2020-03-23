import React, { memo } from 'react';
import Tabs, { ITabsProps } from '@components/Tabs';
import { CampaignStatus } from '@LTypes/campaign';

interface IProps extends Omit<ITabsProps<CampaignStatus>, 'items'> {}

const segments = [CampaignStatus.Delivering, CampaignStatus.Scheduled, CampaignStatus.Ended];

export default memo((props: IProps) => <Tabs<CampaignStatus> items={segments} {...props} />);
