import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// importing pages
import BasicAuth from "./pages/basicAuth";
import SessionsAuth from "./pages/sessionsAuth";
import TokenAuth from "./pages/tokenAuth";
import Auth0 from "./pages/auth0";
import OAuthProvider from "./provider/auth0Provider";

function App() {
  const navigate = useNavigate();

  return (
    <OAuthProvider>
      <div>
        <button onClick={() => navigate("/")} style={{ margin: "5px" }}>
          Basic
        </button>
        <button onClick={() => navigate("/sessions")} style={{ margin: "5px" }}>
          Sessions
        </button>
        <button onClick={() => navigate("/tokens")} style={{ margin: "5px" }}>
          Tokens
        </button>
        <button onClick={() => navigate("/oauth")} style={{ margin: "5px" }}>
          OAuth
        </button>
        <Routes>
          <Route path="/" element={<BasicAuth />} />
          <Route path="/sessions" element={<SessionsAuth />} />
          <Route path="/tokens" element={<TokenAuth />} />
          <Route path="/oauth" element={<Auth0 />} />
        </Routes>
      </div>
    </OAuthProvider>
  );
}

export default App;
