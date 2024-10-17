import cn from 'classnames';
import { useEffect, useReducer, useState } from 'react';
import Button from '../Button';
import { formReducer, INITIAL_STATE } from './states/JournalForm.state';
import styles from './styles/index.module.css';

function JournalForm({onSubmit}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const [inputData, setInputData] = useState();
	const { isValid, isFormReadyToSubmit, values } = formState; 
	useEffect(() => {
		let timerId;
		if(!isValid.date || !isValid.post || !isValid.title) {
			timerId = setTimeout(() => {
				dispatchForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}
		// unmount // 
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	const inputChange = (event) => {
		setInputData(event.target.value);
	};
	
	
	
	const addJournalItem = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formProps = Object.fromEntries(formData);
		dispatchForm({type: 'FILL', payload: formProps});
		
	};

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
			//form.reset();
		}
	}, [isFormReadyToSubmit]);
	const invalidClass = styles.invalid;

	return (
		<>
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<div>
					<input type="text" name="title" className={cn(styles['input-title'], {
						[invalidClass]: isValid.title == false
					})}/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="date" className={styles['form-label']}>
						<img src='/calendar.svg' alt='Иконка календаря'/>
						<span>Дата</span>
					</label>
					<input id="date" type="date" name="date" className={cn(styles['input-date'], {
						[invalidClass]: isValid.date == false
					})}/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="tag" className={styles['form-label']}>
						<img src='/folder.svg' alt='Иконка папки'/>
						<span>Метки</span>
					</label>
					<input type='text' id='tag' name="tag" className={styles['input-tag']} value={inputData} onChange={inputChange}/>
				</div>
				
				<textarea name="post" cols="30" rows="10" className={cn(styles.post, {
					[invalidClass]: isValid.post == false
				})}></textarea>

				<Button text="Сохранить" onClick={() => {console.log('Нажали');}}/>
			</form>
		</>
	);
}

export default JournalForm;
