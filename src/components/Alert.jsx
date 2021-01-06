/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux';

import { closeAlert } from '../store/middleware/user';
import '../styles/components/Alert.scss';

export default function Alert(props) {
	
	const dispatch = useDispatch();
	return (
		<div className='alert'>
			<div className='alert__text'>
				<h1>{props.message}</h1>
				<button onClick={() => {dispatch(closeAlert())}}>
					Ok!
				</button>
			</div>
		</div>
	);
}