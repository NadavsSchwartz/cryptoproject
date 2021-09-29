import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState();
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		setCryptos(cryptosList?.data?.coins);

		const filteredData = cryptosList?.data?.coins.filter((item) =>
			item.name.toLowerCase().includes(searchTerm)
		);

		setCryptos(filteredData);
	}, [cryptosList, searchTerm]);

	if (isFetching) return <Loader />;

	return (
		<>
			{!simplified && (
				<div className='search-crypto'>
					<Input
						placeholder='Search Cryptocurrency'
						onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
					/>
				</div>
			)}

			<Card>
				{cryptos?.map((currency) => (
					<Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
						<Card.Grid
							style={{ width: '20%', textAlign: 'center', height: '200px' }}
							hoverable
						>
							<span style={{ marginRight: '5px' }}>
								<img
									src={currency.iconUrl}
									style={{ height: '30px', width: '30px' }}
									alt='crypto'
								/>
							</span>
							{currency.name} | ${millify(currency.price)}
							<p>Market Cap: {millify(currency.marketCap)}</p>
							<p>Daily Change: {currency.change}%</p>
						</Card.Grid>
					</Link>
				))}
			</Card>
		</>
	);
};

export default Cryptocurrencies;
