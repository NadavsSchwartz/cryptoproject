import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
require('dotenv').config();

const nftApiHeaders = {
	'content-Type': 'application/json',
};

const createRequest = (url) => ({ url, headers: nftApiHeaders });

export const nftApi = createApi({
	reducerPath: 'nftApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/crypto_data/',
	}),
	endpoints: (builder) => ({
		getLatestNfts: builder.query({
			query: () => createRequest(`/nfts`),
		}),
	}),
});

export const { useGetLatestNftsQuery } = nftApi;
