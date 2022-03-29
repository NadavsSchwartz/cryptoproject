import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Navbar, Sidebar } from './components';
import './App.css';
import { Content } from 'antd/lib/layout/layout';
import Footer from './components/Footer';
import Router from './routes/index';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 600) {
      setCollapsed(true);
    }
  }, [screenSize]);
  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100%',
        minWidth: collapsed ? '250px' : '470px',
      }}
    >
      <Sidebar {...{ collapsed }} />
      <Layout>
        <Navbar
          {...{ collapsed, setCollapsed: handleToggleSidebar, screenSize }}
        />
        <Content
          style={{
            padding: 12,
            marginTop: '20px',
            minHeight: 280,
          }}
        >
          <Layout>
            <Router />
          </Layout>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
