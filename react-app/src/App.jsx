
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import JournalAdd from './components/JournalAdd';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import Body from './layouts/Body';
import LeftPanel from './layouts/LeftPanel';

function App() {
	const [items, setItems] = useState([]); 
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if(data) {
			setItems(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		console.log(items);
	}, [items]);
	
	const addItem = function(item) {
		setItems(oldItems => [
			...oldItems,
			{
				title: item.title,
				date: new Date(item.date),
				tag: item.tag,
				post: item.post,
				id: Math.max(...oldItems.map(i => i.id)) + 1
			}
		]);
	};
	
	
	return (
		<div className="app">
			<LeftPanel>
				<Header/>
				<JournalAdd/>
				<JournalList items={items}/>
			</LeftPanel>
			
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>

	);
}

export default App;
