import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import { appDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';
import styles from './index.module.css';
export type RegisterForm = {
    name: {
        value: string;
    },
    email: {
        value: string;
    },
    password: {
        value: string;
    }
}
function Register() {
	const navigate = useNavigate();
	const { jwt, registerErrorMsg} = useSelector((s: RootState) => s.user);
	const dispatch = useDispatch<appDispatch>();

	useEffect(() => {
		if (jwt) { 
			navigate('/');
		}
	}, [jwt, navigate]);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & RegisterForm;
		const {email, password, name} = target;
		dispatch(register({email: email.value, password: password.value, name: name.value}));
	};

	

	return (
		<div className={styles['login']}>
			<Heading>Регистрация</Heading>
			{registerErrorMsg && <div className={styles['error']}>{registerErrorMsg}</div>}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input type='email' id='email' placeholder='email' name='email' required />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input type='password' id='password' placeholder='пароль' name='password' required />
				</div>
				<div className={styles['field']}>
					<label htmlFor='name'>Ваше имя</label>
					<Input type='text' id='name' placeholder='Имя' name='name' required />
				</div>
				<Button appearance='big'>
                    Зарегистрироваться
				</Button>
				
			</form>
			
			<div className={styles['links']}>
				<div>Есть аккаунт?</div>
				<Link to='/auth/login'>Войти</Link>
			</div>
		</div>
	);
}

export default Register;