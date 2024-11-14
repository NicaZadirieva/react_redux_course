import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import { appDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
import styles from './index.module.css';
export type LoginForm = {
    email: {
        value: string;
    },
    password: {
        value: string;
    }

}
function Login() {
	const navigate = useNavigate();
	const { jwt, loginErrorMsg} = useSelector((s: RootState) => s.user);
	const dispatch = useDispatch<appDispatch>();

	useEffect(() => {
		if (jwt) { 
			navigate('/');
		}
	}, [jwt, navigate]);

	const submit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & LoginForm;
		const {email, password} = target;
		sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {   
		dispatch(login({email, password}));
	};

	return (
		<div className={styles['login']}>
			<Heading>Вход</Heading>
			{loginErrorMsg && <div className={styles['error']}>{loginErrorMsg}</div>}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor='email'>Ваш email</label>
					<Input type='email' id='email' placeholder='email' name='email' required />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>Ваш пароль</label>
					<Input type='password' id='password' placeholder='пароль' name='password' required />
				</div>
				<Button appearance='big'>
                    Вход
				</Button>
				
			</form>
			
			<div className={styles['links']}>
				<div>Нет аккаунта?</div>
				<Link to='/auth/register'>Зарегистрироваться</Link>
			</div>
		</div>
	);
}

export default Login;