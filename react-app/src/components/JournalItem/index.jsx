import { Utils } from '../shared/utils';
import './styles/index.css';
function JournalItem({title, post, date}) {
	const fmtDate = Utils.formatDate(date);
	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>{fmtDate}</div>
				<div className='journal-item__text'>{post}</div>
			</h2>
		</>
	);
}

export default JournalItem;