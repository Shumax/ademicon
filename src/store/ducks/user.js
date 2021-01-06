/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	userAuthorized: ['user'],
	userUnauthorized: ['message'],
	handleClose: ['closeAlert'],
});

const initialState = {
	isLogged: false,
	message: '',
	alert: false,
};

const login = (state = initialState, action) => ({
	...state,
	isLogged: true,
	message: 'Usuário Logado!',
	alert: true,
});

const error = (state = initialState, action) => ({
	...state,
	isLogged: false,
	message: action.message,
	alert: true,
});

const close = (state = initialState, action) => ({
	...state,
	alert: false,
});

export const handlers = {
	[Types.USER_AUTHORIZED]: login,
	[Types.USER_UNAUTHORIZED]: error,
	[Types.HANDLE_CLOSE]: close,
}

export default createReducer(initialState, handlers);