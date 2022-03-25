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

  const exchangesList = data?.data;

  if (isFetching) return <Loader />;

  const columns = [
    {
      title: 'Coin Name',
      dataIndex: 'exchanges',
      key: 'exchanges',
      sorter: (a, b) => a.exchanges.length - b.exchanges.length,
      render: (data) => (
        <div>
          <Skeleton active loading={isFetching}></Skeleton>
          <span>{data}</span>
        </div>
      ),
    },

    {
      title: '24h Trade Volume',
      dataIndex: 'volumeUsd',
      key: 'volumeUsd',
      defaultSortOrder: 'descend',

      sorter: (a, b) =>
        a.volumeUsd && b.volumeUsd ? a.volumeUsd - b.volumeUsd : '',
      render: (data) => (
        <div style={{ textAlign: 'center' }}>
          {' '}
          {data ? '$' + millify(data) : 'No Trade Volume Data received'}
        </div>
      ),
    },
    {
      title: 'Market Share',
      dataIndex: 'percentTotalVolume',
      key: 'percentTotalVolume',
      render: (data) => (
        <div style={{ textAlign: 'center' }}>
          {' '}
          {data ? '$' + millify(data) : 'No Market Share Data received'}
        </div>
      ),

      sorter: (a, b) =>
        a.percentTotalVolume && b.percentTotalVolume
          ? a.percentTotalVolume - b.percentTotalVolume
          : '',
    },

    {
      title: 'No. Of Markets',
      key: 'tradingPairs',
      responsive: ['sm'],
      render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>,
      dataIndex: 'tradingPairs',
      sorter: (a, b) =>
        a.tradingPairs && b.tradingPairs ? a.tradingPairs - b.tradingPairs : '',
    },
    {
      title: "Coin's Website",
      dataIndex: 'exchangeUrl',
      key: 'exchangeUrl',
      responsive: ['md'],
      render: (data) => (
        <div style={{ textAlign: 'center' }}>
          {data ? (
            <a href={data[0]} alt="Exchange Url">
              {data[1]}
            </a>
          ) : (
            'No Website data received'
          )}
        </div>
      ),
    },

    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      responsive: ['md'],
      render: (data) => <div style={{ textAlign: 'center' }}>{data}</div>,
      sorter: (a, b) => (a.rank && b.rank ? a.rank - b.rank : ''),
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
              href="https://coincap.io/exchanges"
              target="_blank"
              rel="noreferrer"
            >
              Coincap
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
                  exchanges: exchange.name,
                  key: exchange.rank,
                  volumeUsd: exchange.volumeUsd,
                  percentTotalVolume: exchange.percentTotalVolume,
                  tradingPairs: exchange.tradingPairs,
                  exchangeUrl: [exchange.exchangeUrl, exchange.name],
                  rank: exchange.rank,
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
