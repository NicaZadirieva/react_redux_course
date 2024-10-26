
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import JournalAdd from './components/JournalAdd';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import { useLocalStorage } from './components/shared/hooks';
import { mapItems } from './components/shared/mappers';
import { UserContext } from './context/user.context';
import Body from './layouts/Body';
import LeftPanel from './layouts/LeftPanel';
function App() {
	const [items, setItems] = useLocalStorage('data'); 
	const [userId, setUserId] = useState(1);
	
	const addItem = (item) => {
		setItems([
			...mapItems(items),{
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) : 1,
				title: item.title,
				post: item.post,
				date: new Date(item.date)
			}]);
	};
	
	
	return (
		<>
			<UserContext.Provider value={{ userId, setUserId  }}>
				<div className="app">
					<LeftPanel>
						<Header/>
						<JournalAdd/>
						<JournalList items={mapItems(items)}/>
					</LeftPanel>
			
					<Body>
						<JournalForm onSubmit={addItem} />
					</Body>
				</div>
			</UserContext.Provider>
		</>
	);
}

export default App;
