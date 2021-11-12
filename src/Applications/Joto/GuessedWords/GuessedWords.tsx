import React from 'react';

interface Props {
  // guessedWords: [];
  guessedWord: string;
  letterMatchCount: number;
}

interface combineProps {
  guessedWords: Props[];
}

const GuessedWords = (props: combineProps) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word: Props, index) => (
      <tr data-test="guessed-word" key={index}>
        {/* Challenge #1: Number of Guesses */}
        <td data-test="guessed-word-index">{index + 1}</td>
        {/* END: Challenge #1: Number of Guesses */}
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              {/* Challenge #1: Number of Guesses */}
              <th>#</th>
              {/* Challenge #1: Number of Guesses */}
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;
