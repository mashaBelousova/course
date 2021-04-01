import React from 'react';
import './UserInput.scss';

function getInput(props) {
  if (props.user.id) {
    return <input className="user-input" value={props.name} onChange={(event) => props.click(props.user.id, event)} />;
  }
}

const userInput = (props) => {
  return(
      <div>
        {getInput(props)}
      </div>
  )
};

export default userInput;
