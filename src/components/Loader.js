import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
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
  );
};

export default Loader;
