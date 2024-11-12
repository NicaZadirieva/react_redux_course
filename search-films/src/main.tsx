import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { doSearchFilmDescByName } from './api';
import { UserProvider } from './context/user.context';
import './index.css';
import MenuLayout from './layouts/MenuLayout';
import SearchLayout from './layouts/SearchLayout';
import ErrorPage from './pages/ErrorPage/index.js';
import FavoritesPage from './pages/FavoritesPage/index.js';
import { LoginPage, MainPage } from './pages/index.js';
import SearchPage from './pages/SearchPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MenuLayout/>,
		children: [
			{
				path: '/',
				element: <SearchLayout><MainPage/></SearchLayout>
			},
			{
				path: '/movies/:movieName',
				element: <SearchLayout><SearchPage/></SearchLayout>,
				errorElement: <ErrorPage/>,
				loader: async ({ params }) => {
					if (params.movieName == undefined) {
						throw new Error('Invalid movie name');
					}
					return defer({data: doSearchFilmDescByName(params.movieName)});

				}
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
