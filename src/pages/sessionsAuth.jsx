import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const SessionsAuth = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    }
  }, [isAuthenticated]);

  return <h1>Session Based Authentication:</h1>;
};

export default SessionsAuth;
