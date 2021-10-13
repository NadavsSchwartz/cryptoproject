import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Typography, Row, Col, Input, Skeleton } from 'antd';
import {
	ArrowUpOutlined,
	ArrowDownOutlined,
	AudioOutlined,
} from '@ant-design/icons';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';

const { Search } = Input;

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 12 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState();
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, SetLoading] = useState(false);

	useEffect(() => {
		setCryptos(cryptosList?.data?.coins);

		const filteredData = cryptosList?.data?.coins.filter((item) =>
			item.name.toLowerCase().includes(searchTerm)
		);
		SetLoading(true);
		setTimeout(function () {
			setCryptos(filteredData);
			SetLoading(false);
		}, 1000);
	}, [cryptosList, searchTerm]);
	const { Title } = Typography;
	if (isFetching) return <Loader />;

	return (
		<>
			{!simplified && (
				<>
					<div style={{ marginTop: '20px' }}>
						<Title level={3}>All Cryptocurrency </Title>
						<p>
							This section provides Cryptocurrency data imported from{' '}
							<a
								href='https://coinranking.com/'
								target='_blank'
								rel='noreferrer'
							>
								Coin Ranking
							</a>
							.
						</p>
					</div>
					<div>
						<Search
							allowClear
							placeholder='input search text'
							enterButton='Search'
							size='large'
							onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
							onSearch={(e) => setSearchTerm(e.toLowerCase())}
						/>
					</div>
				</>
			)}

			<Row gutter={[10, 10]} style={{ marginTop: '20px' }}>
				{cryptos && cryptos.length > 0 ? (
					cryptos.map((currency) => (
						<Col xs={12} sm={8} md={6} lg={6} xl={3} bordered>
							<Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
								<Skeleton loading={loading} active>
									<Card
										bordered
										size='small'
										title={`${currency.name}`}
										extra={
											<img
												src={currency.iconUrl}
												style={{ height: '30px', width: '30px' }}
												alt='crypto'
											/>
										}
										style={{ height: '100%' }}
									>
										{' '}
										<div align='center'>
											Market Cap: {millify(currency.marketCap)}
										</div>
										<div align='center'>
											Daily Change:
											<br />{' '}
											{currency.change > 0 ? (
												<ArrowUpOutlined style={{ color: '#3f8600' }} />
											) : (
												<ArrowDownOutlined style={{ color: '#cf1322' }} />
											)}
											{currency.change}%
										</div>
										<div align='center'>
											Price: $
											{currency.price > 1
												? millify(currency.price)
												: millify(currency.price, {
														precision: 8,
												  })}
										</div>
									</Card>
								</Skeleton>
							</Link>
						</Col>
					))
				) : (
					<Content>No results.</Content>
				)}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
