import React from 'react';
import UserSignInLink from "./user-sign-in";
import UserBlock from "./user-block";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from "../../consts";


const User = (props)=>{
  const {authorizationStatus} = props;

  return (
    <>
      <div className="user-block">
        <div className="user-block__avatar">
          {authorizationStatus === AuthorizationStatus.AUTH ? <UserBlock/> : <UserSignInLink/>}
        </div>
      </div>
    </>
  );
};

User.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state)=>({
  authorizationStatus: state.authorizationStatus,
});

export {User};
export default connect(mapStateToProps, null)(User);
