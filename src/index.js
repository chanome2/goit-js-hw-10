import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');

  try {
    // Show loader while fetching breeds
    loader.style.display = 'block';

    // Fetch and populate breed options
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    // Hide loader once breeds are fetched
    loader.style.display = 'none';
    breedSelect.style.display = 'block'; // Show breed select

    // Event listener for breed selection
    breedSelect.addEventListener('change', async (event) => {
      const breedId = event.target.value;
      loader.style.display = 'block'; // Show loader
      catInfo.innerHTML = ''; // Clear previous cat info

      try {
        // Fetch cat info by breed ID
        const [cat] = await fetchCatByBreed(breedId);
        const { url } = cat;

        // Display cat image
        const catImage = document.createElement('img');
        catImage.src = url;
        catInfo.appendChild(catImage);

        loader.style.display = 'none'; // Hide loader
        catInfo.style.display = 'block'; // Show cat info
        error.style.display = 'none'; // Hide error message
      } catch (error) {
        console.error('Failed to fetch cat information:', error);
        loader.style.display = 'none'; // Hide loader
        error.style.display = 'block'; // Show error message
      }
    });
  } catch (error) {
    console.error('Failed to fetch cat breeds:', error);
    loader.style.display = 'none'; // Hide loader
    error.style.display = 'block'; // Show error message
  }
});
