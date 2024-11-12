export interface DeleteFromWishProps {
    /**
     * id for the movie
     */
    movieId: string;
    
    /**
     * (optional, defaultValue = 0) Top margin for the add-to-wish item
     */
    marginTop?: number;
    
    /**
     * callback to be called on click
     * @param movieId id for the movie
     * @returns 
     */
    deleteFromWishList: (movieId: string) => void;
}