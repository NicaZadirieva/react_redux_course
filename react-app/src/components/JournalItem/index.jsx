import { default as Utils } from '../shared/utils.js';
import './styles/index.css';
function JournalItem({title, text, date}) {
	const fmtDate = Utils.formatDate(date);
	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>{fmtDate}</div>
				<div className='journal-item__text'>{text}</div>
			</h2>
		</>
	);
}

export default JournalItem;