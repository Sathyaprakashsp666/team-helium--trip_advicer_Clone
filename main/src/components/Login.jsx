import GoogleLogin from "react-google-login";
import { useState, useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { setEmail, setName, setUrl, email, name, url, setIsAuth, isAuth } =
    useContext(AuthContext);
  let history = useHistory();

  const responseGoogle = (res) => {
    console.log(res);
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setIsAuth(true);
  };
  if (isAuth) {
    history.push("/");
  }

  return (
    <>
      <div className="App" style={{ marginTop: "250px" }}>
        <p>Sign in to Tripadvicer with Google</p>

        <image src={url} alt={name} />
        <GoogleLogin
          clientId="220500515822-tmchgal083vl19usea8r4e2g6trq02fc.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

        <h5>{name}</h5>
        <p>{email}</p>
        <h2>{isAuth}</h2>
      </div>
    </>
  );
}
