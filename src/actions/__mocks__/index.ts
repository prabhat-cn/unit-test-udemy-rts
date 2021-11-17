export default module.exports = {
  ...jest.requireActual('..'),
  // import statement
  __esModule: true,
  // update return value for Redux/ Context implementation
  // getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
  getSecretWord: jest.fn().mockReturnValue({ type: 'mock' }),
};
