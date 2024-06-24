import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

export const Header = () => {
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
			<Box>
				<a href="https://web.dio.me/home">
					<img src="/images/logo-dio.svg" alt="dio-logo" />
				</a>
			</Box>
			<Flex
				width="55%"
				height="10vh"
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<a href="#bank">Bank</a>
				<a href="https://web.dio.me/play">Cursos</a>
				<a href="https://web.dio.me/global">Carreira Global</a>
				<a href="https://web.dio.me/english-4-tech">Cursos de Inglês</a>
				<a href="https://web.dio.me/job-board">Vagas</a>
				<a href="https://web.dio.me/articles">Artigos</a>
				<a href="https://web.dio.me/rooms">Rooms</a>
			</Flex>
		</Flex>
	);
};
