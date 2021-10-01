import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
require('dotenv').config();

const cryptoApiHeaders = {
	'x-access-token':
		'coinrankingb11dd5d6079f60e918417565de273e895b2fda51e7b353bd',
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2',
	}),
	endpoints: (builder) => ({
		getCryptostats: builder.query({
			query: () => createRequest(`/stats`),
		}),
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getExchanges: builder.query({
			query: () =>
				createRequest('/exchanges?orderBy=24hVolume&orderDirection=desc'),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
		}),
		getLatestNfts: builder.query({
			query: () =>
				createRequest(
					`nfts?orderBy=auctionCreatedAt&orderDirection=desc&limit=8`
				),
		}),
	}),
});

export const {
	useGetCryptostatsQuery,
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
	useGetLatestNftsQuery,
} = cryptoApi;
