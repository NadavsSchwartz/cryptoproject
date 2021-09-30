import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Layout } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';

const demoImage =
	'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
	const { data } = useGetCryptosQuery(100);
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	});
	const { Meta } = Card;

	if (!cryptoNews?.value) return <Loader />;

	return (
		<Layout>
			<Content>
				<Row gutter={[10, 10]}>
					{!simplified && (
						<Col>
							<Select
								showSearch
								placeholder='Select a Crypto'
								optionFilterProp='children'
								onChange={(value) => setNewsCategory(value)}
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >=
									0
								}
							>
								<Option value='Cryptocurency'>Cryptocurrency</Option>
								{data?.data?.coins?.map((currency) => (
									<Option value={currency.name}>{currency.name}</Option>
								))}
							</Select>
						</Col>
					)}
					<Row gutter={[10, 10]}>
						{cryptoNews.value.map((news, i) => (
							<Col key={i} xs={18} sm={18} md={12} lg={12} xl={8}>
								<Card hoverable title={news.name} style={{ height: '100%' }}>
									<a href={news.url} target='_blank' rel='noreferrer'>
										<Meta
											avatar={
												<img
													src={news?.image?.thumbnail?.contentUrl || demoImage}
													alt=''
												/>
											}
											description={
												news.description.length > 150
													? `${news.description.substring(0, 150)}...`
													: news.description
											}
										/>
										<div className='provider-container'>
											<div>
												<Avatar
													src={
														news.provider[0]?.image?.thumbnail?.contentUrl ||
														demoImage
													}
													alt=''
												/>
												<Text className='provider-name'>
													{news.provider[0]?.name}
												</Text>
											</div>
											<Text>
												{moment(news.datePublished).startOf('ss').fromNow()}
											</Text>
										</div>
									</a>
								</Card>
							</Col>
						))}
					</Row>
				</Row>
			</Content>
		</Layout>
	);
};

export default News;
