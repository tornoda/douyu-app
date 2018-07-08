export const REQUEST_BEGIN = 'REQUEST_BEGIN';
export const RECEIVED = 'RECEIVED';
export const RECEIVE_FAILED = 'RECEIVE_FAILED';

export const requestBegin = (condition) => ({
  type: `${REQUEST_BEGIN}${condition}`,
  condition
})

export const received = (data, condition) => ({
  type: `${RECEIVED}${condition}`,
  data,
  condition
})

export const receiveFailed = (err, condition) => ({
  type: `${RECEIVE_FAILED}${condition}`,
  err,
  condition
})