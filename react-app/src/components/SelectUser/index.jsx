import { useContext } from 'react';
import { UserContext } from '../../context';

export default function SelectUser() {
	const { userId, setUserId } = useContext(UserContext);

	const changeUser = (e) => {
		setUserId(Number(e.target.value));
	};
	return (<>
		<select value={userId} name="user" id="user" onChange={changeUser}>
			<option value="1">Антон</option>
			<option value="2">Вася</option>
		</select>
	</>);
}