export function get(model) {
  return fetch(`https://api.infinum.academy/api/${model}`)
    .then((response) => response.json())
    .then((response) => response.data);
}

export function post(model, data) {
  fetch(`https://api.infinum.academy/api/${model}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((response) => response.data);

}
