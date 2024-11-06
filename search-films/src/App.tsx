import { UserProvider } from './context/user.context';
import MoviePage from './pages/MoviePage';

function App() {

	return (
		<UserProvider> 
			<MoviePage/>
		</UserProvider>
	);
}

export default App;
