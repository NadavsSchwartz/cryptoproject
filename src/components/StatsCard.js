import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Skeleton } from 'antd';
import millify from 'millify';
import React from 'react';
import { Typography } from 'antd';
const { Link } = Typography;
const StatsCard = ({ coin, type, loading }) => {
  return (
    <Skeleton loading={loading} active>
      <Card
        bordered
        size="small"
        title={`${coin.name} (${coin.symbol})`}
        extra={
          <img
            src={coin.iconUrl}
            style={{ height: '30px', width: '30px' }}
            alt="coin's icon"
          />
        }
        style={{ height: '100%' }}
      >
        {type === 'quickStats' ? (
          <div align="center">
            <Link href={coin.coinrankingUrl} target="_blank">
              More details
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 20 22"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </div>
        ) : (
          <>
            <div align="center">Market Cap: {millify(coin.marketCap)}</div>
            <div align="center">
              Daily Change:
              <br />{' '}
              {coin.change > 0 ? (
                <ArrowUpOutlined style={{ color: '#3f8600' }} />
              ) : (
                <ArrowDownOutlined style={{ color: '#cf1322' }} />
              )}
              {coin.change}%
            </div>
            <div align="center">
              Price: $
              {coin.price > 1
                ? millify(coin.price)
                : millify(coin.price, {
                    precision: 8,
                  })}
            </div>
          </>
        )}
      </Card>
    </Skeleton>
  );
};

export default StatsCard;
