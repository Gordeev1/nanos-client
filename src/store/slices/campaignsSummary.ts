import { ICampaignsSummary } from '@LTypes/campaign';
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, IStoreState } from '@store';
import CampaignsService from '@services/campaigns';
import { handleError } from '@utils/error';

interface IState {
	loading: boolean;
	summary: null | ICampaignsSummary;
}

const initialState: IState = {
	loading: false,
	summary: null,
};

export const { reducer, actions } = createSlice({
	name: 'campaignsSummary',
	initialState,
	reducers: {
		load(state) {
			state.loading = true;
		},
		loadSuccess(state, { payload }: PayloadAction<ICampaignsSummary>) {
			state.loading = false;
			state.summary = payload;
		},
		loadFail(state) {
			state.loading = false;
		},
	},
});

export const loadCampaignsSummary = (): AppThunk => dispatch => {
	dispatch(actions.load());

	return CampaignsService.loadSummary()
		.then(response => dispatch(actions.loadSuccess(response.data)))
		.catch(error => {
			dispatch(actions.loadFail());
			handleError(error);
		});
};

export default reducer;

const selectCampaignsSummaryState = (state: IStoreState) => state.campaignsSummary;

export const selectCampaignsSummaryLoading = createSelector(
	selectCampaignsSummaryState,
	state => state.loading,
);

export const selectCampaignsSummary = createSelector(
	selectCampaignsSummaryState,
	state => state.summary,
);
