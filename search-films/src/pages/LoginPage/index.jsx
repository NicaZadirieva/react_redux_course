import { useState } from 'react';
import { Input, Title } from '../../components';
import { Content, Header } from '../../layouts';
function LoginPage() {
	const [userName, setUserName] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false); 
	return (
		<>
			<Header isAuthenticated={isAuthenticated} userName={userName} />	
			<Content>
				<Title text='Вход'/>
				<Input 
					position="horizontal"
					placeholder="Ваше имя"
					onInput={(requestBody) => {setUserName(requestBody.textToAction)}}
					inputActionName="Войти в профиль"
				/>
			</Content>
		</>
	);
}

export default LoginPage;