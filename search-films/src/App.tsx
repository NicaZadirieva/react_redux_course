import { UserProvider } from './context/user.context';
import ErrorPage from './pages/ErrorPage';

function App() {

	return (
		<UserProvider> 
			<ErrorPage/>
		</UserProvider>
	);
}

export default App;
