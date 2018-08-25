import axios from 'axios';

// Sample post to the server that allows for CORS.
export const POSTUSER = 'POST_USER';
export const POST_USER = (username, password) => {
	const request = axios({
		method: 'post',
		url: '/register',
		data: {
			username: username,
			password: password
		}
	});
	return {
		type: POSTUSER,
		payload: request
	};
};
