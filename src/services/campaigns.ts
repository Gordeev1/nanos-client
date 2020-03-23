import { AxiosResponse } from 'axios';
import ApiService from '@services/api';
import { ICampaign, CampaignStatus, ICampaignsSummary } from '@LTypes/campaign';

export interface ILoadCampaignsQuery {
	status: CampaignStatus;
	skip: number;
}

class CampaignsService {
	listLimit = 10;

	load(query: ILoadCampaignsQuery): Promise<AxiosResponse<ICampaign[]>> {
		return ApiService.client.get<ICampaign[]>('/campaigns', {
			params: { ...query, limit: this.listLimit },
		});
	}

	loadDetails(id: string): Promise<AxiosResponse<ICampaign>> {
		return ApiService.client.get<ICampaign>(`/campaigns/${id}`);
	}

	loadSummary(): Promise<AxiosResponse<ICampaignsSummary>> {
		return ApiService.client.get<ICampaignsSummary>('/stats');
	}
}

export default new CampaignsService();
