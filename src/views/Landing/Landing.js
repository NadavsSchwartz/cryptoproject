import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// import Container from 'components/Container';
import Container from 'components/Container';
import { Articles } from './components';
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Sidebar, Topbar } from 'layouts/components';
const Landing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

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
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            colorInvert={trigger ? false : true}
          />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <main>
        <Box
          position={'relative'}
          sx={{
            backgroundColor:
              theme.palette.mode === 'light'
                ? theme.palette.primary.contrastText
                : theme.palette.alternate.main,
          }}
        >
          {' '}
          <Container>
            <Articles />
          </Container>
        </Box>
      </main>
    </Box>
  );
};

export default Landing;
