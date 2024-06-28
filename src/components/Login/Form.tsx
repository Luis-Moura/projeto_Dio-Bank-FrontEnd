import { Box, Button, Input } from '@chakra-ui/react';
import { login } from '../../services/login';
import React, { useState } from 'react';

export const FormLogin = () => {

	const [email, setEmail] = useState('');

	return (
		<Box w="50%">
			<form action="">
				<Input
					color="white"
					borderColor="white"
					size="lg"
					focusBorderColor="white"
					marginBottom="1rem"
					type="email"
					_placeholder={{ color: 'white' }}
					placeholder="Digite Seu Email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Input
					color="white"
					borderColor="white"
					size="lg"
					focusBorderColor="white"
					marginBottom="1rem"
					type="password"
					_placeholder={{ color: 'white' }}
					placeholder="Digite Sua Senha"
				/>
				<Button onClick={() => login(email)} w="100%">
					Entrar
				</Button>
			</form>
		</Box>
	);
};
