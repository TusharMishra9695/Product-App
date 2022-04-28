import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { allowedPass } from "../Utils/password";
import { btn } from "../Utils/globalFunctions";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, seterror] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/product-listing");
    }
  }, [navigate]);
  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) {
      const result = allowedPass.filter((allowedPass) => {
        return (
          username === allowedPass.username && password === allowedPass.password
        );
      });
      if (result.length) {
        localStorage.setItem("user", JSON.stringify(result[0]));
        seterror(false);
        navigate("/product-listing");
      } else alert("Invalid Credentials ");
    } else {
      seterror(true);
    }
  }

  function Validate(body) {
    if (/\b[a-z]|\w[A-Z]/.test(body)) {
      return true;
    }

    return false;
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="main-style">
          <div className="box1">
            <div className="product-style">
              <h1>Log in</h1>
            </div>
            <div className="commonLeftstyle">
              <h5>Username</h5>
              <div>
                {" "}
                <TextField
                  variant="outlined"
                  label="Enter Username"
                  className="width-style"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text "
                  name="username"
                  id="username"
                />{" "}
              </div>
              <p className="error">
                {error && !username.length && "Please enter username"}{" "}
              </p>
            </div>
            <div className="commonLeftstyle">
              <h5>Password</h5>
              <div>
                {" "}
                <TextField
                  type="password"
                  variant="outlined"
                  label="Enter Password"
                  className="width-style"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  id="password"
                />{" "}
              </div>
              <p className="error">
                {error && !password.length && "Please enter password"}{" "}
              </p>
            </div>
            <div>{btn}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
