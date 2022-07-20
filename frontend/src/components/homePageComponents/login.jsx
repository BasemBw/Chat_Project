import React from 'react'
import { Stack, Button, Input } from "@mui/material";
import { observer, inject } from "mobx-react";

const Login = inject("user")(
    observer((props) => {
  return (
        <div className="loginPannel">
            <div className="loginForm">
              <div className="namePannel">
                <h3>Name :</h3>
                <Input required={true} size="large" fullWidth={true} />
              </div>
              <div className="passwordPannel">
                <h3>Password :</h3>
                <Input required={true} fullWidth={true} size="large" />
              </div>
              <div className="buttonsPannel">
                <Stack spacing={5} direction="row">
                  <Button fullWidth={true} size="large" variant="contained">
                    Login
                  </Button>
                  <Button
                    onClick={props.handelRegister}
                    fullWidth={true}
                    size="large"
                    variant="contained"
                  >
                    Register
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
  )
}))

export default Login
