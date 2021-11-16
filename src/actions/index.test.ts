import moxios from 'moxios';
import { getSecretWord, correctGuess, actionTypes } from './index';

// describe('correctGuess', () => {
//   it('returns an action with type `CORRECT_GUESS', () => {
//     const action = correctGuess();
//     expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });
    // secret word operations
    // Update to test app in Redux/ Context section
    return getSecretWord().then((secretWord: any) => {
      expect(secretWord).toBe('party');
    });
  });
});
