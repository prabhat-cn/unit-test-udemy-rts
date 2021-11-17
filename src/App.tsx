import React, { useEffect } from 'react';

import './App.css';
import Counter from './Applications/ClickCounter/Counter';
import Congrats from './Applications/Joto/Congrats/Congrats';
import GuessedWords from './Applications/Joto/GuessedWords/GuessedWords';
import Input from './Applications/Joto/InputComponent/Input';
import { getSecretWord } from './actions';
import Todo from './Applications/Todo/Todo';
import { useTypedSelector } from './reducers/typeHelper';
import { useDispatch } from 'react-redux';

interface Props {}

const App = (props: Props) => {
  const dispatch = useDispatch();
  const success = useTypedSelector((state) => state.success);
  const guessedWords = useTypedSelector((state) => state.guessedWords);
  const secretWord = useTypedSelector((state) => state.secretWord);

  // get props from shared state
  // const success = false;
  // const secretWord = 'party';
  // because the guessedSWords file is data format is below
  // const guessedWords = [{ guessedWord: '', letterMatchCount: 0 }];

  useEffect(() => {
    // getSecretWord();
    // after using redux
    dispatch(getSecretWord());
  }, []);
  return (
    <div className=" container App" data-test="component-app">
      <h1>Unit Testing React Typescript</h1>
      <br />
      <h2>Created Applications Below</h2>
      <br />
      <Counter />
      <br />
      <br />
      <h2>--Joto Guess Game--</h2>

      <Congrats success={false} />
      <Input success={success} secretWord={secretWord} />
      <br />
      <div>
        The secret word is
        {secretWord.length === 0 ? (
          <strong style={{ color: 'red' }}>Undefined</strong>
        ) : (
          <strong style={{ color: 'green' }}> {secretWord}</strong>
        )}
      </div>

      {/* <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      /> */}
      <GuessedWords guessedWords={guessedWords} />
      {/* <Todo /> */}
    </div>
  );
};

export default App;
