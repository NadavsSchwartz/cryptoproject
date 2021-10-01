import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Layout } from 'antd';
import { Link } from 'react-router-dom';
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	GithubOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider } = Layout;
const Sidebar = ({ collapsed, setCollapsed }) => {
	return (
		<>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				width={190}
				style={{ userSelect: 'none', backgroundColor: '#304156' }}
			>
				<div
					style={{
						overflow: 'hidden',
						height: '64px',
						lineHeight: '64px',
						backgroundColor: '#304156',
						color: '#fff',
						fontSize: '20px',
						fontWeight: 600,
						textAlign: 'center',
					}}
				>
					<Link style={{ color: 'white' }} to='/'>
						Crypto
					</Link>
				</div>
				<Menu
					theme='dark'
					style={{
						boxShadow: 'none',
						backgroundColor: '#304156',
					}}
				>
					<Menu.Item icon={<FundOutlined />} key='cryptocurrencies'>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />} key='exchanges'>
						<Link to='/exchanges'>Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />} key='news'>
						<Link to='/news'>News</Link>
					</Menu.Item>
					<Menu.Item icon={<GithubOutlined />} key='github'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/NadavsSchwartz/cryptoproject'
						>
							My Github
						</a>
					</Menu.Item>
				</Menu>
			</Sider>
		</>
	);
};

export default Sidebar;
