import { FilmReviewApi } from '../../api/film.request';

export interface FeedbackProps {
    data: {
        description: string;
        review: FilmReviewApi
    }
};