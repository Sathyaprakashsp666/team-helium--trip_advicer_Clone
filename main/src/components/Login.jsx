import GoogleLogin from "react-google-login";
import { useState, useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

export default function Login() {
  const { setEmail, setName, setUrl, email, name, url, setIsAuth, Auth } =
    useContext(AuthContext);

  const responseGoogle = (res) => {
    console.log(res);
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setIsAuth(true);
  };

  return (
    <div className="App">
      <h1>google login</h1>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <image src={url} alt={name} />
      <GoogleLogin
        clientId="459195761612-ggleb5pijshcq81q1p5svdit5ikieqc3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
