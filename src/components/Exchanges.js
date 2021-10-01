import React from 'react';
import millify from 'millify';
import {
	Collapse,
	Row,
	Col,
	Typography,
	Avatar,
	Layout,
	Table,
	Tag,
	Space,
	Skeleton,
} from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
	const { data, isFetching } = useGetExchangesQuery();
	const exchangesList = data?.data?.exchanges;

	if (isFetching) return <Loader />;

	const columns = [
		{
			title: 'Coin Name',
			dataIndex: 'exchanges',
			key: 'exchanges',

			render: (data) => (
				<div>
					<span style={{ marginRight: '5px' }}>{data[2]}.</span>
					<Skeleton active loading={isFetching}>
						<Avatar
							src={data[0]}
							style={{ verticalAlign: 'middle', marginRight: '5px' }}
						/>
					</Skeleton>
					<span>{data[1]}</span>
				</div>
			),
		},

		{
			title: '24h Trade Volume',
			dataIndex: '24TradeVolume',
			key: '24TradeVolume',
			render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>,
			sorter: (a, b) => a['24TradeVolume'].localeCompare(b['24TradeVolume']),
		},
		{
			title: 'Market Share',
			dataIndex: 'marketShare',
			key: 'marketShare',
			render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>,

			sorter: (a, b) => a.marketShare.localeCompare(b.marketShare),
		},

		{
			title: 'No. Of Markets',
			key: 'numberOfMarkets',
			render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>,
			dataIndex: 'numberOfMarkets',
			sorter: (a, b) => a.numberOfMarkets - b.numberOfMarkets,
		},
		{
			title: 'Verified',
			dataIndex: 'verified',
			key: 'verified',
			responsive: ['md'],
			render: (data) => (
				<div style={{ textAlign: 'center' }}>
					{data ? (
						<CheckOutlined style={{ color: '#3f8600' }} />
					) : (
						<CloseOutlined style={{ color: '#cf1322' }} />
					)}
				</div>
			),
		},

		{
			title: 'Recommended',
			dataIndex: 'recommended',
			key: 'recommended',
			responsive: ['md'],
			render: (data) => (
				<div style={{ textAlign: 'center' }}>
					{data ? (
						<CheckOutlined style={{ color: '#3f8600' }} />
					) : (
						<CloseOutlined style={{ color: '#cf1322' }} />
					)}
				</div>
			),
		},
	];

	return (
		<Layout>
			<Content>
				<div style={{ marginTop: '20px' }}>
					<Title level={3}>Top Cryptocurrency Spot Exchanges</Title>
					<p>
						Crypto ranks and scores exchanges based on trading volumes in the
						last 24 hours, all data is provided by{' '}
						<a
							href='https://coinranking.com/exchanges'
							target='_blank'
							rel='noreferrer'
						>
							Coin Ranking
						</a>
						.
					</p>
				</div>
				<Table
					size='middle'
					bordered
					loading={isFetching}
					dataSource={
						!isFetching
							? exchangesList.map((exchange) => ({
									key: exchange.uuid,
									exchanges: [exchange.iconUrl, exchange.name, exchange.rank],
									['24TradeVolume']: millify(exchange['24hVolume']),
									markets: '$' + `${millify(exchange.numberOfMarkets)}`,
									marketShare: millify(exchange.marketShare) + '%',
									numberOfMarkets: exchange.numberOfMarkets,
									verified: exchange.verified,
									recommended: exchange.recommended,
							  }))
							: ''
					}
					columns={columns}
				/>
			</Content>
		</Layout>
	);
};

export default Exchanges;
