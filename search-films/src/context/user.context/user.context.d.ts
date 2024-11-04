export interface IUserContext {
    currentUser: string | null;
    isAuthenticated: boolean;
    // TODO: (me) возвращаемый тип?
    logoutCurrentUser?: () => void;
};