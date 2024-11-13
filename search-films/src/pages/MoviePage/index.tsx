
import cn from 'classnames';
import { Suspense } from 'react';
import { Await, useLoaderData, useLocation } from 'react-router-dom';
import { FilmDetailsApi } from '../../api';
import { Flex, Paragraph, Title } from '../../components';
import AddToWishListItem from '../../components/AddToWishItem';
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
					return (<div className={styles['film-container']}>
						
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
									<AddToWishListItem movieId={pathname.split('/movie/')[1]} addToWishList={(movieId) => console.log(movieId)}/>
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
						{/**TODO: надо будет вынести в отдельный компонент Feedback */}
						<Flex gap={14} position='vertical' className={'no-justify-content'}>
							<div className={styles['movie-desc']}>
								<Flex position='horizontal'>
									<Title className={styles['movie-desc-title']} text={data.description}/>
									<Paragraph 
										text={data.review.author.dateCreated}
										fontSizeInPx={14}
										className={styles['movie-desc-date']}
									/>
								</Flex>
						
								<Paragraph 
									text={data.review.author.reviewBody}
									fontSizeInPx={20}
									className={styles['movie-desc-short-info']}
								/>
							</div>
						</Flex>
					</div>);}}

			</Await>
       

			
			
		</Suspense>
	);
}

export default MoviePage;
