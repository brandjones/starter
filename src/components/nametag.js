import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nametag = props => (
	<button className="ui orange button">
		{' '}
		{props.props.user.username} {''}{' '}
	</button>
);

export default Nametag;
