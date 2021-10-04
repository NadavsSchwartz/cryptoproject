import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
require('dotenv').config();

const cryptoApiHeaders = {
	'content-type': 'application/json',
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/crypto_data',
	}),
	endpoints: (builder) => ({
		getCryptostats: builder.query({
			query: () => createRequest(`/stats`),
		}),
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins/${count}`),
		}),
		getExchanges: builder.query({
			query: () => createRequest('/exchanges'),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin_details/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				createRequest(`coin/${coinId}/history/${timeperiod}`),
		}),
	}),
});

export const {
	useGetCryptostatsQuery,
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
