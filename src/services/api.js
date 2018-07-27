export function get(model) {
  return fetch(`https://api.infinum.academy/api/${model}`)
    .then((response) => response.json())
    .then((response) => response.data || response)
    .catch((err) => err);
}

export function post(model, data) {
  return fetch(`https://api.infinum.academy/api/${model}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => response.data || response)
    .catch((err) => err);

}

export function userPost(model, token ,data) {
  return fetch(`https://api.infinum.academy/api/${model}`, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
}