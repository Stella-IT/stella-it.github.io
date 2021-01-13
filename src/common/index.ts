import axios from 'axios';

const server = 'https://meiling.stella-api.dev';
const tokenItemName = 'meiling-v1-token';

export async function getMeilingSessionToken(): Promise<string> {
  let token = localStorage.getItem(tokenItemName);
  
  const data = (await axios.get(`${server}/v1/meiling/session`, {
    headers: (token === null || token === undefined) ? undefined : {
      'Authorization': `Bearer ${token}`,
    }
  })).data;

  if (data.success) {
    if (data.token !== null && data.token !== undefined) {
      token = data.token as string;
    }

    if (token) {
      localStorage.setItem(tokenItemName, token);
      return token;
    } else {
      localStorage.removeItem(tokenItemName);
      return await getMeilingSessionToken();
    }

  } else {
    localStorage.removeItem(tokenItemName);
    return await getMeilingSessionToken();
  }
}

export async function loginIsUsernameAvailable(username: string) {
  const token = await getMeilingSessionToken();

  const data = (await axios.post(`${server}/v1/meiling/signin`,
    {
      type: "username_check",
      data: {
        username,
      }
    }, 
    {
      headers: (token === null || token === undefined) ? undefined : {
        'Authorization': `Bearer ${token}`,
    },
  })).data;

  return data;
}

export async function loginWithUsernameAndPassword(username: string, password: string) {
  const token = await getMeilingSessionToken();

  const data = (await axios.post(`${server}/v1/meiling/signin`,
    {
      type: "username_and_password",
      data: {
        username,
        password,
      }
    }, 
    {
      headers: (token === null || token === undefined) ? undefined : {
        'Authorization': `Bearer ${token}`,
    },
  })).data;

  return data;
}