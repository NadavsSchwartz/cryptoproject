import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { ThemeModeToggler } from './components';

const Topbar = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="CryptoApp"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light'
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: 'flex' }} alignItems={'center'}>
        <Box>
          <Button component={Link} to="/faq">
            <Typography fontWeight={700} color="text.primary">
              {'FAQ'}
            </Typography>
          </Button>
        </Box>
        <Box>
          <Button component={Link} to="/privacy">
            <Typography fontWeight={700} color="text.primary">
              {'Privacy'}
            </Typography>
          </Button>
        </Box>
        <Box>
          <ThemeModeToggler />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
            size="large"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
