import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './Applications/ClickCounter/Counter';
import Congrats from './Applications/Joto/Congrats/Congrats';
import GuessedWords from './Applications/Joto/GuessedWords/GuessedWords';
import Input from './Applications/Joto/InputComponent/Input';
import { getSecretWord } from './actions';
import Todo from './Applications/Todo/Todo';
import { useTypedSelector } from './reducers/typeHelper';

interface Props {}

const App = (props: Props) => {
  const success = useTypedSelector((state) => state.success);
  const guessedWords = useTypedSelector((state) => state.guessedWords);

  // get props from shared state
  // const success = false;
  const secretWord = 'party';
  // because the guessedSWords file is data format is below
  // const guessedWords = [{ guessedWord: '', letterMatchCount: 0 }];

  useEffect(() => {
    getSecretWord();
  }, []);
  return (
    <div className=" container App" data-test="component-app">
      <h1>Unit Testing React Typescript</h1>
      <br />
      <h2>Created Applications Below</h2>
      <br />
      <Todo />
      <Counter />
      <br />
      <br />
      <h2>--Joto Guess Game--</h2>
      <Congrats success={false} />
      {/* <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      /> */}
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default App;
