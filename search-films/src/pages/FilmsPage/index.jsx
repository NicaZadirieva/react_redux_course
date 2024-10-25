
import { Flex, MovieCard, Paragraph, Search, Title } from '../../components';
import { Content, Header } from '../../layouts';


function FilmsPage() {

	return (
		<>
			<Header isAuthenticated={true}/>
			<Content>

				<Title text='Поиск'/>
				<Paragraph 
					text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
					fontSizeInPx='16'
				/>
				<Search 
					position="vertical"
					placeholder="Введите название"
					onSearch={(requestBody) => {console.log(requestBody.textToSearch)}}
					searchActionName="Искать"
					hasSearchIcon={true}
				/>
				<Flex paddingTop={88}>
					<MovieCard
						movieName="Black Window"
						movieId={1}
						posterUrl={'Black_Widow.png'}
						isLiked={false}
						rating={324}
						addToWishList={() => {}}
						deleteFromWishList={() => {}}
					/>
					<MovieCard
						movieName="Money Heist"
						movieId={2}
						posterUrl={'money_heist.png'}
						isLiked={true}
						rating={8125}
						addToWishList={() => {}}
						deleteFromWishList={() => {}}
					/>

				</Flex>
				
			</Content>
			
		</>
	);
}

export default FilmsPage;
