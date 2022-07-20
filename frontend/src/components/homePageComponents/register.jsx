import React from 'react'
import { Button , Input } from "@mui/material";
import { observer, inject } from "mobx-react";

const Register = inject("user")(
  observer((props) => {
  return (
    <div>
      <div className="registerPannel">
            <div className="registerName">
              <h3>Name :</h3>
              <Input name="userName" onChange={props.user.handelRegisterInput} required={true} size="large" fullWidth={true} />
            </div>
            <div className="registerEmail">
              <h3>Email :</h3>
              <Input name="userEmail" onChange={props.user.handelRegisterInput} required={true} size="large" fullWidth={true} />
            </div>
            <div className="registerPassword">
              <h3>Password :</h3>
              <Input name="userPassword" onChange={props.user.handelRegisterInput} required={true} size="large" fullWidth={true} />
            </div>
            <div className="SignUpButton">
              <Button size="large" onClick={props.handelRegister} variant="contained">
                Sign Up
              </Button>
            </div>
          </div>
    </div>
  )
}))

export default Register