import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import union from 'lodash/union';
import { ICampaign, CampaignStatus, ICampaignPreview } from '@LTypes/campaign';
import { IStoreState, AppThunk } from '@store';
import CampaignsService from '@services/campaigns';
import { handleError } from '@utils/error';
import { translate } from '@i18n';

interface IStateByStatus {
	loading: boolean;
	error: boolean;
	hasMore: boolean;
	ids: string[];
}

type ByStatus = Record<CampaignStatus, IStateByStatus>;
type Items = Record<string, ICampaign | ICampaignPreview>;
type DetailsLoadingStatus = Record<string, boolean>;

interface IState {
	items: Items;
	byStatus: ByStatus;
	detailsLoadingStatus: DetailsLoadingStatus;
}

const initialStateByStatus: IStateByStatus = {
	loading: false,
	error: false,
	hasMore: true,
	ids: [],
};

const initialState: IState = {
	items: {},
	byStatus: {
		[CampaignStatus.Delivering]: initialStateByStatus,
		[CampaignStatus.Scheduled]: initialStateByStatus,
		[CampaignStatus.Ended]: initialStateByStatus,
	},
	detailsLoadingStatus: {},
};

export const { reducer, actions } = createSlice({
	name: 'campaigns',
	initialState,
	reducers: {
		load(state, { payload }: PayloadAction<ILoadCampaignsPayload>) {
			state.byStatus[payload.status].loading = true;
			state.byStatus[payload.status].error = false;
		},
		loadSuccess(state, { payload }: PayloadAction<ILoadCampaignsSuccessPayload>) {
			const items: Items = Object.assign(
				{},
				...payload.data.map(item => ({ [item._id]: item })),
			);
			const ids = Object.keys(items);
			const hasMore = ids.length >= CampaignsService.listLimit;

			Object.assign(state.items, items);

			Object.assign(state.byStatus[payload.status], {
				hasMore,
				loading: false,
				error: false,
				ids: union(state.byStatus[payload.status].ids, ids),
			});
		},
		loadFail(state, { payload }: PayloadAction<ILoadCampaignsPayload>) {
			state.byStatus[payload.status].loading = false;
			state.byStatus[payload.status].error = true;
		},
		loadDetails(state, { payload }: PayloadAction<ILoadCampaignDetailsPayload>) {
			state.detailsLoadingStatus[payload.id] = true;
		},
		loadDetailsSuccess(state, { payload }: PayloadAction<ILoadCampaignDetailsSuccessPayload>) {
			state.detailsLoadingStatus[payload.id] = false;
			Object.assign(state.items[payload.id], payload.data);
		},
		loadDetailsFail(state, { payload }: PayloadAction<ILoadCampaignDetailsPayload>) {
			state.detailsLoadingStatus[payload.id] = false;
		},
	},
});

interface ILoadCampaignsParams {
	status: CampaignStatus;
}

interface ILoadCampaignsPayload extends ILoadCampaignsParams {}

interface ILoadCampaignsSuccessPayload extends ILoadCampaignsParams {
	data: (ICampaign | ICampaignPreview)[];
}

export const loadCampaigns = (params: ILoadCampaignsParams): AppThunk => (dispatch, getState) => {
	const { status } = params;
	const { ids, hasMore, loading } = getState().campaigns.byStatus[status];

	if (!hasMore || loading) {
		return;
	}

	dispatch(actions.load(params));

	return CampaignsService.load({ status, skip: ids.length })
		.then(({ data }) => dispatch(actions.loadSuccess({ data, ...params })))
		.catch(error => {
			dispatch(actions.loadFail(params));
			handleError(translate('errors.campaigns.loadFail', { payload: error }));
		});
};

interface ILoadCampaignDetailsPayload {
	id: string;
}

interface ILoadCampaignDetailsSuccessPayload extends ILoadCampaignDetailsPayload {
	data: ICampaign;
}

export const loadCampaignDetails = (id: string): AppThunk => (dispatch, getState) => {
	const loading = getState().campaigns.detailsLoadingStatus[id];

	if (loading) {
		return;
	}

	dispatch(actions.loadDetails({ id }));

	return CampaignsService.loadDetails(id)
		.then(({ data }) => dispatch(actions.loadDetailsSuccess({ id, data })))
		.catch(error => {
			dispatch(actions.loadDetailsFail({ id }));
			handleError(translate('errors.campaigns.loadDetailsFail', { payload: error }));
		});
};

export default reducer;

const selectCampaignsState = (state: IStoreState) => state.campaigns;

const selectCampaignsItems = createSelector(selectCampaignsState, state => state.items);

export const selectCampaignById = createSelector<
	IStoreState,
	string,
	Items,
	string,
	ICampaign | ICampaignPreview
>(
	selectCampaignsItems,
	(_, id) => id,
	(campaigns, id) => campaigns[id],
);

const selectDetailsLoadingStatus = createSelector(
	selectCampaignsState,
	state => state.detailsLoadingStatus,
);

export const selectDetailsLoadingStatusById = createSelector<
	IStoreState,
	string,
	DetailsLoadingStatus,
	string,
	boolean
>(
	selectDetailsLoadingStatus,
	(_, id) => id,
	(statuses, id) => statuses[id],
);

const selectStatusesStates = createSelector(selectCampaignsState, state => state.byStatus);

const selectStateByStatus = createSelector<
	IStoreState,
	CampaignStatus,
	ByStatus,
	CampaignStatus,
	IStateByStatus
>(
	selectStatusesStates,
	(_, status) => status,
	(byStatus, status) => byStatus[status],
);

const selectIdsByStatus = createSelector(selectStateByStatus, state => state.ids);

export const selectCampaignsByStatus = createSelector(
	selectIdsByStatus,
	selectCampaignsItems,
	(ids, campaigns) => ids.map(id => campaigns[id]),
);

export const selectLoadingStateByStatus = createSelector(
	selectStateByStatus,
	state => state.loading,
);

export const selectErrorStateByStatus = createSelector(selectStateByStatus, state => state.error);
