import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import userReducer from '../reducers/reducer-user';

export default () => {
	const store = createStore(
		combineReducers({
			user: userReducer
		}),
		{},
		applyMiddleware(ReduxPromise)
	);

	return store;
};
