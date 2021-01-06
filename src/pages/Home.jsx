import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/middleware/user';

import Background from '../components/Background';

import '../styles/components/Home.scss';

export default function Home() {
	const dispatch = useDispatch();
	const isLogged = useSelector(state => state.user.isLogged);
	const message = useSelector(state =>  state.user.message);
	
	useEffect(() => {
		dispatch(signIn({
			quota: '335',
			group: '1',
			password: '123456',
		}));
	},[dispatch]);
	

	console.log(isLogged)
	console.log(message)
	return (
		<Background>
			
			<div className='home'>
				<form className='home__login'>
					<nav className='container'>
					<h1>Login</h1>
					<input 
						type='text'
						placeholder='Grupo'
						required
					/>
					<input 
						type='text'
						placeholder='Cota'
						required
					/>
					<input 
						type='password'
						placeholder='Senha'
						required
					/>
					<a href='/'>Esqueceu a senha?</a>
					<div className='home__login--button-control'>
					<button>Acessar</button>
					</div>
					
					</nav>
					
				</form>

			</div>
		</Background>
	);
}
