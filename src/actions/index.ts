import React from 'react';
import { getLetterMatchCount } from '../Applications/Joto/Helper/index';
import axios from 'axios';

interface PropsAction {
  success: boolean;
  secretWord: string;
}

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const guessWord = (guessedWord: any) => {
  return function (dispatch: any, getState: any) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

//  Redux Thunk USED

export const getSecretWord: any = () => {
  // Redux thunk
  return function (dispatch: any) {
    // Write actual action in Redux / Context sections
    return axios.get('/word').then((response) => {
      // console.log('data', response);
      // return response.data;
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data,
      });
    });
  };
};
