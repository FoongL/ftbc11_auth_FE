import { useState, useEffect } from "react";
import axios from "axios";

const TokenAuth = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const test = async () => {
          try {
            const tokenAuth = "Bearer " + localStorage.getItem("token");
            const data = await axios.get(
              "http://localhost:8080/users/jwtTest",
              {
                headers: {
                  Authorization: tokenAuth,
                },
              }
            );
            if (data.data.success) {
              setAuthenticated(true);
            }
          } catch (err) {
            localStorage.removeItem("token");
          }
        };
        test();
      }
    } catch (err) {
      localStorage.removeItem("token");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post("http://localhost:8080/users/jwtSignIn", {
      email,
      password,
    });
    if (data.data.success) {
      setAuthenticated(true);
      localStorage.setItem("token", data.data.token);
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  };

  const testAuth = async () => {
    const tokenAuth = "Bearer " + localStorage.getItem("token");
    console.log(tokenAuth);
    const data = await axios.get("http://localhost:8080/users/jwtTest", {
      headers: {
        Authorization: tokenAuth,
      },
    });
    console.log(data);
  };

  return (
    <div>
      <h1>JWT Authentication:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          placeholder="enter your email here"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          id="password"
          placeholder="enter your password here"
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
      {authenticated ? <button onClick={testAuth}>test auth</button> : ""}
    </div>
  );
};

export default TokenAuth;
