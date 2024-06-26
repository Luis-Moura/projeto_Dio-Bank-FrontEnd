import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const TextLogin = () => {
	return (
		<Flex
			w="50%"
			h="88vh"
			alignItems="center"
			justifyContent="center"
			color="white"
		>
			<Box w="100%" marginLeft="15rem">
				<Text fontWeight="700" fontSize="3xl">
					A plataforma para
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					você aprender com
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					experts, dominar as
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					principais
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					tecnologias e entrar
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					mais rápido nas
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					empresas mais
				</Text>
				<Text fontWeight="700" fontSize="3xl">
					desejadas.
				</Text>
			</Box>
		</Flex>
	);
};
