import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const OAuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-qi8ysaccyg7lpwmk.us.auth0.com"
      clientId="zTvPhfZNtkffp9UmNR6PAA4yoDgG48S1"
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/oauth',
        scope: "read:current_user update:current_user_metadata openid profile email",
        audience: `https://ftbc-13-auth-sample.com`,

      }}
    >
      {children}
    </Auth0Provider>
  );
};


export default OAuthProvider