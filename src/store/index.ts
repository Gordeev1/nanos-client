import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import campaigns from '@store/slices/campaigns';
import campaignsSummary from '@store/slices/campaignsSummary';

export const store = configureStore({
	reducer: {
		campaigns,
		campaignsSummary,
	},
});

export type IStoreState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	IStoreState,
	unknown,
	Action<string>
>;
