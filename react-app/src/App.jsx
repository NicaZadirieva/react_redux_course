
import { memo } from 'react';
import './App.css';
import Header from './components/Header';
import JournalAdd from './components/JournalAdd';
import JournalForm from './components/JournalForm';
import JournalList from './components/JournalList';
import { useLocalStorage } from './components/shared/hooks';
import { mapItems } from './components/shared/mappers';
import { UserContextProvider } from './context';
import Body from './layouts/Body';
import LeftPanel from './layouts/LeftPanel';
function App() {
	const [items, setItems] = useLocalStorage('data'); 
	console.log('App');
	const addItem = (item) => {
		setItems([
			...mapItems(items),
			{
				...item,
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) : 1,
				date: new Date(item.date)
			}]);
	};
	
	
	return (
		<>
			<UserContextProvider>
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
			</UserContextProvider>
		</>
	);
}

export default memo(App);
