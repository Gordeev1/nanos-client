import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MAIN_SCENES } from '@scenes/Main/scenes';
import CampaignsScene from '@scenes/Main/Campaigns';
import CampaignDetailsScene from '@scenes/Main/CampaignDetails';
import { defaultStackScreenOptions } from '@utils/navigation';

export interface MainStackParamList extends Record<string, object | undefined> {
	[MAIN_SCENES.Campaigns]: undefined;
	[MAIN_SCENES.CampaignDetails]: { id: string };
}

const MainStack = createStackNavigator<MainStackParamList>();

export default (
	<MainStack.Navigator screenOptions={defaultStackScreenOptions} headerMode="none">
		<MainStack.Screen name={MAIN_SCENES.Campaigns} component={CampaignsScene} />
		<MainStack.Screen name={MAIN_SCENES.CampaignDetails} component={CampaignDetailsScene} />
	</MainStack.Navigator>
);
