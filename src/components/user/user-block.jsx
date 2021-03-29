import React from 'react';
import {checkAuthNo} from "../../store/api-actions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const UserBlock = (props)=>{

  const {onClickLeave} = props;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <a href="#" onClick={onClickLeave}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />


        </a>
      </div>
    </div>
  );
};


UserBlock.propTypes = {
  onClickLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch)=>({
  onClickLeave() {
    dispatch(checkAuthNo());
  }
});

export {UserBlock};
export default connect(null, mapDispatchToProps)(UserBlock);
