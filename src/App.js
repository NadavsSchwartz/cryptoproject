import React, { useEffect, useState, useRef } from 'react';
import { Layout } from 'antd';
import { Navbar, Sidebar } from './components';
import './App.css';
import { Content } from 'antd/lib/layout/layout';
import Footer from './components/Footer';
import alanBtn from '@alan-ai/alan-sdk-web';
import Router from './routes/index';

const App = () => {
  const alanBtnContainer = useRef();
  const [collapsed, setCollapsed] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  useEffect(() => {
    alanBtn({
      key: '9a97f2d734b2401703b2e81114d7d4262e956eca572e1d8b807a3e2338fdd0dc/stage',
      rootEl: alanBtnContainer.current,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('this is a test command');
        }
      },
    });
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
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar {...{ collapsed }} />
      <Layout>
        <Navbar
          {...{ collapsed, setCollapsed: handleToggleSidebar, screenSize }}
        />
        <Content
          style={{
            padding: 24,
            marginTop: '20px',
            minHeight: 280,
          }}
        >
          <Layout>
            <Router />
          </Layout>
        </Content>
        <div ref={alanBtnContainer}></div>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
