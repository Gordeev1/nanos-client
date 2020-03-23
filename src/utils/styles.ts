import { Dimensions } from 'react-native';

const TARGET_WIDTH = 414;
const TARGET_HEIGHT = 896;

export const scale = (value: number): number => {
	const { width } = Dimensions.get('window');
	return Number(((width / TARGET_WIDTH) * value).toFixed(2));
};

export const scaleVertical = (value: number): number => {
	const { height } = Dimensions.get('window');
	return Number(((height / TARGET_HEIGHT) * value).toFixed(2));
};
