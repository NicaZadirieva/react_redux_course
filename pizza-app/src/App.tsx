import { MouseEvent, useState } from 'react';
import Button from './components/Button';

function App() {
	const [counter, setCounter] = useState(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter} appearance='big'>Кнопка</Button>
		</>
	)
}

export default App;
