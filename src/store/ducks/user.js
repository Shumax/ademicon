/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	fetchUser: ['user'],
	
});

const initialState = {
	user: {},
	isLogged: false,
	message: '',
};

const login = (state = initialState, action) => ({
	...state,
	user: action.products,
	isLogged: true,
});


export const handlers = {
	[Types.FETCH_USER]: login,
}

export default createReducer(initialState, handlers);