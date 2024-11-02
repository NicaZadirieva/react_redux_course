export interface IUserContext {
    currentUser: string | null;
    isAuthenticated: boolean;
    // TODO: ?
    logoutCurrentUser?: () => void;
};