import axios from 'axios';

export const fetchGiphy = (offset, limit) => axios.get(
  `/v1/gifs/trending?api_key=IewdOiLquLDfNsrrDB3fnIV6TYBjIEgD&offset=${offset}&limit=${limit}`,
);
