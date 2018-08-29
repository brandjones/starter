import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchuser } from '../actions/action-user';

class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		const state = {
			username: '',
			password: ''
		};

		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onUsernameChange(e) {
		e.preventDefault();
		const username = e.target.value;
		console.log(username);

		this.setState(() => {
			return {
				username: username
			};
		});
	}

	onPasswordChange(e) {
		e.preventDefault();
		const password = e.target.value;
		console.log(password);
		this.setState(() => {
			return {
				password: password
			};
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log(this.props);

		this.setState(() => {
			return {
				username: this.state.username,
				password: this.state.password
			};
		});

		this.props.dispatch(
			fetchuser(this.state.username, this.state.password)
		);
		this.props.history.push('/');
	}
	render() {
		return (
			<form className="ui form container" onSubmit={this.onFormSubmit}>
				<div className="field">
					<label>Username </label>
					<input
						type="text"
						name="username"
						onChange={this.onUsernameChange}
					/>
				</div>
				<div className="field">
					<label>Password</label>
					<input
						type="password"
						name="password"
						onChange={this.onPasswordChange}
					/>
				</div>
				<button className="ui large teal button" type="submit">
					Sign In
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(SignInForm);
