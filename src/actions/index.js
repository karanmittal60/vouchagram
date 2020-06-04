export const SEND_QUERY = 'SEND_QUERY';

export const sendQuery = data => ({
  type: SEND_QUERY,
  payload: data,
});
