// https://developer.aigen.online/
const API_KEY = 'AGxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

function request(url, params = {}, method = 'GET') {
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-aigen-key': API_KEY,
    },
  };

  if ('GET' === method) {
    url += '?' + new URLSearchParams(params).toString();
  } else {
    options.body = JSON.stringify(params);
  }

  const result = fetch(url, options).then((response) => response.json());

  return result;
}

const getData = (url, params) => request(url, params, 'GET');
const postData = (url, params) => request(url, params, 'POST');
