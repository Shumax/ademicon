const url = 'http://localhost:3000'

function login(user) {
  return fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(
      async (response) => {
        if (response.ok) {
          const resp = await response.status;
          return resp;
        }
        const resp = await response.status;
        return resp;
      },
    );
}

export default {
	login,
}