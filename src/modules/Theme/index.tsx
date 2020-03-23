import * as React from 'react';
import { ThemeProvider } from '@utils/styled-components';
import { THEME } from './enums';
import { themes } from './styled';

interface IProps {
	children: React.ReactChild;
}

export const ChangeThemeContext = React.createContext((_: THEME) => {});

export default ({ children }: IProps) => {
	const [themeName, changeThemeName] = React.useState(THEME.Light);

	return (
		<ChangeThemeContext.Provider value={changeThemeName}>
			<ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>
		</ChangeThemeContext.Provider>
	);
};
