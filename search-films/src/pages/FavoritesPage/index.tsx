
import { Flex, MovieCard, Title } from '../../components';


function FavoritesPage() {

	return (
		<>
			<Title text='Избранное'/>
			<Flex position='horizontal' paddingTop={88}>
				<MovieCard
					movieName="Black Window"
					movieId={'1'}
					posterUrl={'Black_Widow.png'}
					isLiked={true}
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
		</>
	);
}

export default FavoritesPage;
