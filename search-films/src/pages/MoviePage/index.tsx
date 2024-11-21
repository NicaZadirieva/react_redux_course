
import cn from 'classnames';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Await, useLoaderData, useLocation } from 'react-router-dom';
import { AllAttrsFilm } from '../../api/film.request';
import { Flex, Paragraph, Title } from '../../components';
import AddToWishListItem from '../../components/AddToWishItem';
import DeleteFromWishListItem from '../../components/DeleteFromWishItem';
import Feedback from '../../components/Feedback';
import Rating from '../../components/Rating';

import { favorsActions } from '../../store/films.slice';
import { RootState } from '../../store/store';
import { convertDurationToRus } from './helpers';
import styles from './index.module.css';


function MoviePage() {
	const data  = useLoaderData() as {data: AllAttrsFilm};
	const favors = useSelector((f: RootState) => f.favors.favorites);
	const { pathname } = useLocation();
	const [isLiked, setIsLiked] = useState(false);
	const movieId = pathname.split('/movie/')[1];
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLiked(includeInFavors());
	}, [data.data])

	const includeInFavors = () => {
		return favors.some((f) => f['#IMDB_ID'] === movieId);
	}

	const addToWishList = (movieData: AllAttrsFilm) => {
		dispatch(favorsActions.addFilm(movieData.desc));
		setIsLiked(true);
    };

	const deleteFromWishList = (movieData: AllAttrsFilm) => {
		dispatch(favorsActions.deleteFilm(movieId));
		setIsLiked(false);
    };

	return (
		<Suspense fallback={<Title text='Загружаю...'/>}>
			<Await
				resolve={data.data}>

				{(data: AllAttrsFilm) => {
					return (
					<div className={styles['film-container']}>
						
						<div className={styles['head']}>
							<Paragraph 
								text='Поиск фильмов'
								fontSizeInPx={12}
								className={styles['head-desc']}
							/>
							<Title className={styles['movie-name']} text={data.details.name}/>
						</div>

						<Flex gap={80} paddingTop={80} position='horizontal'>
							<img className={styles['movie-photo']} src='/poster/big_band.png' alt='Изображение фильма'/>
							<Flex gap={24} position='vertical' className={cn('no-justify-content', styles['movie-desc-wrapper'])}>
								<Paragraph 
									text={data.details.description}
									fontSizeInPx={20}
									className={styles['movie-description']}
								/>
								<Flex gap={35} className={'no-justify-content'} position='horizontal'>
									<Rating value={data.details.aggregateRating.ratingValue}/>
									{isLiked ? <DeleteFromWishListItem movieId={movieId} deleteFromWishList={() => deleteFromWishList(data)}/> : <AddToWishListItem movieId={movieId} addToWishList={() => addToWishList(data)}/>}
								
								</Flex>

								<div className='property-container'>
									<Paragraph 
										text='Тип'
										fontSizeInPx={16}
										className={styles['property']}
									/>
									<Paragraph 
										text={data.details['@type']}
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
										text={data.details.datePublished}
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
										text={convertDurationToRus(data.details.duration)}
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
										text={data.details.genre.join(',')}
										fontSizeInPx={20}
										className={styles['property-value']}
									/>
								</div>

							</Flex>


						</Flex>

						<div className={styles['feedback-section']}>Отзывы</div>
						<Feedback data={data.details}/>
					</div>
					);
					}}
			</Await>
		</Suspense>
	);
}

export default MoviePage;
