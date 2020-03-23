import { Platforms } from '@LTypes/platform';
import { Languages } from '@LTypes/lang';
import { Gender } from '@LTypes/gender';

export interface ICampaignPlatformAudiance {
	languages: Languages[];
	genders: Gender[];
	age_range: number[];
	locations: string[];
	interests?: string[];
	KeyWords?: string[];
}

export interface ICampaignPlatformCreatives {
	description: string;
	url: string;
	image: string;
	header?: string;
	header_1?: string;
	header_2?: string;
}

export interface ICampaignPlatformInsights {
	impressions: number;
	clicks: number;
	website_visits?: number;
	nanos_score?: number;
	cost_per_click: number;
	click_through_rate: number;
	advanced_kpi_1: number;
	advanced_kpi_2?: number;
}

export interface ICampaignPlatform {
	platform_name: Platforms;
	status: CampaignStatus;
	total_budget: number;
	remaining_budget: number;
	start_date: number;
	end_date: number;
	target_audiance: ICampaignPlatformAudiance;
	creatives: ICampaignPlatformCreatives;
	insights: ICampaignPlatformInsights;
}

export type CampaignPlatforms = Record<Platforms, ICampaignPlatform>;

export enum CampaignStatus {
	Delivering = 'Delivering',
	Scheduled = 'Scheduled',
	Ended = 'Ended',
}

export interface ICampaign {
	_id: string;
	name: string;
	goal: string;
	total_budget: number;
	status: CampaignStatus;
	platforms_names: Platforms[];
	platforms: CampaignPlatforms;
}

export interface ICampaignPreview extends Omit<ICampaign, 'platforms'> {}

export interface ICampaignSummary
	extends ICampaignPlatformInsights,
		Pick<ICampaignPlatform, 'total_budget' | 'remaining_budget'> {}

export interface ICampaignsSummary
	extends Pick<ICampaignPlatformInsights, 'impressions' | 'clicks' | 'cost_per_click'> {}
