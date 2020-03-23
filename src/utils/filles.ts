import { Source } from 'react-native-fast-image';
import { BASE_URL } from '@constants/envs';

export const getRemoteImageSource = (image: string): Source => ({
	uri: `${BASE_URL}/images/${image}`,
});
