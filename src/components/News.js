import React, { useState } from 'react';
import {
	Select,
	Typography,
	Row,
	Col,
	Avatar,
	Card,
	Layout,
	Skeleton,
} from 'antd';
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
		count: simplified ? 8 : 12,
	});
	const { Meta } = Card;
	const [loading, SetLoading] = useState(false);

	if (!cryptoNews?.value) return <Loader />;

	return (
		<Layout>
			<Content>
				<Row style={{ textAlign: 'center' }}>
					{!simplified && (
						<Content>
							<div>
								<Title level={3}>Top Cryptocurrency News</Title>
								<p>
									This section provides Cryptocurrency News imported from Bing
									news API through{' '}
									<a
										href='https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/'
										target='_blank'
										rel='noreferrer'
									>
										RapidAPI
									</a>
									.
								</p>
							</div>
							<Col style={{ padding: '20px' }}>
								<Select
									showSearch
									allowClear
									placeholder='Select a Crypto'
									optionFilterProp='children'
									onChange={(value) => {
										SetLoading(true);
										setTimeout(function () {
											setNewsCategory(value);
											SetLoading(false);
										}, 1000);
									}}
									filterOption={(input, option) =>
										option.children
											.toLowerCase()
											.indexOf(input.toLowerCase()) >= 0
									}
									style={{ width: '250px' }}
								>
									<Option value='Cryptocurency'>All Cryptocurrency</Option>
									{data?.data?.coins?.map((currency) => (
										<Option value={currency.name}>{currency.name}</Option>
									))}
								</Select>
							</Col>
						</Content>
					)}
				</Row>
				<Row gutter={[10, 10]}>
					{cryptoNews.value.map((news, i) => (
						<Col
							key={i}
							xs={24}
							sm={12}
							md={12}
							lg={8}
							xl={6}
							loading={loading}
						>
							<Skeleton loading={loading} active>
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
												news.description.length > 100
													? `${news.description.substring(0, 100)}...`
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
							</Skeleton>
						</Col>
					))}
				</Row>
			</Content>
		</Layout>
	);
};

export default News;
