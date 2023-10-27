import React from 'react';
import './../form.css';

export const Form = () => {
  return (
    <div>
      <div className="box">
        <div className="box-form">
          <div className="box-login-tab"></div>
          <div className="box-login-title">
            <div className="i i-login"></div>
            <h2>LOGIN</h2>
          </div>
          <div className="box-login">
            <div className="fieldset-body" id="login_form">
              <button
                onclick="openLoginInfo();"
                className="b b-form i i-more"
                title="Mais Informações"
              ></button>
              <p className="field">
                <label for="user">E-MAIL</label>
                <input type="text" id="user" name="user" title="Username" />
                <span id="valida" className="i i-warning"></span>
              </p>
              <p className="field">
                <label for="pass">PASSWORD</label>
                <input type="password" id="pass" name="pass" title="Password" />
                <span id="valida" className="i i-close"></span>
              </p>

              <label className="checkbox">
                <input type="checkbox" value="TRUE" title="Keep me Signed in" />{' '}
                Keep me Signed in
              </label>

              <input
                type="submit"
                id="do_login"
                value="GET STARTED"
                title="Get Started"
              />
            </div>
          </div>
        </div>
        <div className="box-info">
          <p>
            <button
              onclick="closeLoginInfo();"
              className="b b-info i i-left"
              title="Back to Sign In"
            ></button>
            <h3>Need Help?</h3>
          </p>
          <div className="line-wh"></div>
          <button onclick="" className="b-support" title="Forgot Password?">
            {' '}
            Forgot Password?
          </button>
          <button onclick="" className="b-support" title="Contact Support">
            {' '}
            Contact Support
          </button>
          <div className="line-wh"></div>
          <button onclick="" className="b-cta" title="Sign up now!">
            {' '}
            CREATE ACCOUNT
          </button>
        </div>
      </div>

      <div className="icon-credits">
        Icons made by{' '}
        <a href="http://www.freepik.com" title="Freepik">
          Freepik
        </a>
        ,{' '}
        <a
          href="http://www.flaticon.com/authors/budi-tanrim"
          title="Budi Tanrim"
        >
          Budi Tanrim
        </a>{' '}
        &{' '}
        <a
          href="http://www.flaticon.com/authors/nice-and-serious"
          title="Nice and Serious"
        >
          Nice and Serious
        </a>{' '}
        from{' '}
        <a href="http://www.flaticon.com" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noreferrer"
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
};


