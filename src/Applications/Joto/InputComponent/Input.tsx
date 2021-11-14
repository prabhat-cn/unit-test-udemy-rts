import React from 'react';
// import { useSelector } from 'react-redux';

interface Props {
  success: boolean;
}

const Input: React.FC<Props> = ({ success }) => {
  // by mock "React.useState"
  const [currentGuess, setCurrentGuess] = React.useState('');
  // const { success } = useSelector((state) => state.success);
  // for testing
  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-online">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="test"
          placeholder="Enter guess.."
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(evt) => {
            evt.preventDefault();
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;