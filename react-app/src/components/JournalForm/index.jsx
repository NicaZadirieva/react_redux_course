import cn from 'classnames';
import { useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import { UserContext } from '../../context';
import Button from '../Button';
import Input from '../Input';
import { Utils } from '../shared/utils';
import { formReducer, INITIAL_STATE } from './reducers/JournalForm.state';
import styles from './styles/index.module.css';
function JournalForm({onSubmit, data}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState; 
	const { userId } = useContext(UserContext);
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		default:
			titleRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;
		if(!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({type: 'RESET_VALIDITY'});
			}, 2000);
		} 
		// unmount // 
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	const formChangeByValue = useCallback((event) => {
		dispatchForm({type: 'SET_VALUE', payload: {[event.target.name]: event.target.value}});
	}, []);
	
	
	
	const addJournalItem = useCallback((e) => {
		e.preventDefault();
		dispatchForm({type: 'SUBMIT'});
		
	}, []);

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({type: 'CLEAR'});
			dispatchForm({ type: 'SET_VALUE', payload: { userId }});
		}
	}, [isFormReadyToSubmit, values, onSubmit, userId]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { userId }});
	}, [ userId ]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { ...data }});
	}, [data]);

	const invalidClass = styles.invalid;

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div>
				<Input isValid={isValid.title} appearance='title' type="text" value={values.title} onChange={formChangeByValue} name="title" ref={titleRef} />
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря'/>
					<span>Дата</span>
				</label>
				<Input isValid={isValid.date} id="date" ref={dateRef} value={values.date ? Utils.parseDateString(values.date) : ''} onChange={formChangeByValue}  type="date" name="date"/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки'/>
					<span>Метки</span>
				</label>
				<Input type='text' value={values.tag} id='tag' name="tag" onChange={formChangeByValue}/>
			</div>
				
			<textarea name="post" ref={postRef} onChange={formChangeByValue}  value={values.post} cols="30" rows="10" className={cn(styles.post, {
				[invalidClass]: isValid.post == false
			})}></textarea>

			<Button>Сохранить</Button>
		</form>
	);
}

export default JournalForm;
