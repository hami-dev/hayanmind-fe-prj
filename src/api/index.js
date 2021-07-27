import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getComment = async (page, limit) => {
	const { data } = await httpClient.get('comments', {
		params: {
			_page: page,
			_limit: limit
		}
	});

	return data;
}