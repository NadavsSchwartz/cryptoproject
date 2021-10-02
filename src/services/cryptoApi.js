import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
require('dotenv').config();

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com/',
	'x-rapidapi-key': 'b00b36ccb8msh742d2851ab5e32cp178798jsne7633fa8bb90',
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://cors-anywhere.herokuapp.com/https://coinranking1.p.rapidapi.com',
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
				createRequest(`coin/${coinId}/history/${timeperiod}`),
		}),
		getLatestNfts: builder.query({
			query: () =>
				createRequest(
					`nfts?orderBy=auctionCreatedAt&orderDirection=desc&limit=10`
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
