import React, { useState, useEffect } from 'react';
import { Typography, Row, Layout, Divider, Button, Col } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptostatsQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';
import { DoubleRightOutlined } from '@ant-design/icons';
import StatsCard from './StatsCard';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptostatsQuery();
  const [cryptoStats, setCryptoStats] = useState([]);
  useEffect(() => {
    setCryptoStats(data?.data);
  }, [cryptoStats, data]);
  if (isFetching) return <Loader />;
  return (
    <Layout>
      <Content align="center">
        <div style={{ marginTop: '20px' }}>
          <Title level={3}>Newest coins on the market </Title>
        </div>
        <Row gutter={[5, 5]} align="center">
          {cryptoStats &&
            cryptoStats.bestCoins.map((coin) => (
              <Col xs={12} md={6} key={coin.uuid} style={{ minWidth: '250px' }}>
                <StatsCard loading={isFetching} coin={coin} type="quickStats" />
              </Col>
            ))}
        </Row>

        <div style={{ marginTop: '20px' }}>
          <Title level={3}>Upcoming coins worth checking </Title>
        </div>
        <Row gutter={[5, 5]} align="center">
          {cryptoStats &&
            cryptoStats.newestCoins.map((coin) => (
              <Col style={{ minWidth: '250px' }} xs={12} md={6} key={coin.uuid}>
                <StatsCard loading={isFetching} coin={coin} type="quickStats" />
              </Col>
            ))}
        </Row>

        <Content style={{ marginTop: '50px' }}>
          <Divider />
          <Title level={3}>Top Cryptos In The World</Title>
          <Cryptocurrencies simplified />{' '}
          <Title level={3} style={{ marginTop: '50px' }}>
            <Link to="/cryptocurrencies">
              <Button type="primary" size="large" shape="round">
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
          <Link to="/news">
            <Button type="primary" size="large" shape="round">
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
