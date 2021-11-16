import React from 'react';
import axios from 'axios';

const API = `${process.env.REACT_APP_API}`;

export const getTodoData = async () => {
  try {
    const allDataTodo = await axios.get(API + `/todos`);
    return allDataTodo;
  } catch {
    console.log('error');
  }
};
