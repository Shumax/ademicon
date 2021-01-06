import { Creators as UserCreator } from '../ducks/products';

import api from '../../services/api';

const {
	fetchUser,
} = UserCreator;

export const signIn = () => (dispatch) => {
	api.login()
		.then(
			(response) => {
				dispatch(fetchUser(response));
			},
		);
};