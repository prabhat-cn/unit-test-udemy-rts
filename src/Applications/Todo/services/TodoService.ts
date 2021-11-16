import React from 'react';
import axios from 'axios';

const API = `${process.env.REACT_APP_API}`;

export const getTodoData = () => {
  axios.get(API + `/todos`).then((response) => {
    // console.log('getTodoData', response);
    return response.data;
  });
};
