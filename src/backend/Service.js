const axios = require('axios');

const baseUrl = 'https://example.com/path';
const queryParam = 'query with spaces';
const encodedQueryParam = encodeURIComponent(queryParam);
const encodedUrl = `${baseUrl}?query=${encodedQueryParam}`;
console.log(encodedUrl); 


const apiUrl = `${encodedUrl}`;

axios.get(apiUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
