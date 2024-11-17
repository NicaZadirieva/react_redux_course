
import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { FilmDescApi } from '../../api';
import { Flex, MovieCard, Title } from '../../components';


function SearchPage() {
	const data = useLoaderData() as {data: FilmDescApi[]};
	return (
		<Suspense fallback={<Title text='Загружаю...'/>}>
			<Await
				resolve={data.data}>
				{(data) => {
					return (<Flex position='horizontal' paddingTop={88}>
						{
							data.map((d: FilmDescApi) => {
								return (
									<MovieCard
										movieName={d['#TITLE']}
										movieId={d['#IMDB_ID']}
										key={d['#IMDB_ID']}
										posterUrl={d['#IMG_POSTER']}
										isLiked={false}
										rating={d.rating}
									/>
								);
							})
						}

					</Flex>);
				}}
			</Await>
		</Suspense>
	);
}

export default SearchPage;
