import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage/index.js';
import FavoritesPage from './pages/FavoritesPage/index.js';
import { LoginPage, MainPage } from './pages/index.js';
import MoviePage from './pages/MoviePage/index.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage/>,
		children: [
			{
				path: '/movies/:movieId',
				element: <MoviePage/>
			}
		]
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
    
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);
