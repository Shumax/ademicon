import { Creators as UserCreator } from '../ducks/user';

import api from '../../services/api';

const {
	userAuthorized,
	userUnauthorized,
} = UserCreator;

export const signIn = (values) => (dispatch) => {
	api.login(values)
		.then(
			(response) => {
				console.log(response)
				if (response === 302) {
					dispatch(userAuthorized(response));	
				} else if(response === 403){
					dispatch(userUnauthorized('Grupo ou Senha incorreta!'));
				} else if(response === 404){
					dispatch(userUnauthorized('Usuário não existe!'));
				}
				
			},
		);
};