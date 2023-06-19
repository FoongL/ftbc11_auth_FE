import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const OAuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-fi3coqcunydb5ouw.us.auth0.com"
      clientId="B3VLZ1rGpHmnehMlTp7sjaSNEILuqWSA"
    //   useRefreshTokens={true}
    //   useRefreshTokensFallback={false}
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/sessions',
        scope: "read:current_user update:current_user_metadata openid profile email",
        audience: `https://dev-fi3coqcunydb5ouw.us.auth0.com/api/v2/`,

      }}
    >
      {children}
    </Auth0Provider>
  );
};


export default OAuthProvider