import React, { useState, useEffect } from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import Loader from './Loader';
import millify from 'millify';
import { useGetCryptostatsQuery } from '../services/cryptoApi';
const { Text } = Typography;
const { Header, Content } = Layout;
const Navbar = ({ collapsed, setCollapsed, screenSize }) => {
  const { data, isFetching } = useGetCryptostatsQuery();
  const [cryptoStats, setCryptoStats] = useState([]);
  const [showStats, setShowStats] = useState([]);

  useEffect(() => {
    if (screenSize <= 400) {
      setShowStats(false);
    } else {
      setShowStats(true);
    }
    setCryptoStats(data?.data);
  }, [cryptoStats, data, screenSize]);

  if (isFetching) return <Loader />;
  return (
    <Content style={{ maxHeight: '80px', overflow: 'hidden' }}>
      <Header
        style={{
          zIndex: '1',
          height: '80px',
          lineHeight: '80px',
          paddingLeft: '20px',
          paddingRight: '20px',
          background: '#fff',
          boxShadow: '0 1px 3px rgba(0, 0, 0, .2)',
        }}
      >
        <div style={{ float: 'left' }}>
          {collapsed ? (
            <MenuUnfoldOutlined
              onClick={setCollapsed}
              style={{ cursor: 'pointer', fontSize: '20px' }}
            />
          ) : (
            <MenuFoldOutlined
              onClick={setCollapsed}
              style={{ cursor: 'pointer', fontSize: '20px' }}
            />
          )}
        </div>
        <Row style={{ overflow: 'hidden', textAlign: 'center' }}>
          {showStats && (
            <>
              <span style={{ marginLeft: '10px' }}> </span>
              {showStats && (
                <Col>
                  <span style={{ padding: '3px', fontSize: '12px' }}>
                    <Text>
                      Total 24hr Volume:{' '}
                      {cryptoStats && cryptoStats.total24hVolume
                        ? '$' + millify(cryptoStats.total24hVolume)
                        : 'no data'}
                    </Text>
                    <Divider
                      type="vertical"
                      style={{
                        marginLeft: '8px',
                        backgroundSize: '10px',
                      }}
                    />
                    <Text>
                      Total Current Marketcap:{' '}
                      {cryptoStats && cryptoStats.totalMarketCap
                        ? '$' + millify(cryptoStats.totalMarketCap)
                        : 'no data'}
                    </Text>{' '}
                    <Divider
                      type="vertical"
                      style={{
                        marginLeft: '8px',
                        backgroundSize: '10px',
                      }}
                    />
                    <Text>
                      {' '}
                      Total Current Markets:{' '}
                      {cryptoStats && cryptoStats.totalMarkets
                        ? cryptoStats.totalMarkets
                        : 'no data'}
                    </Text>{' '}
                    <Divider
                      type="vertical"
                      style={{
                        marginLeft: '8px',
                        backgroundSize: '10px',
                      }}
                    />
                    <Text>
                      {' '}
                      Total Current Exchanges:{' '}
                      {cryptoStats && cryptoStats.totalExchanges
                        ? cryptoStats.totalExchanges
                        : 'no data'}
                    </Text>{' '}
                    <Divider
                      type="vertical"
                      style={{
                        marginLeft: '8px',
                        backgroundSize: '10px',
                      }}
                    />
                    <Text>
                      {' '}
                      Total Current Coins Number:{' '}
                      {cryptoStats && cryptoStats.totalCoins
                        ? cryptoStats.totalCoins
                        : 'no data'}
                    </Text>
                  </span>
                </Col>
              )}
            </>
          )}
        </Row>
      </Header>
    </Content>
  );
};

export default Navbar;
