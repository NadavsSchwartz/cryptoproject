import React from 'react';
import millify from 'millify';
import {
	Typography,
	Row,
	Col,
	Statistic,
	Layout,
	Card,
	Popover,
	Button,
} from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptostatsQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Homepage = () => {
	const { data, isFetching } = useGetCryptostatsQuery();

	const globalStats = data?.data;
	if (isFetching) return <Loader />;

	return (
		<Layout>
			<Content align='center'>
				<Row gutter={[10, 10]} align='center'>
					<Col xs={12} sm={12} md={8} lg={6} xl={4.5} bordered>
						<Card
							bordered
							title='Total Coins'
							style={{ height: '100%', width: '100%' }}
							extra={
								<Popover content={'asd'} title='Title'>
									<InfoCircleOutlined />
								</Popover>
							}
						>
							{globalStats.totalCoins}
						</Card>
					</Col>
					<Col xs={12} sm={12} md={8} lg={6} xl={4.5} bordered>
						<Card
							bordered
							title='Total Exchanges'
							style={{ height: '100%', width: '100%' }}
							extra={
								<Popover content={'asd'} title='Title'>
									<InfoCircleOutlined />
								</Popover>
							}
						>
							{millify(globalStats.totalExchanges)}
						</Card>{' '}
					</Col>
					<Col xs={12} sm={12} md={8} lg={6} xl={4.5} bordered>
						<Card
							bordered
							title='Market Cap'
							style={{ height: '100%', width: '100%' }}
							extra={
								<Popover content={'asd'} title='Title'>
									<InfoCircleOutlined />
								</Popover>
							}
						>
							{`$${millify(globalStats.totalMarketCap)}`}
						</Card>{' '}
					</Col>
					<Col xs={12} sm={12} md={8} lg={6} xl={4.5} bordered>
						<Card
							bordered
							title='Total Markets'
							style={{ height: '100%', width: '100%' }}
							extra={
								<Popover content={'asd'} title='Title'>
									<InfoCircleOutlined />
								</Popover>
							}
						>
							{millify(globalStats.totalMarkets)}
						</Card>{' '}
					</Col>
					<Col xs={12} sm={12} md={8} lg={6} xl={4.5} bordered>
						<Card
							bordered
							title='24h Volume'
							style={{ height: '100%', width: '100%' }}
							extra={
								<Popover content={'asd'} title='Title'>
									<InfoCircleOutlined />
								</Popover>
							}
						>
							{`$${millify(globalStats.total24hVolume)}`}
						</Card>
					</Col>
				</Row>

				<Content>
					<Title level={3}>Top 10 Cryptos In The World</Title>
					<Title level={3}>
						<Link to='/cryptocurrencies'>Show more</Link>
					</Title>
				</Content>
				<Content>
					<Cryptocurrencies simplified />
					<>
						<Title level={2}>Latest Crypto News</Title>
						<Title level={3}>
							<Link to='/news'>Show more</Link>
						</Title>
					</>
					<News simplified />
				</Content>
			</Content>
		</Layout>
	);
};

export default Homepage;
