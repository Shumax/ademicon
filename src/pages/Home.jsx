import React from 'react';

import Background from '../components/Background';

import '../styles/components/Home.scss';

export default function Home() {
	return (
		<Background>
			<div className='home'>
				<p> Está Logado</p>
			</div>
		</Background>
	);
}
