/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	userAuthorized: ['user'],
	userUnauthorized: ['message'],
});

const initialState = {
	isLogged: false,
	message: '',
};

const login = (state = initialState, action) => ({
	...state,
	isLogged: true,
	message: 'Usuário Logado!'
});

const error = (state = initialState, action) => ({
	...state,
	isLogged: false,
	message: action.message
});

export const handlers = {
	[Types.USER_AUTHORIZED]: login,
	[Types.USER_UNAUTHORIZED]: error,
}

export default createReducer(initialState, handlers);