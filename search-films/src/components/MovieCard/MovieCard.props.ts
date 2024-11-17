export interface MovieCardProps extends DivProps {
    /**
     * name of the movie
     */
    movieName: string;

    /**
     * id of the movie
     */
    movieId: string;

    /**
     * url to use for the poster image
     */
    posterUrl: string;

    /**
     * (optional) - additional classes for special movie card
     */
    className?: string;

    /**
     * (optional, byDefault = false)
     */
    isLiked?: boolean;

    /**
     * (optional, byDefault = 0) value to describe a rating of the movie
     */
    rating?: number;
}