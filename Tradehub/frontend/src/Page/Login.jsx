import React from "react";
import "../style/Login.scss";

export default function Login() {
  return (
    <div className="main" id="main">
      <div className="child1">
        <img
          src="https://cdn.robinhood.com/assets/generated_assets/webapp/632fcb3e7ed928b2a960f3e003d10b44.jpg"
          alt="oso"
        />
      </div>

      <div className="robin">
        <h4 className="robinhood">Login To Robinhood</h4>
        <div className="form">
          <form action="">
            <div className="form-child">
              <label htmlFor="name"> Email </label>
              <input className="email" type="text" name="email" />
            </div>
            <div className="form-child">
              <label htmlFor="password"> Password </label>
              <input className="password" type="password" name="password" />
            </div>
            <div className="form-child1">
              <input type="checkbox" />
              <label htmlFor="">
                <span> Keep me logged in for up to 30 days </span>
              </label>
            </div>

            <div className="form-child">
              <strong>Forget your Password?</strong>
              <strong>Forget your Email Address?</strong>
            </div>
            <button className="button">Log In</button>
          </form>
        </div>
        <p>
          Not in Robinhood?
          <strong>
            <a href="/signup">create an account</a>
          </strong>
        </p>
      </div>
    </div>
  );
}
