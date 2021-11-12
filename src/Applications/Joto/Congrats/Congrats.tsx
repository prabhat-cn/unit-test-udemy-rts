import React from 'react';

// const Congrats = ({ success }) => {

interface Props {
  success?: boolean;
}

const Congrats: React.FC<Props> = (props: Props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrats;
