import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Applications/ClickCounter/Counter';
import Congrats from './Applications/Joto/Congrats/Congrats';
import GuessedWords from './Applications/Joto/GuessedWords/GuessedWords';

interface Props {}

const App = (props: Props) => {
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
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
