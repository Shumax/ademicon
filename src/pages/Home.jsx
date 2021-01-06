import React from 'react';
import { useSelector } from 'react-redux';

import Background from '../components/Background';

import '../styles/components/Home.scss';

export default function Home() {
	//const dispatch = useDispatch();
	const isLogged = useSelector(state => state.user.isLogged);
	console.log(isLogged)
	return (
		<Background>
			<div className='home'>
				<p> Está Logado</p>
			</div>
		</Background>
	);
}
