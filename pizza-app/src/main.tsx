import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import NavigateLayout from './layout/NavigateLayout/index.tsx';
import Cart from './pages/Cart/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import Menu from './pages/Menu/index.tsx';

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
