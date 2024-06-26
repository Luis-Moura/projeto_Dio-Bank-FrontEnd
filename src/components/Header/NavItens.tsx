import { Flex } from '@chakra-ui/react';
import React from 'react';

export const NavItensHeader = () => {
    return (
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
		);
}
