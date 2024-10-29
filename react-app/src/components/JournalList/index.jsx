import { useContext, useMemo } from 'react';
import { UserContext } from '../../context';
import CardButton from '../CardButton';
import JournalItem from '../JournalItem';
import './styles/index.css';
export default function JournalList({items}) {
	const { userId } = useContext(UserContext);
	console.log('JournalList');
	const sortItems = (a, b) => {
		if(a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	
	const filteredItems = useMemo(() => items
		.filter((el) => el.userId == userId)
		.sort(sortItems), [items, userId]);

	if(items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}
	
	

	return (
		<>
			{filteredItems
				.map(el => {
					return (
						<CardButton key={el.id}>
							<JournalItem
								title={el.title}
								post={el.post}
								date={el.date}/>
						</CardButton>
					);
				})}
		</>); 
}