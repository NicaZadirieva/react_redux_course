import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import styles from './index.module.css';

function Login() {
	const submit = (e: FormEvent) => {
		e.preventDefault();
		console.log(e);
	};
	return (
		<div className={styles['login']}>
			<Heading>Вход</Heading>
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