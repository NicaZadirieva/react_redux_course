import { useContext } from 'react';
import { UserContext } from '../../context';
import CardButton from '../CardButton';
import JournalItem from '../JournalItem';
import './styles/index.css';
export default function JournalList({items}) {
	const { userId } = useContext(UserContext);

	if(items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}
	const sortItems = (a, b) => {
		if(a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<>
			{items
				.filter((el) => el.userId == userId)
				.sort(sortItems)
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