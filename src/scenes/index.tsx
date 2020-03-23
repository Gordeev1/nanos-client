import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from '@scenes/Main';
import { withTheme } from '@utils/styled-components';
import { BaseTheme } from '@modules/Theme/styled';

interface IProps {
	theme: BaseTheme;
}

export default withTheme(({ theme }: IProps) => {
	return (
		<>
			<StatusBar
				barStyle="light-content"
				translucent
				animated
				backgroundColor={theme.colors.cloudBurst}
			/>
			<NavigationContainer>{MainStack}</NavigationContainer>
		</>
	);
});
