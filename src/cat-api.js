// cat-api.js
const API_KEY = 'live_TKxPA0ridpiNzCeFQnUquJtYRwhoDmiY5MiLIy5APquAz52ZDJYwE5cxlF7SKa6D'; //
export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
