

import React, { useState } from "react";
import axios from "axios";
import "../Page/style/Signup.scss";
import { FormLabel, Input, useToast } from "@chakra-ui/react";
import { warning } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data object to be sent in the request
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Make an API request using axios or any other HTTP library
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/users/register`,
        data
      );
 
      //  Handle the response as needed
      toast({
        title: res?.data.msg,
        description: "Login to continue...",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      Cookies.remove("Verify_status")
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      
      toast({
        title: error?.response?.data.msg||error.message,
        description: "please enter write credentials...",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      if (error?.response?.data.state) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <div className="signup" id="signup">
      <div className="signup-left">
        <div className="left-top">
          <h3>TradeHub</h3>
        </div>
        <div className="heading">
          <h2>Create your login</h2>
        </div>
        <div className="para">
          <p>
            We'll need your name, email address, and a unique password. You'll
            use this login to access TradeHub next time.
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
            <form onSubmit={handleSubmit}>
              <div className="top">
                <div className="signup-child">
                  <div className="signup-firstname">
                    <FormLabel>First name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      _placeholder={{ color: 'inherit' }}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="signup-lastname">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Last name"
                      _placeholder={{ color: 'inherit' }}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="signup-email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    placeholder="Email address"
                    value={email}
                    color='teal'
                    _placeholder={{ color: 'inherit' }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signup-password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password(min. 10 characters)"
                    value={password}
                    color='teal'
    // placeholder='custom placeholder'
    _placeholder={{ color: 'inherit' }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="signup-para2">
                  <p>
                    By continuing, you agree to the Robinhood User Account
                    Agreement and Privacy Policy .
                  </p>
                </div>
              </div>
              <div className="continue-btn-div">
                <button className="continue-btn" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

