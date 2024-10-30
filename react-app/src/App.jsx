
import { memo, useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';
import JournalAdd from './components/JournalAdd';
import JournalBody from './components/JournalBody';
import JournalForm from './components/JournalForm';
import JournalHeader from './components/JournalHeader';
import JournalList from './components/JournalList';
import { useLocalStorage } from './components/shared/hooks';
import { mapItems } from './components/shared/mappers';
import { Utils } from './components/shared/utils';
import { UserContextProvider } from './context';
import Body from './layouts/Body';
import LeftPanel from './layouts/LeftPanel';
function App() {
	const [items, setItems] = useLocalStorage('data'); 
	// item selected by user. need to be showed in the form (into the body)
	const [selectedItem, setSelectedItem] = useState({});
	const [isEdit, toggleEdit] = useState(false);
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
	
	const deleteItem = useCallback((item) => {
		setItems([
			...mapItems(items.filter(i => i.id !== item.id))]);
		setSelectedItem({});
	}, [items, setItems]);

	return (
		<>
			<UserContextProvider>
				<div className="app">
					<LeftPanel>
						<Header/>
						<JournalAdd onClick={() => {toggleEdit(true); setSelectedItem({});}}/>
						<JournalList items={mapItems(items)}
							setItem={setSelectedItem}
							canShowItem={() => toggleEdit(false)}/>
					</LeftPanel>
			
					<Body>
						{!isEdit && selectedItem.title && selectedItem.date && selectedItem.post ? (
							<>
								<JournalHeader text={selectedItem.title} onDelete={() => deleteItem(selectedItem)}/>
								<JournalBody post={selectedItem.post} date={Utils.formatDate(selectedItem.date)} 
									label={selectedItem.tags} />
							</>
						): <JournalForm onSubmit={addItem} data={selectedItem}/>}
					</Body>
				</div>
			</UserContextProvider>
		</>
	);
}

export default memo(App);
