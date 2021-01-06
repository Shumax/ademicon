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
				<p>{message}</p>
			</div>
		</Background>
	);
}
