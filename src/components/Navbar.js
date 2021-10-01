import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar, Layout } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header } = Layout;
const Navbar = () => {
	return (
		<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			<div
				style={{
					float: 'left',
					width: '120px',
					height: '30px',
					margin: '9px 16px 26px 16px',
				}}
			>
				<Typography.Title level={2}>
					<Link style={{ color: 'white' }} to='/'>
						Crypto
					</Link>
				</Typography.Title>
			</div>

			<Menu theme='dark' mode='horizontal' style={{ float: 'right' }}>
				<SubMenu
					icon={
						<AppstoreOutlined
							style={{ fontSize: '20px', paddingTop: '10px' }}
						/>
					}
				>
					<Menu.Item icon={<FundOutlined />}>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />}>
						<Link to='/exchanges'>Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />}>
						<Link to='/news'>News</Link>
					</Menu.Item>
				</SubMenu>
			</Menu>
		</Header>
	);
};

export default Navbar;
