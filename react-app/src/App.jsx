
import { memo, useCallback, useState } from 'react';
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
	// item selected by user. need to be showed in the form (into the body)
	const [selectedItem, setSelectedItem] = useState({});
	console.log('App');
	const addItem = useCallback((item) => {
		if (!item.id) {
			setItems([
				...mapItems(items),
				{
					...item,
					id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
					date: new Date(item.date)
				}]);
		} else {
			setItems([
				...mapItems(items).map(i => {
					if (i.id == item.id) {
						return {...item};
					} 
					return i;
				})]);
		}
	}, [items, setItems]);
	
	
	return (
		<>
			<UserContextProvider>
				<div className="app">
					<LeftPanel>
						<Header/>
						<JournalAdd/>
						<JournalList items={mapItems(items)}
							setItem={setSelectedItem}/>
					</LeftPanel>
			
					<Body>
						<JournalForm data={selectedItem} onSubmit={addItem} />
					</Body>
				</div>
			</UserContextProvider>
		</>
	);
}

export default memo(App);
