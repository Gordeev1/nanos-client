import {
	CampaignPlatforms,
	ICampaignSummary,
	ICampaignPlatformInsights,
	ICampaignPlatformAudiance,
} from '@LTypes/campaign';

const defaultPlatformSummary: ICampaignSummary = {
	total_budget: 0,
	remaining_budget: 0,
	impressions: 0,
	clicks: 0,
	website_visits: 0,
	nanos_score: 0,
	cost_per_click: 0,
	click_through_rate: 0,
	advanced_kpi_1: 0,
	advanced_kpi_2: 0,
};

export const platformSummaryKeys = Object.keys(defaultPlatformSummary) as Array<
	keyof ICampaignSummary
>;

export const platformAudienceKeys: Array<keyof ICampaignPlatformAudiance> = [
	'languages',
	'genders',
	'age_range',
	'locations',
	'interests',
	'KeyWords',
];

export const calculateInsightsSummary = (platforms: CampaignPlatforms): ICampaignSummary => {
	const nanosScoresLength = Object.values(platforms).filter(
		platform => platform.insights.nanos_score,
	).length;

	const result = Object.values(platforms).reduce((sum, value) => {
		const insights = Object.assign(
			{},
			...(Object.keys(value.insights) as Array<keyof ICampaignPlatformInsights>).map(key => ({
				[key]: (sum[key] || 0) + (value.insights[key] || 0),
			})),
		);

		return {
			...sum,
			...insights,
			total_budget: value.total_budget + sum.total_budget,
			remaining_budget: value.remaining_budget + sum.remaining_budget,
		};
	}, defaultPlatformSummary);

	const formatted = Object.assign(
		{},
		...(Object.keys(result) as Array<keyof ICampaignSummary>).map(key => {
			const value = result[key];
			return {
				[key]: value && Number(value.toFixed(5)),
			};
		}),
	);

	return result.nanos_score
		? {
				...formatted,
				nanos_score: Number((result.nanos_score / nanosScoresLength).toFixed(5)),
		  }
		: formatted;
};
