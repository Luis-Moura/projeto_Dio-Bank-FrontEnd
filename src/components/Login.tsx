import React from 'react';
import { login } from '../services/login';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

export const Login = () => {
	return (
		<>
			<Flex
				w="100%"
				h="88vh"
				flexDirection="row"
				bgGradient="linear(to-br, #B589F4, #7535A0, #BC52F5)"
			>
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
				<Flex
					w="70%"
					h="88vh"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Box w="50%" marginBottom="1rem" color="white">
						<Text fontWeight="500" fontSize="3xl">
							Já tem cadastro?
						</Text>
						<Text fontWeight="500" fontSize="2xl">
							Faça seu login e make the change!
						</Text>
					</Box>
					<Box w="50%">
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
					</Box>
				</Flex>
			</Flex>
		</>
	);
};
