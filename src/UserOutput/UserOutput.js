import React from 'react';
import './UserOutput.scss'

const userOutput = (props) => {
    return (
      <div className="user">
        <div  className="user-info">
          <span className="user-info__title">Name:</span>
          <span> { props.user.name } </span>
        </div>
        <div className="user-info"> Some User Info </div>
        <div className="user-info"> Other User Info </div>
      </div>
  )
};

export default userOutput;
