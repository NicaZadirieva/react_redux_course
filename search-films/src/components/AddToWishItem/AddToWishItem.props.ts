export interface AddToWishItemProps {
    /**
     * id for the movie
     */
    movieId: string;
    /**
     * Top margin for the add-to-wish item
     */
    marginTop?: number;

    /**
     * callback to be called on click
     * @param movieId id for the movie
     * @returns 
     */
    addToWishList: (movieId: string) => void;
}