import React, { useState, useEffect } from 'react';
import { Layout, Space, Typography, Divider, Row, Col } from 'antd';

import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	GithubOutlined,
} from '@ant-design/icons';
import { useGetLatestNftsQuery } from '../services/cryptoApi';
import Loader from './Loader';
import millify from 'millify';
const { Header, Content } = Layout;
const Navbar = ({ collapsed, setCollapsed }) => {
	const { data, isFetching } = useGetLatestNftsQuery();
	const [latestNft, setLatestNft] = useState([]);
	const [screenSize, setScreenSize] = useState(undefined);
	const [showNfts, setShowNfts] = useState(true);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		setLatestNft(data?.data?.nfts);
		if (screenSize <= 600) {
			setShowNfts(false);
		} else {
			setShowNfts(true);
		}
	}, [data, screenSize]);

	if (isFetching) return <Loader />;
	return (
		<Content style={{ maxHeight: '70px', overflow: 'hidden' }}>
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
				<Row style={{ overflow: 'hidden', textAlign: 'center' }}>
					{showNfts && (
						<>
							<span style={{ marginLeft: '10px' }}>Latest NFTs</span>
							{latestNft?.map((nft) => (
								<Col>
									<Divider type='vertical' style={{ marginLeft: '5px' }} />
									<span style={{ padding: '3px', fontSize: '12px' }}>
										<Typography.Link href={nft.coinrankingUrl} target='_blank'>
											{nft.dappName}
										</Typography.Link>{' '}
										Sold For: ${millify(nft.priceInDollar)} At:
										{new Date(nft.auctionCreatedAt * 1000).toLocaleTimeString()}
									</span>
								</Col>
							))}
						</>
					)}
				</Row>
			</Header>
		</Content>
	);
};

export default Navbar;
