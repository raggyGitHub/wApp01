import { SET_CITY } from './../actions';

export const city = (state = {}, action) => {
	switch (action.type) {
		case SET_CITY:
			return action.payload;
		//un reducer debe ser una funcion pura responde solo a los valores pasados por parametro,evitar sideefects
		default:
			return state;
	}
}