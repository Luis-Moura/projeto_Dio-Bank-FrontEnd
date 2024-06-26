import { Flex } from '@chakra-ui/react';
import React from 'react';

export const LayoutHeader = ({children} : any) => {
	return (
		<Flex
			height="12vh"
			padding="2rem"
			alignItems="center"
			backgroundColor="black"
			flexDirection="row"
			color="white"
			justifyContent="space-between"
        >
            {children}
        </Flex>
	);
};
