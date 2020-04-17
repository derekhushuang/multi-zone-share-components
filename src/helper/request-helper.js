import axios from 'axios';



export const fetch = options => {
  const { method = 'get', data, headers, uri, withCredentials = true } = options;
  const cloneData = data;

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(uri, {
        params: cloneData,
        headers,
        withCredentials: withCredentials,
      });
    case 'post':
      return axios.post(uri, cloneData, {
        headers: {
          ...headers,
          'content-type': headers && headers['content-type'] ? headers['content-type'] : 'application/json',
        },
        withCredentials: withCredentials,
      });
    case 'delete':
      return axios.delete(uri, {
        params: cloneData,
        headers: {
          ...headers,
          'content-type': headers && headers['content-type'] ? headers['content-type'] : 'application/json',
        },
        withCredentials: withCredentials,
      });
    case 'put':
      return axios.put(uri, {
        params: cloneData,
        headers: {
          ...headers,
          'content-type': headers && headers['content-type'] ? headers['content-type'] : 'application/json',
        },
        withCredentials: withCredentials,
      });
    default:
      return axios(options);
  }
};

