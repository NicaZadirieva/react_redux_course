export interface MovieCardProps extends DivProps {
    movieName: string;
    movieId: string;
    posterUrl: string;
    className?: string;
    isLiked?: boolean;
    rating?: number;
    addToWishList: (movieId: string) => void;
    deleteFromWishList: (movieId: string) => void;
}