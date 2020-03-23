import React from 'react';
import 'react-native-gesture-handler';
import { Provider as StoreProvider } from 'react-redux';
import Scenes from '@scenes';
import Theme from '@modules/Theme';
import { store } from '@store';
import { useI18nConfig } from '@i18n';

export default () => {
	const configured = useI18nConfig();

	return (
		<StoreProvider store={store}>
			{configured && (
				<Theme>
					<Scenes />
				</Theme>
			)}
		</StoreProvider>
	);
};
