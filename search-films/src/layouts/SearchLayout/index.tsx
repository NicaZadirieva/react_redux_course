import { useNavigate } from 'react-router-dom';
import { Input, Paragraph, Title } from '../../components';

function SearchLayout({children} : {children: React.ReactNode}) {
	const navigate = useNavigate();

	const saveTextToSearch = (textToSearch: string) => {
		if (textToSearch) {
			navigate('/' + textToSearch);
		} 
	};

	return (
		<>
			<Title text='Поиск'/>
			<Paragraph 
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
				fontSizeInPx={16}
			/>
			<Input 
				position='vertical'
				placeholder="Введите название"
				onSend={(textToSearch: string) => {saveTextToSearch(textToSearch);}}
				inputActionName="Искать"
				iconClassName={'icon-search'}
				hasIcon={true}
			/>
			{children}
		</>
	);
}

export default SearchLayout;