import React from "react";

import "../style/Signup.scss";

export default function Signup() {
  return (
    <div className="signup" id="signup">
      <div className="signup-left">
        <div className="left-top">
          <h3>Robinhood</h3>
        </div>
        <div className="heading">
          <h2>Create your login</h2>
        </div>
        <div className="para">
          <p>
            We'll need your name, email address, and a unique password. You'll
            use this login to access Robinhood next time.
          </p>
        </div>
        <div className="bottom-rocket">
          <img
            src="https://cdn.robinhood.com/app_assets/odyssey/rockets.png"
            alt=""
          />
        </div>
      </div>
      <div className="signup-mid">
        <div className="mid-loho">
          <img src="" alt="" />
        </div>
        <div className="mid-top">
          <img
            src="https://cdn.robinhood.com/assets/generated_assets/webapp/47b5bed44e945bf03fd845eb90ca3922.png"
            alt=""
          />
        </div>
        <div className="mid-heading">
          <h1>Join today and get your free stock from leading companies.</h1>
        </div>
        <div className="mid-para">
          <p>
            Jump start your investment journey and invest with more confidence.
          </p>
          <p>Certain limitations apply.</p>
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-form">
          <div className="form">
            <h2 className="firstline">
              Enter your first and last name as they appear on your government
              ID.
            </h2>
            <form action="">
              <div className="top">
                <div className="signup-child">
                  <div className="signup-firstname">
                    <input type="text" placeholder="First name" />
                  </div>
                  <div className="signup-lastname">
                    <input type="text" placeholder="Last name" />
                  </div>
                </div>
                <div className="signup-email">
                  <input type="text" placeholder="Email address" />
                </div>
                <div className="signup-password">
                  <input
                    type="text"
                    placeholder="Password(min. 10 characters)"
                  />
                </div>
                <div className="signup-para">
                  <p>
                    Sorry! We're not currently able to accept applications from
                    outside the United States.
                  </p>
                </div>
                <div className="signup-para2">
                  <p>
                    By continuing, you agree to the Robinhood User Account
                    Agreement and Privacy Policy .
                  </p>
                </div>
              </div>
              <div className="continue-btn-div">
                <button className="continue-btn">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

