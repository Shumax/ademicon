/* eslint-disable no-unused-vars */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
	userAuthorized: ['user'],
	userUnauthorized: '',
});

const initialState = {
	user: {},
	isLogged: false,
	message: '',
};

const login = (state = initialState, action) => ({
	...state,
	user: action.user,
	isLogged: true,
});

const error = (state = initialState, action) => ({
	...state,
	isLogged: false,
	message: action
});

export const handlers = {
	[Types.USER_AUTHORIZED]: login,
	[Types.USER_UNAUTHORIZED]: error,
}

export default createReducer(initialState, handlers);