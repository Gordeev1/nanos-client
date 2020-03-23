declare var process: any;

import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isProductionBuild = process.env.NODE_ENV === 'production';
