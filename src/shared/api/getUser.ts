import {User} from "@/shared";

type GetUser = (payload: {
  id: string,
}) => Promise<User>

export const getUser:GetUser = (payload) => {
  return fetch('https://reqres.in/api/users/' + payload.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return {
        id: data.data?.id,
        name: data.data?.email || data.data?.name || data.data?.first_name || JSON.stringify(data.data)
      };
    }
    throw new Error(`${response.status} ${data.error}`);
  });
};
