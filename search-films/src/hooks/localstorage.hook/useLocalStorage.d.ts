/**
 * * [{name: 'Вася', isLogined: true}] успешный вход
 * * [{name: 'Вася', isLogined: false}] выход
 */
export interface ProfileElement {
    /**
     * authenticated user's name'
     */
    name: string;

    /**
     * (true - user is authenticated)
     */
    isLogined: boolean
};
// TODO: (me) как-то не нравится что нужно типизировать еще и это. 
// TODO: (q) есть ли способ обойтись без такой типизации useLocalStorage
export interface LocalStorageValue {
    saveAuthUser: (userName: string) => void;
    logout: (userName: string) => void; 
    currentUser: string;
};