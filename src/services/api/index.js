const url = 'http://localhost:8080'

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
				console.log(response)
        if (response.ok) {
          const resp = await response.json();
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