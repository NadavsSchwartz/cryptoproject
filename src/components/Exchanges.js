import React from 'react';
import millify from 'millify';
import { Typography, Layout, Table, Skeleton } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';

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
      responsive: ['sm'],
      render: (data) => (
        <div style={{ textAlign: 'center' }}>
          {' '}
          {data ? '%' + millify(data) : 'No Market Share Data received'}
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
    <Layout style={{ overflow: 'hidden' }}>
      <Content>
        <div style={{ marginTop: '20px' }}>
          <Title level={3}>Top Cryptocurrency Exchanges</Title>
          <p>
            Ranks, market share and trade volume is based on tradings in the
            last 24 hours.
          </p>
        </div>
        <Table
          showSorterTooltip
          bordered
          loading={isFetching}
          scroll={{ x: 'max-content' }}
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
