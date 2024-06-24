// src/App.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../src/components/Layout';
import { Login } from './components/login';

const App: React.FC = () => {
	return (
		<>
			<ChakraProvider>
				<Layout>
					<Login></Login>
				</Layout>
			</ChakraProvider>
		</>
	);
};

export default App;
