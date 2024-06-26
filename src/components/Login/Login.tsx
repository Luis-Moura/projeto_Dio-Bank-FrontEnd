import React from 'react';
import { TextLogin } from './TextAbout';
import { LayoutLogin } from './Layout';
import { TextCadastro } from './TextCadastro';
import { FormLogin } from './Form';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

export const Login = () => {
	const showText = useBreakpointValue({ base: false, md: false, lg: true });

	return (
		<LayoutLogin>
			{showText && <TextLogin></TextLogin>}
			<Flex
				w={showText ? '50%' : '100%'}
				h="88vh"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
			>
				<TextCadastro></TextCadastro>
				<FormLogin></FormLogin>
			</Flex>
		</LayoutLogin>
	);
};
