import { POSTUSER } from '../actions/action-user';

const userReducerDefaultState = [];
export default (state = userReducerDefaultState, action) => {
	switch (action.type) {
		case POSTUSER:
			console.log(state);
			console.log(action);
			return {
				...state,
				...action.payload.data
			};

		default:
			return [];
	}
};
