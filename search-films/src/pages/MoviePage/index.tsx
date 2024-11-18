
import cn from 'classnames';
import { Suspense } from 'react';
import { Await, useLoaderData, useLocation } from 'react-router-dom';
import { FilmDetailsApi } from '../../api';
import { Flex, Paragraph, Title } from '../../components';
import AddToWishListItem from '../../components/AddToWishItem';
import Feedback from '../../components/Feedback';
import Rating from '../../components/Rating';
import styles from './index.module.css';


function MoviePage() {
	const data  = useLoaderData() as {data: FilmDetailsApi};
	const { pathname } = useLocation();
	
	return (
		<Suspense fallback={<Title text='Загружаю...'/>}>
			<Await
				resolve={data.data}>

				{(data: FilmDetailsApi) => {
					return (
					<div className={styles['film-container']}>
						
						<div className={styles['head']}>
							<Paragraph 
								text='Поиск фильмов'
								fontSizeInPx={12}
								className={styles['head-desc']}
							/>
							<Title className={styles['movie-name']} text={data.name}/>
						</div>

						<Flex gap={80} paddingTop={80} position='horizontal'>
							<img className={styles['movie-photo']} src='/poster/big_band.png' alt='Изображение фильма'/>
							<Flex gap={24} position='vertical' className={cn('no-justify-content', styles['movie-desc-wrapper'])}>
								<Paragraph 
									text={data.name}
									fontSizeInPx={20}
									className={styles['movie-description']}
								/>
								<Flex gap={35} className={'no-justify-content'} position='horizontal'>
									<Rating value={data.aggregateRating.ratingValue}/>
									<AddToWishListItem movieId={pathname.split('/movie/')[1]} addToWishList={() => console.log('not implemented')}/>
								</Flex>

								<div className='property-container'>
									<Paragraph 
										text='Тип'
										fontSizeInPx={16}
										className={styles['property']}
									/>
									<Paragraph 
										text={data['@type']}
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
										text={data.datePublished}
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
										text={data.genre.join(',')}
										fontSizeInPx={20}
										className={styles['property-value']}
									/>
								</div>

							</Flex>


						</Flex>

						<div className={styles['feedback-section']}>Отзывы</div>
						<Feedback data={data}/>
					</div>
					);
					}}
			</Await>
		</Suspense>
	);
}

export default MoviePage;
