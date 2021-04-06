import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {login} from "../../store/user/operations";
import {Link} from 'react-router-dom';
import {getAuthorizationError} from "../../store/user/selectors";
import {AppPaths} from "../../consts";

const SignIn = (props) => {

  const history = useHistory();
  const {onSubmit} = props;
  const loginRef = useRef();
  const passwordRef = useRef();
  const [isEmailValid, setEmailValidity] = useState(true);
  const authorizationError = useSelector(getAuthorizationError);

  const handleSubmit = () => {
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
    history.push(AppPaths.MAIN);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppPaths.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__message">
            {!isEmailValid && <p>Please enter a valid email address</p>}
            {authorizationError && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}
          </div>

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={loginRef}
                onInvalid={() => setEmailValidity(false)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: login,
};

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
