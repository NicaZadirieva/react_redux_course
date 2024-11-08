import { Input, Paragraph, Title } from '../../components';
import Heading from '../../components/Heading';
import styles from './index.module.css';

export default function ErrorPage() {
	return (
		<>
			<Title text='Поиск' />
			<Paragraph
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
				fontSizeInPx={16} />
			<Input
				position='vertical'
				placeholder="Что-то кривое"
				onSend={(textToSearch: string) => { console.log(textToSearch); } }
				inputActionName="Искать"
				iconClassName={'icon-search'}
				hasIcon={true} />
			<div className={styles['error-404']}>
				<Heading className={styles['error-404-title']} text='Упс... Ничего не найдено' />
				<Paragraph
					text='Попробуйте изменить запрос или ввести более точное название фильма'
					fontSizeInPx={20} />
			</div>
		</>);
}