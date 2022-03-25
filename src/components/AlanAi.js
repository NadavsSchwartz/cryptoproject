import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
const AlanAi = () => {
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_API_KEY,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('this is a test command');
        }
      },
    });
  }, []);
  return <div></div>;
};

export default AlanAi;
