import React from 'react';
import axios from 'axios';

interface Props {}

export const getSecretWord: any = () => {
  // Write actual action in Redux / Context sections
  return axios.get('/word').then((response) => {
    // console.log('data', response);

    return response.data;
  });
};
