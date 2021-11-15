import * as React from "react";
import {Register} from './lib/UserActions';

function Login() {
    const clickHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) =>{
        Register();
    }

  return <div>
      <span>al menos carga</span>
      <a onClick={clickHandler}>click me</a>
  </div>;
}

export default Login;
