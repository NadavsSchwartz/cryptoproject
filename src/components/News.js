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
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    articleCount: simplified ? 8 : 12,
  });
  const { Meta } = Card;

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Layout>
      <Content>
        <Row style={{ textAlign: 'center' }}>
          {!simplified && (
            <Content>
              <div>
                <Title level={3}>Top Cryptocurrency News</Title>
                <p>This section provides Cryptocurrency News.</p>
              </div>
              <Col style={{ paddingBottom: '20px' }}>
                <Select
                  showSearch
                  allowClear
                  placeholder="Select a Crypto"
                  optionFilterProp="children"
                  onChange={(value) => {
                    setTimeout(function () {
                      setNewsCategory(value);
                    }, 1000);
                  }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  style={{ width: '250px' }}
                >
                  <Option value="Cryptocurency">All Cryptocurrency</Option>
                  {data?.data?.coins?.map((currency) => (
                    <Option value={currency.name}>{currency.name}</Option>
                  ))}
                </Select>
              </Col>
            </Content>
          )}
        </Row>
        <Row gutter={[10, 10]} justify="center">
          {cryptoNews.value.map((news, i) => (
            <Col key={i} xs={24} sm={20} md={12} lg={8} xl={6} xxl={4}>
              <Skeleton loading={isFetching} active>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <Card
                    hoverable
                    title={news.name}
                    style={{ height: '100%' }}
                    cover={
                      <img
                        src={news?.image?.thumbnail?.contentUrl || demoImage}
                        alt="thumbnail"
                        style={{ maxHeight: '300px' }}
                      />
                    }
                    actions={[
                      <Text>
                        {moment(news.datePublished).startOf('ss').fromNow()}
                      </Text>,
                      <Avatar
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        alt="Content icon"
                      ></Avatar>,
                    ]}
                  >
                    <Meta
                      description={
                        news.description.length > 110
                          ? `${news.description.substring(0, 110)}...`
                          : news.description
                      }
                      style={{ height: '100%' }}
                    />
                  </Card>
                </a>
              </Skeleton>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default News;
