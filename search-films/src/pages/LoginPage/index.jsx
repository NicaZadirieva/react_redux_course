import { Input, Title } from '../../components';
import { Content, Header } from '../../layouts';
function LoginPage() {

	return (
		<>
			<Header isAuthenticated={true}/>	
			<Content>
				<Title text='Вход'/>
				<Input 
					position="horizontal"
					placeholder="Ваше имя"
					onInput={(requestBody) => {console.log(requestBody.textToAction)}}
					inputActionName="Войти в профиль"
				/>
			</Content>
		</>
	);
}

export default LoginPage;