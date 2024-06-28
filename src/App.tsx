// src/App.tsx
import React from 'react';
import { LoginPage } from './pages/Login.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<Layout>
					<Routes>
						<Route path="/dashboard" element={<h1>Página inicial</h1>} />

						<Route path="/login" element={<LoginPage></LoginPage>} />
					</Routes>
				</Layout>
			</ChakraProvider>
		</BrowserRouter>
	);
};

export default App;
