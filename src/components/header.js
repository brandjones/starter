import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { POST_USER } from '../actions/action-user';

import Nametag from '../components/nametag';

class Header extends React.Component {
	render() {
		return (
			<div className="ui container">
				{this.props.user.username && <Nametag props={this.props} />}
				<h1> React Application </h1>

				<Link className="ui small purple button" to="/signin">
					{' '}
					Sign In{' '}
				</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Header);
