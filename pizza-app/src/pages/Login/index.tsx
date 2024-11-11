import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import { PREFIX } from '../../helpers/API';
import { LoginResponse } from '../../interfaces/auth.interface';
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
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();


	const submit = (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const {email, password} = target;
		console.log(email.value, password.value);
		sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {   
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password
			});
        	localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch(e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}

		}

	};

	return (
		<div className={styles['login']}>
			<Heading>Вход</Heading>
			{error && <div className={styles['error']}>{error}</div>}
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