import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { IUserContext, UserContext } from '../../context/user.context';

export const RequireAuth = ( { children } : {children: ReactNode} ) => {
	const { isAuthenticated } = useContext(UserContext) as IUserContext;
	if(!isAuthenticated) {
		return <Navigate to="/login" replace/>;
	} else {
		return children;
	}
};