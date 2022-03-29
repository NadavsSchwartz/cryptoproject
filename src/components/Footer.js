import { Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        alignSelf: 'center',
        padding: '15px 5px',
        fontSize: '12px',
        backgroundColor: '#304156',
        width: '100%',
      }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Space
          style={{
            fontSize: '15px',
          }}
        >
          <a href="/">Home</a>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      <Typography.Title
        level={5}
        style={{ color: 'white', textAlign: 'center' }}
      >
        Copyright &copy; 2020-{currentYear}
        <a href="/">CryptoApp.</a> <br />
      </Typography.Title>
    </footer>
  );
};

export default Footer;
