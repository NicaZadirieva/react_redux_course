import { useRef, useState } from 'react';
import { Input, Title } from '../../components';
import { useLocalStorage } from '../../hooks';
import { Content, Header } from '../../layouts';

function LoginPage() {
	const [userName, setUserName] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false); 
	const [saveAuthUser, logout] = useLocalStorage('users');
	const inputRef = useRef();

	const onSubmit = (text) => {
		// if text is not empty set isAuthenticated to true
		if(text.trim().length > 0) {
			setIsAuthenticated(true);
			setUserName(text);
			saveAuthUser(text);
		} else {
			inputRef.current.focus();
			alert('Пожалуйста, введите имя');
			console.log('Invalid user name');
		}
	};

	const logoutHandler = () => {
		setIsAuthenticated(false);
		logout(userName);
	};

	return (
		<>
			<Header isAuthenticated={isAuthenticated} userName={userName} logout={logoutHandler}/>	
			<Content>
				<Title text='Вход'/>
				<Input 
					position="horizontal"
					placeholder="Ваше имя"
					onSubmit={onSubmit}
					ref={inputRef}
					inputActionName="Войти в профиль"
				/>
			</Content>
		</>
	);
}

export default LoginPage;