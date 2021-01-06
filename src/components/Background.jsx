import React from 'react';

import banner from '../images/family.jpg';
import logo from '../images/logo-removebg-preview.png';

import '../styles/components/Background.scss';

export default function Background() {
	return (
		<div className='background'>
			<img className='background__banner' alt='Banner Family' src={banner}/>

			<footer className='background__footer'>
				<img className='background__logo' alt='Logo' src={logo} />
			</footer>
		
		</div>
	);
}