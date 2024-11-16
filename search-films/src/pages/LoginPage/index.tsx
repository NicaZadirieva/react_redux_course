import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Title } from '../../components';
import { IUserContext, UserContext } from '../../context/user.context';

function LoginPage() {
	const { saveCurrentUser } = useContext(UserContext) as IUserContext;
	const navigate = useNavigate();
	const inputRef = useRef(null);

	const onSubmit = (text: string) => {
		// if text is not empty set isAuthenticated to true
		if(text.trim().length > 0) {
			saveCurrentUser?.(text);
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