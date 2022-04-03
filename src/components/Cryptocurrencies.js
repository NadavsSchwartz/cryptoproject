import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Content } from 'antd/lib/layout/layout';
import StatsCard from './StatsCard';

const { Search } = Input;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm),
    );
    SetLoading(true);
    setTimeout(function () {
      setCryptos(filteredData);
      SetLoading(false);
    }, 1000);
  }, [cryptosList, searchTerm]);
  const { Title } = Typography;
  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <>
          <div style={{ marginTop: '20px' }}>
            <Title level={3}>All Cryptocurrencies </Title>
            <p>
              This section provides data on Crypto coins, search or click on a
              coin for in-depth details.
            </p>
          </div>
          <div>
            <Search
              allowClear
              placeholder="Search for a coin ticker or name"
              enterButton="Search"
              size="large"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              onSearch={(e) => setSearchTerm(e.toLowerCase())}
            />
          </div>
        </>
      )}

      <Row gutter={[5, 5]} style={{ marginTop: '20px' }}>
        {cryptos && cryptos.length > 0 ? (
          cryptos.map((currency) => (
            <Col xs={12} md={6} lg={6} xl={3} key={currency.uuid}>
              <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <StatsCard
                  loading={loading}
                  coin={currency}
                  type="cryptoPage"
                />
              </Link>
            </Col>
          ))
        ) : (
          <Content>No results.</Content>
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
