import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '13e2a29aed9f0226aba2a38fa096c989';

export const getTrending = async () => {
  const { data } = await axios.get(
    `${URL}trending/movie/day?api_key=${KEY}&language=en-US`
  );
  return data.results;
};

export async function getSearchQuery(query) {
  const { data } = await axios.get(
    `${URL}/search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
}

export async function getDetails(id) {
  const { data } = await axios.get(
    `${URL}movie/${id}?api_key=${KEY}&language=en-US`
  );
  return data;
}

export async function geCast(id) {
  const { data } = await axios.get(
    `${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data.cast;
}

export async function getReview(id) {
  const { data } = await axios.get(
    `${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data.result;
}
