import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {ApiPaths} from "../../consts";

const UserSignInLink = ()=>{

  const history = useHistory();

  const onSignIn = (evt)=> {
    evt.preventDefault();
    history.push(ApiPaths.LOGIN);
  };

  return (
    <div className="user-block">
      <Link to="/login" className="user-block__link" onClick={onSignIn}>Sign in</Link>
    </div>
  );
};

export default UserSignInLink;
