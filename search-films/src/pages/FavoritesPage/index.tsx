
import { useSelector } from 'react-redux';
import { FilmDescApi } from '../../api';
import { Flex, MovieCard, Title } from '../../components';
import { RootState } from '../../store/store';


function FavoritesPage() {
	const favors = useSelector((f: RootState) => f.favors.favorites) as FilmDescApi[];

	return (
		<>
		<Title text='Избранное'/>
			<Flex position='horizontal' paddingTop={88}>
				{
					favors && favors.map((d: FilmDescApi) => {
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

export default FavoritesPage;
