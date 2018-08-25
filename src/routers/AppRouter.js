import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import SignInForm from '../components/signin-form';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Header} />
				<Route path="/signin" component={SignInForm} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
