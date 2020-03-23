import merge from 'lodash/merge';
import { THEME } from './enums';

const colors = {
	white: 'white',
	blue: '#6195ED',
	shark: '#222528',
	bombay: '#B1B1B4',
	wildSand: '#F4F4F4',
	grey: '#8D8D8D',
	codGray: '#1D1D1D',
	yellow: '#FEDB01',
	athensGray: '#f5f5f6',
	haiti: '#090F22',
	cloudBurst: '#263A54', //'#1f2f46',
};

export const baseTheme = {
	colors,
};

const lightTheme = { ...baseTheme };

const darkTheme = merge({}, baseTheme, {
	// TODO: implement dark theme
});

export const themes = {
	[THEME.Light]: lightTheme,
	[THEME.Dark]: darkTheme,
};

export type BaseTheme = Readonly<typeof baseTheme>;
