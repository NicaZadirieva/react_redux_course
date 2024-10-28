import { useContext, useRef } from 'react';
import { Input, Title } from '../../components';
import { UserContext } from '../../context/user.context';
import { Content, Header } from '../../layouts';

function LoginPage() {
	const { saveCurrentUser } = useContext(UserContext);
			
	const inputRef = useRef();

	const onSubmit = (text) => {
		// if text is not empty set isAuthenticated to true
		if(text.trim().length > 0) {
			saveCurrentUser(text);
		} else {
			inputRef.current.focus();
			alert('Пожалуйста, введите имя');
			console.log('Invalid user name');
		}
	};


	return (
		<>
			<Header/>	
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