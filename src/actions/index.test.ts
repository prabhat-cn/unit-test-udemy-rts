import moxios from 'moxios';
import { getSecretWord } from './index';

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
