import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import {
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const Sidebar = ({ collapsed }) => {
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200}
        style={{ userSelect: 'none', backgroundColor: '#304156' }}
      >
        <div
          style={{
            height: '80px',
            lineHeight: '85px',
            backgroundColor: 'white',
            fontSize: '24px',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          <div>
            <Link to="/">
              <img
                src="/logo_transparent.png"
                alt="logo"
                width={90}
                height={90}
              />
            </Link>
          </div>
        </div>
        <Menu
          theme="dark"
          style={{
            boxShadow: 'none',
            backgroundColor: '#304156',
          }}
        >
          <Menu.Item icon={<FundOutlined />} key="cryptocurrencies">
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key="news">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
