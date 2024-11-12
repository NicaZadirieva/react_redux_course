
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FilmDescApi } from '../../api';
import { Flex, Input, MovieCard, Paragraph, Title } from '../../components';


function MainPage() {
	const data = useLoaderData() as FilmDescApi[];
	const navigate = useNavigate();

	const saveTextToSearch = (textToSearch: string) => {
		if (textToSearch) {
			navigate('/' + textToSearch);
		} 
	};

	return (
		<>
			<Title text='Поиск'/>
			<Paragraph 
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
				fontSizeInPx={16}
			/>
			<Input 
				position='vertical'
				placeholder="Введите название"
				onSend={(textToSearch: string) => {saveTextToSearch(textToSearch);}}
				inputActionName="Искать"
				iconClassName={'icon-search'}
				hasIcon={true}
			/>
			<Flex position='horizontal' paddingTop={88}>
				{
					data && data.map((d: FilmDescApi) => {
						return (
							<MovieCard
								movieName={d['#TITLE']}
								movieId={d['#IMDB_ID']}
								key={d['#IMDB_ID']}
								posterUrl={d['#IMG_POSTER']}
								isLiked={false}
								rating={d.rating}
								addToWishList={() => {}}
								deleteFromWishList={() => {}}
							/>
						);
					})
				}

			</Flex>
		</>
	);
}

export default MainPage;
