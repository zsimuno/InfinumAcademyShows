export function get(model) {
  return fetch(`https://api.infinum.academy/api/${model}`)
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => console.log(err));
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
    .then((response) => response.data)
    .catch((err) => console.log(err));

}