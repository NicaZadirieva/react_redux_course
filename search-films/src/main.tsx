import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { doGetBothDetailsAndDesc, doSearchFilmDescByName } from './api';
import './index.css';
import MenuLayout from './layouts/MenuLayout';
import { RequireAuth } from './layouts/RequireAuth';
import SearchLayout from './layouts/SearchLayout';
import ErrorPage from './pages/ErrorPage/index.js';
import FavoritesPage from './pages/FavoritesPage/index.js';
import { LoginPage, MainPage } from './pages/index.js';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';
import { store } from './store/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><MenuLayout/></RequireAuth>,
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
				path: '/movie/:movieId',
				element: <MoviePage/>,
				errorElement: <ErrorPage/>,
				loader: async ({ params }) => {
					if (params.movieId == undefined) {
						throw new Error('Invalid movie id');
					}
					return defer({data: doGetBothDetailsAndDesc(params.movieId)});

				}
			},
			{
				path: '/favorites',
				element: <FavoritesPage/>
			}
		]
	
	},
	{
		path: '/',
		element: <MenuLayout/>,
		children: [
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
		<Provider store={store}> 
				<RouterProvider router={router}/>
		</Provider>
	</React.StrictMode>
);
