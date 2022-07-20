import React from 'react'
import { Button, Input } from "@mui/material";
import { observer, inject } from "mobx-react";

const Login = inject("user")(
    observer((props) => {
  return (
        <div className="loginPannel">
            <div className="loginForm">
              <div className="namePannel">
                <h3>Email :</h3>
                <Input required={true} size="large" fullWidth={true} />
              </div>
              <div className="passwordPannel">
                <h3>Password :</h3>
                <Input required={true} fullWidth={true} size="large" />
              </div>
              <div className="buttonsPannel">
                  <Button fullWidth={true} size="large" onClick={props.user.submitLogin} variant="contained">
                    Login
                  </Button>
              </div>
            </div>
          </div>
  )
}))

export default Login
