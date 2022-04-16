import React, { useState, useEffect } from "react";
import axios from "axios";
import yetiCrab from "../../img/yetiCrab.png";

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const body = { username, password };
    console.log(username);
    console.log(password);
    axios.post("http://localhost:3000/api/userlogin", body).then((res) => {
      console.log(res);
      if (res.data.OK) {
        localStorage.setItem("id", JSON.stringify(res.data.user.user_id));
        props.handleLoggedIn();
      } else console.log("WRONG");
    });
  };

  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="login__form">
          <img src={yetiCrab} className="yetiCrabImg" alt="Sample image" />
          <form className="signIn-form" onSubmit={submitHandler}>
            <div className="login__inputs">
              <div>
                <input
                  type="text"
                  id="form3Example3"
                  className=""
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="password"
                  id="form3Example4"
                  className=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login-register__wrapper">
              <button className="" type="submit">
                Login
              </button>
              <button className="register">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
