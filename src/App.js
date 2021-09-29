import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
	Exchanges,
	Homepage,
	News,
	Cryptocurrencies,
	CryptoDetails,
	Navbar,
} from './components';
import './App.css';
import { Content } from 'antd/lib/layout/layout';

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
];
const App = () => (
	<Layout style={{ minHeight: '100vh' }}>
		<Navbar />
		<Layout>
			<Content
				style={{
					padding: 24,
					marginTop: '50px',
					minHeight: 280,
					height: '100%',
				}}
			>
				<Layout>
					<Switch>
						{routes.map(({ path, Component }) => (
							<Route key={path} exact path={path}>
								<Component />
							</Route>
						))}
					</Switch>
				</Layout>
			</Content>
			<div className='footer'>
				<Typography.Title
					level={5}
					style={{ color: 'white', textAlign: 'center' }}
				>
					Copyright © 2021
					<Link to='/'>Cryptoverse Inc.</Link> <br />
					All Rights Reserved.
				</Typography.Title>
				<Space>
					<Link to='/'>Home</Link>
					<Link to='/exchanges'>Exchanges</Link>
					<Link to='/news'>News</Link>
				</Space>
			</div>
		</Layout>
	</Layout>
);

export default App;
