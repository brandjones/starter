import axios from 'axios';
import { POST_USER } from './types';

export const fetchuser = (username, password) => {
	const request = axios({
		method: 'post',
		url: '/register',
		data: {
			username: username,
			password: password
		}
	});
	return {
		type: POST_USER,
		payload: request
	};
};
