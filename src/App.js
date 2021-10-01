import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
	Exchanges,
	Homepage,
	News,
	Cryptocurrencies,
	CryptoDetails,
	Navbar,
	Sidebar,
} from './components';
import './App.css';
import { Content } from 'antd/lib/layout/layout';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
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
const App = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [screenSize, setScreenSize] = useState(undefined);
	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 600) {
			setCollapsed(true);
		}
	}, [screenSize]);
	const handleToggleSidebar = () => {
		setCollapsed(!collapsed);
	};
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sidebar {...{ collapsed }} />
			<Layout>
				<Navbar
					{...{ collapsed, setCollapsed: handleToggleSidebar, screenSize }}
				/>
				<Content
					style={{
						padding: 24,
						marginTop: '20px',
						minHeight: 280,
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
				<Footer />
			</Layout>
		</Layout>
	);
};

export default App;
