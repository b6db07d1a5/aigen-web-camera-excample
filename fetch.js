let cache = {}

function request(url, params = {}, method = 'GET') {
  let cacheKey = JSON.stringify({ url, params, method })
  if (cache[cacheKey]) {
    return cache[cacheKey]
  }

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
  cache[cacheKey] = result

  return result
}

const getData = (url, params) => request(url, params, 'GET')
const postData = (url, params) => request(url, params, 'POST')
