import { POST_USER } from '../actions/types';

const userReducerDefaultState = {};
export default (state = userReducerDefaultState, action) => {
	switch (action.type) {
		case POST_USER:
			console.log(state);
			console.log(action);

		default:
			return [];
	}
};
