import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/middleware/user';

import Background from '../components/Background';
import Alert from '../components/Alert';
import useForm from '../hooks';

import '../styles/pages/Home.scss';

export default function Home() {
	const dispatch = useDispatch();
	const alert = useSelector(state => state.user.alert);
	const message = useSelector(state =>  state.user.message);
	
	const initialValues = {
		group: '',
		quota: '',
		password: '',
	}

	const { handleChange, values, clearForm } = useForm(initialValues);
	
	async function handleSubmit(event) {
		event.preventDefault();
		await dispatch(signIn(values));
		clearForm();
	}


	console.log(alert)
	return (
		<Background>
			{alert && <Alert message={message}/>}
			<div className='home'>
				<form className='home__login' onSubmit={handleSubmit}>
					<nav className='container'>
					<h1>Login</h1>
					<input 
						type='text'
						name='group'
						placeholder='Grupo'
						required
						value={values.group}
						onChange={handleChange}
					/>
					<input 
						type='text'
						name='quota'
						placeholder='Cota'
						required
						value={values.quota}
						onChange={handleChange}
					/>
					<input 
						type='password'
						name='password'
						placeholder='Senha'
						required
						value={values.password}
						onChange={handleChange}
					/>
					<a href='/'>Esqueceu a senha?</a>
					
					<div className='home__login--button-control'>
						<button type='submit'>
							Acessar
						</button>
					</div>
					
					</nav>
					
				</form>

			</div>
		</Background>
	);
}
