import './App.css';
import Paragraph from './components/Paragraph';
import Search from './components/Search';
import Title from './components/Title';

function App() {
	/**TODO: (me) Штука только для демонстрации. Потом удОлить */
	const ColoredLine = () => (
		<hr
			style={{
				color: 'red',
				backgroundColor: 'red',
				height: '5px'
			}}
		/>
	);
	return (
		<>
			<Title text='Поиск'/>
			<Paragraph 
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
				fontSizeInPx='16'
			/>
			<Search 
				position="vertical"
				placeholder="Введите название"
				onSearch={(requestBody) => {console.log(requestBody.textToSearch)}}
				searchActionName="Искать"
				hasSearchIcon={true}
			/>

			<ColoredLine/>

			<Search 
				position="horizontal"
				placeholder="Введите название"
				onSearch={(requestBody) => {console.log(requestBody.textToSearch)}}
				searchActionName="Искать"
			/>
		</>
	);
}

export default App;
