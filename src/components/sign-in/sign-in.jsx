import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from "../../store/api-actions";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import classnames from 'classnames';

const SignIn = (props) => {

  const history = useHistory();
  const {onSubmit, isCatchError} = props;
  const loginRef = useRef();
  const passwordRef = useRef();
  const {register, errors, handleSubmit} = useForm();

  const userMailRef = (evt) => {
    loginRef.current = evt;
    register(evt, {
      required: true,
      pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    });
  };

  const passWordRef = (evt) => {
    passwordRef.current = evt;
    register(evt, {required: true});
  };

  const onFormSubmit = () => {
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
    history.push(`/`);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">

          {(errors.userEmail || isCatchError) &&
          (<div className="sign-in__message">
            {errors.userEmail && (<p>Please enter a valid email address</p>)}
            {isCatchError && (<p>We can’t recognize this email <br/> and password combination. Please try again.</p>)}
          </div>)}

          <div className={classnames(`sign-in__fields`, {[`sign-in__field--error`]: errors.userEmail || isCatchError})}>
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={userMailRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={classnames(`sign-in__fields`, {[`sign-in__field--error`]: errors.userPassword || isCatchError})}>
              <input className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passWordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSubmit(onFormSubmit)}>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isCatchError: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isCatchError: state.isCatchError
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
