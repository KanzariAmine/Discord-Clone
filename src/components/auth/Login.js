import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="login__image">
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
          alt="discord_logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
