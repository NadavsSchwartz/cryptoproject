import React from 'react';
import { Layout, Badge, Popover, Empty } from 'antd';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import {
	PoweroffOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	BellFilled,
	BugFilled,
	GithubOutlined,
	FullscreenExitOutlined,
	FullscreenOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const Navbar = ({ collapsed, setCollapsed }) => {
	return (
		<Header
			style={{
				zIndex: '1',
				height: '60px',
				lineHeight: '60px',
				paddingLeft: '20px',
				paddingRight: '20px',
				background: '#fff',
				boxShadow: '0 1px 3px rgba(0, 0, 0, .2)',
			}}
		>
			<div style={{ float: 'left' }}>
				{collapsed ? (
					<MenuUnfoldOutlined
						onClick={setCollapsed}
						style={{ cursor: 'pointer', fontSize: '20px' }}
					/>
				) : (
					<MenuFoldOutlined
						onClick={setCollapsed}
						style={{ cursor: 'pointer', fontSize: '20px' }}
					/>
				)}
			</div>
			{/* <ul className='right'>
				<li onClick={handleFullscreen}>
					{isFullscreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
				</li>
				<li>
					<a href={config.github.bug} target='_blank' rel='noopener noreferrer'>
						<BugFilled />
					</a>
				</li>
				<li>
					<a
						href={config.github.repositoryUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						<GithubOutlined />
					</a>
				</li>
			</ul> */}
		</Header>
	);
};

export default Navbar;
