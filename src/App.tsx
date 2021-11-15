import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Applications/ClickCounter/Counter';
import Congrats from './Applications/Joto/Congrats/Congrats';
import GuessedWords from './Applications/Joto/GuessedWords/GuessedWords';
import Input from './Applications/Joto/InputComponent/Input';

interface Props {}

const App = (props: Props) => {
  // get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];
  return (
    <div className=" container App" data-test="component-app">
      <h1>Unit Testing React Typescript</h1>
      <br />
      <h2>Created Applications Below</h2>
      <Counter />
      <br />
      <br />
      <h2>--Joto Guess Game--</h2>
      <Congrats success={false} />
      {/* <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      /> */}
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
};

export default App;
