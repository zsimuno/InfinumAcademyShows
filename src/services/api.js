export function get(model) {
  return fetch(`https://api.infinum.academy/api/${model}`)
    .then((response) => response.json())
    .then((response) => response.data || response)
    .catch((err) => err);
}

export function post(model, token, data) {
  return fetch(`https://api.infinum.academy/api/${model}`, {
    method: 'POST',
    headers: {
      'Authorization': token || undefined,
      'Content-Type': (model === 'media') ? 'multipart/form-data' : 'application/json',
    },
    body: (model === 'media') ? data : JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => response.data || response)
    .catch((err) => err);
}