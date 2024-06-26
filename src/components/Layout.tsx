import React from 'react';
import { Header } from './Header/Header';
import { Box } from '@chakra-ui/react';

export const Layout = ({ children }: any) => {
	return (
		<Box w="100%" h="100vh">
			<Header />
			{children}
		</Box>
	);
};
