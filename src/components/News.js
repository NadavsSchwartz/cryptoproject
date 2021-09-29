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

	if (!cryptoNews?.value) return <Loader />;

	return (
		<Layout>
			<Content style={{ padding: '20px' }}>
				<Row gutter={[24, 24]}>
					{!simplified && (
						<Col span={18}>
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
					{cryptoNews.value.map((news, i) => (
						<Col key={i}>
							<Card hoverable style={{ width: '400px', height: '300px' }}>
								<a href={news.url} target='_blank' rel='noreferrer'>
									<div className='news-image-container'>
										<Title className='news-title' level={4}>
											{news.name}
										</Title>
										<img
											src={news?.image?.thumbnail?.contentUrl || demoImage}
											alt=''
										/>
									</div>
									<p>
										{news.description.length > 100
											? `${news.description.substring(0, 100)}...`
											: news.description}
									</p>
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
			</Content>
		</Layout>
	);
};

export default News;
