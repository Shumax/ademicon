import { Creators as UserCreator } from '../ducks/products';

import api from '../../services/api';

const {
	userAuthorized,
	userUnauthorized,
} = UserCreator;

export const signIn = (values) => (dispatch) => {
	api.login({ values })
		.then(
			(response) => {
				if (response === 302) {
					dispatch(userAuthorized(response));	
				} else {
					dispatch(userUnauthorized({
						payload: response.message,
					}));
				}
				
			},
		);
};