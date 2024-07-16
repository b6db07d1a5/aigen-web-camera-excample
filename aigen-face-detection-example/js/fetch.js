function request(url, params = {}, method = 'GET') {
  let options = {
    method,
  }

  if ('GET' === method) {
    url += '?' + new URLSearchParams(params).toString()
  } else {
    options.headers = {
      'Content-Type': 'application/json',
    }

    options.body = JSON.stringify(params)
  }

  const result = fetch(url, options).then((response) => response.json())

  return result
}

const getData = (url, params) => request(url, params, 'GET')
const postData = (url, params) => request(url, params, 'POST')
