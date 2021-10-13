import React, { useState, useEffect } from 'react';
import millify from 'millify';
import {
	Typography,
	Row,
	Col,
	Layout,
	Card,
	Popover,
	Divider,
	Button,
} from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptostatsQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';
import {
	DoubleRightOutlined,
	InfoCircleOutlined,
	StockOutlined,
} from '@ant-design/icons';
import AlanAi from './AlanAi';

const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptostatsQuery();
	const [cryptoStats, setCryptoStats] = useState([]);
	useEffect(() => {
		setCryptoStats(data?.data);
	}, [cryptoStats, data]);
	if (isFetching) return <Loader />;
	const infoDataContent = [
		'Total number of coins that currently exists and recorded on CoinRanking API',
		'Total amount of markets used for price calculation on CoinRanking API',
		'Total amount of exchanges paired with Coinranking API',
		'Market capitalization. Price times circulating supply',
		'Total trade volume in 24 hours, calculated in the reference currency on CoinRanking API',
	];
	return (
		<Layout>
			<Content align='center'>
				{/* <AlanAi /> */}
				<Content align='center'>
					<div style={{ marginTop: '20px' }}>
						<Title level={3}>Cryptocurrency Quick Stats </Title>
						<p>
							This section provides quick data facts about Cryptocurrency, using{' '}
							<a
								href='https://coinranking.com/'
								target='_blank'
								rel='noreferrer'
							>
								Coin Ranking API
							</a>
							.
						</p>
					</div>
					<Row gutter={[10, 10]} align='center'>
						{cryptoStats &&
							Object.entries(cryptoStats)?.map(([key, value], index) => (
								<Col xs={24} sm={12} md={8} lg={6} xl={4} bordered key={key}>
									<Card
										extra={
											<Popover
												content={infoDataContent[index]}
												title={key.toLocaleUpperCase()}
											>
												<InfoCircleOutlined />
											</Popover>
										}
										bordered
										title={key}
										style={{ height: '100%', width: '100%' }}
									>
										{index === 3 || index === 4
											? `$${millify(value)}`
											: millify(value)}
									</Card>
								</Col>
							))}
					</Row>
				</Content>
				<Content style={{ marginTop: '50px' }}>
					<Divider />
					<Title level={3}>Top Cryptos In The World</Title>
					<Cryptocurrencies simplified />{' '}
					<Title level={3} style={{ marginTop: '50px' }}>
						<Link to='/cryptocurrencies'>
							<Button type='primary' size='large' shape='round'>
								{' '}
								Discover more coins
								<DoubleRightOutlined />
							</Button>
						</Link>
					</Title>
				</Content>
				<Content style={{ marginTop: '50px' }}>
					<Divider />
					<Title level={2} style={{ marginTop: '50px' }}>
						Latest Crypto News
					</Title>
				</Content>
				<News simplified />
				<Title level={3} style={{ marginTop: '50px' }}>
					<Link to='/news'>
						<Button type='primary' size='large' shape='round'>
							Discover more news
							<DoubleRightOutlined />
						</Button>
					</Link>
				</Title>
			</Content>
		</Layout>
	);
};

export default Homepage;
