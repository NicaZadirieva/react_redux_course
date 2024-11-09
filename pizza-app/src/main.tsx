import axios from 'axios';
import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { PREFIX } from './helpers/API.ts';
import './index.css';
import NavigateLayout from './layout/NavigateLayout/index.tsx';
import Cart from './pages/Cart/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';

import { Product } from './pages/Product/index.tsx';

const Menu = lazy(() => import('./pages/Menu'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <NavigateLayout/>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu/></Suspense>
			},
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					});

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
