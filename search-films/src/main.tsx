import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import './index.css';
import MenuLayout from './layouts/MenuLayout';
import ErrorPage from './pages/ErrorPage/index.js';
import FavoritesPage from './pages/FavoritesPage/index.js';
import { LoginPage, MainPage } from './pages/index.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MenuLayout/>,
		children: [
			{
				path: '/',
				element: <MainPage/>
			},
			{
				path: '/favorites',
				element: <FavoritesPage/>
			},
			{
				path: '/login',
				element: <LoginPage/>
			},
			{
				path: '*',
				element: <ErrorPage/>

			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<UserProvider> 
			<RouterProvider router={router}/>
		</UserProvider>
	</React.StrictMode>
);
