import React from 'react'
import { Button , Input } from "@mui/material";
import { observer, inject } from "mobx-react";
/* import LoadingButton from '@mui/lab/LoadingButton'; */

const Register = inject("user")(
  observer((props) => {
  return (
    <div>
      <div className="registerPannel">
            <div className="registerName">
              <span>Name :</span>
              <Input name="userName" onChange={props.user.handelRegisterInput} required={true}  fullWidth={true} />
            </div>
            <div className="registerEmail">
              <span>Email :</span>
              <Input name="userEmail" onChange={props.user.handelRegisterInput} required={true}  fullWidth={true} />
            </div>
            <div className="registerPassword">
              <span>Password :</span>
              <Input name="userPassword" onChange={props.user.handelRegisterInput} required={true}  fullWidth={true} />
            </div>
            <div className="imageInput">
              <span>Image :</span>
              <Input name="image" accept="image/*" type="file" onChange={props.user.handelRegisterInput} required={true}  fullWidth={true} />
            </div>
            <div className="SignUpButton">
              <Button size="large" onClick={props.user.submitRegister} variant="contained">
                Sign Up
              </Button>
            </div>
          </div>
    </div>
  )
}))

export default Register