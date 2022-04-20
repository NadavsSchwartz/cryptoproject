import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Routes from './Routes';
import { hydrate, render } from 'react-dom';
import Page from 'components/Page';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const APP = (
  <BrowserRouter>
    <Provider store={store}>
      <Suspense
        fallback={
          <CircularProgress
            sx={{
              margin: 'auto',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              position: 'fixed',
            }}
          />
        }
      >
        <Page>
          <Routes />
        </Page>
      </Suspense>
    </Provider>
  </BrowserRouter>
);
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
