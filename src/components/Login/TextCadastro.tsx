import { Box, Text } from '@chakra-ui/react';
import { api } from '../../api';
import React, { useEffect, useState } from 'react';

interface UserData {
	name: string;
	email: string;
	password: string;
}

export const TextCadastro = () => {
	const [userData, setUserData] = useState<UserData>();

	useEffect(() => {
		const getData = async () => {
			const data : UserData | any = await api;
			setUserData(data);
		};

		getData();
	});

	console.log(userData);

	return (
			// {/* {userData === null || userData === undefined ? <h1>loading...</h1> : <h1>Informações Carregadas</h1>} */}
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
