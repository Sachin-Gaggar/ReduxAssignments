import {Get_Data, Update_Data, Delete_Data, Add_Data} from './constants';

export const getDataFunction = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const result = await response.json();

  dispatch({
    type: Get_Data,
    data: result,
  });
};
export const addDataFunction = (title, body) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log('error is', error));
};
export const updateDataFunction = (id, title, body) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      title,
      body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};
export const deleteDataFunction = (id) => async (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'DELETE',
  })
    .then(() => console.log('Successfull'))
    .catch((error) => console.log(error));
};
