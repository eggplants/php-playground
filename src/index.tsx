import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider, Center, Box } from '@chakra-ui/react';
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Manual from './manual';

const router = createBrowserRouter([
	{
		path: '*',
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
	<ChakraProvider>
		<Box style={{ margin: '16px' }}>
			<Header />
		</Box>
		<RouterProvider router={router} />
		<Box style={{ margin: '16px' }}>
			<Manual />
		</Box>
		<Center>
			<Footer />
		</Center>
	</ChakraProvider>
);
