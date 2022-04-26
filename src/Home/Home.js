import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { allowedPass } from "../Utils/password";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/product-listing");
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const result = allowedPass.filter((allowedPass) => {
      return (
        username == allowedPass.username && password == allowedPass.password
      );
    });
    if (result.length) {
      localStorage.setItem("user", JSON.stringify(result[0]));
      navigate("/product-listing");
    } else alert("wrong password");
  }
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="box1">
            <div
              style={{
                paddingTop: "40px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1>Log in</h1>
            </div>
            <div style={{ paddingLeft: "20px" }}>
              <h5>Username</h5>
              <div>
                {" "}
                <TextField
                  variant="outlined"
                  label="Enter Username"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text "
                  name="username"
                  id="username"
                />{" "}
                {/* {!Validate(username) && (
                  <p style={{ color: "red" }}>Please Enter Username</p>
                )}{" "} */}
              </div>
            </div>
            <div style={{ paddingLeft: "20px", marginTop: "20px" }}>
              <h5>Password</h5>
              <div>
                {" "}
                <TextField
                  type="password"
                  variant="outlined"
                  label="Enter Password"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  id="password"
                />{" "}
                {/* {!Validate(password) && (
                  <p style={{ color: "red" }}>Enter Password in letters</p>
                )}{" "} */}
              </div>
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "40px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
