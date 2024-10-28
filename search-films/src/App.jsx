import { UserProvider } from './context/user.context';
import LoginPage from './pages/LoginPage';

function App() {

	return (
		<UserProvider> 
			<LoginPage/>
		</UserProvider>
	);
}

export default App;
