import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const TextCadastro = () => {
	return (
		<Box w="50%" marginBottom="1rem" color="white">
			<Text fontWeight="500" fontSize="3xl">
				Já tem cadastro?
			</Text>
			<Text fontWeight="500" fontSize="2xl">
				Faça seu login e make the change!
			</Text>
		</Box>
	);
};
