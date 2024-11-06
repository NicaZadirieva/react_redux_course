
import cn from 'classnames';
import { Flex, Paragraph, Title } from '../../components';
import AddToWishListItem from '../../components/AddToWishItem';
import Rating from '../../components/Rating';
import { Content, Header } from '../../layouts';
import styles from './index.module.css';

function MoviePage() {

	return (
		<>
			<Header/>
			<Content className={styles['movie-restrict-content']}>
				<div className={styles['head']}>
					<Paragraph 
						text='Поиск фильмов'
						fontSizeInPx={12}
						className={styles['head-desc']}
					/>
					<Title className={styles['movie-name']} text='Avengers: Endgame'/>
				</div>

				<Flex gap={80} paddingTop={80} position='horizontal'>
					<img className={styles['movie-photo']} src='/poster/big_band.png' alt='Изображение фильма'/>
					<Flex gap={24} position='vertical' className={cn('no-justify-content', styles['movie-desc-wrapper'])}>
						<Paragraph 
							text={`After the devastating events of Avengers: 
                            Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. 
                            With the help of remaining allies, the Avengers must assemble once more in order to undo 
                            Thanos' actions and restore order to the universe once and for all, 
                            no matter what consequences may be in store`}
							fontSizeInPx={20}
							className={styles['movie-description']}
						/>
						<Flex gap={35} className={'no-justify-content'} position='horizontal'>
							<Rating value={8.3}/>
							<AddToWishListItem movieId={'1'} addToWishList={(movieId) => console.log(movieId)}/>
						</Flex>

						<div>
							<Paragraph 
								text='Тип'
								fontSizeInPx={16}
								className={styles['head-desc']}
							/>
							<Paragraph 
								text='Movie'
								fontSizeInPx={16}
								className={styles['head-desc']}
							/>
						</div>

					</Flex>


				</Flex>
				
			</Content>
			
		</>
	);
}

export default MoviePage;
