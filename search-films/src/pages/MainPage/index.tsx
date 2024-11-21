
import { useLoaderData } from 'react-router-dom';
import { FilmDescApi } from '../../api';
import { Flex, MovieCard } from '../../components';


function MainPage() {
	const data = useLoaderData() as FilmDescApi[];

	return (
		<>
			<Flex position='horizontal' paddingTop={88}>
				{
					data && data.map((d: FilmDescApi) => {
						return (
							<MovieCard
								movieName={d['#TITLE']}
								movieId={d['#IMDB_ID']}
								key={d['#IMDB_ID']}
								posterUrl={d['#IMG_POSTER']}
								rating={d.rating}
							/>
						);
					})
				}

			</Flex>
		</>
	);
}

export default MainPage;
