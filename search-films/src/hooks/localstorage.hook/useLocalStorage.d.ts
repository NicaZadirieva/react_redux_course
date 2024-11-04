export interface ProfileElement {
    name: string;
    isLogined: boolean
};
// TODO: (me) как-то не нравится что нужно типизировать еще и это. 
// TODO: (q) есть ли способ обойтись без такой типизации useLocalStorage
export interface LocalStorageValue {
    saveAuthUser: (userName: string) => void;
    logout: (userName: string) => void; 
    currentUser: string;
};