import { Box, Button, Input } from '@chakra-ui/react';
import { login } from '../../services/login';
import React from 'react';

export const FormLogin = () => {
	return (
		<Box w="50%">
			<form action="">
				<Input
					borderColor="white"
					size="lg"
					focusBorderColor="white"
					marginBottom="1rem"
					type="email"
					_placeholder={{ color: 'white' }}
					placeholder="Digite Seu Email"
				/>
				<Input
					borderColor="white"
					size="lg"
					focusBorderColor="white"
					marginBottom="1rem"
					type="password"
					_placeholder={{ color: 'white' }}
					placeholder="Digite Sua Senha"
				/>
				<Button onClick={login} w="100%">
					Entrar
				</Button>
			</form>
		</Box>
	);
};
