import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// import Container from 'components/Container';
import Container from 'components/Container';
import { Articles, Features, Hero } from './components';
import AppBar from '@mui/material/AppBar';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Topbar } from 'layouts/components';
const Landing = () => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });
  return (
    <Box>
      <Box
        bgcolor={'#fff'}
        position={'relative'}
        zIndex={theme.zIndex.appBar}
      ></Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger
            ? theme.palette.background.paper
            : 'transparent',
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar colorInvert={trigger ? false : true} />
        </Container>
      </AppBar>

      <main>
        <Box
          position={'relative'}
          sx={{
            backgroundColor:
              theme.palette.mode === 'light'
                ? theme.palette.primary.dark
                : theme.palette.alternate.main,
          }}
        >
          <Container>
            <Hero />
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1921 273"
            sx={{
              position: 'absolute',
              width: '100%',
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
              height: '35%',
            }}
          >
            <polygon
              fill={theme.palette.background.paper}
              points="0,273 1921,273 1921,0 "
            />
          </Box>
        </Box>
        <Container>
          <Features />
        </Container>
        <Container>
          <Articles />
        </Container>
      </main>
    </Box>
  );
};

export default Landing;
