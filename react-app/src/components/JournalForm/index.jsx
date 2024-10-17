import cn from 'classnames';
import { useEffect, useState } from 'react';
import Button from '../Button';
import styles from './styles/index.module.css';

// valid state for validation
const INITIAL_STATE = {
	title: true,
	date: true,
	post: true
};
function JournalForm({onSubmit}) {
	const [inputData, setInputData] = useState('');

	const [formValidState, setFormValidState] = useState(INITIAL_STATE);
	
	useEffect(() => {
		let timerId;
		if(!formValidState.date || !formValidState.post || !formValidState.title) {
			timerId = setTimeout(() => {
				setFormValidState(INITIAL_STATE);
			}, 2000);
		}
		// unmount // 
		return () => {
			clearTimeout(timerId);
		};
	}, [formValidState]);

	const inputChange = (event) => {
		setInputData(event.target.value);
	};
	
	
	const validateDate = (formData) => {
		try {
			if(!formData.date) {
				throw new Error('Date must be specified');
			}
			new Date(formData.date);
			return {date: true};
		} catch (e) {
			const notValidData = {
				valid: false,
				errorMessage: e.message,
				data: formData,
				stackTrace: e.stack
			};
			console.error(notValidData.errorMessage, notValidData.data, notValidData.stackTrace);
			return {date: false};
			
		}
	};
	const validateRequired = (formData, requiredFields) => {
		const emptyFields = requiredFields.filter(
			(field) => formData[field].trim().length == 0
		);
		const hasAllRequiredFields = emptyFields.length == 0;
		if(hasAllRequiredFields) {
			const newValidState = Object.fromEntries(
				requiredFields.map(
					(field) => [field, true]
				));
			return newValidState;
		} else {
			const newFailureState = Object.fromEntries(
				requiredFields.map(
					(field) => [field, false]
				)
			);
			return newFailureState;
		}
	};
	const addJournalItem = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formProps = Object.fromEntries(formData);
		const validateDateResult = validateDate(formProps);
		const validateRequiredResult = validateRequired(formProps, /*requiredFields=*/['title', 'post']);
		setFormValidState((oldValue) => (
			{
				...oldValue, 
				...validateDateResult,...validateRequiredResult
			}));
		const validateOk = validateRequiredResult.title && validateRequiredResult.post && validateDateResult.date;
		if(validateOk) {
			onSubmit(formProps);
			form.reset();
		}
	};
	const invalidClass = styles.invalid;

	return (
		<>
			<form className={styles['journal-form']} onSubmit={addJournalItem}>
				<div>
					<input type="text" name="title" className={cn(styles['input-title'], {
						[invalidClass]: formValidState.title == false
					})}/>
				</div>
				<div className={styles['form-row']}>
					<label htmlFor="date" className={styles['form-label']}>
						<img src='/calendar.svg' alt='Иконка календаря'/>
						<span>Дата</span>
					</label>
					<input id="date" type="date" name="date" className={cn(styles['input-date'], {
						[invalidClass]: formValidState.date == false
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
					[invalidClass]: formValidState.post == false
				})}></textarea>

				<Button text="Сохранить" onClick={() => {console.log('Нажали');}}/>
			</form>
		</>
	);
}

export default JournalForm;
