import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
	'Content-Type': 'application/json',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://crypto-currency-backend.herokuapp.com/api/v1/',
	}),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, dayCount }) =>
				createRequest(`/news/${newsCategory}/${dayCount}`),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
