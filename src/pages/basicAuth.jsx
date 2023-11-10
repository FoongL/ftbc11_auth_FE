import { useState } from "react";
import axios from "axios";

const BasicAuth = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [authenticated, setAuthenticated] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post("http://localhost:8080/users/basicSignIn", {
      email,
      password,
    });
    if (data.data.success){
        setAuthenticated(true)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  };
  
  const testAuth =async()=>{
    const basicAuth = 'Basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
    const data = await axios.get('http://localhost:8080/users/basicTest',{
        headers:{
            Authorization: basicAuth
        }
    })
    console.log(data)
  }

  return (
    <div>
      <h1>The Automatically Deployed Basic Authentication:</h1>
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
      {authenticated?<button onClick={testAuth}>test auth</button>:''}
    </div>
  );
};

export default BasicAuth;
