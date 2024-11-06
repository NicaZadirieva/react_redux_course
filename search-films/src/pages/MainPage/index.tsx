
import { Flex, Input, MovieCard, Paragraph, Title } from '../../components';
import { Content, Header } from '../../layouts';


function MainPage() {

	return (
		<>
			<Header/>
			<Content>

				<Title text='Поиск'/>
				<Paragraph 
					text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
					fontSizeInPx={16}
				/>
				<Input 
					position='vertical'
					placeholder="Введите название"
					onSend={(textToSearch: string) => {console.log(textToSearch);}}
					inputActionName="Искать"
					iconClassName={'icon-search'}
					hasIcon={true}
				/>
				<Flex position='horizontal' paddingTop={88}>
					<MovieCard
						movieName="Black Window"
						movieId={'1'}
						posterUrl={'Black_Widow.png'}
						isLiked={false}
						rating={324}
						addToWishList={() => {}}
						deleteFromWishList={() => {}}
					/>
					<MovieCard
						movieName="Money Heist"
						movieId={'2'}
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

export default MainPage;
