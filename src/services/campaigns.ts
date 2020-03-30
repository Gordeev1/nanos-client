import { AxiosResponse } from 'axios';
import ApiService from '@services/api';
import { ICampaign, CampaignStatus, ICampaignsSummary, ICampaignPreview } from '@LTypes/campaign';

export interface ILoadCampaignsQuery {
	status: CampaignStatus;
	skip: number;
}

class CampaignsService {
	listLimit = 10;

	load(query: ILoadCampaignsQuery): Promise<AxiosResponse<ICampaignPreview[]>> {
		return ApiService.client.get<ICampaignPreview[]>('/campaigns', {
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
