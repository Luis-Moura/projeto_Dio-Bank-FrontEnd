import { Flex } from '@chakra-ui/react';
import React from 'react';

export const LayoutLogin = ({ children }: any) => {
	return (
		<Flex
			w="100%"
			h="88vh"
			flexDirection="row"
			bgGradient="linear(to-br, #B589F4, #7535A0, #BC52F5)"
		>
			{children}
		</Flex>
	);
};
