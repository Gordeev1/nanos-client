import { ImageRequireSource } from 'react-native';
import { Platforms } from '@LTypes/platform';

export const iconByPlatform: Record<Platforms, ImageRequireSource> = {
	[Platforms.Facebook]: require('@assets/icons/facebook.png'),
	[Platforms.Instagram]: require('@assets/icons/instagram.png'),
	[Platforms.Google]: require('@assets/icons/google.png'),
};

export const colorByPlatform: Record<Platforms, string> = {
	[Platforms.Facebook]: '#4267B2',
	[Platforms.Instagram]: '#CA2E9A',
	[Platforms.Google]: '#D54235',
};
