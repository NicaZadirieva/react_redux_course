import './App.css';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

function App() {
	return (
		<>
			<Title text='Поиск'/>
			<Paragraph 
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
				fontSizeInPx='16'
			/>
			<Button text='Искать'/>
		</>
	);
}

export default App;
