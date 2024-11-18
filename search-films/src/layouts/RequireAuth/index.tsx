import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store/store';

export const RequireAuth = ( { children } : {children: ReactNode} ) => {
	const currentUser = useSelector((s: RootState) => s.users.currentUser);
	if(!currentUser) {
		return <Navigate to="/login" replace/>;
	} else {
		return children;
	}
};