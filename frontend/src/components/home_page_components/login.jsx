import React from 'react'
import { Button, Input } from "@mui/material";
import { observer, inject } from "mobx-react";
import { useNavigate } from 'react-router-dom';

const Login = inject("user")(observer((props) => {

  const navigate = useNavigate();

  const handleLoginButton = async () => {

    const response = await props.user.submitLogin()

    response ? navigate('/chat') : console.log("error")
  } 
    
  return (
        <div className="loginPannel">
            <div className="loginForm">
              <div className="namePannel"> 
                <h3>Email :</h3>
                <Input 
                  required={true} 
                  name="emailToLogin"  
                  onChange={props.user.handleInputs}
                  size="large" 
                  fullWidth={true} 
                />
              </div>
              <div className="passwordPannel">
                <h3>Password :</h3>
                <Input 
                  required={true} 
                  name="passwordToLogin"  
                  onChange={props.user.handleInputs}
                  fullWidth={true} 
                  size="large" 
                />
              </div>
              <div className="buttonsPannel">
                  <Button fullWidth={true} size="large" onClick={handleLoginButton} variant="contained">
                    Login
                  </Button>
              </div>
            </div>
          </div>
  )
}))

export default Login
