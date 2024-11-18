import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Title } from '../../components';
import { userActions } from '../../store/user.slice';

function LoginPage() {
	const navigate = useNavigate();
	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const saveCurrentUser = (name: string) => {
		dispatch(userActions.login({ name }));
	}

	const onSubmit = (text: string) => {
		// if text is not empty set isAuthenticated to true
		if(text.trim().length > 0) {
			saveCurrentUser(text);
			navigate('/');

		} else {
			if (inputRef.current) {
				(inputRef.current as HTMLElement).focus();
			}
			alert('Пожалуйста, введите имя');
			console.log('Invalid user name');
		}
	};


	return (
		<>
			<Title text='Вход'/>
			<Input 
				position="horizontal"
				placeholder="Ваше имя"
				onSend={onSubmit}
				ref={inputRef}
				inputActionName="Войти в профиль"
			/>
		</>
	);
}

export default LoginPage;