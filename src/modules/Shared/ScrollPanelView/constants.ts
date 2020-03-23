import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { scale } from '@utils/styles';

const statusBarHeight = getStatusBarHeight();

export const HEADER_CONTENT_HEIGHT = scale(300);
export const HEADER_HEIGHT = HEADER_CONTENT_HEIGHT + statusBarHeight;
