import React, { useEffect, useRef } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Content } from 'antd/lib/layout/layout';
const AlanAi = () => {
	useEffect(() => {
		alanBtn({
			key: '9a97f2d734b2401703b2e81114d7d4262e956eca572e1d8b807a3e2338fdd0dc/stage',
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
