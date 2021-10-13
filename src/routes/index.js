import React from 'react';
import { Switch, Route } from 'react-router';
import {
	Cryptocurrencies,
	CryptoDetails,
	Exchanges,
	Homepage,
	News,
} from '../components';
import NoMatch from '../components/NoMatch';

const Router = () => {
	const routes = [
		{ path: '/', name: 'Homepage', Component: Homepage },
		{ path: '/exchanges', name: 'Exchanges', Component: Exchanges },
		{
			path: '/cryptocurrencies',
			name: 'Cryptocurrencies',
			Component: Cryptocurrencies,
		},
		{
			path: '/crypto/:coinId',
			name: 'CryptoDetails',
			Component: CryptoDetails,
		},
		{
			path: '/news',
			name: 'News',
			Component: News,
		},
		{
			path: '*',
			name: 'No Match',
			Component: NoMatch,
		},
	];
	return (
		<Switch>
			{routes.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					<Component />
				</Route>
			))}
		</Switch>
	);
};

export default Router;
