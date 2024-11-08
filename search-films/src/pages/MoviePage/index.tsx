
import cn from 'classnames';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Paragraph, Title } from '../../components';
import AddToWishListItem from '../../components/AddToWishItem';
import Rating from '../../components/Rating';
import { Content, Header } from '../../layouts';
import styles from './index.module.css';

function MoviePage() {
	const { id } = useParams();
	// использую пока так.
	useEffect(() => {
		console.log(id);
	}, [id]);
	
	return (
		<>
			<Header/>
			<Content className={styles['movie-restrict-content']}>
				{/**TODO: надо будет подумать над именем классов */}
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

						<div className='property-container'>
							<Paragraph 
								text='Тип'
								fontSizeInPx={16}
								className={styles['property']}
							/>
							<Paragraph 
								text='Movie'
								fontSizeInPx={20}
								className={styles['property-value']}
							/>
						</div>

						<div className='property-container'>
							<Paragraph 
								text='Дата выхода'
								fontSizeInPx={16}
								className={styles['property']}
							/>
							<Paragraph 
								text='2019-04-24'
								fontSizeInPx={20}
								className={styles['property-value']}
							/>
						</div>

						<div className='property-container'>
							<Paragraph 
								text='Длительность'
								fontSizeInPx={16}
								className={styles['property']}
							/>
							<Paragraph 
								text='181 мин'
								fontSizeInPx={20}
								className={styles['property-value']}
							/>
						</div>

						<div className='property-container'>
							<Paragraph 
								text='Жанр'
								fontSizeInPx={16}
								className={styles['property']}
							/>
							<Paragraph 
								text='Adventure, Science Fiction, Action'
								fontSizeInPx={20}
								className={styles['property-value']}
							/>
						</div>

					</Flex>


				</Flex>

				<div className={styles['feedback-section']}>Отзывы</div>
				{/**TODO: надо будет вынести в отдельный компонент Feedback */}
				<Flex gap={14} position='vertical' className={'no-justify-content'}>
					<div className={styles['movie-desc']}>
						<Flex position='horizontal'>
							<Title className={styles['movie-desc-title']} text='Not as good as infinity war'/>
							<Paragraph 
								text='2019-04-29'
								fontSizeInPx={14}
								className={styles['movie-desc-date']}
							/>
						</Flex>
						
						<Paragraph 
							text={`But its a pretty good film. 
							A bit of a mess in some parts, 
							lacking the cohesive and effortless feel infinity war 
							somehow managed to accomplish. 
							Some silly plot holes and characters 
							that could&apos;ve been cut (Ahem, captain marvel and thanos). 
							The use of Captain marvel in this film was just ridiculous. 
							Shes there at the start, bails for some reason? 
							And then pops up at the end to serve no purpose but deux ex machina a space ship...`}
							fontSizeInPx={20}
							className={styles['movie-desc-short-info']}
						/>
					</div>
				</Flex>

			</Content>
			
		</>
	);
}

export default MoviePage;
