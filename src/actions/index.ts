import React from 'react';
import axios from 'axios';

interface PropsAction {
  success: boolean;
  secretWord: string;
}

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const getSecretWord: any = () => {
  // Write actual action in Redux / Context sections
  return axios.get('/word').then((response) => {
    // console.log('data', response);

    return response.data;
  });
};
