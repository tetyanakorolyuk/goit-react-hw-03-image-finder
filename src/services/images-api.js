const API_KEY = '24709969-56f23eaa776325f7f26981573';
const BASE_URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    })

function fetchImages(name, page) {
  return (
    fetch ( `${BASE_URL}?key=${API_KEY}&q=${name}&page=${page}&${searchParams}`)
    .then(response => {
      console.log(response);
      if (response.ok) {
      return response.json();
    }})
    .then(images => {
      console.log(images.hits);
      return images.hits;
    }));
}

const api = {
    fetchImages,
  };

export default api;
