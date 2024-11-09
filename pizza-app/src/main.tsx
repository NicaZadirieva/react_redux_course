import axios from 'axios';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PREFIX } from './helpers/API.ts';
import './index.css';
import NavigateLayout from './layout/NavigateLayout/index.tsx';
import Cart from './pages/Cart/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import Menu from './pages/Menu/index.tsx';
import { Product } from './pages/Product/index.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <NavigateLayout/>,
		children: [
			{
				path: '/',
				element: <Menu/>
			},
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>,
				loader: async ({ params }) => {
					// Simulate delay to show loading state for a moment before fetching data
					await new Promise<void>((resolve) => {
						setTimeout(() => {
							resolve();
						}, 2000);
					});
					const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					return data;

				}
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage/>
	}
	
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
