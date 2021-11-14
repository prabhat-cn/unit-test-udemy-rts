/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (
  guessedWord: string,
  secretWord: string
) => {
  // split('')-> gives one letter from "secretWord"
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
};
