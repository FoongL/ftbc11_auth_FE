import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

const Auth0 = () => {
  const { loginWithRedirect, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("user:", user);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const getToken = async () => {
      const domain = "dev-fi3coqcunydb5ouw.us.auth0.com";
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        console.log("token:", token);
        localStorage.setItem("accessToken", token);
      } catch (err) {
        console.log(err);
      }
    };
    getToken();
  }, [getAccessTokenSilently, user?.sub]);

  const login = () => {
    loginWithRedirect();
  };

  const testAuth = async () => {
    const token = localStorage.getItem("accessToken");
    const authToken = "Bearer " + token;
    const data = await axios.get("http://localhost:8000/oAuthTest", {
      headers: {
        Authorization: authToken,
      },
    });

    console.log(data);
  };
  return (
    <div>
      <h1>Auth0 Page:</h1>
      <button onClick={login}>Login Test</button>
      {isAuthenticated ? <button onClick={testAuth}>Test Auth</button> : ""}
    </div>
  );
};

export default Auth0;
