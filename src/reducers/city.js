import { SET_SELECTED_CITY } from "./../actions/index";

export const city = (state = {}, action) => {
	switch (action.type) {
		case SET_SELECTED_CITY:
			return { ...state, city: action.payload };
		default:
			return state;
	}
};
