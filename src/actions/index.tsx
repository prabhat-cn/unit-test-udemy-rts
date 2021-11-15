import React from 'react';
import axios from 'axios';

interface Props {}

export const getSecretWord = () => {
  // Write actual action in Redux / Context sections
  return axios.get(`http://localhost:3030`).then((response) => {
    // console.log(response);

    return response.data;
  });
};
