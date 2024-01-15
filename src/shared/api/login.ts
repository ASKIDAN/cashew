type RequestLogin = (payload: {
  email: string,
  password: string,
}) => Promise<{ token: string }>

export const requestLogin:RequestLogin = (payload) => {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(`${response.status} ${data.error}`);
  });
};
