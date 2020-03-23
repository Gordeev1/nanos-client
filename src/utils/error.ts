import { Alert } from 'react-native';
import { AxiosError } from 'axios';
import { translate } from '@i18n';
import { isProductionBuild } from '@constants';

type _Error = Error | string | AxiosError;

interface IHandleErrorOptions {
	withNotification: boolean;
	payload: _Error;
}

export function handleError(error: _Error, options?: Partial<IHandleErrorOptions>) {
	if (!isProductionBuild) {
		console.log(error, options);
	}

	if (options && options.withNotification) {
		// TODO: handle Axios and options.payload errors
		let message =
			(error && (typeof error === 'string' ? error : error.message)) ||
			translate('errors.unknown');

		Alert.alert(translate('errors.general'), message);
	}

	// TODO: log to Sentry
}
