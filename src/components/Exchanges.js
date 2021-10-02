import React from 'react';
import millify from 'millify';
import { Typography, Avatar, Layout, Table, Skeleton } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Exchanges = () => {
	const { data, isFetching } = useGetExchangesQuery();
	const exchangesList = data?.data?.exchanges;

	if (isFetching) return <Loader />;

	const columns = [
		{
			title: 'Coin Name',
			dataIndex: 'exchanges',
			key: 'exchanges',
			sorter: (a) => a.exchanges[0].localeCompare(a.exchanges[2]),
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

		// {
		// 	title: '24h Trade Volume',
		// 	dataIndex: '24TradeVolume',
		// 	key: '24TradeVolume',
		// 	defaultSortOrder: 'descend',
		// 	render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>,
		// 	sorter: (a, b) =>
		// 		millify(a['24TradeVolume']).localeCompare(millify(b['24TradeVolume'])),
		// },
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
			sorter: (a, b) => millify(a.numberOfMarkets) - millify(b.numberOfMarkets),
		},
		{
			title: 'Volume',
			dataIndex: 'volume',
			key: 'volume',
			responsive: ['md'],
			render: (data) => (
				<div style={{ textAlign: 'center' }}>{millify(data)}</div>
			),
		},

		{
			title: 'websiteUrl',
			dataIndex: 'websiteUrl',
			key: 'websiteUrl',
			responsive: ['md'],
			render: (data) => (
				<Link to={data[0]} style={{ textAlign: 'center', cursor: 'pointer' }}>
					{data[1]} official site
				</Link>
			),
		},
	];

	return (
		<Layout>
			<Content>
				<div style={{ marginTop: '20px' }}>
					<Title level={3}>Top Cryptocurrency Exchanges</Title>
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
					showSorterTooltip
					bordered
					loading={isFetching}
					dataSource={
						!isFetching
							? exchangesList.map((exchange) => ({
									key: exchange.uuid,
									exchanges: [exchange.iconUrl, exchange.name, exchange.rank],
									markets: '$' + `${millify(exchange.numberOfMarkets)}`,
									marketShare: millify(exchange.marketShare) + '%',
									numberOfMarkets: exchange.numberOfMarkets,
									volume: exchange.volume,
									websiteUrl: [exchange.websiteUrl, exchange.name],
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
